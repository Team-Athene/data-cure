import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";

const initPushChat = async () => {
    const userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });
}