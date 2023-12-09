<script setup lang="ts">
const cols = [
  { name: 'fileName' },
  { name: 'reportType' },
  { name: 'focusArea' },
  { name: 'consultedOn' },
  { name: 'accessCount' },
]
const rows = [
  {
    fileName: 'File 1',
    reportType: 'Report Type 1',
    focusArea: 'Focus Area 1',
    consultedOn: 'Consulted On 1',
    accessCount: '1',
    cid: '0x1234567890',
  },
  {
    fileName: 'File 2',
    reportType: 'Report Type 2',
    focusArea: 'Focus Area 2',
    consultedOn: 'Consulted On 2',
    accessCount: '10',
    cid: '0x1234567890',
  },
  {
    fileName: 'File 3',
    reportType: 'Report Type 3',
    focusArea: 'Focus Area 3',
    consultedOn: 'Consulted On 3',
    accessCount: '3',
    cid: '0x1234567890',
  },
  {
    fileName: 'File 4',
    reportType: 'Report Type 4',
    focusArea: 'Focus Area 4',
    consultedOn: 'Consulted On 4',
    accessCount: '4',
    cid: '0x1234567890',
  },
  {
    fileName: 'File 5',
    reportType: 'Report Type 5',
    focusArea: 'Focus Area 5',
    consultedOn: 'Consulted On 5',
    accessCount: '5',
    cid: '0x1234567890',
  },
  {
    fileName: 'File 6',
    reportType: 'Report Type 6',
    focusArea: 'Focus Area 6',
    consultedOn: 'Consulted On 6',
    accessCount: '6',
    cid: '0x1234567890',
  },
  {
    fileName: 'File 7',
    reportType: 'Report Type 7',
    focusArea: 'Focus Area 7',
    consultedOn: 'Consulted On 7',
    accessCount: '7',
    cid: '0x1234567890',
  },
  {
    fileName: 'File 8',
    reportType: 'Report Type 8',
    focusArea: 'Focus Area 8',
    consultedOn: 'Consulted On 8',
    accessCount: '8',
    cid: '0x1234567890',
  },
  {
    fileName: 'File 9',
    reportType: 'Report Type 9',
    focusArea: 'Focus Area 9',
    consultedOn: 'Consulted On 9',
    accessCount: '9',
    cid: '0x1234567890',
  },
  {
    fileName: 'File 10',
    reportType: 'Report Type 10',
    focusArea: 'Focus Area 10',
    consultedOn: 'Consulted On 10',
    accessCount: '10',
    cid: '0x1234567890',
  },
]
</script>

<template>
   <div>
    <div class="font-semibold text-xl mb-10">
      My Files
    </div>
    <ADataTable
    :rows="rows"
    :cols="cols"
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

