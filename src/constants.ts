import { PublicKey } from "@solana/web3.js";

// export const programId = new PublicKey('8dbbmZXbLsUirEsgaBVcPBEdciESza6L2zkEuer4crR')
// export const platformStateAccount = new PublicKey('Cpf6kq7w4iR2hWdWTkWeoxvyRrrduke5XhA7QM5SkGNo')
// export const MANGO_PROGRAM_ID_V3 = new PublicKey('mv3ekLzLbnVPNxjSKvqBpU3ZeZXPQdEC3bp5MDEBG68')
// export const MANGO_GROUP_ACCOUNT_V3 = new PublicKey('98pjRuQjK3qA6gXts96PqZT4Ze5QmnCmt3QYjhbUSPue')
export const LIQUIDITY_POOL_PROGRAM_ID_V4 = new PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8')
export const SERUM_PROGRAM_ID_V3 = new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin')
export const ORCA_SWAP_PROGRAM_ID = new PublicKey('9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP')

export declare type Cluster = 'devnet' | 'mainnet';

export declare type INVESTIN_IDS = {
    programId: PublicKey;
    platformStateAccount: PublicKey;
    MANGO_PROGRAM_ID_V3: PublicKey;
    MANGO_GROUP_ACCOUNT_V3: PublicKey;
    LIQUIDITY_POOL_PROGRAM_ID_V4: PublicKey;
    SERUM_PROGRAM_ID_V3: PublicKey;
    ORCA_SWAP_PROGRAM_ID: PublicKey;
}

export declare type InvestinConfig = {
    [key in Cluster]: INVESTIN_IDS;
}

export const config: InvestinConfig = {
    devnet: {
        programId: new PublicKey('EYCioTzTEMFwcYKbYn8HMNdY32KkpEnRnKuirv7GZPmL'),
        platformStateAccount: new PublicKey('8VNYUXwcvv5zJbj6ZzeDA2kV63CkmZqc39gg9VS1fgus'),
        MANGO_PROGRAM_ID_V3: new PublicKey('4skJ85cdxQAFVKbcGgfun8iZPL7BadVYXG3kGEGkufqA'),
        MANGO_GROUP_ACCOUNT_V3: new PublicKey('B9Uddrao7b7sCjNZp1BJSQqFzqhMEmBxD2SvYTs2TSBn'),
        LIQUIDITY_POOL_PROGRAM_ID_V4: new PublicKey('9rpQHSyFVM1dkkHFQ2TtTzPEW7DVmEyPmN8wVniqJtuC'),
        SERUM_PROGRAM_ID_V3: new PublicKey('DESVgJVGajEgKGXhb6XmqDHGz3VjdgP7rEVESBgxmroY'),
        ORCA_SWAP_PROGRAM_ID: new PublicKey('9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP'), // need to find this out
    },
    mainnet: {
        programId: new PublicKey('8dbbmZXbLsUirEsgaBVcPBEdciESza6L2zkEuer4crR'),
        platformStateAccount: new PublicKey('Cpf6kq7w4iR2hWdWTkWeoxvyRrrduke5XhA7QM5SkGNo'),
        MANGO_PROGRAM_ID_V3: new PublicKey('mv3ekLzLbnVPNxjSKvqBpU3ZeZXPQdEC3bp5MDEBG68'),
        MANGO_GROUP_ACCOUNT_V3: new PublicKey('98pjRuQjK3qA6gXts96PqZT4Ze5QmnCmt3QYjhbUSPue'),
        LIQUIDITY_POOL_PROGRAM_ID_V4: new PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8'),
        SERUM_PROGRAM_ID_V3: new PublicKey('9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin'),
        ORCA_SWAP_PROGRAM_ID: new PublicKey('9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP'),
    }
}

export const getConfig = (cluster: Cluster) => {
    const foundConfig = Object.entries(config).find(f => f[0] === cluster);
    if(foundConfig) {
        return foundConfig[1]
    } else {
        throw new Error('Invalid Config')
    }
}