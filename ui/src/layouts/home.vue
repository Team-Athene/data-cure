<script setup lang="ts">
onMounted(() => {
  console.log('home mounted')
})
</script>

<template>
  <main text="center gray-700 dark:gray-200" class="div-class">
    <Header bg-color="PRIMARY" />
    <RouterView />
  </main>
</template>

<style scoped>
.div-class {
  background: linear-gradient(180deg, #ccecdb 0%, #469da9 100%);
  @apply h-100vh;
}
</style>
