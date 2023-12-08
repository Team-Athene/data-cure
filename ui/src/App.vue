<script setup lang="ts">
import { useAnu } from 'anu-vue'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg

const { themes } = useAnu()

themes.value.light.colors.primary = '180, 100%, 35%'

useHead({
  title: 'DataCure Protocol',
  meta: [
    {
      name: 'description',
      content: 'Blockchain Based Health Data Management Protocol',
    },
    {
      name: 'theme-color',
      content: () => (isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => (preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
