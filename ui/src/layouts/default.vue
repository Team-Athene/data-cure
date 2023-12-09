<script setup lang="ts">
const route = useRoute()
const isDoctorPanel = ref(false) 
onMounted(() => {
  if (route.path.includes('doctor-panel')) {
    isDoctorPanel.value = true
  }
})
</script>

<template>
  <main text="left" class="div-class">
      <Header bg-color="PRIMARY" />
      <SideBar v-if="!isDoctorPanel"/>
    <div class="overflow-y-scroll px-20 pt-16" :class="[isDoctorPanel ? 'w-full' : 'w-80%']">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
.div-class {
  background: white;
  @apply flex flex-row h-100vh overflow-hidden font-poppins;
}
</style>
