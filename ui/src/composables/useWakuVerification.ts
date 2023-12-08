import { onMounted, ref } from 'vue'
import protobuf from 'protobufjs'
import type {
  Waku,
} from '@waku/sdk'
import {
  createDecoder,
  createEncoder,
  createLightNode,
  waitForRemotePeer,
} from '@waku/sdk'

// Define a content topic specific to your application
const ContentTopic = '/datacure/1/wallet/proto'

// Create a decoder for the content topic
// const decoder = createDecoder(ContentTopic)

// Define a protobuf message structure for wallet verification
const WalletMessage = new protobuf.Type('WalletMessage')
  .add(new protobuf.Field('timestamp', 1, 'uint64'))
  .add(new protobuf.Field('address', 2, 'string'))
  .add(new protobuf.Field('proof', 3, 'string')) // Proof can be a signature or a zero-knowledge proof

// export function useWakuVerification() {
const waku = ref<Waku | undefined>(undefined)
const isWakuConnected = ref(false)

// Function to start and connect the Waku node
async function startWaku() {
  const newWaku = await createLightNode({ defaultBootstrap: true })
  console.log('🚀 ~ file: useWakuVerification.ts:31 ~ startWaku ~ newWaku:', newWaku)
  await newWaku.start()
  waku.value = newWaku
  await waitForRemotePeer(newWaku)

  // await waitForRemotePeer(wakuNode, [
  //   Protocols.LightPush,
  //   Protocols.Filter,
  //   Protocols.Store,
  // ])
  isWakuConnected.value = true
  return newWaku
}

// Call startWaku on component mount
onMounted(() => {
  startWaku()
})

// Function to send verification message
export async function sendVerificationMessage(address: string, proof: string) {
  const wakuNode = await startWaku()
  if (!wakuNode || !wakuNode.lightPush)
    return

  const encoder = createEncoder({ contentTopic: ContentTopic })
  const protoMessage = WalletMessage.create({
    timestamp: Date.now(),
    address,
    proof,
  })
  const serializedMessage = WalletMessage.encode(protoMessage).finish()

  await wakuNode.lightPush.send(encoder, { payload: serializedMessage })
}

export async function receiveVerificationMessages() {
  const wakuNode = await startWaku()
  if (!wakuNode || !wakuNode.filter)
    return

  const decoder = createDecoder(ContentTopic)
  console.log('🚀 ~ file: useWakuVerification.ts:68 ~ receiveVerificationMessages ~ decoder:', decoder)
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

//   return { waku, isWakuConnected, sendVerificationMessage }
// }
