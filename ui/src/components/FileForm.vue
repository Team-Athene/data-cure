<script setup lang="ts">
import {
AGE_OPTIONS,
BLOOD_GROUP_OPTIONS,
ETHNICITY_OPTIONS,
GENDER_OPTIONS,
LIST_OPTIONS,
REPORT_TYPE_OPTIONS,
} from '~/utils/constants';
import { FileData, HealthData } from '~/utils/interfaces';

const fileData = reactive<HealthData>({
  email: '',
  age: '',
  gender: '',
  bloodGroup: '',
  ethnicity: '',
  reportType: '',
  medicalCondition: '',
  listForSale: true,
  dataCollectionDate: useDateFormat(useNow(), 'DD/MM/YYYY').value,
})

interface IFileFormProps {
  type: 'add' | 'edit' | 'read-only'
}
defineProps<IFileFormProps>()
const emit = defineEmits<IFileFormEmits>()

interface IFileFormEmits {
  (
    e: 'submit',
    value: {
      data: HealthData
      files: FileData[]
      s3Data: {
        bucket: string
        region: string
        access: string
        secret: string
      };
      isMigrated: string
    },
  ): void
}

const isFileOpen = ref(false)
const ipfsUrl = ref(
  'https://ipfs.io/ipfs/bafybeifhiiruosagjq666uz6u3oj7y7xlb7umhrvdxbhhphw55sqo5v5du/blob',
)
const isMigrated = ref('file')
const templistForSale = ref('true')
const updateListForSale = (value: string) => {
  fileData.listForSale = value === 'true' ? true : false
}
const filesList = ref<FileData[]>([
  {
    file: null,
    fileName: '',
    fileData: null,
  },
])
const s3Data = ref({
  bucket: '',
  region: '',
  access: '',
  secret: '',
})
const fileUpload = (file: FileData, index: number) => {
  filesList.value[index] = file
}
// const addFile = () => {
//   filesList.value.push({
//     file: null,
//     fileName: '',
//     fileData: null,
// })
// }

// const removeFile = (index: number) => {
//   if (index === 0) return
//   filesList.value.splice(index, 1)
// }
function submit() {
  emit('submit', { data: fileData, files: filesList.value, s3Data: s3Data.value, isMigrated: isMigrated.value })
}
const openFile = () => {
  // window.open(ipfsUrl.value, '_blank')
  isFileOpen.value = true
}
</script>

<template>
  <div class="max-w-200 main-register-div">
    <div class="grid grid-cols-2 text-left gap-x-4 m-0">
      <AInput
        :disabled="type === 'read-only'"
        class="my-2"
        label="Email Id"
        v-model="fileData.email"
        placeholder="Email Id"
      />
      <ASelect
        :disabled="type === 'read-only'"
        class="my-2"
        label="Age"
        placeholder="Select Age"
        v-model="fileData.age"
        :options="AGE_OPTIONS"
      />
      <ASelect
        :disabled="type === 'read-only'"
        class="my-2"
        label="Gender"
        placeholder="Select Gender"
        v-model="fileData.gender"
        :options="GENDER_OPTIONS"
      />
      <ASelect
        :disabled="type === 'read-only'"
        class="my-2"
        label="Blood Group"
        placeholder="Select Blood Group"
        v-model="fileData.bloodGroup"
        :options="BLOOD_GROUP_OPTIONS"
      />
      <ASelect
        :disabled="type === 'read-only'"
        class="my-2"
        label="Ethnicity"
        placeholder="Select Ethnicity"
        v-model="fileData.ethnicity"
        :options="ETHNICITY_OPTIONS"
      />
      <ASelect
        :disabled="type === 'read-only'"
        class="my-2"
        label="Report Type"
        placeholder="Select Report Type"
        v-model="fileData.reportType"
        :options="REPORT_TYPE_OPTIONS"
      />
      <AInput
        :disabled="type === 'read-only'"
        class="my-2"
        label="Medical Condition (as per report)"
        v-model="fileData.medicalCondition"
        placeholder="Medical Condition"
      />
      <AInput
        :disabled="type === 'read-only'"
        class="my-2"
        label="Data Collection Date"
        type="date"
        v-model="fileData.dataCollectionDate"
        placeholder="Data Collection Date"
      />

      <div class="my-2">
        <span mb-2>List for sale?</span>
        <div class="flex gap-x-3 mt-4">
          <ARadio
            :disabled="type === 'read-only'"
            @update:modelValue="updateListForSale"
            v-model="templistForSale"
            name="listForSale"
            value="true"
            :label="LIST_OPTIONS[0]"
          />
          <ARadio
            :disabled="type === 'read-only'"
            @update:modelValue="updateListForSale"
            v-model="templistForSale"
            name="listForSale"
            value="false"
            :label="LIST_OPTIONS[1]"
          />
        </div>
      </div>
    </div>

    <!-- Multiple File Upload -->
    <div class="my-2 flex flex-col text-left w-full space-x-2">
      <div my-3 flex justify-between items-center>
        <span my-2>{{
          type === 'read-only' ? 'Attached Files' : 'Attach Files'
        }}</span>
        <div v-if="!(type === 'read-only')" class="flex gap-x-3 mt-4">
          <ARadio
            @update:modelValue="updateListForSale"
            v-model="isMigrated"
            name="isMigrated"
            value="file"
            label="Upload File"
          />
          <ARadio
            @update:modelValue="updateListForSale"
            v-model="isMigrated"
            name="isMigrated"
            value="s3"
            label="Migrate from S3"
          />
        </div>
      </div>

      <div v-if="isMigrated === 'file'">
        <div
          v-for="(_, id) of filesList"
          class="flex mb-2 justify-start w-[100%] items-end gap-x-3"
        >
          <FileInput
            @update:modelValue="fileUpload($event, id)"
            :value="filesList[id]"
            dataType="Blob"
          />
          <!-- <ABtn icon-only class="w-12 h-12" icon="i-bx-plus" @click="addFile" />
          <ABtn
            icon-only
            color="danger"
            class="w-12 h-12"
            icon="i-bx-x"
            @click="removeFile(id)"
          /> -->
        </div>
      </div>
      <div v-else>
        <AInput
          class="my-2"
          label="S3 Bucket Name"
          v-model="s3Data.bucket"
          placeholder="S3 Bucket Name"
        />
        <AInput
          class="my-2"
          label="Region"
          v-model="s3Data.region"
          placeholder="Region"
        />
        <AInput
          class="my-2"
          label="Access Key"
          v-model="s3Data.access"
          placeholder="Access Key"
        />
        <AInput
          class="my-2"
          label="Secret Key"
          v-model="s3Data.secret"
          placeholder="Secret Key"
        />
      </div>
    </div>
    <div class="flex justify-end items-center space-x-4 mt-12">
      <ABtn class="rounded-full px-6" variant="outline" color="primary">
        Cancel
        <ALoadingIcon icon="i-bx-x" />
      </ABtn>

      <ABtn class="rounded-full px-6 font-bold" color="primary" @click="submit">
        Submit
        <ALoadingIcon icon="i-bx-chevron-right" />
      </ABtn>
    </div>
  </div>
  <ADialog v-model="isFileOpen" class="w-[800px]">
    <template #default>
      <img class="m-auto" :src="ipfsUrl" />
    </template>
  </ADialog>
</template>

<style scoped>
.main-register-div {
  @apply items-center !m-0;
}
</style>

<route lang="yaml">
meta:
  layout: dashboard
</route>
