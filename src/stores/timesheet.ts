import { ref } from 'vue'
import { defineStore } from 'pinia'
import { timeSheetApi } from '@/lib/api'
import { useNotifyPromise } from '@/lib/promise'
import { localTimeToDate } from '@/utils/dateUtil'

export const useTimeSheetStore = defineStore('timeSheet', () => {
  const startTime = ref<Date>()
  const timeDifference = ref(0)
  const endTime = ref<Date>()

  const checkIn = async () => {
    const data = await useNotifyPromise({
      callback: timeSheetApi.checkIn(),
    })

    startTime.value = data?.startTime
      ? localTimeToDate(data.startTime)
      : undefined
    timeDifference.value = startTime.value!.getTime() - new Date().getTime()
  }

  const checkOut = async () => {
    const data = await useNotifyPromise({
      callback: timeSheetApi.checkOut(),
    })

    endTime.value = data?.endTime ? localTimeToDate(data.endTime) : undefined
  }

  const today = async () => {
    if (startTime.value) return

    const data = await timeSheetApi.getTodayTimeSheet()

    startTime.value = data.startTime
      ? localTimeToDate(data.startTime)
      : undefined
    endTime.value = data.endTime ? localTimeToDate(data.endTime) : undefined
  }

  return { startTime, endTime, timeDifference, checkIn, checkOut, today }
})
