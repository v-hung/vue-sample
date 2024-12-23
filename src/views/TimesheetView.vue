<script lang="ts" setup>
import TimeSheetHeader from '@/features/timesheet/TimeSheetHeader.vue'
import TimeSheetTable from '@/features/timesheet/TimeSheetTable.vue'
import { defineAsyncComponent } from 'vue'

const TimeSheetModelCorrectionAsync = defineAsyncComponent(
  () => import('@/features/timesheet/TimeSheetModelCorrection.vue'),
)
</script>

<template>
  <div class="flex h-full flex-col pb-6">
    <TimeSheetHeader class="flex-none" />

    <div
      class="mx-6 mb-4 h-0 flex-none border-0 border-b border-solid border-gray-200"
    />

    <TimeSheetTable />
  </div>

  <!--/* Models */-->
  <TimeSheetModelCorrectionAsync />
</template>
