<script setup lang="ts">
onMounted(() => {
  console.log('dashboard mounted')
})
</script>

<template>
  <main text="center gray-700" class="div-class">
    <Header bg-color="PRIMARY" />
    <RouterView />
  </main>
</template>

<style scoped>
.div-class {
  background: red;
}
</style>
