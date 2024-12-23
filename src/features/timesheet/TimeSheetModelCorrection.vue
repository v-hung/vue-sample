<script setup lang="ts">
import type { UserDto } from '@/generate-api'
import { approvalApi, ticketApi } from '@/lib/api'
import { useTimeSheetStore } from '@/stores/timesheet'
import { onMounted, ref } from 'vue'

// Store
const timeSheetStore = useTimeSheetStore()

// Stages
const confirmLoading = ref<boolean>(false)
const reviews = ref<UserDto[]>([])

// Methods
const handelSubmit = async () => {
  // ticketApi.createTicket({
  // })
}

// Lifecycle
onMounted(async () => {
  approvalApi.getCandidates('TIMESHEET_ADJUSTMENT').then(data => {
    reviews.value = data
  })
})
</script>

<template>
  <a-modal
    v-model:open="timeSheetStore.isOpenModelCorrection"
    title="Application for correction of attendance date"
    :confirm-loading="confirmLoading"
    @ok="handelSubmit"
  >
    <a-form @submit="" layout="vertical" class="mt-4 border-t pt-4">
      <a-form-item
        label="Reviewer"
        :rules="[{ required: true, message: 'Please choose Reviewer!' }]"
      >
        <a-select placeholder="please choose Reviewer">
          <template v-for="review in reviews">
            <a-select-option :value="review.id">{{
              review.name
            }}</a-select-option>
          </template>
        </a-select>
      </a-form-item>
      <a-form-item
        label="Correction date"
        :rules="[{ required: true, message: 'Please choose Correction date!' }]"
      >
        <a-date-picker value-format="YYYY-MM-DD" class="w-full" />
      </a-form-item>
      <div class="flex gap-4">
        <a-form-item
          label="Start time"
          class="w-1/2"
          :rules="[{ required: true, message: 'Please choose Start time!' }]"
        >
          <a-time-picker
            format="HH:mm"
            value-format="HH:mm:ss"
            class="w-full"
          />
        </a-form-item>
        <a-form-item
          label="End time"
          class="w-1/2"
          :rules="[{ required: true, message: 'Please choose End time!' }]"
        >
          <a-time-picker
            format="HH:mm"
            value-format="HH:mm:ss"
            class="w-full"
          />
        </a-form-item>
      </div>
      <a-form-item
        label="Reason"
        :rules="[{ required: true, message: 'Please input your Reason!' }]"
      >
        <a-textarea :rows="4" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
