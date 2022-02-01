import { cloneDeep } from "lodash";

export function getTokenByMintAddress(mintAddress) {
    if (mintAddress === NATIVE_SOL.mintAddress) {
        return cloneDeep(NATIVE_SOL)
    }

    let token = null

    for (const symbol of Object.keys(TOKENS)) {
        const info = cloneDeep(TOKENS[symbol])

        if (info.mintAddress === mintAddress) {
            token = info
        }
    }

    return token
}

export const NATIVE_SOL = {
    symbol: 'SOL',
    name: 'Native Solana',
    mintAddress: '11111111111111111111111111111111',
    decimals: 9
}

export const MANGO_TOKENS = {
    'USDC': {
        symbol: "USDC",
        mintAddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        decimals: 6,
        rootKey: "AMzanZxMirPCgGcBoH9kw4Jzi9LFMomyUCXbpzDeL2T8",
        nodeKeys: ["BGcwkj1WudQwUUjFk78hAjwd1uAm8trh1N4CJSa51euh"],
        mangoTokenIndex: 15
    },
    'MNGO': {
        symbol: "MNGO",
        mintAddress: "MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac",
        decimals: 6,
        rootKey: "8HjXYFntHMDNJKCJpHFufDaFYXfuAk6c6odfFnWc4xWy",
        nodeKeys: ["8XZx15vqdUbt3eVTXsxPfEMS3o2KXJ5sM7G2qXmmkETk"],
        mangoTokenIndex: 0
    },
    'BTC': {
        symbol: "BTC",
        mintAddress: "9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E",
        decimals: 6,
        rootKey: "8VwAANqu3t4KQKpMq7wrS6yg5GTHwJBFsrK4Tk2cFN3q",
        nodeKeys: ["7CfvGCV7qMf7im7mcqftZxQZGTweGappvL1maH7PMZ3Q"],
        mangoTokenIndex: 1
    },
    'ETH': {
        symbol: "ETH",
        mintAddress: "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk",
        decimals: 6,
        rootKey: "FDpHjPQnUkmYVpAEVBpzb3sQgjZM7fanJoRb1VVtjF6u",
        nodeKeys: ["B6mYWs6PKda8DtJwvkvk2UV88NCChdmFGhcWSrgxY5vb"],
        mangoTokenIndex: 2
    },
    'WSOL': {
        symbol: "WSOL",
        mintAddress: "So11111111111111111111111111111111111111112",
        decimals: 9,
        rootKey: "7jH1uLmiB2zbHNe6juZZYjQCrvquakTwd3yMaQpeP8rR",
        nodeKeys: ["2bqJYcA1A8gw4qJFjyE2G4akiUunpd9rP6QzfnxHqSqr"],
        mangoTokenIndex: 3
    },
    // 'USDT': {
    //     symbol: "USDT",
    //     mintAddress: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
    //     decimals: 6,
    //     rootKey: "4GYDmgvMpBx2n2iSmaS1xhZnwebR2gJ5V7UYUBA1PkJi",
    //     nodeKeys: ["FYFJ4YHDEJnX7yVPoejUTAcKstnovTZpLq5zWAM7c6Uz"],
    //     mangoTokenIndex : 4
    // },
    'SRM': {
        symbol: "SRM",
        mintAddress: "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt",
        decimals: 6,
        rootKey: "AjMbjA1JsHh574Eo1RRV2XXtB8St139oBXKPXPo2HLdU",
        nodeKeys: ["qsGcM7VLiywm1wvvvjzWd7SynnyMcg8Pc7QxKUW4CUY"],
        mangoTokenIndex: 5
    },
    'RAY': {
        symbol: "RAY",
        mintAddress: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
        decimals: 6,
        rootKey: "7TNHrBUDH3FL9uy9hxjmRcKNNaCBG9sYPuDJSJuj3LGs",
        nodeKeys: ["GDNCSCaVzhD2L164GwUv8JqTdaHCuYGg21JjXQDtuofk"],
        mangoTokenIndex: 6
    },
    'COPE': {
        symbol: "COPE",
        mintAddress: "8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh",
        decimals: 6,
        rootKey: "6cMrtzhWNEEDkcSMx19orcred8h9HyRb31MtbCkKDdf6",
        nodeKeys: ["2CpaAtjDt4s9Fps7dyJUaUMeUGBDPAUUui5rxYbVzPfA"],
        mangoTokenIndex: 7

    },
    'FTT': {
        symbol: "FTT",
        mintAddress: "AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3",
        decimals: 6,
        rootKey: "9i35wTe5W9vVLUJnzuhnFZbLThYJr2NF38MhEGVHJY5T",
        nodeKeys: ["8Q9JVDynPbyqXfnDXT31mncD7LAnoHAoSv2ywxZHjPFJ"],
        mangoTokenIndex: 8
    },
    // 'MSOL': {
    //     symbol: "MSOL",
    //     mintAddress: "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
    //     decimals: 9,
    //     rootKey: "5AWnWCNKSzdpgyJSD3NWdarMazCGX2t8D4NU5xwSEVjC",
    //     nodeKeys: ["H9jHd5YsHN4fg17aqng2WzJGTyinMDyQ2jin3iuiXPVD"],
    //     mangoTokenIndex : 10
    // }
    // 'LUNA' :  {
    //   "symbol": "LUNA",
    //   "mintKey": "F6v4wfAdJB8D8p77bMXZgYt8TDKsYxLYxH5AFhUkYx9W",
    //   "decimals": 6,
    //   "rootKey": "AUU8Zw5ezmZJBuWtMjfTTyP6eowkpNbH5pHh6uY5BHu7",
    //   "nodeKeys": ["BNpfdZZC8NP1PabGATRHH2ABh94U47zm1kjvneRSMSBE"],
    //   "mangoTokenIndex" : -1
    // }
}

