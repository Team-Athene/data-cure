<script setup lang="ts">
import { HealthData, FileData } from '~/utils/interfaces';

import { FILE_TABS, PERMISSIONS_COLS, permissionRows } from '~/utils/constants';

const route = useRoute()

const cid = route.query?.cid
console.log("🚀 ~ file: my-file.vue:7 ~ cid:", cid)


const submitFile = (value: { data: HealthData, files: FileData[] }) => {
  console.log("🚀 ~ file: upload-file.vue:32 ~ submitFile ~ value", value)
}
</script>

<template>
  <div>
    <div class="font-semibold text-xl mb-10">
      File Details
    </div>

    <ATabs key="default" class="a-tabs-bordered" :tabs="FILE_TABS">

      <!-- 👉 File Details -->
      <template #file-details>
        <div py-8>
          <FileForm type="add" @submit="submitFile" />
        </div>
      </template>

      <!-- 👉 Permissions -->
      <template #permissions>
        <div mt-8>
          <ADataTable :rows="permissionRows" :cols="PERMISSIONS_COLS" search>
            <template #col-requestedUser="{ row }">
              <ABtn variant="outline" icon="i-bx-copy">
                <span font-bold>
                  {{ row.requestedUser?.slice(0, 6) }}...{{ row.requestedUser?.slice(-4) }}
                </span>
              </ABtn>
            </template>
            <template #col-status="{ row }">
              <AChip :color="row.status === 'Approved' ? 'success' : row.status === 'Rejected' ? 'danger' : 'warning'"
                :icon="row.status === 'Approved' ? 'i-bx-check' : row.status === 'Rejected' ? 'i-bx-x' : 'i-bx-loader-alt'">
                <span>{{ row.status }}</span>
              </AChip>
            </template>
            <template #col-actions="{ row }">
              <ABtn variant="light" class="rounded-full" color="danger" icon="i-bx-error">
                Report
              </ABtn>
            </template>
          </ADataTable>
        </div>
      </template>
    </ATabs>
  </div>
</template>

<style scoped></style>
