<script setup lang="ts">
import { USER_TABS, HOSPITAL_TABS, RESEARCHER_TABS } from '~/utils/constants';

const route = useRoute()
const router = useRouter()

const currentTab = computed(() => {
  const currentRoute = route.path.split('/')[1]
  switch (currentRoute) {
    case 'user':
      return USER_TABS
    case 'health-organization':
      return HOSPITAL_TABS
    case 'research-organization':
      return RESEARCHER_TABS
    default:
      return USER_TABS
  }
})

const selectedTab = computed(() => {
  const currentRoute = route.path.replace(/\/$/, '')
  return currentTab.value.find((tab) => tab.link === currentRoute)
})
</script>


<template>
<div class="bg-header_bg_primary w-[20%] h-100vh">
    <div my-30 w-full>
        <ABtn 
        v-for="tab of currentTab" 
        @click="router.push(tab.link)"
        class="w-full flex !justify-start px-6 py-6" 
        :key="tab.title" 
        :variant="selectedTab?.link === tab.link ? 'fill' : 'text'" 
        :icon="tab.icon">
          {{ tab.title }}
        </ABtn>
    </div>
</div>
</template>