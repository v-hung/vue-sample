<script lang="ts" setup>
import TimesheetHeader from '@/features/timesheet/TimesheetHeader.vue'
import TimesheetTable from '@/features/timesheet/TimesheetTable.vue'
import { defineAsyncComponent } from 'vue'

const TimesheetModelCorrectionAsync = defineAsyncComponent(
  () => import('@/features/timesheet/TimesheetModelCorrection.vue'),
)
</script>

<template>
  <div class="flex h-full flex-col pb-6">
    <TimesheetHeader class="flex-none" />

    <div class="header-divine" />

    <TimesheetTable />
  </div>

  <!--/* Models */-->
  <TimesheetModelCorrectionAsync />
</template>
