<script setup lang="ts">
import { requestsRows, REQUESTS_COLS, REQUEST_TABS, permissionRows, PERMISSIONS_COLS } from '~/utils/constants';
const filteredRows = computed(() => {
  return requestsRows.map((row) => {
    return {
      ...row.file,
      requestedUser: row.requestedUser.toLowerCase(),
      actions: true
    }
  });
});
</script>

<template>
   <div>
    <div class="font-semibold text-xl mb-10">
      Access Requests
    </div>
    <ADataTable
    :rows="filteredRows"
    :cols="REQUESTS_COLS"
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
    <template #col-requestedUser="{ row }">
      <ABtn variant="outline" icon="i-bx-copy">
      <span font-bold>
        {{ row.requestedUser?.slice(0, 6) }}...{{ row.requestedUser?.slice(-4) }}
      </span>
    </ABtn>
    </template>
    <template #col-status="{ row }">
    <AChip
      :color="row.status==='Approved' ? 'success' : row.status==='Rejected' ? 'danger' : 'warning'"
      :icon="row.status==='Approved' ? 'i-bx-check' : row.status==='Rejected' ? 'i-bx-x' : 'i-bx-loader-alt'"
    >
      <span>{{row.status}}</span>
    </AChip>
    </template>
    <template #col-actions="{ row }">
      <ABtn variant="light" class="rounded-full" color="success" icon="i-bx-check">
        Accept
      </ABtn>
      <ABtn variant="light" class="rounded-full ml-3" color="danger" icon="i-bx-x">
        Reject
    </ABtn>
    </template>
</ADataTable>


   </div>
</template>

