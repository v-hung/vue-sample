<template>
  <a-page-header
    title="TimeSheet"
    sub-title="Track your work hours effectively"
  >
    <template v-if="timeSheetStore.startTime" #tags>
      <a-tag :color="!timeSheetStore.endTime ? 'blue' : 'red'">{{
        !timeSheetStore.endTime ? 'Running' : 'Stopped'
      }}</a-tag>
    </template>
    <template #extra>
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
            :loading="loading"
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
              :loading="loading"
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
  </a-page-header>
</template>

<script lang="ts" setup>
import PauseIcon from '@/assets/PauseIcon.vue'
import PlayIcon from '@/assets/PlayIcon.vue'
import StopWatchIcon from '@/assets/StopWatchIcon.vue'
import { formatDurationTime } from '@/lib/utils'
import { useTimeSheetStore } from '@/stores/timeSheet'
import { onMounted, onUnmounted, ref } from 'vue'
import { h } from 'vue'

const timeSheetStore = useTimeSheetStore()

const timeString = ref(formatDurationTime(timeSheetStore.startTime))

let timmer: ReturnType<typeof setInterval> | undefined = undefined

const updateElapsedTime = () => {
  timeString.value = formatDurationTime(timeSheetStore.startTime)
}

const loading = ref(false)

const checkIn = async () => {
  loading.value = true
  await timeSheetStore.checkIn()
  loading.value = false

  if (timeSheetStore.startTime) {
    timmer = setInterval(updateElapsedTime, 1000)
  }
}

const checkOut = async () => {
  loading.value = true
  await timeSheetStore.checkOut()

  loading.value = false
  clearInterval(timmer)
}

onMounted(() => {
  if (timeSheetStore.startTime) {
    timmer = setInterval(updateElapsedTime, 1000)
  }
})

onUnmounted(() => clearInterval(timmer))
</script>
