<script setup lang="ts">
const selected = ref()
const frameworks = [
  { text: 'VueJS', value: 'vue' },
  { text: 'ReactJS', value: 'react' },
  { text: 'AngularJS', value: 'angular' },
  { text: 'SolidJS', value: 'solid' },
  { text: 'AlpineJS', value: 'alpine' },
]
</script>

<template>
  <div class="main-register-div">
    <div class="max-w-400">
      <div>
        <AInput
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <div>
          <ASelect
            v-model="selected"
            placeholder="Select Fruit"
            :options="frameworks"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-register-div{
    @apply h-100vh items-center m-auto
}
</style>

<route lang="yaml">
  meta:
    layout: login
      </route>
