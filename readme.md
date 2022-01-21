# Investin SDK
Client SDK for interacting with INVESTIN's smart-contracts

## Install
```
npm i @investin/client-sdk / yarn add @investin/client-sdk 
```

## Using the SDK

### To fetch all the funds
```
const investinClient = new InvestinClient(connection);

await investinClient.loadTokensAndPools();

const funds = await investinClient.fetchAllFunds();
```

## Token Pricing
Currently the SDK uses coingecko for token prices, if you have a alternative source you can pass them in like so 
```
const prices = // fetching prices logic

const funds = await investinClient.fetchAllFunds(prices);
```
refer to [types.ts](./src/types.ts#L21) for price types


## Fetch investor deposits
```
const investinClient = new InvestinClient(connection);

await investinClient.loadTokensAndPools();
await investinClient.fetchAllFunds();
const investments = await investinClient.getInvestmentsByInvestorAddress();

```
*Investments do not contain the current roi of a deposit, which is based on the current performance of a fund, you will need to get the fund data for that and calculate it that way*
#

*This is very quick implementation and still in progress so PR's or suggestions are much appreciated, you can either create issues for improvements or join our [discord](https://discord.gg/g9ZdSakETa) and raise them there :)*
