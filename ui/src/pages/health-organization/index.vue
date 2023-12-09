<script setup lang="ts">
import { myFilesRows, accessedFilesRows, MY_FILES_COLS, FILES_TABS, ACCESSED_FILES_COLS } from '~/utils/constants';
</script>

<template>
   <div>
    <div class="font-semibold text-xl mb-10">
      My Files
    </div>
    <ATabs
      key="default"
      class="a-tabs-bordered"
      :tabs="FILES_TABS"
    >

    <template #uploaded>
      <div mt-8>
    <ADataTable
    :rows="myFilesRows"
    :cols="MY_FILES_COLS"
    search
  >
    <!-- Header: Name -->
    <template #header-fileName="{ col }">
      <i
        v-once
        class="i-bx-file me-1"
      /> {{ col.name }}
    </template>
    <!-- Column: Name -->
    <template #col-fileName="{ row }">
      <a
        :href="`/health-organization/my-file?cid=${row.cid}`"
        class="text-primary hover:underline"
      >{{ row.fileName }}</a>
    </template>
</ADataTable>
   </div>

    </template>
    <template #accessed>
      
      <div mt-8>
    <ADataTable
    :rows="accessedFilesRows"
    :cols="ACCESSED_FILES_COLS"
    search
  >
    <!-- Header: Name -->
    <template #header-fileName="{ col }">
      <i
        v-once
        class="i-bx-file me-1"
      /> {{ col.name }}
    </template>
    <!-- Column: Name -->
    <template #col-fileName="{ row }">
      <a
        :href="`/health-organization/accessed-file?cid=${row.cid}`"
        class="text-primary hover:underline"
      >{{ row.fileName }}</a>
    </template>
</ADataTable>
      </div>
    </template>
  </ATabs>
   </div>
</template>

