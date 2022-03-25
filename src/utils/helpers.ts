export const mapTokens = (platformTokenList, tokens, TOKENS, prices) => {
    return tokens.filter(f => f.is_active == 1).map((t) => {
        const symbol = Object.keys(TOKENS).find(k => TOKENS[k].mintAddress == platformTokenList[t.index[t.mux]].mint);
        const tokenPrice = prices.find((token) => token.symbol.toLowerCase() === symbol.toLowerCase());
        return {
            symbol,
            price: tokenPrice ? tokenPrice.price : 1.00,
            // mint: platformTokenList[t.index].mint, 
            mint: platformTokenList[t.index[t.mux]].mint,
            balance: t.balance - t.debt,
            decimals: platformTokenList[t.index[t.mux]].decimals
        }
    })
}

export const displayAddress = (address) => {
    return `${address.substring(0, 4)}....${address.substr(address.length - 4)}`;
}
