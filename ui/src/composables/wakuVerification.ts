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
import { MessageData } from '~/utils/interfaces';

const ContentTopic = '/datacure/1/wallet/proto'
import { storeToRefs } from 'pinia'

export class useWakuVerification {
  public waku?: Waku
  public isConnected: boolean = false

  public WalletMessage = new protobuf.Type('WalletMessage')
    .add(new protobuf.Field('timestamp', 1, 'uint64'))
    .add(new protobuf.Field('fileCid', 2, 'string'))
    .add(new protobuf.Field('fileName', 3, 'string'))
    .add(new protobuf.Field('requestedUser', 4, 'string'))
    .add(new protobuf.Field('toAddress', 5, 'string'))
    .add(new protobuf.Field('reportType', 6, 'string'))
    .add(new protobuf.Field('focusArea', 7, 'string'))

  constructor() {
    this.startWaku()
  }

  private async startWaku() {
    this.waku = await createLightNode({ defaultBootstrap: true })
    await this.waku.start()
    await waitForRemotePeer(this.waku, [Protocols.Filter, Protocols.LightPush])
    this.isConnected = true
  }

  public async sendVerificationMessage(data: MessageData ) {
    if (!this.waku || !this.waku.lightPush)
      return

    const encoder = createEncoder({ contentTopic: ContentTopic })
    const protoMessage = this.WalletMessage.create(data)
    const serializedMessage = this.WalletMessage.encode(protoMessage).finish()

    await this.waku.lightPush.send(encoder, { payload: serializedMessage })
  }

  public async retrieveMessages() {
    if (!this.waku || !this.isConnected || !this.waku.filter)
      return []

    const decoder = createDecoder(ContentTopic)
    const callback = (wakuMessage: any) => {
      if (!wakuMessage.payload)
        return

      const { messages } = storeToRefs(useWakuStore())
      const messageValue = this.WalletMessage.decode(wakuMessage.payload)
      console.log("🚀 ~ file: WakuVerification.ts:62 ~ useWakuVerification ~ callback ~ messageValue:", messageValue)
      return messageValue
      messages.value.push(messageValue)
    }
    const subscription = await this.waku.filter.createSubscription()
    await subscription.subscribe([decoder], callback)
  }
}
