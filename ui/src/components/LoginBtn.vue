<script setup lang="ts">
import { NETWORKS, Chains, ContractAddresses, ContractABIs } from '~/utils/constants'
//import {prepareWriteDataCure} from '@datacure/abi/src';
import { hashEmail } from "~/services/email-hash.service";
import {
  SafeAuthPack,
  SafeAuthInitOptions,
} from '@safe-global/auth-kit'
import { storeToRefs } from 'pinia';
import { createPublicClient, createWalletClient, custom, getContract, http } from "viem";
import { StripePack } from "@safe-global/onramp-kit";
interface ILoginProps {
  type: 'header' | 'register'
}
defineProps<ILoginProps>()

const { userInfo, walletClient, contracts, publicClient } = storeToRefs(useWeb3Store())
const { $reset: userReset } = useWeb3Store();

const router = useRouter();

const selectedNetwork = ref(userInfo.value.network)
//console.log(Object.keys(NETWORKS));

const netWorks = Object.keys(NETWORKS).map((a) => {
  return { text: NETWORKS[a].displayName, value: a };
})

const safeAuthPack = shallowRef<SafeAuthPack>(new SafeAuthPack());
const isAuthenticated = ref(false);

onMounted(async () => {
  //const safeAuthPackInit = new SafeAuthPack();
  const safeAuthInitOptions: SafeAuthInitOptions = {
    enableLogging: false,
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
  await initSafeAuthPack(safeAuthInitOptions);

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
async function initSafeAuthPack(safeAuthInitOptions: SafeAuthInitOptions) {
  await safeAuthPack.value.init(safeAuthInitOptions);
  triggerRef(safeAuthPack);
  safeAuthPack.value?.subscribe('chainChanged', (eventData) => {
    console.log('safeAuthPack:chainChanged', eventData)
    if (NETWORKS[eventData]) {
      userInfo.value.network = eventData;
      selectedNetwork.value = eventData;

    } else {
      userInfo.value.network = 'none';
      selectedNetwork.value = 'none';
    }
  }

  );
  safeAuthPack.value?.subscribe('accountsChanged', (eventData) => {
    triggerRef(safeAuthPack)
  });


}
watch(safeAuthPack, async () => {

  if (safeAuthPack.value!.isAuthenticated) {

    isAuthenticated.value = true;
    userInfo.value.walletAddress = await safeAuthPack.value!.getAddress();
    let { email } = await safeAuthPack.value!.getUserInfo();
    userInfo.value.email = email;
    walletClient.value = createWalletClient({
      chain: Chains[userInfo.value.network],
      account: userInfo.value.walletAddress as any,
      transport: custom(safeAuthPack.value.getProvider() as any)
    })
    publicClient.value = createPublicClient({
      chain: Chains[userInfo.value.network],
      transport: http()
    })
    contracts.value = {
      DataCure: getContract({
        address: ContractAddresses.DataCure[userInfo.value.network] as any,
        publicClient: publicClient.value,
        walletClient: walletClient.value,
        abi: ContractABIs.DataCure,
      }) as any,
      DataCureAccess: getContract({
        address: ContractAddresses.DataCureAccess[userInfo.value.network] as any,
        publicClient: publicClient.value,
        walletClient: walletClient.value,
        abi: ContractABIs.DataCureAccess,
      }) as any
    }
    let hashem = hashEmail(userInfo.value.email);
    let result = await contracts.value?.DataCure.read.userToken([hashem])
    if (result == 0) {
      router.push('/registration')
    } else {
      userInfo.value.SbtId = result;
    }

  } else {
    userReset();
    isAuthenticated.value = false;
  }

})

watch(selectedNetwork, async () => {



  if (walletClient.value && selectedNetwork.value != 'none' && userInfo.value.network != selectedNetwork.value) {
    userInfo.value.network = selectedNetwork.value;
    await walletClient.value.switchChain({ id: Chains[userInfo.value.network].id })
    triggerRef(safeAuthPack)
  }
})

async function onRamp() {
  const stripePack = new StripePack({
    // Get public key from Stripe: https://dashboard.stripe.com/register
    stripePublicKey:
      'pk_test_51OLZcqSEBFafxyqoJ2G2vkq22RBoLHj8BXcmZG2kMlUHvYu1F3kne1QSULZ13lFuhA0gVCazfwR096exye6rpFF200A49mrdOH',
    // Deploy your own server: https://github.com/5afe/aa-stripe-service
    onRampBackendUrl: 'http://localhost:3010'
  })
  await stripePack.init()
  const sessionData = await stripePack.open({
    element: '#stripe-root',
    theme: 'light',
    defaultOptions: {
      transaction_details: {
       // wallet_address: userInfo.value.walletAddress,
        //lock_wallet_address: true,
      },
      customer_information: {
      //  email: '8404.john.smith@example.com',
       // phone:'+18004444444',
        
      }
    }
  })
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
  <div v-if="type === 'header'">
    <ABtn class="rounded-full px-6 font-bold" color="primary" @click="onRamp()">
      Safe OnRamp
    </ABtn>
    <ABtn v-if="isAuthenticated" :color="selectedNetwork == 'none' ? 'danger' : 'info'"
      class="rounded-full px-6 font-bold mr-4 w-36">
      <AMenu trigger="hover">
        <AList v-model="selectedNetwork" class="[--a-list-gap:0.25rem]" :items="netWorks" />
      </AMenu>
      {{ selectedNetwork == 'none' ? 'Wrong NetWork' : NETWORKS[selectedNetwork].displayName }}
      <ALoadingIcon icon="i-bx-bxs-component" />
    </ABtn>
    <ABtn v-if="isAuthenticated" class="rounded-full px-6 font-bold" color="primary" @click="disconnectWallet()">
      Logout {{ userInfo.walletAddress?.slice(0, 6) }}...{{ userInfo.walletAddress?.slice(-4) }}
      <ALoadingIcon icon="i-bx-log-out" />
    </ABtn>
    <ABtn v-else class="rounded-full px-6 font-bold" color="primary" @click="connectWallet()">
      Login
      <ALoadingIcon icon="i-bx-log-in" />
    </ABtn>
  </div>
  <div v-if="type === 'register'">
    <ABtn class="rounded-full w-72 mt-4 mb-6 font-bold" v-if="!isAuthenticated" color="primary" @click="connectWallet()">
      Connect Wallet <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 240">
        <path fill="#E17726" d="M250.066 0L140.219 81.279l20.427-47.9z" />
        <path fill="#E27625"
          d="m6.191.096l89.181 33.289l19.396 48.528zM205.86 172.858l48.551.924l-16.968 57.642l-59.243-16.311zm-155.721 0l27.557 42.255l-59.143 16.312l-16.865-57.643z" />
        <path fill="#E27625"
          d="m112.131 69.552l1.984 64.083l-59.371-2.701l16.888-25.478l.214-.245zm31.123-.715l40.9 36.376l.212.244l16.888 25.478l-59.358 2.7zM79.435 173.044l32.418 25.259l-37.658 18.181zm97.136-.004l5.131 43.445l-37.553-18.184z" />
        <path fill="#D5BFB2"
          d="m144.978 195.922l38.107 18.452l-35.447 16.846l.368-11.134zm-33.967.008l-2.909 23.974l.239 11.303l-35.53-16.833z" />
        <path fill="#233447" d="m100.007 141.999l9.958 20.928l-33.903-9.932zm55.985.002l24.058 10.994l-34.014 9.929z" />
        <path fill="#CC6228"
          d="m82.026 172.83l-5.48 45.04l-29.373-44.055zm91.95.001l34.854.984l-29.483 44.057zm28.136-44.444l-25.365 25.851l-19.557-8.937l-9.363 19.684l-6.138-33.849zm-148.237 0l60.435 2.749l-6.139 33.849l-9.365-19.681l-19.453 8.935z" />
        <path fill="#E27525"
          d="m52.166 123.082l28.698 29.121l.994 28.749zm151.697-.052l-29.746 57.973l1.12-28.8zm-90.956 1.826l1.155 7.27l2.854 18.111l-1.835 55.625l-8.675-44.685l-.003-.462zm30.171-.101l6.521 35.96l-.003.462l-8.697 44.797l-.344-11.205l-1.357-44.862z" />
        <path fill="#F5841F"
          d="m177.788 151.046l-.971 24.978l-30.274 23.587l-6.12-4.324l6.86-35.335zm-99.471 0l30.399 8.906l6.86 35.335l-6.12 4.324l-30.275-23.589z" />
        <path fill="#C0AC9D"
          d="m67.018 208.858l38.732 18.352l-.164-7.837l3.241-2.845h38.334l3.358 2.835l-.248 7.831l38.487-18.29l-18.728 15.476l-22.645 15.553h-38.869l-22.63-15.617z" />
        <path fill="#161616"
          d="m142.204 193.479l5.476 3.869l3.209 25.604l-4.644-3.921h-36.476l-4.556 4l3.104-25.681l5.478-3.871z" />
        <path fill="#763E1A"
          d="M242.814 2.25L256 41.807l-8.235 39.997l5.864 4.523l-7.935 6.054l5.964 4.606l-7.897 7.191l4.848 3.511l-12.866 15.026l-52.77-15.365l-.457-.245l-38.027-32.078zm-229.628 0l98.326 72.777l-38.028 32.078l-.457.245l-52.77 15.365l-12.866-15.026l4.844-3.508l-7.892-7.194l5.952-4.601l-8.054-6.071l6.085-4.526L0 41.809z" />
        <path fill="#F5841F"
          d="m180.392 103.99l55.913 16.279l18.165 55.986h-47.924l-33.02.416l24.014-46.808zm-104.784 0l-17.151 25.873l24.017 46.808l-33.005-.416H1.631l18.063-55.985zm87.776-70.878l-15.639 42.239l-3.319 57.06l-1.27 17.885l-.101 45.688h-30.111l-.098-45.602l-1.274-17.986l-3.32-57.045l-15.637-42.239z" />
      </svg>
    </ABtn>
    <ABtn v-else class="rounded-full w-72 mt-4 mb-6 font-bold" color="warning" @click="connectWallet()">
      Disconnect
      <!-- {{ address?.slice(0, 6) }}...{{ address?.slice(-4) }} -->
    </ABtn>
  </div>
</template>
