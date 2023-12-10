<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { dataHubFilesRows, DATAHUB_FILES_COLS } from '~/utils/constants';
import { MessageData } from '~/utils/interfaces';

const waku = new useWakuVerification();
const { userInfo } = storeToRefs(useWeb3Store())

const requestAccess = async (row: any) => {
  const data: MessageData = {
    timestamp: Date.now(),
    fileCid: row.cid,
    fileName: row.fileName,
    requestedUser: userInfo.value.walletAddress,
    toAddress: row.owner,
    reportType: row.reportType,
    focusArea: row.focusArea,
  };
  await waku.sendVerificationMessage(data);
  console.log("🚀 ~ file: data-hub.vue:8 ~ requestAccess ~ ow.owner:", row.owner)
  console.log(row);
};
// onMounted(() => {
//   waku.
// });
</script>

<template>
   <div>
    <div class="font-semibold text-xl mb-10">
      DataCure Hub
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
      <ABtn @click="requestAccess(row)" variant="light" class="rounded-full" color="primary" icon="i-bx-send">
        Request Access
      </ABtn>
    </template>
</ADataTable>

   </div>
</template>

