<script setup lang="ts">
import {
    AGE_OPTIONS,
    BLOOD_GROUP_OPTIONS,
    ETHNICITY_OPTIONS,
    GENDER_OPTIONS,
    REPORT_TYPE_OPTIONS,
    LIST_OPTIONS,
} from '../../utils/constants'
const fileData = reactive({
    aadharNumber: '',
    age: '',
    gender: '',
    bloodGroup: '',
    ethnicity: '',
    reportType: '',
    medicalCondition: '',
    listForSale: true,
    dataCollectionDate: new Date(),
})
const isMigrated = ref(false)
const templistForSale = ref('true')
const updateListForSale = (value) => {
    fileData.listForSale = value === 'true' ? true : false
}

const filesList = ref<any[]>([null])
const fileUpload = (event) => {
    console.log(event)
}
const addFile = () => {
    filesList.value.push(null)
    console.log("🚀 ~ file: upload-file.vue:32 ~ addFile ~ filesList.value:", filesList.value)
}
</script>

<template>
    <div class="max-w-200 main-register-div">
        <div class="grid grid-cols-2 text-left space-x-2 m-auto">
            <AInput inputWrapperClasses="my-2" label="Aadhar Number" v-model="fileData.aadharNumber"
                placeholder="Aadhar Number" />
            <ASelect inputWrapperClasses="my-2" label="Age" placeholder="Select Age" v-model="fileData.age"
                :options="AGE_OPTIONS" />
            <ASelect inputWrapperClasses="my-2" label="Gender" placeholder="Select Gender" v-model="fileData.gender"
                :options="GENDER_OPTIONS" />
            <ASelect inputWrapperClasses="my-2" label="Blood Group" placeholder="Select Blood Group"
                v-model="fileData.bloodGroup" :options="BLOOD_GROUP_OPTIONS" />
            <ASelect inputWrapperClasses="my-2" label="Ethnicity" placeholder="Select Ethnicity"
                v-model="fileData.ethnicity" :options="ETHNICITY_OPTIONS" />
            <ASelect inputWrapperClasses="my-2" label="Ethnicity" placeholder="Select Report Type"
                v-model="fileData.ethnicity" :options="REPORT_TYPE_OPTIONS" />
            <AInput inputWrapperClasses="my-2" label="Medical Condition (as per report)" v-model="fileData.medicalCondition"
                placeholder="Medical Condition" />
            <AInput inputWrapperClasses="my-2" label="Data Collection Date" type="date"
                v-model="fileData.dataCollectionDate" placeholder="Data Collection Date" />

            <div class="my-2">
                <span mb-2>List for sale?</span>
                <div class="flex gap-x-3 mt-4">
                    <ARadio @update:modelValue="updateListForSale" v-model="templistForSale" name="listForSale" value="true"
                        :label="LIST_OPTIONS[0]" />
                    <ARadio @update:modelValue="updateListForSale" v-model="templistForSale" name="listForSale"
                        value="false" :label="LIST_OPTIONS[1]" />
                </div>
            </div>

        </div>

        <ASwitch
                v-model="isMigrated"
                color="primary"
                />

        <!-- Multiple File Upload -->
        <div class="my-2 flex flex-col text-left w-full space-x-2">
            <div my-3>
                <span my-2>Attach Files</span>
                
            </div>
            <div>
                <div v-for="(file, id) of filesList" class="flex mb-2 justify-start w-fit items-end gap-x-3">
                    <AInput @update:modelValue="fileUpload" v-model="filesList[id]" type="file" :label="`Document ${id+1}`" />
                    <ABtn icon-only class="w-12 h-12" icon="i-bx-plus" @click="addFile" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-register-div {
    @apply h-100vh items-center m-auto;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
