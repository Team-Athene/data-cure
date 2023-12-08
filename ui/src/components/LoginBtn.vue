<script setup lang="ts">
import { useAccount, useConnect, useDisconnect } from 'use-wagmi'
import { InjectedConnector } from 'use-wagmi/connectors/injected'

interface ILoginProps {
  type: 'header' | 'register'
}

defineProps<ILoginProps>()

const { address, isConnected } = useAccount()
const { connect } = useConnect({
  connector: new InjectedConnector(),
})
const { disconnect } = useDisconnect()
// const { isWakuConnected, sendVerificationMessage } = useWakuVerification()

async function connectWallet() {
  await connect()
  console.log('connected')
}
async function disconnectWallet() {
  await disconnect()
  console.log('disconnected')
}
watch(address, async () => {
  if (address.value?.toLowerCase() === '0x8ed44a4a001660F4Fc4510bd580880e0fca7Ef00'.toLowerCase()) {
    console.log('🚀 ~ file: LoginBtn.vue:40 ~ watch ~ address.value', address.value)
    // console.log('🚀 ~ file: LoginBtn.vue:31 ~ watch ~ isWakuConnected.value:', isWakuConnected.value)
    // sendMessage(address.value, 'Hello from the other side')
    const res = await sendVerificationMessage(address.value, 'Hello from the other side')
    console.log('🚀 ~ file: LoginBtn.vue:32 ~ watch ~ res:', res)
  }
  if (address.value?.toLowerCase() === '0xD7F49ED088573a8463699A9d7E60B6576411562e'.toLowerCase()) {
    console.log('🚀 ~ file: LoginBtn.vue:40 ~ watch ~ address.value', address.value)
    await receiveVerificationMessages()
  }
})
</script>

<template>
  <!-- <div v-if="isConnected">
    Connected to {{ address }}
    <ABtn color="danger" @click="disconnect">
      Disconnect
    </ABtn>
  </div>
  <ABtn v-else color="success" @click="connect">
    Connect Wallet
  </ABtn> -->
  <div v-if="type === 'header'">
    <ABtn v-if="isConnected" color="primary" @click="disconnectWallet">
      Logout
    </ABtn>
    <ABtn v-else color="primary" @click="connectWallet">
      Login
    </ABtn>
  </div>
  <div v-if="type === 'register'">
    <ABtn v-if="isConnected" color="primary" @click="connectWallet">
      Connect Wallet
    </ABtn>
  </div>
</template>
<!-- We have two business models here:
1. B2C model for Browser Plugin: Where the users can track their progress in their Lore account and can manage it.
2. B2B model for Website Widget: Specifically for the website, and if no lore account is there, then should be able to create one and manage everything related to that specific organisation from there itself  without the browser plugin.

The main purposes of this project are:
-  -->
