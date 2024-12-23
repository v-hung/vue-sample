<script setup lang="ts">
import type { UserDto } from '@/generate-api'
import { approvalApi, ticketApi } from '@/lib/api'
import { useTimeSheetStore } from '@/stores/timesheet'
import { timesheetDisabledTime, timesheetValidateTime } from '@/utils/dateUtil'
import DatePicker from 'ant-design-vue/es/date-picker/date-fns'
import TimePicker from 'ant-design-vue/es/time-picker/date-fns'
import { onMounted, reactive, ref, toRaw, type UnwrapRef } from 'vue'

// Store
const timeSheetStore = useTimeSheetStore()

// Stages
const confirmLoading = ref<boolean>(false)
const reviews = ref<UserDto[]>([])
const formRef = ref()
const formState = reactive({
  reviewerId: '',
  correctionDate: undefined,
  startTime: undefined,
  endTime: undefined,
  reason: undefined,
})

// const rules

// Methods
const handelSubmit = async () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState))
    })
    .catch((error: any) => {
      console.log('error', error)
    })
  // ticketApi.createTicket({
  // })
}

const resetForm = () => {
  formRef.value.resetFields()
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
    title="Application for correction of attendance date"
    v-model:open="timeSheetStore.isOpenModelCorrection"
    :confirm-loading="confirmLoading"
    @ok="handelSubmit"
    @cancel="resetForm"
  >
    <a-form
      ref="formRef"
      layout="vertical"
      class="mt-4 border-t pt-4"
      v-model:model="formState"
    >
      <a-form-item
        label="Reviewer"
        name="reviewerId"
        :rules="[{ required: true, message: 'Please choose Reviewer!' }]"
      >
        <a-select
          placeholder="please choose Reviewer"
          v-model:value="formState.reviewerId"
          :loading="true"
        >
          <template v-for="review in reviews">
            <a-select-option :value="review.id">{{
              review.name
            }}</a-select-option>
          </template>
        </a-select>
      </a-form-item>
      <a-form-item
        label="Correction date"
        name="correctionDate"
        :rules="[{ required: true, message: 'Please choose Correction date!' }]"
      >
        <DatePicker
          value-format="yyyy-mm-dd"
          class="w-full"
          v-model:value="formState.correctionDate"
        />
      </a-form-item>
      <div class="flex gap-4">
        <a-form-item
          label="Start time"
          class="w-1/2"
          name="startTime"
          :rules="[
            { required: true, message: 'Please choose Correction date!' },
            {
              validator: timesheetValidateTime(timeSheetStore.workTime!),
            },
          ]"
        >
          <TimePicker
            format="HH:mm"
            value-format="HH:mm:ss"
            v-model:value="formState.startTime"
            :disabled-time="timesheetDisabledTime"
            :hideDisabledOptions="true"
            :showNow="false"
            popup-class-name="timesheet-time"
            class="w-full"
          />
        </a-form-item>
        <a-form-item
          label="End time"
          class="w-1/2"
          name="endTime"
          :rules="[
            { required: true, message: 'Please choose Correction date!' },
            { validator: timesheetValidateTime(timeSheetStore.workTime!) },
          ]"
        >
          <TimePicker
            format="HH:mm"
            value-format="HH:mm:ss"
            v-model:value="formState.endTime"
            :disabled-time="timesheetDisabledTime"
            :hideDisabledOptions="true"
            :showNow="false"
            popup-class-name="timesheet-time"
            class="w-full"
          />
        </a-form-item>
      </div>
      <a-form-item
        label="Reason"
        name="reason"
        :rules="[{ required: true, message: 'Please input your Reason!' }]"
      >
        <a-textarea :rows="4" v-model:value="formState.reason" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<style>
.timesheet-time.ant-picker-dropdown .ant-picker-time-panel-column::after {
  height: 0px !important;
}
</style>
