import { Connection, PublicKey } from "@solana/web3.js";
import axios from "axios";
import { COINGECKO_PRICE, FUND, FUND_DATA, PLATFORM_DATA } from ".";
import { MANGO_GROUP_ACCOUNT_V3, MANGO_PROGRAM_ID_V3, platformStateAccount, programId } from "./constants";
import { displayAddress, mapTokens } from "./utils/helpers";
import { MangoClient } from '@blockworks-foundation/mango-client'
import { TokenAmount } from "./utils/TokenAmount";

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

let TOKENS = [];
// the following are needed as we are doing eval for getting tokens from github
const ORCA_SWAP_PROGRAM_ID = new PublicKey('9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP')
const LIQUIDITY_POOL_PROGRAM_ID_V4 = new PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8')
const SERUM_PROGRAM_ID_V3 = new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin')

const NATIVE_SOL = {
  symbol: 'SOL',
  name: 'Native Solana',
  mintAddress: '11111111111111111111111111111111',
  decimals: 9
}

export class InvestinClient {
  connection: Connection;
  coingeckoTokens: any;
  orca_pools: any;
  raydium_pools: any;
  mangoClient: MangoClient;

  constructor(connection: Connection) {
    this.connection = connection;
    this.mangoClient = new MangoClient(connection, MANGO_PROGRAM_ID_V3)
  }

  private async loadCoingeckoTokens() {
    const res = await axios.get('https://raw.githubusercontent.com/raashidjunaid1/public-testing/main/investinCoingeckoTokens.json')
    if (res.status === 200) {
      this.coingeckoTokens = res.data
    }
  }

  private async loadTokens() {
    const res = await axios.get('https://raw.githubusercontent.com/raashidjunaid1/public-testing/main/tokens.json')
    if (res.status === 200) {
      TOKENS = res.data;
    }
  }

  private async loadOrcaPools() {
    const res = await axios.get('http://raw.githubusercontent.com/raashidjunaid1/public-testing/main/orca_pools.js')
    if (res.status === 200) {
      this.orca_pools = eval('(' + res.data + ')');
    }
  }

  private async loadRaydiumPools() {
    const res = await axios.get('https://raw.githubusercontent.com/raashidjunaid1/public-testing/main/raydium_pools.js')
    if (res.status === 200) {
      this.raydium_pools = eval('(' + res.data + ')');
    }
  }

  async loadTokensAndPools() {
    await this.loadTokens()
    await this.loadCoingeckoTokens();
    await this.loadOrcaPools()
    await this.loadRaydiumPools()
  }

  private async getPerformance(tokens, prices, prevPerformance, prevTotalAmount, marginBalance) {
    let currentAum = marginBalance;
    for (const token of tokens) {
      if (token.mint == undefined) {
        continue;
      }
      const coinSymbol = [...this.raydium_pools, ...this.orca_pools].find(p => p.coin.mintAddress == token.mint.toBase58());

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

  private async fundMarginData(fund): Promise<{ balance: number }> {
    const marginData = {
      balance: 0
    }
    const investorDebts = (fund.mango_positions.investor_debts.reduce((a, b) => Number(a) + Number(b), 0) / 10 ** 6)
    let balance = 0;
    try {
      if (fund.mango_positions.mango_account.toBase58() !== PublicKey.default.toBase58()) {
        let marginAccount = await this.mangoClient.getMangoAccount(fund.mango_positions.mango_account, SERUM_PROGRAM_ID_V3)
        let mangoGroup = await this.mangoClient.getMangoGroup(MANGO_GROUP_ACCOUNT_V3)
        const mangoCache = await mangoGroup.loadCache(this.connection);
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

  private async getFundData(data, platformData, prices: COINGECKO_PRICE[]): Promise<FUND | undefined> {
    const decodedData = FUND_DATA.decode(data.account.data);
    if (decodedData.is_initialized) {
      const { updatedPerformance, currentAum } =
        await this.getPerformance(
          mapTokens(platformData.token_list, decodedData.tokens, TOKENS),
          prices,
          decodedData.prev_performance,
          decodedData.total_amount,
          (await (this.fundMarginData(decodedData)) as any)?.balance ?? 0
        )

      return {
        fundPDA: decodedData.fund_pda.toBase58(),
        fundManager: decodedData.manager_account.toBase58(),
        fundStateAccount: data.pubkey.toBase58(),
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
        marginAccounts: decodedData.mango_positions.mango_account.toBase58()
      }
    }
  }

  async fetchAllTokenPrices(): Promise<COINGECKO_PRICE[]> {
    const RaydiumCoins = this.raydium_pools.map(p => p.coin.symbol == "xCOPE" ? "COPE" : p.coin.symbol);
    const OrcaCoins = this.orca_pools.map(p => p.coin.symbol);
    const coins = [...RaydiumCoins, ...OrcaCoins];
    // const coins = pools.map(p => p.coin.symbol == "xCOPE" ? "COPE" : p.coin.symbol);
    const coingeckoTokens = this.coingeckoTokens.filter((token) => coins.includes(token.symbol.toUpperCase()))
    const coingekoIds = coingeckoTokens.map((t) => t.id);
    try {
      const fetchPrices = (await CoinGeckoClient.simple.price({ ids: coingekoIds, vs_currencies: "usd" })).data
      coingeckoTokens.map((c) => c['price'] = fetchPrices[c.id]?.usd)
      return coingeckoTokens;
    } catch (error) {
      console.error("coingecko error - giving prices 0  ::", error);
      coingeckoTokens.map((c) => c['price'] = `${0}`)
      return coingeckoTokens;
    }
  }

  async fetchAllFunds(prices?: COINGECKO_PRICE[]): Promise<FUND[]> {
    if (!prices) {
      prices = await this.fetchAllTokenPrices()
    }

    const allFundsData = await this.connection.getProgramAccounts(programId, {
      filters: [
        { dataSize: FUND_DATA.span }
      ]
    })

    const platformDataAcc = await this.connection.getAccountInfo(platformStateAccount)
    if (!platformDataAcc) { console.error("no platformDataAcc exist"); return []; }
    const platformData = PLATFORM_DATA.decode(platformDataAcc.data)

    const promises: any[] = []
    for (const data of allFundsData) {
      const returnedFundDataPromise = this.getFundData(data, platformData, prices)
      if (returnedFundDataPromise) promises.push(returnedFundDataPromise);
    }
    let funds = (await Promise.allSettled(promises)).filter(p => p.status === 'fulfilled' && p.value !== undefined).map(f => (f as any).value);
    return funds;
  }
}
