<script setup lang="ts">
import { HealthData, FileData } from '~/utils/interfaces';

import {generateKey,uploadEncrypted} from '@lighthouse-web3/sdk';

const submitFile = async (value: {data: HealthData, files: FileData[]}) => {
  console.log("🚀 ~ file: upload-file.vue:32 ~ submitFile ~ value", value)
  const  { address,signature} = (await useSignMessage()) as { signature: string; address: string;}
  const apiKey = import.meta.env.VITE_LIGHTHOUSE_API_KEY
  // const {ipnsName,ipnsId} = (await generateKey(apiKey)).data

  const output = await uploadEncrypted(
        value.files[0].file,
        apiKey,
        address,
        signature,
        (data)=>{console.log("🚀 ~ file: upload-file.vue:32 ~ submitFile ~ data", data)},
      )
      console.log("Encrypted File Status:", output)
  
}
</script>

<template>
   <div>
    <div class="font-semibold text-xl mb-10">
      File Upload
    </div>
    <FileForm type="add" @submit="submitFile" />
   </div>
</template>

<style scoped>
</style>
