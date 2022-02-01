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

// {
//     "id": "aurory",
//     "symbol": "aury",
//     "name": "Aurory",
//     "image": "https://assets.coingecko.com/coins/images/19324/thumb/logo.png?1635076945",
//     "strokeColor": {
//       "from": "#15e0c3",
//       "to": "#15e0c3"
//     }
//   },

// {
//     "id": "bitcoin",
//     "symbol": "btc",
//     "name": "Bitcoin",
//     "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//     "strokeColor": "#f69419"
//   },

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