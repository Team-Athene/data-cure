<template>
    <main
      text="center gray-700 dark:gray-200"
      class="div-class"
    >
      <Header bg-color="PRIMARY" />
      <RouterView />
    </main>
  </template>
  
  <style scoped>
  .div-class{
    background: red;
    @apply h-100vh;
    }
  </style>
  