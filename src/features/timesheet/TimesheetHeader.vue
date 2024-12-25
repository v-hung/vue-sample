<script lang="ts" setup>
import IonPauseCircleOutline from '~icons/ion/pause-circle-outline'
import IonPlayCircleOutline from '~icons/ion/play-circle-outline'
import IonStopwatchOutline from '~icons/ion/stopwatch-outline'
import { useTimesheetStore } from '@/stores/timesheet'
import { formatDate } from '@/utils/dateUtil'
import { calculateWorkDay } from '@/utils/timesheetUtil'
import { onMounted, onUnmounted, ref, computed, watch, h } from 'vue'

// Store
const timesheetStore = useTimesheetStore()

// State
const firstLoading = ref(true)
const checkInLoading = ref(false)
const checkOutLoading = ref(false)
const intervalId = ref<ReturnType<typeof setInterval> | null>(null)

// Computed
const timeString = ref(
  timesheetStore.startTime
    ? formatDate(timesheetStore.startTime)
    : '--:-- <> --:--:--',
)

// Methods
const startTimer = () => {
  updateTimeUI()

  if (!timesheetStore.endTime) {
    intervalId.value = setInterval(updateTimeUI, 1000)
  }
}

const stopTimer = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
}

const checkIn = async () => {
  checkInLoading.value = true
  try {
    await timesheetStore.checkIn()
    if (timesheetStore.startTime) {
      startTimer()
    }
  } finally {
    checkInLoading.value = false
  }
}

const checkOut = async () => {
  checkOutLoading.value = true
  try {
    await timesheetStore.checkOut()
    stopTimer()
  } finally {
    checkOutLoading.value = false
  }
}

const updateTimeUI = () => {
  if (!timesheetStore.startTime) {
    timeString.value = '--:-- <> --:--:--'
    return
  }

  let currentServerTime = new Date(Date.now() - timesheetStore.timeDifference)
  let currentServerTimeFormatted = formatDate(currentServerTime, 'HH:mm:ss')

  let durationWork = calculateWorkDay(
    timesheetStore.startTime,
    currentServerTime,
    timesheetStore.workTime!,
  )

  timeString.value = `${durationWork.toFixed(2)} <> ${currentServerTimeFormatted}`
}

// Lifecycle hooks
onMounted(async () => {
  try {
    await Promise.all([
      timesheetStore.today(),
      timesheetStore.getCurrentWorkTime(),
    ])

    if (timesheetStore.startTime) {
      startTimer()
    }
  } finally {
    firstLoading.value = false
  }
})

onUnmounted(() => stopTimer())
</script>

<template>
  <a-page-header
    title="Timesheet"
    sub-title="Track your work hours effectively"
  >
    <template v-if="timesheetStore.startTime" #tags>
      <a-tag :color="!timesheetStore.endTime ? 'blue' : 'red'">{{
        !timesheetStore.endTime
          ? `Started at ${formatDate(timesheetStore.startTime)}`
          : 'Stopped'
      }}</a-tag>
    </template>
    <template #extra>
      <template v-if="firstLoading">
        <a-skeleton-input :active="true" class="w-52" />
      </template>
      <template v-else>
        <a-button key="3" @click="timesheetStore.openModelCorrection()"
          >Correction</a-button
        >
        <a-button key="2">Leave</a-button>
        <a-button-group>
          <a-button
            :icon="
              h(IonStopwatchOutline, {
                class: timesheetStore.startTime ? 'text-cyan-600' : '',
              })
            "
            class="pointer-events-none flex items-center gap-2"
            >{{ timeString }}</a-button
          >
          <template v-if="!timesheetStore.startTime">
            <a-button
              @click="checkIn"
              :loading="checkInLoading"
              class="flex items-center"
            >
              <IonPlayCircleOutline class="text-cyan-600" />
            </a-button>
          </template>
          <template v-else>
            <a-popconfirm
              title="Are you sure you want to checkout?"
              ok-text="Yes"
              placement="bottomRight"
              cancel-text="No"
              @confirm="checkOut"
              :disabled="timesheetStore.endTime != undefined"
            >
              <a-button
                :loading="checkOutLoading"
                :danger="true"
                :disabled="timesheetStore.endTime != undefined"
                class="flex items-center"
              >
                <IonPauseCircleOutline />
              </a-button>
            </a-popconfirm>
          </template>
        </a-button-group>
      </template>
    </template>
  </a-page-header>
</template>
