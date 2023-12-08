<script setup lang="ts">
import { useAccount, useConnect, useDisconnect } from 'use-wagmi'
import { InjectedConnector } from 'use-wagmi/connectors/injected'

interface ILoginProps {
  type: 'header' | 'register'
}

defineProps<ILoginProps>()

const { address, isConnected } = useAccount()
const { disconnect } = useDisconnect()
const router = useRouter()

const { connect } = useConnect({
  connector: new InjectedConnector(),
})


async function connectWallet() {
  await connect()
}

async function disconnectWallet() {
  await disconnect()
}

watch(address, async () => {

  if(address.value) {
    // FIXME: Get the user data from the blockchain and then do the route
    router.push('/user')
  }
  console.log("🚀 ~ file: LoginBtn.vue:35 ~ watch ~ address.value?.length:", address.value?.length)
  if (!address.value?.length) {
    router.push('/')
  }

  if (address.value?.toLowerCase() === '0x8ed44a4a001660F4Fc4510bd580880e0fca7Ef00'.toLowerCase()) {
    const res = await sendVerificationMessage(address.value, 'Hello from the other side')
    console.log('🚀 ~ file: LoginBtn.vue:32 ~ watch ~ res:', res)
  }
  if (address.value?.toLowerCase() === '0xD7F49ED088573a8463699A9d7E60B6576411562e'.toLowerCase()) {
    await receiveVerificationMessages()
  }
})
</script>

<template>
  <div v-if="type === 'header'">
    <ABtn v-if="isConnected" color="primary" @click="disconnectWallet">
      Logout
    </ABtn>
    <ABtn v-else font-bold px-6 rounded-full color="primary" @click="connectWallet">
      Login
      <ALoadingIcon
        icon="i-bx-log-in"
      />
    </ABtn>
  </div>
  <div v-if="type === 'register'">
    <ABtn v-if="isConnected" color="primary" @click="connectWallet">
      Connect Wallet
    </ABtn>
  </div>
</template>
