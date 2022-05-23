export * from './layouts/layouts';
export * from './types';
export * from './investinClient';
export * from './pools/orcaPools';
export * from './pools/raydiumPools';
export * from './tokens';
export * from './coingeckoTokens';
export * from './perpMarkets';
export * from './investor';

// import { clusterApiUrl, Connection } from '@solana/web3.js';
// import {InvestinClient} from './investinClient';
// const main = () => {
//     (async () => {
//         const client = new InvestinClient(new Connection(clusterApiUrl("mainnet-beta")))
//         const f = await client.fetchAllFunds()
//         console.log("client:",f)
//     })()
// }
// main()

