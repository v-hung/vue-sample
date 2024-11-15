<script lang="ts" setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'

const selectedKeys = ref(['1'])
const openKeys = ref(['sub1'])

const appStore = useAppStore()
</script>

<template>
  <div class="h-screen w-64">
    <div class="flex">asd</div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :items="appStore.accessibleMenus"
    />
  </div>
</template>

<style scoped>
:deep(.ant-menu-light) {
  background-color: transparent;
}

:deep(.ant-menu-light .ant-menu-item-selected) {
  @apply border border-solid border-blue-200;
}
</style>
