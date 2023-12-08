<template>
  <main
    text="center gray-700 dark:gray-200"
    class="div-class"
  >
    <Header bg-color="SECONDARY" />
    <RouterView />
  </main>
</template>

<style scoped>
.div-class{
  background: linear-gradient(180deg, #CCECDB 0%, #469DA9 100%);
  @apply h-100vh;
  }
</style>
