<script lang="ts" setup>
import { requestNotificationPermission } from '@/lib/notification'
import { onMounted } from 'vue'

onMounted(() => {
  requestNotificationPermission()
})
</script>

<template>
  <div class="flex bg-[#f4f7fd]">
    <DefaultMenu />
    <div
      class="h-screen min-w-0 flex-grow overflow-y-auto border-0 border-l border-solid border-gray-200 bg-white shadow lg:rounded-l-2xl"
    >
      <RouterView />
    </div>
  </div>
</template>
