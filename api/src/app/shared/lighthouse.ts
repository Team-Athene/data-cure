import { generateKey,publishRecord,uploadEncrypted,upload } from '@lighthouse-web3/sdk'
import { getAuthMessage, getJWT } from '@lighthouse-web3/kavach'
import { privateKeyToAccount } from 'viem/accounts'
import { LIGHTHOUSE, WALLET } from './environment'
import { IPNSDto } from 'app/LHFile/dto/upload.dto'

export class LightHouseService {
  key: string
  constructor(key: string) {
    this.key = key
  }

  // List items from a bucket
  async upload(file: any[]) {
    console.log("🚀 ~ file: lighthouse.ts:17 ~ LightHouseService ~ upload ~ file[0]:", file[0])
    const sourcePath = URL.createObjectURL(file[0]);
    console.log("🚀 ~ file: lighthouse.ts:18 ~ LightHouseService ~ upload ~ sourcePath:", sourcePath)
    return await upload(sourcePath, this.key)
  }

  // async
}

export const uploadEncryptedFile = async (file: any) => {}



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


export const publishIPNSRecord = async (ipnsData:IPNSDto) => {
  return await publishRecord( ipnsData.userCid,ipnsData.ipnsName,LIGHTHOUSE.API_KEY)
}


