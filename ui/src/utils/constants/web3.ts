import { defineChain } from 'viem'

import { polygonMumbai, goerli, Chain } from 'viem/chains';

type Network =  {
    chainId:string;
    rpcTarget: string;
    blockExplorerUrl: string;
    ticker: string;
    displayName: string;
    isTestnet: boolean;
}

export const NETWORKS: Record<string, Network> ={
    '0x13881': {
        chainId: '0x13881',
        rpcTarget: `https://rpc-mumbai.matic.today`,
        blockExplorerUrl: `https://mumbai.polygonscan.com`,
        ticker: `MATIC`,
        displayName: `Polygon Mumbai`,
        isTestnet: true
    },
    '0x5': {
        chainId: '0x5',
        rpcTarget: `https://goerli.infura.io/v3/${import.meta.env.VITE_INFURA_API_KEY}`,
        blockExplorerUrl: `https://goerli.etherscan.io`,
        ticker: `GoerliETH`,
        displayName: `Goerli`,
        isTestnet: true
    }
}

export const Chains: Record<string, Chain> = {
    '0x13881': polygonMumbai,
    '0x5': goerli
}

export const ContractAddresses: Record<'DataCure' | 'Verifier', Record<string, string>> = {
    DataCure:{
        '0x13881': '0x4e214e831c7bb5f4fd3167eed12f62f8c527c55a',
        '0x5': ''
    },
    Verifier: {
        '0x13881': '0x4e214e831c7bb5f4fd3167eed12f62f8c527c55a',
        '0x5': ''
    }
    
}