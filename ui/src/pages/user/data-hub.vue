<script setup lang="ts">
import { dataHubFilesRows, DATAHUB_FILES_COLS } from '~/utils/constants';
</script>

<template>
   <div>
    <div class="font-semibold text-xl mb-10">
      My Files
    </div>
    <ADataTable
    :rows="dataHubFilesRows"
    :cols="DATAHUB_FILES_COLS"
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
        :href="`/user/my-file?cid=${row.cid}`"
        class="text-primary hover:underline"
      >{{ row.fileName }}</a>
    </template>
    <template #col-actions="{ row }">
      <ABtn variant="light" class="rounded-full" color="primary" icon="i-bx-send">
        Request Access
    </ABtn>
    </template>
</ADataTable>

   </div>
</template>

