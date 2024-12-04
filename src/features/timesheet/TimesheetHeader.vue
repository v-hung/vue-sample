<template>
  <a-page-header
    title="TimeSheet"
    sub-title="Track your work hours effectively"
  >
    <template v-if="timeSheetStore.startTime" #tags>
      <a-tag :color="!timeSheetStore.endTime ? 'blue' : 'red'">{{
        !timeSheetStore.endTime
          ? `Started at ${formatDurationTime(timeSheetStore.startTime)}`
          : 'Stopped'
      }}</a-tag>
    </template>
    <template #extra>
      <template v-if="firstLoading">
        <a-skeleton-input :active="true" class="w-52" />
      </template>
      <template v-else>
        <a-button key="3">Repair</a-button>
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

<script lang="ts" setup>
import PauseIcon from '@/assets/PauseIcon.vue'
import PlayIcon from '@/assets/PlayIcon.vue'
import StopWatchIcon from '@/assets/StopWatchIcon.vue'
import { useTimeSheetStore } from '@/stores/timesheet'
import { formatDurationTime } from '@/utils/dateUtil'
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
    ? formatDurationTime(timeSheetStore.startTime)
    : '--:--',
)

// Methods
const startTimer = () => {
  if (!intervalId.value) {
    timeString.value = formatDurationTime(timeSheetStore.startTime)

    intervalId.value = setInterval(() => {
      if (timeSheetStore.startTime) {
        timeString.value = formatDurationTime(timeSheetStore.startTime)
      }
    }, 1000)
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

// Lifecycle hooks
onMounted(async () => {
  try {
    await timeSheetStore.today()
    if (timeSheetStore.startTime && !timeSheetStore.endTime) {
      startTimer()
    }
  } finally {
    firstLoading.value = false
  }
})

onUnmounted(() => stopTimer())
</script>
