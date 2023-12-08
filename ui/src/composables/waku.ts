import type { Waku } from '@waku/sdk'
import { Protocols, createLightNode, waitForRemotePeer } from '@waku/sdk'

export async function setupWakuNode(): Promise<Waku> {
  const wakuNode = await createLightNode({ defaultBootstrap: true })

  await wakuNode.start()

  await waitForRemotePeer(wakuNode, [
    Protocols.LightPush,
    Protocols.Filter,
    Protocols.Store,
  ])

  return wakuNode
}
