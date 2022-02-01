export * from './layouts/layouts';
export * from './types';
export * from './investinClient';
export * from './pools/orcaPools';
export * from './pools/raydiumPools';
export * from './tokens';
export * from './coingeckoTokens';
export * from './perpMarkets';
export * from './investor';

import { Connection, PublicKey } from '@solana/web3.js';
import { InvestinClient } from "./investinClient";

export const cluster = "https://investinpro.genesysgo.net"
export const connection = new Connection(cluster, 'recent');

const main = async() => {
    const investinClient = new InvestinClient(connection);

    await investinClient.fetchAllFunds();
    const investments = await investinClient.getInvestmentsByInvestorAddress(new PublicKey('2iBo4Q9iX9zaJQBG87QLPc6aBM3N3mPBjg1bPr4S1pwp'));
    console.log('investments ::: ', investments);
};

main()