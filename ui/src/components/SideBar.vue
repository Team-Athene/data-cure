<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const userTabs = [
  { title: 'File Management', icon: 'i-bx-folder-open', link: '/user' },
  { title: 'File Upload', icon: 'i-bx-paperclip', link: '/user/upload-file' },
  { title: 'Access Requests', icon: 'i-bx-user-check', link: '/user/access-requests' },
  { title: 'Data Hub', icon: 'i-bx-search-alt', link: '/user/data-hub' },
]
const hospitalTabs = [
  { title: 'File Management', icon: 'i-bx-folder-open', link: '/health-organization' },
  { title: 'File Upload', icon: 'i-bx-paperclip', link: '/health-organization/upload-file' },
  { title: 'Access Requests', icon: 'i-bx-user-check', link: '/health-organization/access-requests' },
  { title: 'Manage Doctors', icon: 'i-bx-list-ul', link: '/health-organization/manage-doctors' },
  { title: 'Data Hub', icon: 'i-bx-search-alt', link: '/health-organization/data-hub' },
]
const researcherTabs = [
  { title: 'Accessed Files', icon: 'i-bx-folder-open', link: '/research-organization' },
  { title: 'Requested Accesses', icon: 'i-bx-user-check', link: '/research-organization/access-requests' },
  { title: 'Data Hub', icon: 'i-bx-search-alt', link: '/research-organization/data-hub' },
  { title: 'Town Hall', icon: 'i-bx-building-house', link: '/research-organization/town-hall' },
]

const currentTab = computed(() => {
  const currentRoute = route.path.split('/')[1]
  switch (currentRoute) {
    case 'user':
      return userTabs
    case 'health-organization':
      return hospitalTabs
    case 'researcher':
      return researcherTabs
    default:
      return userTabs
  }
})

const selectedTab = computed(() => {
  return userTabs.find((tab) => tab.link === route.path)
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