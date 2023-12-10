import { Chain, goerli, polygonMumbai, scrollSepolia } from 'viem/chains'
import { abi as DataCureABI } from '../../../../smart-contract/artifacts/contracts/DataCure.sol/DataCure.json'
import { abi as DataCureAccessABI } from '../../../../smart-contract/artifacts/contracts/DataCureAccess.sol/DataCureAccess.json'
type Network = {
    chainId: string
    rpcTarget: string
    blockExplorerUrl: string
    ticker: string
    displayName: string
    isTestnet: boolean
}

export const NETWORKS: Record<string, Network> = {
    '0x13881': {
        chainId: '0x13881',
        rpcTarget: `https://rpc-mumbai.matic.today`,
        blockExplorerUrl: `https://mumbai.polygonscan.com`,
        ticker: `MATIC`,
        displayName: `Polygon Mumbai`,
        isTestnet: true,
    },
    '0x5': {
        chainId: '0x5',
        rpcTarget: `https://goerli.infura.io/v3/${import.meta.env.VITE_INFURA_API_KEY
            }`,
        blockExplorerUrl: `https://goerli.etherscan.io`,
        ticker: `GoerliETH`,
        displayName: `Goerli`,
        isTestnet: true,
    },
    '0x8274f': {
        chainId: '0x8274f',
        rpcTarget: `https://sepolia-rpc.scroll.io`,
        blockExplorerUrl: `https://sepolia.scrollscan.com`,
        ticker: `ETH`,
        displayName: `Scroll Sepolia`,
        isTestnet: true,
    },
}

export const Chains: Record<string, Chain> = {
    '0x13881': polygonMumbai,
    '0x5': goerli,
    '0x8274f': scrollSepolia,
}

export const ContractAddresses: Record<'DataCure' | 'Verifier' | 'DataCureAccess', Record<string, string>> = {
    DataCure: {
        '0x13881': '0x17716ed3b8baa0ece2250e0b6aeb71b958a0cdbc',
        '0x5': '0xf96eb0819f3960c876bf62bdfe81ee0241d7f07b',
        '0x8274f': ''
    },
    Verifier: {
        '0x13881': '0xd6610166c6c04691635bd93d328f0e79b3588da5',
        '0x5': '',
        '0x8274f': '0xabf20435398cf13910f44aa3b914faa82a93eb7c'
    },
    DataCureAccess: {
        '0x13881': '0x23573e6966a1f0c16b250b6ad59feec5be16fff5',
        '0x5': '',
        '0x8274f': '0x389d34442b3cc1efa55ca3ecbafb175d54b38c18'
    }

}

export const ContractABIs: Record<'DataCure' | 'DataCureAccess', any[]> = {
    DataCure: DataCureABI,
    DataCureAccess: DataCureAccessABI,
}
