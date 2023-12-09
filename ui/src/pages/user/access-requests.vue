<script setup lang="ts">
import { permissionRows, permissionsCols } from '~/utils/constants';
</script>

<template>
   <div>
    <div class="font-semibold text-xl mb-10">
      My Files
    </div>
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

