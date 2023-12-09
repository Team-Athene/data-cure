<script setup lang="ts">
 import { HuddleClient } from "@huddle01/web-core";
import { townHallRows, TOWN_HALL_COLS } from '~/utils/constants';
import { Client, Room } from '@huddle01/server-sdk/client';

const router = useRouter();

const huddleClient  = ref<HuddleClient>();



const filteredRows = townHallRows.map((row) => {
  return {
    ...row,
    actions: true,
  };
});

onMounted(async () => {
  console.log('mounted');
  huddleClient.value = await initHuddle()
  console.log("🚀 ~ file: town-hall.vue:21 ~ onMounted ~ client.value:", huddleClient.value)
  // huddleClient.joinRoom('town-hall')
  const room = await huddleClient.value.joinRoom({
	roomId: 'gym-lvvq-vtw',
	token: import.meta.env.VITE_HUDDLE_API_KEY,
});
  console.log("🚀 ~ file: town-hall.vue:27 ~ onMounted ~ room:", room)
 await room.connect();
});

</script>

<template>
   <div>
    <div class="font-semibold text-xl mb-10">
      Researcher's Town Hall
    </div>
    <ADataTable
    :rows="filteredRows"
    :cols="TOWN_HALL_COLS"
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
        Join Room
    </ABtn>
    </template>
</ADataTable>

   </div>
</template>

