<script setup lang="ts">
import { ref } from 'vue'

interface IFileInputProps {
    modelValue?: string
    name?: string
    id?: string
    disabled?: boolean
}
defineProps<IFileInputProps>()

const emit = defineEmits<IFileInputEvents>()
interface IFileInputEvents {
    (e: 'update:modelValue', value: any): void
}
// Reference to the drop zone element in the DOM
const dropZoneRef = ref<HTMLDivElement>()

// Reference to the file input element in the DOM
const fileInputRef = ref<HTMLInputElement>()

// A variable to store the URL of the image selected or dropped
const imageUrl = ref<string | null>(null)
const fileName = ref<string | null>(null)

// Function called when a file is dropped onto the drop zone
function onDrop(files: any) {
    if (files && files.length > 0) {
        const file = files[0]

        // Create a URL for the dropped file and assign it to imageUrl
        imageUrl.value = URL.createObjectURL(file)
        emit('update:modelValue', file)
    }
}

/*
* Call the useDropZone function, passing the drop zone reference and the onDrop function
* The useDropZone function returns an object with the isOverDropZone property.
* We destructure this object and assign isOverDropZone to a variable.
*/
useDropZone(dropZoneRef, onDrop)

// Function to trigger the file input click event
function triggerFileInput() {
    if (fileInputRef.value)
        fileInputRef.value.click()
}

// Function called when a file is selected using the file input
function onFileInputChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0]
        console.log("🚀 ~ file: FileInput.vue:54 ~ onFileInputChange ~ file:", file)

        // Create a URL for the selected file and assign it to imageUrl
        imageUrl.value = URL.createObjectURL(file)
        fileName.value = file.name
        console.log("🚀 ~ file: FileInput.vue:60 ~ onFileInputChange ~ file:", file)
        emit('update:modelValue', file)
    }
}
</script>

<template>
    <div ref="dropZoneRef" class="a-base-input-input-container w-full flex items-center" @click="triggerFileInput">
        <div
            class="focus-within:border-primary a-base-input-input-wrapper cursor-text spacing:gap-x-2 relative i:focus-within:text-primary items-center border border-solid border-a-border w-full overflow-hidden">
            <div class="w-[35%] h-full bg-secondary flex justify-center items-center">Choose File</div>
            <div px-4 truncate>{{fileName}}</div>
            <input ref="fileInputRef" type="file"
                @change="onFileInputChange"
                class="a-base-input-child w-full h-full hidden inset-0 rounded-inherit bg-transparent a-base-input-wo-prepend-inner a-base-input-wo-append-inner a-input-input"
                placeholder="Medical Condition" id="a-input-Medical Condition (as per report)-ery0q" ></div>
    </div>
</template>

<style scoped>
.drop-zone {
    @apply relative w-full h-full border-2 border-dashed border-secondary/30 rounded-md flex items-center justify-center h-36 cursor-pointer;
}

img {
    @apply w-full h-full object-contain rounded-md;
    @apply absolute top-0 left-0;
}</style>
