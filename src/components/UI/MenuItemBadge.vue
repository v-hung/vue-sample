<template>
  <a-menu-item :icon="props.menu.icon" :key="props.menu.path">
    <span>{{ $t(props.menu.title) }}</span>
    <span
      v-if="props.menu.badge"
      class="bg-primary-500 ml-auto min-w-5 rounded px-1.5 py-1 text-xs text-white"
      >{{ props.menu.badge > 9 ? '9+' : props.menu.badge }}</span
    >
  </a-menu-item>
</template>

<script setup lang="ts">
import type { MenuItem } from '@/types/app'

const props = defineProps<{ menu: MenuItem }>()
</script>

<style>
.ant-menu-inline.ant-menu-root .ant-menu-item > .ant-menu-title-content,
.ant-menu-inline.ant-menu-root
  .ant-menu-submenu-title
  > .ant-menu-title-content {
  display: flex;
  height: 40px;
  line-height: initial;
  align-items: center;
}
</style>
