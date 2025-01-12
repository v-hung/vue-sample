<script lang="ts" setup>
import { WorkTimeCreateUpdateRequest } from '@/generate-api'
import { workTimeApi } from '@/lib/api'
import { onMounted, reactive, ref, watch } from 'vue'
import TimePicker from 'ant-design-vue/es/time-picker/date-fns'
import { useRoute, useRouter } from 'vue-router'
import {
  workTimeDisabledTime,
  workTimeValidateTime,
} from '@/utils/workTimeUtil'

const route = useRoute()
const router = useRouter()

// Stages
const isOpen = ref<boolean>(
  ['work-times-create', 'work-times-edit'].includes(
    route.name?.toString() ?? '',
  ),
)
const loading = ref<boolean>(false)
const formRef = ref()
const formState = reactive<
  WorkTimeCreateUpdateRequest & { id: number | undefined }
>({
  id: undefined,
  title: '',
  startTimeMorning: undefined,
  endTimeMorning: undefined,
  startTimeAfternoon: undefined,
  endTimeAfternoon: undefined,
  allowedLateMinutes: undefined,
})

// const rules

// Methods
const handelSubmit = () => {
  formRef.value.validate().then(async () => {
    loading.value = true

    if (formState.id) {
      await workTimeApi.updateWorkTime(formState.id, formState)
    } else {
      await workTimeApi.createWorkTime(formState)
    }

    loading.value = false

    router.push('/work-times')
  })
}

const getDataDetail = async () => {
  try {
    if (
      !['work-times-create', 'work-times-edit'].includes(
        route.name?.toString() ?? '',
      )
    ) {
      isOpen.value = false

      return formRef.value.resetFields()
    }

    isOpen.value = true

    if (route.name == 'work-times-edit') {
      loading.value = true
      const body = await workTimeApi.getWorkTime(+route.params.id)

      Object.assign(formState, {
        id: body.id,
        title: body.title,
        startTimeMorning: body.startTimeMorning,
        endTimeMorning: body.endTimeMorning,
        startTimeAfternoon: body.startTimeAfternoon,
        endTimeAfternoon: body.endTimeAfternoon,
        allowedLateMinutes: body.allowedLateMinutes,
      })

      loading.value = false
    }
  } catch (error) {
    console.error(error)
  }
}

watch(
  () => route.path,
  async _ => {
    getDataDetail()
  },
)

// LifeCycle
onMounted(async () => {
  getDataDetail()
})
</script>

<template>
  <a-drawer
    v-model:open="isOpen"
    :root-class-name="`custom-drawer ${loading || loading ? 'loading' : ''}`"
    title="Update work-times"
    placement="right"
    @close="() => router.push('/work-times')"
  >
    <template #extra>
      <a-space>
        <a-button @click="() => router.push('/work-times')">Cancel</a-button>
        <a-button @click="handelSubmit">Submit</a-button>
      </a-space>
    </template>
    <a-form ref="formRef" layout="vertical" v-model:model="formState">
      <div class="grid grid-cols-12 gap-x-6">
        <a-form-item
          label="Title"
          name="title"
          class="col-span-12"
          :rules="[
            { required: true, message: 'Please choose Correction date!' },
          ]"
        >
          <a-input v-model:value="formState.title" />
        </a-form-item>

        <a-form-item
          label="Start Time Morning"
          name="startTimeMorning"
          class="col-span-6"
          :rules="[
            { required: true, message: 'Please choose Correction date!' },
            {
              validator: workTimeValidateTime(),
            },
          ]"
        >
          <TimePicker
            format="HH:mm"
            value-format="HH:mm:ss"
            v-model:value="formState.startTimeMorning"
            :disabled-time="workTimeDisabledTime"
            :hideDisabledOptions="true"
            :showNow="false"
            popup-class-name="custom-time-picker"
            class="w-full"
          />
        </a-form-item>

        <a-form-item
          label="End Time Morning"
          name="endTimeMorning"
          class="col-span-6"
          :rules="[
            { required: true, message: 'Please choose Correction date!' },
            {
              validator: workTimeValidateTime(),
            },
          ]"
        >
          <TimePicker
            format="HH:mm"
            value-format="HH:mm:ss"
            v-model:value="formState.endTimeMorning"
            :disabled-time="workTimeDisabledTime"
            :hideDisabledOptions="true"
            :showNow="false"
            popup-class-name="custom-time-picker"
            class="w-full"
          />
        </a-form-item>

        <a-form-item
          label="Start Time Afternoon"
          name="startTimeAfternoon"
          class="col-span-6"
          :rules="[
            { required: true, message: 'Please choose Correction date!' },
            {
              validator: workTimeValidateTime(),
            },
          ]"
        >
          <TimePicker
            format="HH:mm"
            value-format="HH:mm:ss"
            v-model:value="formState.startTimeAfternoon"
            :disabled-time="workTimeDisabledTime"
            :hideDisabledOptions="true"
            :showNow="false"
            popup-class-name="custom-time-picker"
            class="w-full"
          />
        </a-form-item>

        <a-form-item
          label="End Time Afternoon"
          name="endTimeAfternoon"
          class="col-span-6"
          :rules="[
            { required: true, message: 'Please choose Correction date!' },
            {
              validator: workTimeValidateTime(),
            },
          ]"
        >
          <TimePicker
            format="HH:mm"
            value-format="HH:mm:ss"
            v-model:value="formState.endTimeAfternoon"
            :disabled-time="workTimeDisabledTime"
            :hideDisabledOptions="true"
            :showNow="false"
            popup-class-name="custom-time-picker"
            class="w-full"
          />
        </a-form-item>

        <a-form-item
          label="Allowed Late Minutes"
          name="allowedLateMinutes"
          class="col-span-12"
          :rules="[
            { required: true, message: 'Please choose Correction date!' },
          ]"
        >
          <a-input-number v-model:value="formState.allowedLateMinutes" />
        </a-form-item>
      </div>
    </a-form>

    <div
      class="ant-drawer-loading absolute left-0 top-0 hidden h-full w-full place-items-center bg-white/50"
    >
      <i-bx-loader-alt class="animate-spin text-primary-500" />
    </div>
  </a-drawer>
</template>

<style lang="postcss">
.custom-drawer .ant-drawer-content-wrapper {
  @apply !w-full max-w-screen-md;
}

.custom-drawer .ant-drawer-wrapper-body {
  @apply relative;
}

.custom-drawer.loading .ant-drawer-body {
  @apply overflow-hidden;
}

.custom-drawer.loading .ant-drawer-loading {
  @apply !grid;
}

.custom-drawer-collapse .ant-collapse-header {
  @apply !p-0;
}

.custom-drawer-collapse .ant-collapse-content-box {
  @apply !px-0;
}

.custom-time-picker.ant-picker-dropdown .ant-picker-time-panel-column::after {
  height: 0px !important;
}
</style>
