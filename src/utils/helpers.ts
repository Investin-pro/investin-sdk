export const mapTokens = (platformTokenList, tokens, TOKENS) => {
    return tokens.filter(f => f.is_active == 1).map((t) => {
        return {
            symbol: Object.keys(TOKENS).find(k => TOKENS[k].mintAddress == platformTokenList[t.index[t.mux]].mint),
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
