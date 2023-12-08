import { createDecoder, createEncoder } from '@waku/sdk'
import protobuf from 'protobufjs'
import { setupWakuNode } from '../composables/waku'

const contentTopic = '/datacure/1/wallet/proto'

const WalletMessage = new protobuf.Type('WalletMessage')
  .add(new protobuf.Field('timestamp', 1, 'uint64'))
  .add(new protobuf.Field('address', 2, 'string'))
  .add(new protobuf.Field('proof', 3, 'string')) // Proof can be a signature or ZKP

export async function sendMessage(address: string, proof: string): Promise<void> {
  console.log('🚀 ~ file: waku.service.ts:13 ~ sendMessage ~ proof:', proof)
  const wakuNode = await setupWakuNode()
  console.log('🚀 ~ file: waku.service.ts:14 ~ sendMessage ~ wakuNode:', wakuNode)

  if (wakuNode && wakuNode.lightPush) {
    const encoder = createEncoder({
      contentTopic,
      ephemeral: false, // allows messages not be stored on the network
    })
    const protoMessage = WalletMessage.create({
      timestamp: Date.now(),
      address,
      proof,
    })
    const serializedMessage = WalletMessage.encode(protoMessage).finish()

    await wakuNode.lightPush.send(encoder, { payload: serializedMessage })
  }
  // Throw an error if the message could not be sent
  throw new Error('Message could not be sent')
}

export async function receiveMessages(): Promise<void> {
  const wakuNode = await setupWakuNode()
  if (wakuNode && wakuNode.filter) {
    const decoder = createDecoder(contentTopic)
    const callback = (wakuMessage: any) => {
      if (!wakuMessage.payload)
        return
      const messageObj = WalletMessage.decode(wakuMessage.payload)
      console.log(messageObj)
    // Further processing of the message can be done here
    }

    const subscription = await wakuNode.filter.createSubscription()
    await subscription.subscribe([decoder], callback)
  }
  throw new Error('Message could not be received')
}
