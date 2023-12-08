import { UseWagmiPlugin, createConfig, mainnet } from 'use-wagmi'
import { createPublicClient, http } from 'viem'
import type { UserModule } from '~/types'

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
})
export const install: UserModule = ({ app, isClient }) => {
  if (isClient)
    app.use(UseWagmiPlugin, config)
}
