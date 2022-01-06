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


