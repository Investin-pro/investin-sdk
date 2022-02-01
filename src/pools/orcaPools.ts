import { ORCA_SWAP_PROGRAM_ID } from "../constants";
import { TOKENS } from "../tokens";

export const orcaPools = [
    {
        name: 'WSOL-USDC',
        coin: { ...TOKENS.WSOL },
        pc: { ...TOKENS.USDC },
    
        version: 4,
        programId: ORCA_SWAP_PROGRAM_ID,
    
        ammId: 'EGZ7tiLeH62TPV1gL8WwbXGzEPa9zmcpVnnkPKKnrE2U',
        ammAuthority: 'JU8kmKzDHF9sXWsnoznaFDFezLsE5uomX2JkRMbmsQP',
        feeAccount: '8JnSiuvQq3BVuCU3n4DrSTw9chBSPvEMswrhtifVkr1o',
        lpMintAddress: 'APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9',
        poolCoinTokenAccount: 'ANP74VNsHwSrq9uUSjiSNyNWvf6ZPrKTmE4gHoNd13Lg',
        poolPcTokenAccount: '75HgnSvXbWKZBpZHveX68ZzAhDqMzNDS29X6BGLtxMo1',
    },
    {
      name: 'IVN-WSOL',
        coin: { ...TOKENS.IVN },
        pc: { ...TOKENS.WSOL },
  
        version: 4,
        programId: ORCA_SWAP_PROGRAM_ID,
  
        ammId: 'CFCivUWXBuULVNfJezj1fAhX6hdwVFi2BsCtpu6m96bR',
        ammAuthority: 'JGhNs5r7YNnJokzzXZWE3REKV8x4GiUvn2xSg7XGg59',
        feeAccount: 'HwwgrSjJGFBtRN8h2daWnVLBciwoo79wNeKi6b5SZmE2',
        lpMintAddress: 'DfgCnzaiTXfPkAH1C1Z441b5MzjjTCEh134ioxqRZxYf',
        poolCoinTokenAccount: 'C5yDeB3jBz5yZPa6FgP6b7HNoFxLP63Pyzpaosnkikis',
        poolPcTokenAccount: 'CCm846T6xj9VAhSAifuUJAXYCR3kaGp5KqhXFHCaeWUh',
    },
    {
      name: 'LIQ-USDC',
        coin: { ...TOKENS.LIQ },
        pc: { ...TOKENS.USDC },
    
        version: 4,
        programId: ORCA_SWAP_PROGRAM_ID,
    
        ammId: 'AXSeEafwPUGSamiZWH8m2PJtvpDVtrofxvycNwxiysdh',
        ammAuthority: '6Y5TnCwgifc8Z7QYo672nT9uNd2hcivVR1NT6oDkJx6P',
        feeAccount: 'FSVPcprrTkQLRtDACFEpa2rhEVx4kBvjPuQaxj572SaC',
        lpMintAddress: '3PD9SZFwXKkXr4akLf4ofo37ZUMycwML89R2P3qxcbZG',
        poolCoinTokenAccount: 'CVspL8Tj5YdqntXJegNeDXHiBn3648QDNB7gex6D9MgY',
        poolPcTokenAccount: '8YzLsZ1FtsruswkBogEaXwmRTf5PMuyVcfSZXRAdi8qA',
    },
    {
      name: 'ORCA-USDC',
        coin: { ...TOKENS.ORCA },
        pc: { ...TOKENS.USDC },
    
        version: 4,
        programId: ORCA_SWAP_PROGRAM_ID,
    
        ammId: '2p7nYbtPBgtmY69NsE8DAW6szpRJn7tQvDnqvoEWQvjY',
        ammAuthority: '3fr1AhdiAmWLeNrS24CMoAu9pPgbzVhwLtJ6QUPmw2ob',
        feeAccount: '7CXZED4jfRp3qdHB9Py3up6v1C4UhHofFvfT6RXbJLRN',
        lpMintAddress: 'n8Mpu28RjeYD7oUX3LG1tPxzhRZh3YYLRSHcHRdS3Zx',
        poolCoinTokenAccount: '9vYWHBPz817wJdQpE8u3h8UoY3sZ16ZXdCcvLB7jY4Dj',
        poolPcTokenAccount: '6UczejMUv1tzdvUzKpULKHxrK9sqLm8edR1v9jinVWm9',
    },
    {
      name: 'ETH-USDC',
        coin: { ...TOKENS.ETH },
        pc: { ...TOKENS.USDC },
    
        version: 4,
        programId: ORCA_SWAP_PROGRAM_ID,
    
        ammId: 'FgZut2qVQEyPBibaTJbbX2PxaMZvT1vjDebiVaDp5BWP',
        ammAuthority: '4dfCZR32xXhoTgMRhnViNaTFwiKP9A34TDjHCR3xM5rg',
        feeAccount: 'DLWewB12jzGn4wXJmFCddWDeof1Ma4cZYNRv9CP5hTvX',
        lpMintAddress: '3e1W6Aqcbuk2DfHUwRiRcyzpyYRRjg6yhZZcyEARydUX',
        poolCoinTokenAccount: 'H9h5yTBfCHcb4eRP87fXczzXgNaMzKihr7bf1sjw7iuZ',
        poolPcTokenAccount: 'JA98RXv2VdxQD8pRQq4dzJ1Bp4nH8nokCGmxvPWKJ3hx',
    },
    {
      name: 'ATLAS-USDC',
        coin: { ...TOKENS.ATLAS},
        pc: { ...TOKENS.USDC },
    
        version: 4,
        programId: ORCA_SWAP_PROGRAM_ID,
    
        ammId: '3V5sjXj1mrWjjB1Xt6Xwp554QwHE5fppGSxbk4GzAtEW',
        ammAuthority: '8UYN675AJn5htWydDs724xqintBZ4XzsCWqMozUSDU8m',
        feeAccount: 'CFN4DQ2p3qroX92pPNy3mov3Dw1aCNGLrU5AXHpHxbko',
        lpMintAddress: 'FZ8x1LCRSPDeHBDoAc3Gc6Y7ETCynuHEr5q5YWV7uRCJ',
        poolCoinTokenAccount: 'xotXsNCx4tBhnwhrajGTaVgKq1sfuMkeYHc77ZegCqE',
        poolPcTokenAccount: '8YswVYsTi66umBF2Bnkh4LB2VWMKPssDpe54VAgiuJZQ',
    },
    {
      name: 'POLIS-USDC',
        coin: { ...TOKENS.POLIS},
        pc: { ...TOKENS.USDC },
    
        version: 4,
        programId: ORCA_SWAP_PROGRAM_ID,
    
        ammId: 'CdKPtCb5fBRaGFS4bJgytfReeHuFyhpe9YUyWHPnEWZG',
        ammAuthority: '8XB9V3VuHtPBzHqvxzcmpkpaoXNXjZMD8VBHC79SxcEL',
        feeAccount: '3gZQ2YnrXbnRwJj5poffLirF7CwacatvtfGCNRFrbJdr',
        lpMintAddress: 'GteBdo9sqE7T41G8AJsaG9WHW48uXBwsLLznmu2TBdgy',
        poolCoinTokenAccount: 'EbXNEUiKxSU1vwwhrbVNVk3qX4o1yU3p75SQUUMfc1zH',
        poolPcTokenAccount: 'CLCj9b1vdPutrkvZS8ACTM5q42SXB2Q7khnMLVxDMGEK',
    },
    {
      name: 'ABR-USDC',
        coin: { ...TOKENS.ABR},
        pc: { ...TOKENS.USDC },
    
        version: 4,
        programId: ORCA_SWAP_PROGRAM_ID,
    
        ammId: 'rxwsjytcEBvXpXrXBL1rpsjhoh78imBn8WbxjKmLRge',
        ammAuthority: 'AcaxutE6Rh9vRxipTLdqinEdRK6R4ayUAAv2bZPh6UU9',
        feeAccount: '7pPJGwd8Vq7aYmHaocQpQSfTn3UWYGKUgFkFhpMmRdDF',
        lpMintAddress: 'GMzPbaCuQmeMUm1opH3oSCgKUjVgJUW14myq99RVPGX5',
        poolCoinTokenAccount: '6FRxhbY7bvSiDojPiqoidjTyDjxaUyCoPQk3ifEdfFbm',
        poolPcTokenAccount: '8aTapFecZRZmC2bTeKr2voHFW2twNvbrh8nWYdXYQWkZ',
    },
    {
      name: 'SBR-USDC',
        coin: { ...TOKENS.SBR},
        pc: { ...TOKENS.USDC },
    
        version: 4,
        programId: ORCA_SWAP_PROGRAM_ID,
    
        ammId: 'HiYggjP2fN53Jw46e5UuskqNP3HH98jceRxEgVoeRwNw',
        ammAuthority: 'ATkEV1nEkdp7zgaGpzFCsJ5WAyejcJbxqzGhQpfcDW4S',
        feeAccount: '7S3KKuvcHfcKWBGLDwmoTgtB97JE8LHruP8jbmQkGfH',
        lpMintAddress: 'CS7fA5n4c2D82dUoHrYzS3gAqgqaoVSfgsr18kitp2xo',
        poolCoinTokenAccount: 'DrJTQqNZqNCf2HDLpYg9zRCMRwnhZEVQuGjeaWtX6CA7',
        poolPcTokenAccount: 'DEVLUv1uiUSukQoBdy9fDQyehi4N2Boojy8J2LQ8bK2E',
    },
    {
      name: 'SAMO-USDC',
        coin: { ...TOKENS.SAMO},
        pc: { ...TOKENS.USDC },
    
        version: 4,
        programId: ORCA_SWAP_PROGRAM_ID,
    
        ammId: 'Epvp7qMYAF21VVjacdB3VfKn6nnXQSF4rGYu8sD6Bkow',
        ammAuthority: 'AB4rTE2JiKFhnfynUQCovbW75CUxT9LxcJX2SDTbY9gy',
        feeAccount: '9U8UF7d8kBvsS25XoZnjmVQ9vGkP4BUnHJgfc615BvG1',
        lpMintAddress: '6VK1ksrmYGMBWUUZfygGF8tHRGpNxQEWv8pfvzQHdyyc',
        poolCoinTokenAccount: '7jwHW4Lw3nVaSJXskN5pUoKU6YB9RBVfZtGBp3VbR43U',
        poolPcTokenAccount: 'G7Gqjxk9EaJMeFfoFTSy9WfH8uurgQkbNQCREWAc56DZ',
    },
    {
      name: 'PORT-USDC',
        coin: { ...TOKENS.PORT},
        pc: { ...TOKENS.USDC },
    
        version: 4,
        programId: ORCA_SWAP_PROGRAM_ID,
    
        ammId: '4if9Gy7dvjU7XwunKxdnCcPsaT3yAHPXdz2XS1eo19LG',
        ammAuthority: 'BshtCZRCHj2RZYC7u5sW3ioRJo9ZiYA4T5p8muFwrKnb',
        feeAccount: '5JZXUbCfaSo3y9PYq47Hj5Yc6hVFa4j7MkDzBJfMSRSN',
        lpMintAddress: 'F8gPSpwVHj8FdAJAYULDuZBxFEJut87hUbARYYx3471w',
        poolCoinTokenAccount: '2wuSqR5z2Guft2yt57Hx7K6i1AYNoUi8fjxHUeAgaKXo',
        poolPcTokenAccount: 'AvP1Db3SyUxLGMSc4nSXjJkjm1kAjiLjog7cup19eWa3',
    },
    {
      name: 'MSOL-USDC',
      coin: { ...TOKENS.MSOL},
      pc: { ...TOKENS.USDC },
  
      version: 4,
      programId: ORCA_SWAP_PROGRAM_ID,
  
      ammId: 'Hme4Jnqhdz2jAPUMnS7jGE5zv6Y1ynqrUEhmUAWkXmzn',
      ammAuthority: '9Z7E42k46kxnBjAh8YGXDw3rRGwwxQUBYM7Ccrmwg6ZP',
      feeAccount: '3W3Skj2vQsNEMhGRQprFXQy3Q8ZbM6ojdgiDCokVPWno',
      lpMintAddress: '8PSfyiTVwPb6Rr2iZ8F3kNpbg65BCfJM9v8LfB916r44',
      poolCoinTokenAccount: 'GBa7G5f1FqAXEgByuHXsqsEdpyMjRgT9SNxZwmmnEJAY',
      poolPcTokenAccount: '7hFgNawzzmpDM8TTVCKm8jykBrym8C3TQdb8TDAfAVkD',
    },
    {
      name: 'BTC-MSOL',
      coin: { ...TOKENS.BTC},
      pc: { ...TOKENS.MSOL },
  
      version: 4,
      programId: ORCA_SWAP_PROGRAM_ID,
  
      ammId: '8DRw5wQE1pyg6RB1UwypGNFgb2Pzp2hpyDDNwo76Lcc8',
      ammAuthority: '3X1aLdyvcQNc8TvBMPiucMsRCnGMBnGsjJHpZEyCf3pn',
      feeAccount: 'AqiLHbUAy4UWWKGVVgbHsaUVCMg1zemNkgsYBPSirT92',
      lpMintAddress: '8nKJ4z9FSw6wrVZKASqBiS9DS1CiNsRnqwCCKVQjqdkB',
      poolCoinTokenAccount: '6D3sxC6yEe84FUnF5Kpbgx6gN57N9poJCKAtrCeCWdJo',
      poolPcTokenAccount: 'EPoVJLhi9QtVPVo8n31M5k5Knvb48j8zbYyRrUbrHwC5',
    },
    {
      name: 'MNDE-MSOL',
      coin: { ...TOKENS.MNDE },
      pc: { ...TOKENS.MSOL },
  
      version: 4,
      programId: ORCA_SWAP_PROGRAM_ID,
  
      ammId: 'vjHagYsgZwG9icyFLHu2xWHWdtiS5gfeNzRhDcPt5xq',
      ammAuthority: '3HWcojnC1ruEMmsE92Ez1BoebdDXzYQa4USaeWX7eTuM',
      feeAccount: '46mdANZ2DCA2sTFchvD7WwbffbLQa4jCFkkRL23WuYG8',
      lpMintAddress: '5PHS5w6hQwFNnLz1jJFe7TVTxSQ98cDYC3akmiAoFMXs',
      poolCoinTokenAccount: '2LferrWvYWtHFfdkmixzt9g3aKa3yBNfgbRrP1CcWMMp',
      poolPcTokenAccount: 'GimsuZjYqMXM6xK6S3e9JpGvX6jaMPuNeR6s2piDESmy',
    },
    {
      name: 'NINJA-WSOL',
      coin: { ...TOKENS.NINJA },
      pc: { ...TOKENS.WSOL },
  
      version: 4,
      programId: ORCA_SWAP_PROGRAM_ID,
  
      ammId: '3ECUtPokme1nimJfuAkMtcm7QYjDEfXRQzmGC16LuYnz',
      ammAuthority: 'H8f9n2PfehUc73gRWSRTPXvqUhUHVywdAxcfEtYmmyAo',
      feeAccount: '43ViAbUVujnYtJyzGP4AhabMYCbLsExenT3WKsZjqJ7N',
      lpMintAddress: '4X1oYoFWYtLebk51zuh889r1WFLe8Z9qWApj87hQMfML',
      poolCoinTokenAccount: '6Y9VyEYHgxVahiixzphNh4HAywpab9zVoD4S8q1sfuL8',
      poolPcTokenAccount: '9SxzphwrrDVDkwkyvmtag9NLgpjSkTw35cRwg9rLMYWk',
    },
    {
      name: 'SUNNY-USDC',
        coin: { ...TOKENS.SUNNY},
        pc: { ...TOKENS.USDC },
    
        version: 4,
        programId: ORCA_SWAP_PROGRAM_ID,
    
        ammId: '3Ukqqshh3kZ8UPbcYYFSRaeJcsgttcmShtNNn12F1rj2',
        ammAuthority: '7NP8DTzPdpbQofhNyhLW3j2khutmfy1kuFp2AjaD8rrp',
        feeAccount: 'CCuSVbnnq8SUj7cpPe7BbHLuKanyxfvfrwypzCBnaDdf',
        lpMintAddress: 'GHuoeq9UnFBsBhMwH43eL3RWX5XVXbSRYJymmyMYpT7n',
        poolCoinTokenAccount: 'F6nCAMYEFxsyRDVonQXLNufXgAHsgAa1Br8DhBoX3KAV',
        poolPcTokenAccount: 'HWCTHmQppFSsKQEk1bHUqPC2WLaidgnfTG9MQGD4XKEt',
    },
    {
      name: 'SHDW-USDC',
      coin: { ...TOKENS.SHDW },
      pc: { ...TOKENS.USDC },
  
      version: 4,
      programId: ORCA_SWAP_PROGRAM_ID,
  
      ammId: '25bQ6UzZpgFgnU7MqZdqM9Axi6oJunytRL2LgXruDWZB',
      ammAuthority: 'BjnfpyU3Verx99dKcEJZpL1AqLTPrkAUcd44LpXcXVvn',
      feeAccount: '9wmHbXURZ4zTPSj1KqoRSCdBRGUF7jrURzf7BB39cxM4',
      lpMintAddress: 'DJqqvzSuPaWThfzwMjXx7H2ZmHDdwxza6NtFudtuXcpc',
      poolCoinTokenAccount: '8ZVaNyNZQkcMzF7esuZoRgRo7Rc9eKEN18v4zw7Ng8JZ',
      poolPcTokenAccount: 'H8A2xivBXr1RMCYmuhJ7dyEXJqPxaGDyQaaim8WucU7c',
  },
  ];