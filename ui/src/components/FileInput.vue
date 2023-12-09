<script setup lang="ts">
import { FileData } from '~/utils/interfaces';


interface IFileInputProps {
    value?: FileData
    dataType?: 'Text' | 'ArrayBuffer' | 'Blob'
    disabled?: boolean
}
const props = defineProps<IFileInputProps>()

const emit = defineEmits<IFileInputEvents>()
interface IFileInputEvents {
    (e: 'update:modelValue', value: FileData): void
}

const fileData = useFileSystemAccess({
    dataType: props?.dataType ?? 'Blob',
    types: [{
        description: 'text',
        accept: {
            'text/plain': ['.txt', '.html'],
            'application/pdf': ['.pdf'],
        },
    }],
    excludeAcceptAllOption: true,
})
whenever(fileData.data, () => {
    const file: FileData = {
        file: fileData.file.value,
        fileName: fileData.fileName.value,
        fileData: fileData.data.value,
    }
    emit('update:modelValue', file)
})

</script>

<template>
    <div class="a-base-input-input-container w-full flex items-center">
        <div @click="fileData.open()"
            class="focus-within:border-primary a-base-input-input-wrapper cursor-pointer spacing:gap-x-2 relative i:focus-within:text-primary items-center border border-solid border-a-border w-full overflow-hidden">
            <div class="w-[35%] h-full bg-secondary flex justify-center items-center">Choose File</div>
            <div px-2 truncate>{{ fileData.fileName.value.length ? fileData.fileName.value : '' }}</div>
        </div>
    </div>
</template>

<style scoped>
.drop-zone {
    @apply relative w-full h-full border-2 border-dashed border-secondary/30 rounded-md flex items-center justify-center h-36 cursor-pointer;
}

img {
    @apply w-full h-full object-contain rounded-md;
    @apply absolute top-0 left-0;
}
</style>
