<script lang="ts" setup>
import { useEmployeeStore } from '@/stores/employee'
import { computed } from 'vue'

const employeeStore = useEmployeeStore()

const afterOpenChange = (bool: boolean) => {
  console.log('open', bool)
}
</script>

<template>
  <a-drawer
    v-model:open="employeeStore.isUserUpdateOpen"
    class="custom-class"
    root-class-name="root-class-name"
    :root-style="{ color: 'blue' }"
    style="color: red"
    title="Basic Drawer"
    placement="right"
    @after-open-change="afterOpenChange"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
