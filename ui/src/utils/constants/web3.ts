import { Chain, goerli, polygonMumbai } from 'viem/chains'
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
    rpcTarget: `https://goerli.infura.io/v3/${
      import.meta.env.VITE_INFURA_API_KEY
    }`,
    blockExplorerUrl: `https://goerli.etherscan.io`,
    ticker: `GoerliETH`,
    displayName: `Goerli`,
    isTestnet: true,
  },
}

export const Chains: Record<string, Chain> = {
  '0x13881': polygonMumbai,
  '0x5': goerli,
}

export const ContractAddresses: Record<
  'DataCure' | 'Verifier' | 'DataCureAccess',
  Record<string, string>
> = {
  DataCure: {
    '0x13881': '0x9a0dac23a2112ad1264514f77a9d3ac7ec94515f',
    '0x5': '',
  },
  Verifier: {
    '0x13881': '0xcc62502e49ec03936035f2b04f4f3da7542b8313',
    '0x5': '',
  },
  DataCureAccess: {
    '0x13881': '0xf24d431e0886b9472ec81e1577fbd17f3fac4eb7',
    '0x5': '',
  },
}

export const ContractABIs: Record<'DataCure' | 'DataCureAccess', any[]> = {
  DataCure: DataCureABI,
  DataCureAccess: DataCureAccessABI,
}
