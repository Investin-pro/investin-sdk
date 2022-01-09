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
}