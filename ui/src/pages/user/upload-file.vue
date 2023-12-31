<script setup lang="ts">
import {
getAllKeys,
publishRecord,
uploadEncrypted,
uploadText,
} from '@lighthouse-web3/sdk';
import { migrateS3, retriveJWT } from '~/services/fetch';
import {
getUserTokenDetails,
getUserTokenFromEmailHash,
uploadData,
} from '~/services/web3.service';
import { FileData, HealthData } from '~/utils/interfaces';

const submitFile = async (value: {
  data: HealthData
  files: FileData[]
  s3Data: {
    bucket: string
    region: string
    access: string
    secret: string
  }
  isMigrated: string
}) => {
  try {
    console.log(
      '🚀 ~ file: upload-file.vue:13 ~ submitFile ~ value',
      value.data,
    )

    const token = await getUserTokenFromEmailHash({
      email: value.data.email,
    })
    if (token === 0) {
      console.error('No token found.')
      return
    }

    const ipnsName = await getUserTokenDetails({
      userToken: token,
    })
    console.log(
      '🚀 ~ file: upload-file.vue:22 ~ submitFile ~ ipnsName:',
      ipnsName,
    )
    if (value.files[0]?.file === null && value.s3Data.bucket === '') {
      console.error('No file selected. Or no bucket selected.')
      return
    }
    const apiKey = import.meta.env.VITE_LIGHTHOUSE_API_KEY
    const publicKey = import.meta.env.VITE_LIGHTHOUSE_PUBLIC_KEY
    const allKeys = (await getAllKeys(apiKey)).data
    const { ipnsId, cid } = allKeys.find(
      (key) => key.ipnsName === ipnsName,
    ) as any
    console.log('🚀 ~ file: upload-file.vue:58 ~ ipnsId:', ipnsId)
    const { data } = await useFetch(
      `https://gateway.lighthouse.storage/ipns/${ipnsId}`,
    ).json()
    const jwt = await retriveJWT()
    let fileOutput:any = undefined
    if (value.isMigrated === 'file') {
      fileOutput = await uploadEncrypted(
        value.files,
        apiKey,
        publicKey,
        jwt,
        (data) => {
          console.log('🚀 ~ file: upload-file.vue:32 ~ submitFile ~ data', data)
        },
      )
      console.log('Encrypted File Status:', fileOutput.data[0])
    } else {
      fileOutput = await migrateS3({
        accessKeyId: value.s3Data.access,
        bucket: value.s3Data.bucket,
        region: value.s3Data.region,
        key: value.s3Data.secret,
      })
    }
    const files = [
      ...data.value.files,
      {
        hash: fileOutput.length ? fileOutput : fileOutput.data[0].Hash,
        reportType: value.data.reportType,
      },
    ]
    const user = JSON.stringify(
      {
        user: data.value.user,
        files,
      },
      null,
      2,
    )
    console.log('🚀 ~ file: upload-file.vue:44 ~ submitFile ~ user:', user)

    const userOutput = await uploadText(user, apiKey, 'user')
    console.log(
      '🚀 ~ file: upload-file.vue:48 ~ submitFile ~ userOutput:',
      userOutput.data,
    )

    const pubResponse = await publishRecord(
      userOutput.data.Hash,
      ipnsName,
      apiKey,
    )
    console.log(pubResponse.data)
    if (value.isMigrated === 'file') {
      const hash = await uploadData({
        userToken: token,
        cid: userOutput.data.Hash,
        list: value.data.listForSale,
      })
      console.log('🚀 ~ file: upload-file.vue:60 ~ submitFile ~ hash:', hash)
    }
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
