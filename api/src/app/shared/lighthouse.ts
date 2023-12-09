import { generateKey,publishRecord } from '@lighthouse-web3/sdk'
import { getAuthMessage, getJWT } from '@lighthouse-web3/kavach'
import { privateKeyToAccount } from 'viem/accounts'
import { LIGHTHOUSE, WALLET } from './environment'

export class LightHouseService {
  key: string
  constructor(key: string) {
    this.key = key
  }

  // List items from a bucket
  async upload(file: any) {
    // return await lighthouse.uploadEncrypted(file, this.key)
  }

  // async
}

export const retriveJWT = async () => {
  const account = privateKeyToAccount(WALLET.PRIVATE_KEY as any)
  console.log('🚀 ~ file: lighthouse.ts:22 ~ retriveJWT ~ account:', account)
  const authMessage = await getAuthMessage(account.address)
  const signedMessage = await account.signMessage(authMessage)
  const { JWT, error } = await getJWT(account.address, signedMessage)
  console.log('🚀 ~ file: lighthouse.ts:25 ~ signAuthMessage ~ JWT:', JWT)
  return { jwt: JWT }
}

export const generateIPNS = async () => {
  const { ipnsName } = (await generateKey(LIGHTHOUSE.API_KEY)).data
  return { ipnsName }
}


export const publishIPNSRecord = async (userCid: string) => {
  const { ipnsName } = await generateIPNS()
  await publishRecord( userCid,ipnsName,LIGHTHOUSE.API_KEY)
  return { ipnsName }
}
