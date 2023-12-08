import lighthouse from '@lighthouse-web3/sdk'

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
