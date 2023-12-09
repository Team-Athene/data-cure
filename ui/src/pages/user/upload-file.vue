<script setup lang="ts">
import { HealthData, FileData } from '~/utils/interfaces'
import { retriveJWT } from '~/services/fetch'

import {
  generateKey,
  uploadEncrypted,
  uploadText,
  publishRecord,
} from '@lighthouse-web3/sdk'

const submitFile = async (value: { data: HealthData; files: FileData[] }) => {
  try {
    if (value.files[0]?.file === null) {
      console.error('No file selected.')
      return
    }
    const apiKey = import.meta.env.VITE_LIGHTHOUSE_API_KEY
    const publicKey = import.meta.env.VITE_LIGHTHOUSE_PUBLIC_KEY

    const jwt = await retriveJWT()
    const fileOutput = await uploadEncrypted(
      value.files,
      apiKey,
      publicKey,
      jwt,
      (data) => {
        console.log('🚀 ~ file: upload-file.vue:32 ~ submitFile ~ data', data)
      },
    )
    console.log('Encrypted File Status:', fileOutput.data[0])

    const user = JSON.stringify(
      {
        user: value.data,
        files: [fileOutput.data[0]],
      },
      null,
      2,
    )
    console.log("🚀 ~ file: upload-file.vue:44 ~ submitFile ~ user:", user)

    const userOutput = await uploadText(
      user,
      apiKey,
      'user'
    )
    console.log(
      '🚀 ~ file: upload-file.vue:48 ~ submitFile ~ userOutput:',
      userOutput.data,
    )

    // const { ipnsName, ipnsId } = (await generateKey(apiKey)).data
    // const pubResponse = await lighthouse.publishRecord(
    //   userOutput.data,
    //   ipnsName,
    //   apiKey,
    // )
    // console.log(pubResponse.data)
  } catch (error) {
    console.log('🚀 ~ file: upload-file.vue:15 ~ submitFile ~ error:', error)
  }
}
</script>

<template>
  <div>
    <div class="font-semibold text-xl mb-10">File Upload</div>
    <FileForm type="add" @submit="submitFile" />
  </div>
</template>

<style scoped></style>
