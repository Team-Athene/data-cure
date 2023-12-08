<script setup lang="ts">
interface IButtonProps {
  id: string
  name: string
  label?: string
  bgColor: 'PRIMARY' | 'SECONDARY'
}
defineProps<IButtonProps>()

const emit = defineEmits<IButtonEmits>()
interface IButtonEmits {
  (e: 'click'): void
}
</script>

<template>
  <div class="">
    <div class="box-shadow flex justify-start btn space-x-1" :class="[bgColor === 'PRIMARY' ? 'bg-primary' : 'bg-secondary']" @click="emit('click')">
      <span text-white>{{ label }}</span><div class="h-5 w-5 text-white" i-mdi:login />
    </div>
  </div>
</template>

<style scoped>
.btn-class{
    @apply bg-primary rounded-lg ;
}
.box-shadow{
  box-shadow: 2px 2px 0px 0px rgba(0, 101, 112, 1);

}
</style>
