<script setup lang="ts">
import { HealthData, FileData } from '~/utils/interfaces';

import {fileTabs } from '~/utils/constants';

const route = useRoute()

const cid = route.query?.cid
console.log("🚀 ~ file: my-file.vue:7 ~ cid:", cid)

const permissionsCols = [
    { name: 'requestedUser' },
    { name: 'accessTill' },
    { name: 'status' },
    { name: 'actions' },
  ]

  const permissionRows = [
    {
      requestedUser: '0x1234567890123456789012345678901234567890',
      accessTill: '01-10-2023',
      status: 'Pending',
    }
  ]

const submitFile = (value: {data: HealthData, files: FileData[]}) => {
  console.log("🚀 ~ file: upload-file.vue:32 ~ submitFile ~ value", value)
}
</script>

<template>
   <div>
    <div class="font-semibold text-xl mb-10">
      File Upload
    </div>

    <ATabs
      key="default"
      class="a-tabs-bordered"
      :tabs="fileTabs"
    >

        <!-- 👉 File Details -->
        <template #file-details>
          <div py-8>
            <FileForm type="add" @submit="submitFile" />
          </div>
        </template>

<!-- 👉 Permissionss -->
<template #permissions>
          <div py-8>
    <ADataTable
    :rows="permissionRows"
    :cols="permissionsCols"
    search
  >
    <template #col-requestedUser="{ row }">
      <ABtn variant="outline" icon="i-bx-copy">
      <span font-bold>
        {{ row.requestedUser?.slice(0, 6) }}...{{ row.requestedUser?.slice(-4) }}
      </span>
    </ABtn>
    </template>
</ADataTable>
  </div>
</template>
  </ATabs>
   </div>
</template>

<style scoped>
</style>
