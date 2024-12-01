<template>
  <div>
    <TimeSheetHeader />

    <div class="mx-6 mb-4 h-0 border-0 border-b border-solid border-gray-200" />

    <div class="px-6">
      <TimeSheetTable />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TimeSheetHeader from '@/features/timesheet/TimeSheetHeader.vue'
import TimeSheetTable from '@/features/timesheet/TimeSheetTable.vue'
</script>
