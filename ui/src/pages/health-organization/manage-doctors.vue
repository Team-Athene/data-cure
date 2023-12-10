<script setup lang="ts">
import { addDoctorList, getDoctorList } from '~/services/web3.service';
import { doctorsRows, DOCTORS_COLS } from '~/utils/constants';
import { storeToRefs } from 'pinia'

const { userInfo } = storeToRefs(useWeb3Store())
const doctorsList = ref<any>([]);
const isEditDoctor = ref<boolean[]>([]);
const isDialogShown = ref<boolean>(false);
const newDoctorAddr = ref<string>('');

const filteredRows = computed(() => {
    return doctorsList.value.map((row, id) => {
        if(!isEditDoctor.value[id.length])
            isEditDoctor.value.push(false);
        return {
            userAddress: row.userAddress,
            index: id,
            actions: true
        }
    });
})

const submitDoctor = (userAddr: string) => {
    addDoctorList({ orgTokenId: userInfo.value.SbtId, doctorWalletAddr: newDoctorAddr.value });
    isDialogShown.value = false;

}

const addDoctor = () => {
  isDialogShown.value = true;
}
onMounted(async () => {
    doctorsList.value = await getDoctorList({ orgTokenId: userInfo.value.SbtId });
})

</script>

<template>
   <div>
    <div class="font-semibold text-xl mb-10 flex justify-between w-full items-start">
      <div>Manage Doctors List</div>
      <ABtn class="rounded-full text-sm" color="primary" icon="i-bx-plus" @click="addDoctor">
            <span font-bold>
              Add Doctor
            </span>
      </ABtn>
    </div>
    <ADataTable
    :rows="filteredRows"
    :cols="DOCTORS_COLS"
    search
  >
    <template #col-userAddress="{ row }">
        <AInput class="my-2" v-if="isEditDoctor[row.index]" v-model="doctorsRows[row.index].userAddress" placeholder="Wallet Address" />
        <ABtn v-else variant="outline" icon="i-bx-copy">
            <span font-bold>
              {{ row.userAddress?.slice(0, 6) }}...{{ row.userAddress?.slice(-4) }}
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
      <ABtn v-if="isEditDoctor[row.index]" @click="submitDoctor(row.index)" variant="light" class="rounded-full w-24" color="primary" icon="i-bx-save">
        Save
      </ABtn>
      <ABtn v-else @click="isEditDoctor[row.index] = true" variant="light" class="rounded-full w-24 my-3" color="secondary" icon="i-bx-edit">
        Edit
      </ABtn>
      <ABtn variant="light" class="rounded-full ml-3 w-24" color="danger" icon="i-bx-trash">
        Delete
    </ABtn>
    </template>
</ADataTable>

<ADialog
    v-model="isDialogShown"
    title="Add New Doctor"
    class="px-10 pb-10"
  >
        <AInput class="my-2" v-model="newDoctorAddr" placeholder="Wallet Address" />
      <ABtn @click="submitDoctor(newDoctorAddr)" variant="light" class="rounded-full w-24" color="primary" icon="i-bx-save">
        Save
      </ABtn>
  
</ADialog>
   </div>
</template>

