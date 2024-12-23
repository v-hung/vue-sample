<script lang="ts" setup>
import PauseIcon from '@/assets/PauseIcon.vue'
import PlayIcon from '@/assets/PlayIcon.vue'
import StopWatchIcon from '@/assets/StopWatchIcon.vue'
import { useTimeSheetStore } from '@/stores/timesheet'
import { formatDate } from '@/utils/dateUtil'
import { calculateWorkDay } from '@/utils/timeSheetUtil'
import { onMounted, onUnmounted, ref, computed, watch, h } from 'vue'

// Store
const timeSheetStore = useTimeSheetStore()

// State
const firstLoading = ref(true)
const checkInLoading = ref(false)
const checkOutLoading = ref(false)
const intervalId = ref<ReturnType<typeof setInterval> | null>(null)

// Computed
const timeString = ref(
  timeSheetStore.startTime
    ? formatDate(timeSheetStore.startTime)
    : '--:-- <> --:--:--',
)

// Methods
const startTimer = () => {
  updateTimeUI()

  if (!timeSheetStore.endTime) {
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
    await timeSheetStore.checkIn()
    if (timeSheetStore.startTime) {
      startTimer()
    }
  } finally {
    checkInLoading.value = false
  }
}

const checkOut = async () => {
  checkOutLoading.value = true
  try {
    await timeSheetStore.checkOut()
    stopTimer()
  } finally {
    checkOutLoading.value = false
  }
}

const updateTimeUI = () => {
  if (!timeSheetStore.startTime) {
    timeString.value = '--:-- <> --:--:--'
    return
  }

  let currentServerTime = new Date(Date.now() - timeSheetStore.timeDifference)
  let currentServerTimeFormatted = formatDate(currentServerTime, 'HH:mm:ss')

  let durationWork = calculateWorkDay(
    timeSheetStore.startTime,
    currentServerTime,
    timeSheetStore.workTime!,
  )

  timeString.value = `${durationWork.toFixed(2)} <> ${currentServerTimeFormatted}`
}

// Lifecycle hooks
onMounted(async () => {
  try {
    await Promise.all([
      timeSheetStore.today(),
      timeSheetStore.getCurrentWorkTime(),
    ])

    if (timeSheetStore.startTime) {
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
    title="TimeSheet"
    sub-title="Track your work hours effectively"
  >
    <template v-if="timeSheetStore.startTime" #tags>
      <a-tag :color="!timeSheetStore.endTime ? 'blue' : 'red'">{{
        !timeSheetStore.endTime
          ? `Started at ${formatDate(timeSheetStore.startTime)}`
          : 'Stopped'
      }}</a-tag>
    </template>
    <template #extra>
      <template v-if="firstLoading">
        <a-skeleton-input :active="true" class="w-52" />
      </template>
      <template v-else>
        <a-button key="3" @click="timeSheetStore.openModelCorrection()"
          >Correction</a-button
        >
        <a-button key="2">Leave</a-button>
        <a-button-group>
          <a-button
            :icon="
              h(StopWatchIcon, {
                class: timeSheetStore.startTime ? 'text-cyan-600' : '',
              })
            "
            class="pointer-events-none flex items-center gap-2"
            >{{ timeString }}</a-button
          >
          <template v-if="!timeSheetStore.startTime">
            <a-button
              @click="checkIn"
              :loading="checkInLoading"
              class="flex items-center"
            >
              <PlayIcon class="text-cyan-600" />
            </a-button>
          </template>
          <template v-else>
            <a-popconfirm
              title="Are you sure you want to checkout?"
              ok-text="Yes"
              placement="bottomRight"
              cancel-text="No"
              @confirm="checkOut"
              :disabled="timeSheetStore.endTime != undefined"
            >
              <a-button
                :loading="checkOutLoading"
                :danger="true"
                :disabled="timeSheetStore.endTime != undefined"
                class="flex items-center"
              >
                <PauseIcon />
              </a-button>
            </a-popconfirm>
          </template>
        </a-button-group>
      </template>
    </template>
  </a-page-header>
</template>
