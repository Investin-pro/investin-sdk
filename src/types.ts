import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";

export interface INVESTMENT {
    is_initialized: number,
    has_withdrawn: number,
    withdrawn_from_margin: number,
    owner: PublicKey,
    amount: BN,
    start_performance: number,
    amount_in_router: string,
    manager: PublicKey,
    margin_debt: number[],
    margin_position_id: number[],
    token_indexes: number[],
    token_debts: number[],
    xpadding: number[],
    pubKey: string
}

export interface COINGECKO_PRICE {
    id: string;
    image: string;
    name: string;
    price: number;
    strokeColor: { from: string, to: string }
    symbol: string
}

export interface FUND {
    fundPDA: string;
    fundManager: string;
    fundStateAccount: string;
    fundName: string;
    numberOfActiveInvestments: number;
    totalAmount: number;
    currentPerformance: number;
    currentAum: number;
    performanceFeePercentage: number;
    minAmount: number;
    minReturn: number;
    marginAccounts: string;
    isPrivate: boolean;
}

export interface INVESTMENT_MODEL {
    investorStateData: INVESTMENT;
    invStateDataPubKey: string;
    hasWithdrawn: number;
    fundPDA: string;
    fundManager: string;
    fundStateAccount: string;
    fundAddress: string;
    fundName: string;
    amount: number;
    amountInRouter: number;
    currentPerformance: Number;
    currentReturns: number;
    status: 'Active' | 'inActive';
}

export interface COINGECKO_TOKEN {
    id: string;
    symbol: string;
    name: string;
    image: string;
    price?: number;
    strokeColor: string | {
        from: string;
        to: string;
    };
}

export interface PERP_MARKET {
    name: string;
    publicKey: string;
    baseSymbol: string;
    baseDecimals: number;
    quoteDecimals: number;
    marketIndex: number;
    bidsKey: string;
    asksKey: string;
    eventsKey: string;
    contractSize: number;
    perpMarketId: number;
    leverage: number;
    baseLotSize: number;
    quoteLotSize: number;
}