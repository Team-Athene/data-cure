<script setup lang="ts">
onMounted(() => {
  console.log('default mounted')
})
</script>

<template>
  <main text="left" class="div-class">
      <Header bg-color="PRIMARY" />
      <SideBar/>
    <div class="w-80% overflow-y-scroll px-20 pt-28">
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
