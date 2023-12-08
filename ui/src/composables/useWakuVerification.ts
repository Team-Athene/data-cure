import protobuf from 'protobufjs'
import type {
  Waku,
} from '@waku/sdk'
import {
  Protocols,
  createDecoder,
  createEncoder,
  createLightNode,
  waitForRemotePeer,
} from '@waku/sdk'

const ContentTopic = '/your-app/1/wallet/proto'

const WalletMessage = new protobuf.Type('WalletMessage')
  .add(new protobuf.Field('timestamp', 1, 'uint64'))
  .add(new protobuf.Field('address', 2, 'string'))
  .add(new protobuf.Field('proof', 3, 'string'))

export class WakuVerification {
  private waku?: Waku
  public isConnected: boolean = false

  constructor() {
    this.startWaku()
  }

  private async startWaku() {
    this.waku = await createLightNode({ defaultBootstrap: true })
    await this.waku.start()
    await waitForRemotePeer(this.waku, [Protocols.Store])
    this.isConnected = true
  }

  public async sendVerificationMessage(address: string, proof: string) {
    if (!this.waku || !this.waku.lightPush)
      return

    const encoder = createEncoder({ contentTopic: ContentTopic })
    const protoMessage = WalletMessage.create({
      timestamp: Date.now(),
      address,
      proof,
    })
    const serializedMessage = WalletMessage.encode(protoMessage).finish()

    await this.waku.lightPush.send(encoder, { payload: serializedMessage })
  }

  public async retrieveMessages() {
    if (!this.waku || !this.isConnected || !this.waku.store || !this.waku.filter)
      return []

    const decoder = createDecoder(ContentTopic)
    
    // Create the store query
    const storeQuery = this.waku.store.queryGenerator([decoder]);
    console.log("🚀 ~ file: useWakuVerification.ts:57 ~ WakuVerification ~ retrieveMessages ~ storeQuery:", storeQuery)

    const callback = (wakuMessage: any) => {
      if (!wakuMessage.payload)
        return
      const messageObj = WalletMessage.decode(wakuMessage.payload)
      console.log(messageObj)
    }
    const subscription = await this.waku.filter.createSubscription()
    await subscription.subscribe([decoder], callback)
  }
}
