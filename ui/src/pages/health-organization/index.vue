<script setup lang="ts">
import { myFilesRows, myFilesCols } from '~/utils/constants';
</script>

<template>
   <div>
    <div class="font-semibold text-xl mb-10">
      My Files
    </div>
    <ADataTable
    :rows="myFilesRows"
    :cols="myFilesCols"
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
</ADataTable>

   </div>
</template>

