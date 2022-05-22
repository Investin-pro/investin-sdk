import { Connection, PublicKey } from "@solana/web3.js";
import { COINGECKO_TOKEN, FUND, FUND_DATA, INVESTMENT_MODEL, PLATFORM_DATA } from ".";
import { MANGO_GROUP_ACCOUNT_V3, MANGO_PROGRAM_ID_V3, platformStateAccount, programId, SERUM_PROGRAM_ID_V3 } from "./constants";
import { displayAddress, mapTokens } from "./utils/helpers";
import { MangoCache, MangoClient, MangoGroup } from '@blockworks-foundation/mango-client'
import { TokenAmount } from "./utils/TokenAmount";
import { Investor } from "./investor";
import { COINGECKO_TOKENS } from "./coingeckoTokens";
import { raydiumPools } from "./pools/raydiumPools";
import { orcaPools } from "./pools/orcaPools";
import { TOKENS } from "./tokens";
import { FriktionSDK, VoltSDK } from "@friktion-labs/friktion-sdk";
import fetch from "cross-fetch";

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export class InvestinClient {
  connection: Connection;
  mangoClient: MangoClient;
  friktionClient: FriktionSDK;

  funds: FUND[] = [];
  friktionVoltsInfo: any;

  constructor(connection: Connection) {
    this.connection = connection;
    this.mangoClient = new MangoClient(connection, MANGO_PROGRAM_ID_V3)
    this.friktionClient = new FriktionSDK({ provider: { connection: connection } });
  }

  private async getPerformance(tokens, prices, prevPerformance, prevTotalAmount, marginBalance, friktionBalance) {
    let currentAum = marginBalance + friktionBalance;
    for (const token of tokens) {
      if (token.mint == undefined) {
        continue;
      }
      const coinSymbol = [...raydiumPools, ...orcaPools].find(p => p.coin.mintAddress == token.mint.toBase58());

      if (coinSymbol) {
        const tokenBalance = new TokenAmount(token.balance, coinSymbol.coin.decimals)
        let price = prices.find(p => p.symbol.toLowerCase() == coinSymbol.coin.symbol.toLowerCase())?.price ?? 0
        currentAum += parseFloat(`${(price) * tokenBalance.toEther().toNumber()}`);
      } else {
        // assume this is USDT
        currentAum += parseFloat((new TokenAmount(token.balance, (TOKENS as any).USDC.decimals)).toEther().toNumber())
      }
    }

    const performance = ((currentAum / ((new TokenAmount(prevTotalAmount, (TOKENS as any).USDC.decimals)).toEther().toNumber())) * (prevPerformance));
    const updatedPerformance = isNaN(performance) ? 0 : (performance - 1) * 100

    return { updatedPerformance, currentAum };
  }

  private async fundMarginData(fund, mangoGroup: MangoGroup, mangoCache: MangoCache): Promise<{ balance: number }> {
    const marginData = {
      balance: 0
    }
    const investorDebts = (fund.mango_positions.investor_debts.reduce((a, b) => Number(a) + Number(b), 0) / 10 ** 6)
    let balance = 0;
    try {
      if (fund.mango_positions.mango_account.toBase58() !== PublicKey.default.toBase58()) {
        let marginAccount = await this.mangoClient.getMangoAccount(fund.mango_positions.mango_account, SERUM_PROGRAM_ID_V3)
        const assets = await marginAccount.getAssetsVal(mangoGroup, mangoCache);
        const liabs = await marginAccount.getLiabsVal(mangoGroup, mangoCache)
        const value = (assets.sub(liabs));
        balance += Number(value);
      }
    } catch (error) {
      console.error("fundMarginData ::: ", error);
    }
    marginData.balance = (balance - investorDebts);
    return marginData
  }


  private async fundFriktionData(fund): Promise<{ balance: number }> {
    const friktionData = {
      balance: 0
    }
    let friktionTotalValue = 0, totalInvestorDebt = 0;
    try {
      if (fund.friktion_vault.volt_vault_id.toBase58() !== PublicKey.default.toBase58()) {
        const selectedVolt = await this.friktionClient.loadVoltAndExtraDataByKey(fund.friktion_vault.volt_vault_id);
        const friktionBalances = await selectedVolt.getBalancesForUser(fund.fund_pda)
        friktionTotalValue = friktionBalances ? friktionBalances.totalBalance.toNumber() : 0

        const selectedVoltInfo = this.friktionVoltsInfo.allMainnetVolts.find(k => k.voltVaultId === fund.friktion_vault.volt_vault_id.toBase58())
        const fcTokenPrice = this.friktionVoltsInfo.pricesByCoingeckoId[selectedVoltInfo.underlyingTokenSymbol] * selectedVoltInfo.sharePricesByGlobalId[selectedVoltInfo.globalId]
        const ulDebt = (fund.friktion_vault.ul_debt.toNumber() / 10 ** (TOKENS as any)[selectedVoltInfo.underlyingTokenSymbol.toUpperCase()].decimals);
        const fcDebt = (fund.friktion_vault.fc_token_debt.toNumber() / 10 ** (selectedVoltInfo.shareTokenDecimals));
         totalInvestorDebt = ulDebt * this.friktionVoltsInfo.sharePricesByGlobalId[selectedVoltInfo.globalId] + fcDebt * fcTokenPrice;

      }
    } catch (error) {
      console.error("fundFriktionData ::: ", error);
    }
    friktionData.balance = (friktionTotalValue - totalInvestorDebt);
    return friktionData
  }

  private async getFundData(data, platformData, mangoGroup: MangoGroup, mangoCache: MangoCache, prices?: COINGECKO_TOKEN[]): Promise<FUND | undefined> {
    if (!prices) {
      prices = await this.fetchAllTokenPrices()
    }

    const decodedData = FUND_DATA.decode(data.account.data);

    const mappedTokens = mapTokens(platformData.token_list, decodedData.tokens, TOKENS);
    if (decodedData.is_initialized) {
      const { updatedPerformance, currentAum } =
        await this.getPerformance(
          mappedTokens,
          prices,
          decodedData.prev_performance,
          decodedData.total_amount,
          (await (this.fundMarginData(decodedData, mangoGroup, mangoCache)) as any)?.balance ?? 0,
          (await this.fundFriktionData(decodedData)) ?? 0
        )

      return {
        fundPDA: decodedData.fund_pda.toBase58(),
        fundManager: decodedData.manager_account.toBase58(),
        fundName: displayAddress(decodedData.fund_pda.toBase58()),
        numberOfActiveInvestments: decodedData.number_of_active_investments,
        totalAmount: (new TokenAmount(decodedData.total_amount, (TOKENS as any).USDC.decimals)).toEther().toNumber(),
        currentPerformance: decodedData.number_of_active_investments == 0 ?
          (decodedData.prev_performance - 1) * 100
          : updatedPerformance,
        currentAum,
        performanceFeePercentage: Number(decodedData.performance_fee_percentage.toString()),
        minAmount: (new TokenAmount(decodedData.min_amount.toNumber(), (TOKENS as any).USDC.decimals)).toEther().toNumber(),
        minReturn: decodedData.min_return,
        marginAccounts: decodedData.mango_positions.mango_account.toBase58(),
        isPrivate: decodedData.is_private === 1 ? true : false,
        tokens: mappedTokens
      }
    }
  }

  // redunant
  async loadTokensAndPools() { }

  async fetchAllTokenPrices(): Promise<COINGECKO_TOKEN[]> {
    const raydiumCoins = raydiumPools.map(p => p.coin.symbol == "xCOPE" ? "COPE" : p.coin.symbol);
    const orcaCoins = orcaPools.map(p => p.coin.symbol);
    const coins = [...raydiumCoins, ...orcaCoins];
    const coingeckoTokens = COINGECKO_TOKENS.filter((token) => coins.includes(token.symbol.toUpperCase()))
    const coingekoIds = coingeckoTokens.map((t) => t.id);
    try {
      const fetchPrices = (await CoinGeckoClient.simple.price({ ids: coingekoIds, vs_currencies: "usd" })).data
      coingeckoTokens.map((c) => c.price = fetchPrices[c.id]?.usd)
      return coingeckoTokens;
    } catch (error) {
      console.error("coingecko error - giving prices 0  ::", error);
      coingeckoTokens.map((c) => c.price = 0)
      return coingeckoTokens;
    }
  }
  async fetchFriktionVolts(): Promise<{}> {
    const res = await fetch(`https://friktion-labs.github.io/mainnet-tvl-snapshots/friktionSnapshot.json`)
    return res.json()
  }

  async getPlatformData() {
    const platformDataAcc = await this.connection.getAccountInfo(platformStateAccount);
    if (!platformDataAcc) { console.error("no platformDataAcc exist"); return []; }
    return PLATFORM_DATA.decode(platformDataAcc.data);
  }

  async fetchAllFunds(prices?: COINGECKO_TOKEN[]): Promise<FUND[]> {
    if (!prices) {
      prices = await this.fetchAllTokenPrices()
    }

    if (!this.friktionVoltsInfo) {
      this.friktionVoltsInfo = await this.fetchFriktionVolts()
    }

    const allFundsData = await this.connection.getProgramAccounts(programId, {
      filters: [
        { dataSize: FUND_DATA.span }
      ]
    })

    const platformData = await this.getPlatformData();

    const promises: any[] = []
    const mangoGroup = await this.mangoClient.getMangoGroup(MANGO_GROUP_ACCOUNT_V3)
    const mangoCache = await mangoGroup.loadCache(this.connection);
    for (const data of allFundsData) {
      const returnedFundDataPromise = this.getFundData(data, platformData, mangoGroup, mangoCache, prices)
      if (returnedFundDataPromise) promises.push(returnedFundDataPromise);
    }
    let funds = (await Promise.allSettled(promises)).filter(p => p.status === 'fulfilled' && p.value !== undefined).map(f => (f as any).value);
    this.funds = funds;
    return funds;
  }

  async findOrRetrieveFund(managerAccount: PublicKey) {
    let fund = this.funds.find(m => m.fundManager == managerAccount.toBase58());
    if (!fund) {
      const fundData = await this.connection.getProgramAccounts(programId, {
        filters: [
          {
            memcmp: {
              offset: FUND_DATA.offsetOf('manager_account'),
              bytes: managerAccount.toString()
            }
          },
          { dataSize: FUND_DATA.span }
        ]
      });
      const platformData = await this.getPlatformData();
      const mangoGroup = await this.mangoClient.getMangoGroup(MANGO_GROUP_ACCOUNT_V3)
      const mangoCache = await mangoGroup.loadCache(this.connection);
      // WARNING: this assumes a manager account has only one fund
      fund = await this.getFundData(fundData[0], platformData, mangoGroup, mangoCache);
      if (fund) this.funds.push(fund);
    }
    return fund;
  }

  async getInvestmentsByInvestorAddress(investorAddress: PublicKey) {
    const investor = new Investor(this.connection, investorAddress);
    const investments = await investor.getInvestments();

    let investmentsWithPerformances: INVESTMENT_MODEL[] = [];
    for (const invStateData of investments) {
      const amount = (new TokenAmount(invStateData.amount.toString(), 6)).toEther().toString()
      const amountInRouter = (new TokenAmount(invStateData.amount_in_router.toString(), 6)).toEther().toString()
      let fund = await this.findOrRetrieveFund(invStateData.manager);
      let currentPerformance = 1
      if (fund?.fundPDA) {
        currentPerformance = 1 + (fund?.currentPerformance / 100)
      }

      investmentsWithPerformances.push({
        investorStateData: invStateData,
        invStateDataPubKey: invStateData.pubKey,
        hasWithdrawn: invStateData.has_withdrawn,
        fundPDA: fund!.fundPDA,
        fundManager: invStateData.manager.toBase58(),
        fundAddress: fund!.fundPDA,
        fundName: fund!.fundName,
        amount,
        amountInRouter,
        currentPerformance: currentPerformance,
        currentReturns: invStateData.start_performance == 0 ? amount : ((currentPerformance / (invStateData.start_performance)) * amount).toFixed(2),
        status: amountInRouter === '0' ? 'Active' : 'inActive',
        tokens: fund!.tokens
      });
    }
    return investmentsWithPerformances;
  }
}