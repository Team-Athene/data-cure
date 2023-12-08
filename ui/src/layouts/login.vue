<template>
  <main
    text="center gray-700 dark:gray-200"
    class="div-class"
  >
    <Header :hide-btn="true" bg-color="PRIMARY" />
    <RouterView />
  </main>
</template>

<style scoped>
.div-class{
  background: white;
  @apply h-100vh;
  }
</style>
