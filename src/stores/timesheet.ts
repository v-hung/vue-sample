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

    startTime.value = localTimeToDate(data?.startTime)
    timeDifference.value = startTime.value!.getTime() - new Date().getTime()
  }

  const checkOut = async () => {
    const data = await useNotifyPromise({
      callback: timeSheetApi.checkOut(),
    })

    endTime.value = localTimeToDate(data?.endTime)
  }

  const today = async () => {
    const data = await timeSheetApi.getTodayTimeSheet()

    startTime.value = localTimeToDate(data?.startTime)
    endTime.value = localTimeToDate(data?.endTime)
  }

  return { startTime, endTime, timeDifference, checkIn, checkOut, today }
})
