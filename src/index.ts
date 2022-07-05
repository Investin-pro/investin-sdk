export * from './layouts/layouts';
export * from './types';
export * from './investinClient';
export * from './pools/orcaPools';
export * from './pools/raydiumPools';
export * from './tokens';
export * from './coingeckoTokens';
export * from './perpMarkets';
export * from './investor';

import { IDS } from '@blockworks-foundation/mango-client';
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import {InvestinClient} from './investinClient';
import { Investor } from './investor';

const main = () => {
    (async () => {
        const client = new InvestinClient(new Connection(clusterApiUrl('devnet')), 'devnet')
        const f = await client.fetchAllInvestments()
        console.log("client:",f)

        // const client = new Investor(new Connection(clusterApiUrl('mainnet-beta')), new PublicKey('ERCZ9ayG8gMSQBhyb5mDGCUWgggtz7RAsWWWGTAFhEzp'))
        // const ins = await client.getInvestments();
        // console.log('ins ::: ', ins)
    })()
}
main()

