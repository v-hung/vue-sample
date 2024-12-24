<script lang="ts" setup>
import TimeSheetHeader from '@/features/timesheet/TimesheetHeader.vue'
import TimeSheetTable from '@/features/timesheet/TimesheetTable.vue'
import { defineAsyncComponent } from 'vue'

const TimeSheetModelCorrectionAsync = defineAsyncComponent(
  () => import('@/features/timesheet/TimeSheetModelCorrection.vue'),
)
</script>

<template>
  <div class="flex h-full flex-col pb-6">
    <TimeSheetHeader class="flex-none" />

    <div class="header-divine" />

    <TimeSheetTable />
  </div>

  <!--/* Models */-->
  <TimeSheetModelCorrectionAsync />
</template>
