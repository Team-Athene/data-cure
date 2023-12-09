<script setup lang="ts">

import {
  SafeAuthPack,
  SafeAuthInitOptions,
} from '@safe-global/auth-kit'



interface ILoginProps {
  type: 'header' | 'register'
}

defineProps<ILoginProps>()

const safeAuthInitOptions: SafeAuthInitOptions = {
  enableLogging: true,
  showWidgetButton: true,
  chainConfig: {
    chainId: '0x13881',
    rpcTarget: `https://rpc-mumbai.matic.today`,
    blockExplorerUrl: `https://mumbai.polygonscan.com`,
    ticker: `MATIC`,
    displayName: `Polygon Mumbai`,
    isTestnet: true


  },
}
const safeAuthPack = shallowRef<SafeAuthPack>(new SafeAuthPack());
const isAuthenticated = ref(false);

onMounted(async () => {
  //const safeAuthPackInit = new SafeAuthPack();
  await safeAuthPack.value.init(safeAuthInitOptions);
  triggerRef(safeAuthPack)
 // safeAuthPack.value = safeAuthPackInit;

})


async function connectWallet() {

  const { eoa, safes } = await safeAuthPack.value!.signIn();
  triggerRef(safeAuthPack)
  console.log("🚀 ~ file: LoginBtn.vue:36 ~ connectWallet ~ eoa:", eoa)
  console.log("🚀 ~ file: LoginBtn.vue:36 ~ connectWallet ~ safes:", safes)

}
async function disconnectWallet() {
  await safeAuthPack.value!.signOut()
  triggerRef(safeAuthPack)
  console.log('disconnected')
}
watch(safeAuthPack, async () => {
 
  if (safeAuthPack.value!.isAuthenticated) {
    isAuthenticated.value = true;
  }else{
    isAuthenticated.value = false;
  }
})

async function onFileChanged($event: Event) {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
     const fileReader = new FileReader()
    fileReader.readAsBinaryString(target.files[0]);
     fileReader.onload = async e => {
      if (e.target) {
        //////
      }
    }
  }
}

// watch(address, async () => {
//   if (address.value?.toLowerCase() === '0x8ed44a4a001660F4Fc4510bd580880e0fca7Ef00'.toLowerCase()) {
//     console.log('🚀 ~ file: LoginBtn.vue:40 ~ watch ~ address.value', address.value)
//     // console.log('🚀 ~ file: LoginBtn.vue:31 ~ watch ~ isWakuConnected.value:', isWakuConnected.value)
//     // sendMessage(address.value, 'Hello from the other side')
//     const res = await sendVerificationMessage(address.value, 'Hello from the other side')
//     console.log('🚀 ~ file: LoginBtn.vue:32 ~ watch ~ res:', res)
//   }
//   if (address.value?.toLowerCase() === '0xD7F49ED088573a8463699A9d7E60B6576411562e'.toLowerCase()) {
//     console.log('🚀 ~ file: LoginBtn.vue:40 ~ watch ~ address.value', address.value)
//     await receiveVerificationMessages()
//   }
// })
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
    <input type="file" @change="onFileChanged($event)"
          accept="application/pdf">
    <ABtn v-if="isAuthenticated" color="primary" @click="disconnectWallet">
      Log Out
    </ABtn>
    <ABtn v-else color="primary" @click="connectWallet">
      Login
    </ABtn>
  </div>
  <div v-if="type === 'register'">
    <!-- <ABtn v-if="isConnected" color="primary" @click="connectWallet">
      Connect Wallet
    </ABtn> -->
  </div>
</template>
<!-- We have two business models here:
1. B2C model for Browser Plugin: Where the users can track their progress in their Lore account and can manage it.
2. B2B model for Website Widget: Specifically for the website, and if no lore account is there, then should be able to create one and manage everything related to that specific organisation from there itself  without the browser plugin.

The main purposes of this project are:
-  -->