export const TOKENS = {
    WSOL: {
        symbol: 'WSOL',
        name: 'Wrapped Solana',
        mintAddress: 'So11111111111111111111111111111111111111112',
        decimals: 9
    },
    BTC: {
        symbol: 'BTC',
        name: 'Wrapped Bitcoin',
        mintAddress: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
        decimals: 6
    },
    ETH: {
        symbol: 'ETH',
        name: 'Wrapped Ethereum',
        mintAddress: '2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk',
        decimals: 6
    },
    USDT: {
        symbol: 'USDT',
        name: 'USDT',
        mintAddress: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
        decimals: 6
    },
    WUSDT: {
        symbol: 'WUSDT',
        name: 'Wrapped USDT',
        mintAddress: 'BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4',
        decimals: 6
    },
    USDC: {
        symbol: 'USDC',
        name: 'USDC',
        mintAddress: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
        decimals: 6
    },
    WUSDC: {
        symbol: 'WUSDC',
        name: 'Wrapped USDC',
        mintAddress: 'BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW',
        decimals: 6
    },
    YFI: {
        symbol: 'YFI',
        name: 'Wrapped YFI',
        mintAddress: '3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB',
        decimals: 6
    },
    LINK: {
        symbol: 'LINK',
        name: 'Wrapped Chainlink',
        mintAddress: 'CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG',
        decimals: 6
    },
    XRP: {
        symbol: 'XRP',
        name: 'Wrapped XRP',
        mintAddress: 'Ga2AXHpfAF6mv2ekZwcsJFqu7wB4NV331qNH7fW9Nst8',
        decimals: 6
    },
    SUSHI: {
        symbol: 'SUSHI',
        name: 'Wrapped SUSHI',
        mintAddress: 'AR1Mtgh7zAtxuxGd2XPovXPVjcSdY3i4rQYisNadjfKy',
        decimals: 6
    },
    ALEPH: {
        symbol: 'ALEPH',
        name: 'Wrapped ALEPH',
        mintAddress: 'CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K',
        decimals: 6
    },
    SXP: {
        symbol: 'SXP',
        name: 'Wrapped SXP',
        mintAddress: 'SF3oTvfWzEP3DTwGSvUXRrGTvr75pdZNnBLAH9bzMuX',
        decimals: 6
    },
    HGET: {
        symbol: 'HGET',
        name: 'Wrapped HGET',
        mintAddress: 'BtZQfWqDGbk9Wf2rXEiWyQBdBY1etnUUn6zEphvVS7yN',
        decimals: 6
    },
    CREAM: {
        symbol: 'CREAM',
        name: 'Wrapped CREAM',
        mintAddress: '5Fu5UUgbjpUvdBveb3a1JTNirL8rXtiYeSMWvKjtUNQv',
        decimals: 6
    },
    UBXT: {
        symbol: 'UBXT',
        name: 'Wrapped UBXT',
        mintAddress: '873KLxCbz7s9Kc4ZzgYRtNmhfkQrhfyWGZJBmyCbC3ei',
        decimals: 6
    },
    HNT: {
        symbol: 'HNT',
        name: 'Wrapped HNT',
        mintAddress: 'HqB7uswoVg4suaQiDP3wjxob1G5WdZ144zhdStwMCq7e',
        decimals: 6
    },
    FRONT: {
        symbol: 'FRONT',
        name: 'Wrapped FRONT',
        mintAddress: '9S4t2NEAiJVMvPdRYKVrfJpBafPBLtvbvyS3DecojQHw',
        decimals: 6
    },
    AKRO: {
        symbol: 'AKRO',
        name: 'Wrapped AKRO',
        mintAddress: '6WNVCuxCGJzNjmMZoKyhZJwvJ5tYpsLyAtagzYASqBoF',
        decimals: 6
    },
    HXRO: {
        symbol: 'HXRO',
        name: 'Wrapped HXRO',
        mintAddress: 'DJafV9qemGp7mLMEn5wrfqaFwxsbLgUsGVS16zKRk9kc',
        decimals: 6
    },
    UNI: {
        symbol: 'UNI',
        name: 'Wrapped UNI',
        mintAddress: 'DEhAasscXF4kEGxFgJ3bq4PpVGp5wyUxMRvn6TzGVHaw',
        decimals: 6
    },
    SRM: {
        symbol: 'SRM',
        name: 'Serum',
        mintAddress: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt',
        decimals: 6
    },
    FTT: {
        symbol: 'FTT',
        name: 'Wrapped FTT',
        mintAddress: 'AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3',
        decimals: 6
    },
    MSRM: {
        symbol: 'MSRM',
        name: 'MegaSerum',
        mintAddress: 'MSRMcoVyrFxnSgo5uXwone5SKcGhT1KEJMFEkMEWf9L',
        decimals: 0
    },
    TOMO: {
        symbol: 'TOMO',
        name: 'Wrapped TOMO',
        mintAddress: 'GXMvfY2jpQctDqZ9RoU3oWPhufKiCcFEfchvYumtX7jd',
        decimals: 6
    },
    KARMA: {
        symbol: 'KARMA',
        name: 'Wrapped KARMA',
        mintAddress: 'EcqExpGNFBve2i1cMJUTR4bPXj4ZoqmDD2rTkeCcaTFX',
        decimals: 4
    },
    LUA: {
        symbol: 'LUA',
        name: 'Wrapped LUA',
        mintAddress: 'EqWCKXfs3x47uVosDpTRgFniThL9Y8iCztJaapxbEaVX',
        decimals: 6
    },
    MATH: {
        symbol: 'MATH',
        name: 'Wrapped MATH',
        mintAddress: 'GeDS162t9yGJuLEHPWXXGrb1zwkzinCgRwnT8vHYjKza',
        decimals: 6
    },
    KEEP: {
        symbol: 'KEEP',
        name: 'Wrapped KEEP',
        mintAddress: 'GUohe4DJUA5FKPWo3joiPgsB7yzer7LpDmt1Vhzy3Zht',
        decimals: 6
    },
    SWAG: {
        symbol: 'SWAG',
        name: 'Wrapped SWAG',
        mintAddress: '9F9fNTT6qwjsu4X4yWYKZpsbw5qT7o6yR2i57JF2jagy',
        decimals: 6
    },
    FIDA: {
        symbol: 'FIDA',
        name: 'Bonfida',
        mintAddress: 'EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp',
        decimals: 6
    },
    KIN: {
        symbol: 'KIN',
        name: 'KIN',
        mintAddress: 'kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6',
        decimals: 5
    },
    MAPS: {
        symbol: 'MAPS',
        name: 'MAPS',
        mintAddress: 'MAPS41MDahZ9QdKXhVa4dWB9RuyfV4XqhyAZ8XcYepb',
        decimals: 6
    },
    OXY: {
        symbol: 'OXY',
        name: 'OXY',
        mintAddress: 'z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M',
        decimals: 6
    },
    RAY: {
        symbol: 'RAY',
        name: 'Raydium',
        mintAddress: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
        decimals: 6
    },
    xCOPE: {
        symbol: 'xCOPE',
        name: 'xCOPE',
        mintAddress: '3K6rftdAaQYMPunrtNRHgnK2UAtjm2JwyT2oCiTDouYE',
        decimals: 0
    },
    COPE: {
        symbol: 'COPE',
        name: 'COPE',
        mintAddress: '8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh',
        decimals: 6
    },
    STEP: {
        symbol: 'STEP',
        name: 'STEP',
        mintAddress: 'StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT',
        decimals: 9
    },
    MEDIA: {
        symbol: 'MEDIA',
        name: 'MEDIA',
        mintAddress: 'ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs',
        decimals: 6
    },
    ROPE: {
        symbol: 'ROPE',
        name: 'ROPE',
        mintAddress: '8PMHT4swUMtBzgHnh5U564N5sjPSiUz2cjEQzFnnP1Fo',
        decimals: 9
    },
    MER: {
        symbol: 'MER',
        name: 'Mercurial',
        mintAddress: 'MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K',
        decimals: 6
    },
    TULIP: {
        symbol: 'TULIP',
        name: 'TULIP',
        mintAddress: 'TuLipcqtGVXP9XR62wM8WWCm6a9vhLs7T1uoWBk6FDs',
        decimals: 6
    },
    SNY: {
        symbol: 'SNY',
        name: 'SNY',
        mintAddress: '4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y',
        decimals: 6
    },
    SLRS: {
        symbol: 'SLRS',
        name: 'SLRS',
        mintAddress: 'SLRSSpSLUTP7okbCUBYStWCo1vUgyt775faPqz8HUMr',
        decimals: 6
    },
    WOO: {
        symbol: 'WOO',
        name: 'Wootrade Network',
        mintAddress: 'E5rk3nmgLUuKUiS94gg4bpWwWwyjCMtddsAXkTFLtHEy',
        decimals: 6
    },
    BOP: {
        symbol: 'BOP',
        name: 'Boring Protocol',
        mintAddress: 'BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3',
        decimals: 8
    },
    SAMO: {
        symbol: 'SAMO',
        name: 'Samoyed Coin',
        mintAddress: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
        decimals: 9
    },
    renBTC: {
        symbol: 'renBTC',
        name: 'renBTC',
        mintAddress: 'CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5',
        decimals: 8
    },
    renDOGE: {
        symbol: 'renDOGE',
        name: 'renDOGE',
        mintAddress: 'ArUkYE2XDKzqy77PRRGjo4wREWwqk6RXTfM9NeqzPvjU',
        decimals: 8
    },
    LIKE: {
        symbol: 'LIKE',
        name: 'LIKE',
        mintAddress: '3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR',
        decimals: 9
    },
    DXL: {
        symbol: 'DXL',
        name: 'DXL',
        mintAddress: 'GsNzxJfFn6zQdJGeYsupJWzUAm57Ba7335mfhWvFiE9Z',
        decimals: 6
    },
    MSOL: {
        symbol: 'MSOL',
        name: 'Marinade staked SOL (mSOL)',
        mintAddress: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
        decimals: 9
    },
    MNDE: {
        symbol: 'MNDE',
        name: 'Marinade (MNDE)',
        mintAddress: 'MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey',
        decimals: 9,
        tags: ['orca']
    },
    PAI: {
        symbol: 'PAI',
        name: 'PAI (Parrot)',
        mintAddress: 'Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS',
        decimals: 6
    },
    PORT: {
        symbol: 'PORT',
        name: 'PORT',
        mintAddress: 'PoRTjZMPXb9T7dyU7tpLEZRQj7e6ssfAE62j2oQuc6y',
        decimals: 6
    },
    MNGO: {
        symbol: 'MNGO',
        name: 'Mango',
        mintAddress: 'MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac',
        decimals: 6
    },
    CRP: {
        symbol: 'CRP',
        name: 'CRP',
        mintAddress: 'DubwWZNWiNGMMeeQHPnMATNj77YZPZSAz2WVR5WjLJqz',
        decimals: 9
    },
    ATLAS: {
        symbol: 'ATLAS',
        name: 'ATLAS',
        mintAddress: 'ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx',
        decimals: 8
    },
    POLIS: {
        symbol: 'POLIS',
        name: 'POLIS',
        mintAddress: 'poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk',
        decimals: 8
    },
    GRAPE: {
        symbol: 'GRAPE',
        name: 'GRAPE',
        mintAddress: '8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA',
        decimals: 6
    },
    CHEEMS: {
        symbol: 'CHEEMS',
        name: 'CHEEMS',
        mintAddress: '3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc',
        decimals: 4
    },
    stSOL: {
        symbol: 'stSOL',
        name: 'stSOL',
        mintAddress: '7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj',
        decimals: 9
    },
    LIQ: {
        symbol: 'LIQ',
        name: 'LIQ',
        mintAddress: '4wjPQJ6PrkC4dHhYghwJzGBVP78DkBzA2U3kHoFNBuhj',
        decimals: 6,
        tags: ['orca']
    },
    ORCA: {
        symbol: 'ORCA',
        name: 'ORCA',
        mintAddress: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE',
        decimals: 6
    },
    ABR: {
        symbol: 'ABR',
        name: 'ABR',
        mintAddress: 'a11bdAAuV8iB2fu7X6AxAvDTo1QZ8FXB3kk5eecdasp',
        decimals: 9
    },
    SHDW: {
        symbol: 'SHDW',
        name: 'Shadow Token',
        mintAddress: 'SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y',
        decimals: 9,
        tags: ['orca']
    },
    SBR: {
        symbol: 'SBR',
        name: 'SBR',
        mintAddress: 'Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1',
        decimals: 6
    },
    SUNNY: {
        symbol: 'SUNNY',
        name: 'SUNNY',
        mintAddress: 'SUNNYWgPQmFxe9wTZzNK7iPnJ3vYDrkgnxJRJm1s3ag',
        decimals: 6,
        tags: ['orca']
    },
    DFL: {
        symbol: 'DFL',
        name: 'DeFi Land',
        mintAddress: 'DFL1zNkaGPWm1BqAVqRjCZvHmwTFrEaJtbzJWgseoNJh',
        decimals: 9
    },
    AURY: {
        symbol: 'AURY',
        name: 'AURY',
        mintAddress: 'AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP',
        decimals: 9
    },
    IVN: {
        symbol: 'IVN',
        name: 'IVN',
        mintAddress: 'iVNcrNE9BRZBC9Aqf753iZiZfbszeAVUoikgT9yvr2a',
        decimals: 6
    },
    SLND: {
        symbol: 'SLND',
        name: 'SLND',
        mintAddress: 'SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp',
        decimals: 6
    },
    FAB: {
        symbol: 'FAB',
        name: 'FAB',
        mintAddress: 'EdAhkbj5nF9sRM7XN7ewuW8C9XEUMs8P7cnoQ57SYE96',
        decimals: 9
    },
    NINJA: {
        symbol: 'NINJA',
        name: 'NINJA',
        mintAddress: 'FgX1WD9WzMU3yLwXaFSarPfkgzjLb2DZCqmkx9ExpuvJ',
        decimals: 6
    },
    IN: {
        symbol: 'IN',
        name: 'IN',
        mintAddress: 'inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY',
        decimals: 9
    },
    SONAR: {
        symbol: 'SONAR',
        name: 'SONAR',
        mintAddress: 'sonarX4VtVkQemriJeLm6CKeW3GDMyiBnnAEMw1MRAE',
        decimals: 9
    },
    ATS: {
        symbol: 'ATS',
        name: 'Atlas DEX',
        mintAddress: 'HJbNXx2YMRxgfUJ6K4qeWtjatMK5KYQT1QnsCdDWywNv',
        decimals: 9
    },
    PRISM: {
        symbol: 'PRISM',
        name: 'PRISM',
        mintAddress: 'PRSMNsEPqhGVCH1TtWiJqPjJyh2cKrLostPZTNy1o5x',
        decimals: 6
    },
    UXP: {
        symbol: 'UXP',
        name: 'UXP',
        mintAddress: 'UXPhBoR3qG4UCiGNJfV7MqhHyFqKN68g45GoYvAeL2M',
        decimals: 9
    },
}
