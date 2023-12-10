import { getAuthMessage, getJWT } from '@lighthouse-web3/kavach'
import {
  generateKey,
  publishRecord,
  upload,
  uploadEncrypted,
} from '@lighthouse-web3/sdk'
import { IPNSDto } from 'app/LHFile/dto/upload.dto'
import { privateKeyToAccount } from 'viem/accounts'
import { LIGHTHOUSE, WALLET } from './environment'

export class LightHouseService {
  key: string
  constructor(key: string) {
    this.key = key
  }

  // List items from a bucket
  async upload(sourcePath: string) {
    return await upload(sourcePath, this.key)
  }
}

export const uploadEncryptedFile = async (sourcePath: string) => {
  const signedMessage = (await retriveJWT()).jwt as string
  const response = await uploadEncrypted(
    sourcePath,
    LIGHTHOUSE.API_KEY,
    WALLET.PUBLIC_KEY,
    signedMessage,
  )
  console.log(response)
  return response
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
  const { ipnsName, ipnsId } = (await generateKey(LIGHTHOUSE.API_KEY)).data
  return { ipnsName, ipnsId }
}

export const publishIPNSRecord = async (ipnsData: IPNSDto) => {
  return await publishRecord(
    ipnsData.userCid,
    ipnsData.ipnsName,
    LIGHTHOUSE.API_KEY,
  )
}
