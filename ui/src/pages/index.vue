<script setup lang="ts">
import { useAccount } from 'use-wagmi'
import logo from '~/../src/assets/logo/Landing_logo.svg'

defineOptions({
  name: 'IndexPage',
})
const { address, isConnected } = useAccount()

onMounted(() => {
  console.log('mounted')
  if (isConnected.value && address.value && address.value.length) {
    console.log('🚀 ~ file: index.vue:14 ~ onMounted ~ address.value:', address.value)
    console.log('connected')
  }
  else {
    console.log('not connected')
  }
})

onMounted(() => {
  console.log('Test')
})
</script>

<template>
  <div m-auto h-80vh flex flex-col items-center justify-center>
    <img h-40 w-40 lg:max-h-130 lg:max-w-130 md:h-60 md:w-60 :src="logo" alt="logo">
    <div text-primary_font font-tsukimi>
      <div text-5xl font-bold leading-20>
        DataCure Network
      </div>
      <div text-2xl font-semibold leading-9>
        Blockchain Based Health Data Sharing Platform
      </div>
    </div>
  </div>
</template>

<style scoped>
.div-class{
  background: linear-gradient(180deg, #CCECDB 0%, #469DA9 100%);

  }
</style>

<route lang="yaml">
  meta:
    layout: home
  </route>
