<script setup lang="ts">
import { accessedFilesRows, ACCESSED_FILES_COLS } from '~/utils/constants';
</script>

<template>
   <div>
    <div class="font-semibold text-xl mb-10">
      Accessed Files
    </div>
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
        :href="`/research-organization/accessed-file?cid=${row.cid}`"
        class="text-primary hover:underline"
      >{{ row.fileName }}</a>
    </template>
</ADataTable>
   </div>
</template>

