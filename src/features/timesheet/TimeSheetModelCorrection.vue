<script setup lang="ts">
import { TicketRequestTypeEnum, type UserDto } from '@/generate-api'
import { approvalApi, ticketApi } from '@/lib/api'
import { useTimesheetStore } from '@/stores/timesheet'
import { getMessageError } from '@/utils/apiUtil'
import { formatDate } from '@/utils/dateUtil'
import {
  timesheetDisabledTime,
  timesheetValidateTime,
} from '@/utils/timeSheetUtil'
import { notification } from 'ant-design-vue'
import DatePicker from 'ant-design-vue/es/date-picker/date-fns'
import TimePicker from 'ant-design-vue/es/time-picker/date-fns'
import { onMounted, onUpdated, reactive, ref } from 'vue'

// Store
const timesheetStore = useTimesheetStore()

// Stages
const confirmLoading = ref<boolean>(false)
const reviews = ref<UserDto[]>([])
const formRef = ref()
const formState = reactive({
  reviewerId: '',
  correctionDate: '',
  startTime: '',
  endTime: '',
  reason: '',
})

// const rules

// Methods
const handelSubmit = async () => {
  formRef.value.validate().then(async () => {
    confirmLoading.value = true

    await ticketApi
      .createTicket({
        type: TicketRequestTypeEnum.TimesheetAdjustment,
        approverId: +formState.reviewerId,
        date: formState.correctionDate,
        typeSpecificData: {
          startTime: formState.startTime,
          endTime: formState.endTime,
        },
        description: formState.reason,
      })
      .then(() => {
        timesheetStore.isOpenModelCorrection = false
        confirmLoading.value = false

        notification.success({
          message: 'Successfully Completed',
          description: 'Create ticket successfully',
        })
      })
      .catch((error: any) => {
        notification.error({
          message: 'ERROR',
          description: getMessageError(error),
        })
      })
  })
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

onUpdated(() => {
  formState.correctionDate =
    timesheetStore.valueModelCorrection || formatDate(new Date(), 'yyyy-MM-dd')
})
</script>

<template>
  <a-modal
    title="Application for correction of attendance date"
    v-model:open="timesheetStore.isOpenModelCorrection"
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
              validator: timesheetValidateTime(timesheetStore.workTime!),
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
            { validator: timesheetValidateTime(timesheetStore.workTime!) },
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
