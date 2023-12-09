<script setup lang="ts">
import { HealthData, FileData } from '~/utils/interfaces';

const submitFile = (value: {data: HealthData, files: FileData[]}) => {
  console.log("🚀 ~ file: upload-file.vue:32 ~ submitFile ~ value", value)
}
</script>

<template>
   <div>
    <FileForm type="add" @submit="submitFile" />
   </div>
</template>

<style scoped>
.main-register-div {
  @apply items-center m-auto py-20;
}
</style>

<route lang="yaml">
meta:
  layout: dashboard
</route>
