import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { polygonMumbai } from 'viem/chains'
import { WALLET } from './environment'

const account = privateKeyToAccount(WALLET.PRIVATE_KEY as any) 

const client = createWalletClient({
  account,
  chain: polygonMumbai,
  transport: http()
})
