import { CONSTANTS, PushAPI } from '@pushprotocol/restapi'
import { storeToRefs } from 'pinia'
const { walletClient } = storeToRefs(useWeb3Store())
export const usePush = async () => {
  return await PushAPI.initialize(walletClient.value as any, {
    env: CONSTANTS.ENV.DEV,
  })
}
