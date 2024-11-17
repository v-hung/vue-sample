<template>
  <div
    class="flex items-center gap-4 border-0 border-b border-solid border-gray-300 bg-white px-6 py-2"
  >
    <div class="flex gap-4">
      <span class="text-lg font-medium text-gray-500">Home</span>
    </div>
    <div class="ml-auto">
      <a-dropdown
        :trigger="['click']"
        placement="bottomLeft"
        :arrow="{ pointAtCenter: false }"
      >
        <a-avatar :size="32" class="cursor-pointer">
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <template #overlay>
          <DropdownUser />
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
