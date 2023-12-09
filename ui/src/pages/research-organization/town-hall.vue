<script setup lang="ts">
import { townHallRows, TOWN_HALL_COLS } from '~/utils/constants'
import { initPushChat } from '../../composables/pushchat'

const filteredRows = townHallRows.map((row) => {
  return {
    ...row,
    actions: true,
  }
})
onMounted(async() => {
 await initPushChat()
})

</script>

<template>
  <div>
    <div class="font-semibold text-xl mb-10">Researcher's Town Hall</div>
    <ADataTable :rows="filteredRows" :cols="TOWN_HALL_COLS" search>
      <!-- Header: Name -->
      <template #header-fileName="{ col }">
        <i v-once class="i-bx-file me-1" /> {{ col.name }}
      </template>
      <!-- Column: Name -->
      <template #col-fileName="{ row }">
        <a
          :href="`/user/my-file?cid=${row.cid}`"
          class="text-primary hover:underline"
          >{{ row.fileName }}</a
        >
      </template>
      <template #col-actions="{ row }">
        <ABtn
          variant="light"
          class="rounded-full"
          color="primary"
          icon="i-bx-send"
        >
          Join Room
        </ABtn>
      </template>
    </ADataTable>
  </div>
</template>
