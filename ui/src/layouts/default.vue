<script setup lang="ts">
onMounted(() => {
  console.log('default mounted')
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
  background: white;
}
</style>
