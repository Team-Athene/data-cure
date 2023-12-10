<script setup lang="ts">
import { REQUESTS_COLS, permissionRows, PERMISSIONS_COLS, REQUEST_TABS } from '~/utils/constants';
import { storeToRefs } from 'pinia'
import { grandAccess } from '~/services/web3.service';

const { messages } = storeToRefs(useWakuStore())
const { userInfo } = storeToRefs(useWeb3Store())

const filteredRows = computed(() => {
  return messages.value?.length
    ? messages.value.map((row) => {
      return {
        ...row,
        requestedUser: row.requestedUser.toLowerCase(),
        actions: true
      }
    })
    : []
});
const acceptRequest = async(item: any) => {
  try {
    const params = { 
      userToken: userInfo.value.SbtId,
      cid: item.cid, 
    }
    const result = await grandAccess(params)
    console.log("🚀 ~ file: access-requests.vue:20 ~ acceptRequest ~ result:", result)
    rejectAccess(item)
  } catch (error) {
    console.error("🚀 ~ file: access-requests.vue:30 ~ acceptRequest ~ error:", error)
  }
}
const rejectAccess = (item: any) => {
  const index = messages.value.findIndex((row) => row.cid === item.cid)
  messages.value.splice(index, 1)
}
</script>

<template>
  <div>
    <div class="font-semibold text-xl mb-10">
      Access Management
    </div>
    <ATabs key="default" class="a-tabs-bordered" :tabs="REQUEST_TABS">

      <template #received>
        <div mt-8>
          <ADataTable :rows="filteredRows" :cols="REQUESTS_COLS" search>
            <!-- Header: Name -->
            <template #header-fileName="{ col }">
              <i v-once class="i-bx-file me-1" /> {{ col.name }}
            </template>
            <!-- Column: Name -->
            <template #col-fileName="{ row }">
              <a :href="`/user/my-file?cid=${row.cid}`" class="text-primary hover:underline">{{ row.fileName }}</a>
            </template>
            <template #col-requestedUser="{ row }">
              <ABtn variant="outline" icon="i-bx-copy">
                <span font-bold>
                  {{ row.requestedUser?.slice(0, 6) }}...{{ row.requestedUser?.slice(-4) }}
                </span>
              </ABtn>
            </template>
            <template #col-status="{ row }">
              <AChip :color="row.status === 'Approved' ? 'success' : row.status === 'Rejected' ? 'danger' : 'warning'"
                :icon="row.status === 'Approved' ? 'i-bx-check' : row.status === 'Rejected' ? 'i-bx-x' : 'i-bx-loader-alt'">
                <span>{{ row.status }}</span>
              </AChip>
            </template>
            <template #col-actions="{ row }">
              <ABtn @click="acceptRequest(row)" variant="light" class="rounded-full" color="success" icon="i-bx-check">
                Accept
              </ABtn>
              <ABtn @click="rejectAccess(row)" variant="light" class="rounded-full ml-3" color="danger" icon="i-bx-x">
                Reject
              </ABtn>
            </template>
          </ADataTable>
        </div>
      </template>
      <template #sent>

        <div mt-8>
          <ADataTable :rows="permissionRows" :cols="PERMISSIONS_COLS" search>
            <template #col-requestedUser="{ row }">
              <ABtn variant="outline" icon="i-bx-copy">
                <span font-bold>
                  {{ row.requestedUser?.slice(0, 6) }}...{{ row.requestedUser?.slice(-4) }}
                </span>
              </ABtn>
            </template>
            <template #col-status="{ row }">
              <AChip :color="row.status === 'Approved' ? 'success' : row.status === 'Rejected' ? 'danger' : 'warning'"
                :icon="row.status === 'Approved' ? 'i-bx-check' : row.status === 'Rejected' ? 'i-bx-x' : 'i-bx-loader-alt'">
                <span>{{ row.status }}</span>
              </AChip>
            </template>
            <template #col-actions="{ row }">
              <ABtn variant="light" class="rounded-full" color="secondary" icon="i-bx-error">
                Revoke Request
              </ABtn>
            </template>
          </ADataTable>
        </div>
      </template>
    </ATabs>
  </div>
</template>

