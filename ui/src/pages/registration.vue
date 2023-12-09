<script setup lang="ts">
import {
    AGE_OPTIONS,
    BLOOD_GROUP_OPTIONS,
    ETHNICITY_OPTIONS,
    GENDER_OPTIONS,
} from '~/utils/constants'
import logo from '~/../src/assets/logo/Logo.svg'

const aadharFile = ref(undefined)

const fileData = reactive({
    aadharPassword: '',
    age: '',
    gender: '',
    bloodGroup: '',
    ethnicity: '',
})
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

      <LoginBtn :type="'register'"/>
      <div grid grid-cols-2 gap-x-4 text-left >
            <ASelect class="my-2" label="Age" placeholder="Select Age" v-model="fileData.age" :options="AGE_OPTIONS" />
            <ASelect class="my-2" label="Gender" placeholder="Select Gender" v-model="fileData.gender"
                :options="GENDER_OPTIONS" />
            <ASelect class="my-2" label="Blood Group" placeholder="Select Blood Group" v-model="fileData.bloodGroup"
                :options="BLOOD_GROUP_OPTIONS" />
            <ASelect class="my-2" label="Ethnicity" placeholder="Select Ethnicity" v-model="fileData.ethnicity"
                :options="ETHNICITY_OPTIONS" />
            <AInput type="password" 
        append-icon="i-bx-lock" class="my-2" label="Aadhar Password" v-model="fileData.aadharPassword" placeholder="Aadhar Password" />
            <AInput type="file" class="my-2" label="Aadhar File" v-model="aadharFile" placeholder="Aadhar File" />
      </div>
      <div class="flex justify-end mt-8">
        <ABtn
          class="rounded-full px-6 font-bold"
          color="primary"
        >
          Register Profile
          <ALoadingIcon icon="i-bx-log-in" />
        </ABtn>

    <AAlert
      color="success"
      variant="outline"
    >
      Fruitcake I love liquorice apple pie croissant.
    </AAlert>
    <AAlert
      color="warning"
      variant="outline"
    >
      Fruitcake I love liquorice apple pie croissant.
    </AAlert>
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
