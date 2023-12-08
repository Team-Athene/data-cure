<script setup lang="ts">
import logo from '~/../src/assets/logo/Logo.svg'

interface IHeaderProps {
  bgColor?: 'PRIMARY' | 'SECONDARY'
  hideBtn?: boolean
  label?: string
  width?: string
  icon?: string
}
defineProps<IHeaderProps>()

</script>

<template>
  <div class="main-div" :class="[bgColor === 'PRIMARY' ? 'bg-header_bg_primary' : 'bg-header_bg_secondary']">
    <div flex justify-start space-x-3>
      <div>
        <img h-9 w-9 :src="logo" alt="logo">
      </div>
      <div text-2xl font-bold font-tsukimi>
        DataCure
      </div>
    </div>
    <LoginBtn v-if="!hideBtn" type="header"/>
  </div>
</template>

<style scoped>
.main-div {
  @apply fixed w-full flex justify-between items-center text-primary font-tsukimi px-6 py-3;
}
</style>
