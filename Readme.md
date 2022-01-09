# Investin SDK
### Install
```
npm i investin-sdk / yarn add investin-sdk
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
const investor = new Investor(connection, investorAddress);

const investments = await investor.getgetInvestments();
```
*Investments do not contain the current roi of a deposit, which is based on the current performance of a fund, you will need to call get the fund data for that*
#

*This is very quick implementation and still in progress so PR's or suggestions are much appreciated, you can either create issues for improvements or join our [discord](https://discord.gg/g9ZdSakETa) and raise them there :)*
