<script setup lang="ts">
import { HealthData, FileData } from '~/utils/interfaces';

const submitFile = (value: {data: HealthData, files: FileData[]}) => {
  console.log("🚀 ~ file: upload-file.vue:32 ~ submitFile ~ value", value)
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
