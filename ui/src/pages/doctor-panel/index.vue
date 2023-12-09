<script setup lang="ts">
import logo from '~/../src/assets/logo/Logo.svg'

const fileData = reactive({
    organizationId: '',
    fileId: '',
})
</script>

<template>
  <div class="main-register-div pt-10">
    <div class="w-full m-auto px-8 py-12">
        <img h-20 w-20 m-auto :src="logo" alt="logo">
      <div text-xl font-bold font-tsukimi mb-4 text-center>
        DataCure Protocol
      </div>
      <div text-lg font-bold my-4 text-center>
        Doctor's Panel
      </div>

      <div grid grid-cols-2 gap-x-4 text-left >
      <AInput class="my-2" label="Organization Id" v-model="fileData.organizationId"
        placeholder="Organization Id" />
      <AInput class="my-2" label="File Id" v-model="fileData.fileId"
        placeholder="File Id" />
      </div>
      <div class="flex justify-end mt-8 space-x-4">
        <ABtn
          class="rounded-full px-6 font-bold w-48"
          color="info"
        >
            New Search
          <ALoadingIcon icon="i-bx-search" />
        </ABtn>
        <ABtn
          class="rounded-full px-6 font-bold w-48"
          color="primary"
        >
            Request Access
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
