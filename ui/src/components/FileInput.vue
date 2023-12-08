<script setup lang="ts">

interface IFileInputProps {
    modelValue?: string
    dataType?: 'Text' | 'ArrayBuffer' | 'Blob'
    disabled?: boolean
}
const props = defineProps<IFileInputProps>()

const emit = defineEmits<IFileInputEvents>()
interface IFileInputEvents {
    (e: 'update:modelValue', value: any): void
}
const res = useFileSystemAccess({
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
</script>

<template>
    <div class="a-base-input-input-container w-full flex items-center">
        <div @click="res.open()"
            class="focus-within:border-primary a-base-input-input-wrapper cursor-pointer spacing:gap-x-2 relative i:focus-within:text-primary items-center border border-solid border-a-border w-full overflow-hidden">
            <div class="w-[35%] h-full bg-secondary flex justify-center items-center">Choose File</div>
            <div px-2 truncate>{{ res.fileName.value.length ? res.fileName.value : '' }}</div>
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
