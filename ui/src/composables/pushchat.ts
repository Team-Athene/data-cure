import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { storeToRefs } from "pinia";
const {walletClient} = storeToRefs(useWeb3Store());
export const initPushChat = async () => {
    const userAlice = await PushAPI.initialize(walletClient.value as any, { env: CONSTANTS.ENV.DEV });
    console.log("🚀 ~ file: pushchat.ts:6 ~ initPushChat ~ userAlice:", userAlice)
}
