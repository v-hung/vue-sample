<script setup lang="ts">
import { SearchOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <a-page-header
    title="Inbox"
    sub-title="Manager and collaboration within your organization's teams"
    class="py-4"
  >
    <template #extra>
      <a-input placeholder="Enter search here" class="h-10 w-72">
        <template #prefix> <SearchOutlined /> </template
      ></a-input>
    </template>
  </a-page-header>
</template>
