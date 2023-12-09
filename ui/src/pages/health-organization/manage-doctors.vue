<script setup lang="ts">
import { doctorsRows, DOCTORS_COLS } from '~/utils/constants';
const isEditDoctor = ref<boolean[]>([]);

const filteredRows = computed(() => {
    return doctorsRows.map((row, id) => {
        if(!isEditDoctor.value[id])
            isEditDoctor.value.push(false);
        return {
            ...row,
            index: id,
            actions: true
        }
    });
})

const submitDoctor = (id: number) => {
    isEditDoctor.value[id] = false;
}

</script>

<template>
   <div>
    <div class="font-semibold text-xl mb-10">
      My Files
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

   </div>
</template>

