<template>
  <div>
    <TimesheetHeader />

    <div class="mx-6 mb-4 h-0 border-0 border-b border-solid border-gray-200" />

    <div class="px-6">
      <TimesheetTable />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TimesheetHeader from '@/features/timesheet/TimesheetHeader.vue'
import TimesheetTable from '@/features/timesheet/TimesheetTable.vue'
</script>
