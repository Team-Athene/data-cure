<script setup lang="ts">
import {
  AGE_OPTIONS,
  BLOOD_GROUP_OPTIONS,
  ETHNICITY_OPTIONS,
  GENDER_OPTIONS,
} from '~/utils/constants'
import logo from '~/../src/assets/logo/Logo.svg'
import { storeToRefs } from 'pinia';
import { extractSignature, appId } from "~/services/anon-aadhaar.service";
import { hashEmail } from "~/services/email-hash.service";
import { generateIPNS, publishIPNSRecord } from '~/services/fetch';
import {
  uploadText,
} from '@lighthouse-web3/sdk'
import {
  extractWitness,
  splitToWords,
  exportCallDataGroth16
} from 'anon-aadhaar-pcd'

const aadharFile = ref<Buffer>()
const btnLoading = ref(false)

const { userInfo, contracts, publicClient } = storeToRefs(useWeb3Store())


const fileData = reactive({
  aadharPassword: '',
  age: '',
  gender: '',
  bloodGroup: '',
  ethnicity: '',
  aadharFile: ''
})

const alertData = ref({ type: 0, text: '' });



async function onFileChanged($event: Event) {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    const fileReader = new FileReader()
    fileReader.readAsBinaryString(target.files[0]);
    fileReader.onload = async e => {
      if (e.target) {
        aadharFile.value = Buffer.from(e.target.result as string, 'binary')
        const { signature } = extractSignature(
          aadharFile.value
        )

        if (signature != '') {
          alertData.value = { type: 2, text: 'Signature Found!!!' };
        } else {
          alertData.value = { type: 1, text: 'Signature Not Found!!!' };
        }


      }
    }
  } else {
    alertData.value = { type: 0, text: '' };
  }
}
function addZeros(str:string, length:number) {
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
}
async function checkPDF() {
  alertData.value = { type: 0, text: '' };
  btnLoading.value = true;
  // try {
  //   await provePDF(aadharFile.value!, fileData.aadharPassword)
   
  //   alertData.value = { type: 2, text: 'Valid proof!!!' };
  // } catch (error) {
  //   alertData.value = { type: 1, text: 'Invalid proof!!!' };
  //   return;
  // }
  try {
     const userData = {
      age: fileData.age,
      gender: fileData.gender,
      bloodGroup: fileData.bloodGroup,
      ethnicity: fileData.ethnicity,
      emailHash: hashEmail(userInfo.value.email)
    }
    const ipnsName = await generateIPNS();
    const data = JSON.stringify(
      {
        user: userData,
        files: [],
      },
      null,
      2,
    )
    const userOutput = await uploadText(
      data,
      import.meta.env.VITE_LIGHTHOUSE_API_KEY,
      'user'
    )
    console.log(userOutput);
    
    await publishIPNSRecord(ipnsName, userOutput.data.Hash);
     const inputs = await extractWitness(aadharFile.value!, fileData.aadharPassword)

     if (inputs instanceof Error){
      alertData.value = { type: 1, text: inputs.message };
     }else{

      const input = {
        signature: splitToWords(inputs.sigBigInt, BigInt(64), BigInt(32)),
        modulus: splitToWords(inputs.modulusBigInt, BigInt(64), BigInt(32)),
        base_message: splitToWords(inputs.msgBigInt, BigInt(64), BigInt(32)),
        app_id: appId.toString(),
      }
      const  { a, b, c, Input } = await exportCallDataGroth16(
        input,
        `https://data-cure-imp.s3.ap-south-1.amazonaws.com/main.wasm`,
        `https://data-cure-imp.s3.ap-south-1.amazonaws.com/circuit_final.zkey`,
      )
      console.log(a);
      console.log(contracts.value?.DataCure);
      
      let hash = await contracts.value?.DataCure.write.safeMint([userData.emailHash,a,b,c,Input, `0x${addZeros(ipnsName, 64)}`]);
      console.log(hash);
      const transaction = await publicClient.value!.waitForTransactionReceipt(
        { hash }
      )
      console.log(transaction);
     }
      
  } catch (error) {
    console.log(error);
    
    alertData.value = { type: 1, text: 'Something went wrong!!!' };
  }
  btnLoading.value = false;
}
</script>

<template>
  <div class="main-register-div pt-10">
    <div class="w-full max-w-[1000px] m-auto px-8 py-12">
      <img h-20 w-20 m-auto :src="logo" alt="logo">
      <div text-xl font-bold font-tsukimi mb-6>
        DataCure Protocol
      </div>
      <div text-lg font-bold my-4>
        Register Your Profile
      </div>
      <div text-lg font-bold my-4>
        Wallet Address: <span font-medium>{{ userInfo.walletAddress }}</span>
      </div>
      <div grid grid-cols-2 gap-x-4 text-left>
        <ASelect class="my-2" label="Age" placeholder="Select Age" v-model="fileData.age" :options="AGE_OPTIONS" />
        <ASelect class="my-2" label="Gender" placeholder="Select Gender" v-model="fileData.gender"
          :options="GENDER_OPTIONS" />
        <ASelect class="my-2" label="Blood Group" placeholder="Select Blood Group" v-model="fileData.bloodGroup"
          :options="BLOOD_GROUP_OPTIONS" />
        <ASelect class="my-2" label="Ethnicity" placeholder="Select Ethnicity" v-model="fileData.ethnicity"
          :options="ETHNICITY_OPTIONS" />
        <AInput type="password" append-icon="i-bx-lock" class="my-2" label="Aadhar Password"
          v-model="fileData.aadharPassword" placeholder="Aadhar Password" />
        <AInput @change="onFileChanged($event)" type="file" class="my-2" label="Aadhar File" v-model="fileData.aadharFile"
          placeholder="Aadhar File" />
      </div>
      <AAlert v-if="alertData.type > 0" :color="alertData.type == 2 ? `success` : 'danger'">
        {{ alertData.text }}
      </AAlert>

      <div class="flex justify-end mt-8">
        <ABtn :loading="btnLoading" @click="checkPDF()" class="rounded-full px-6 font-bold" color="primary">
          Register Profile
          <ALoadingIcon icon="i-bx-log-in" />
        </ABtn>


      </div>
    </div>
  </div>
</template>

<style scoped>
.main-register-div {
  @apply h-full bg-white flex items-center m-auto;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
