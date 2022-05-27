import { PublicKey } from "@solana/web3.js";

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

export const TOKEN_PROGRAM_ID = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA')
export const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL')


export async function findProgramAddress(seeds, programId) {
    const [publicKey, nonce] = await PublicKey.findProgramAddress(seeds, programId)
    return { publicKey, nonce }
  }

export async function findAssociatedTokenAddress(walletAddress, tokenMintAddress) {
    const { publicKey } = await findProgramAddress(
      [walletAddress.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), tokenMintAddress.toBuffer()],
      ASSOCIATED_TOKEN_PROGRAM_ID
    )
    return publicKey
  }
