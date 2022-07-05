import { Connection, PublicKey } from "@solana/web3.js";
import { INVESTOR_DATA } from ".";
import { Cluster, getConfig, INVESTIN_IDS } from "./constants";
import { INVESTMENT } from "./types";

export class Investor {

    investorAddress: PublicKey;
    connection: Connection;
    config: INVESTIN_IDS;

    constructor(connection: Connection, cluster: Cluster,investorAddress: PublicKey) {
        this.investorAddress = investorAddress;
        this.connection = connection;
        this.config = getConfig(cluster);
    }

    async getInvestments(): Promise<INVESTMENT[]> {
        let investments = await this.connection.getProgramAccounts(this.config.programId, {
            filters: [
                {
                    memcmp: { offset: INVESTOR_DATA.offsetOf('owner'), bytes: this.investorAddress.toString() }
                },
                { dataSize: INVESTOR_DATA.span }
            ]
        });
        return investments.map(investment => { return { ...INVESTOR_DATA.decode(investment.account.data), pubKey: investment.pubkey.toBase58() } })
    }
}
