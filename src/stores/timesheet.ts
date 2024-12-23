import { ref } from 'vue'
import { defineStore } from 'pinia'
import { accountApi, timeSheetApi } from '@/lib/api'
import { useNotifyPromise } from '@/lib/promise'
import { localTimeToDate } from '@/utils/dateUtil'
import type { WorkTime } from '@/generate-api'

export const useTimeSheetStore = defineStore('timeSheet', () => {
  // Stages
  const startTime = ref<Date>()
  const timeDifference = ref(0)
  const endTime = ref<Date>()
  const workTime = ref<WorkTime>()

  const isOpenModelCorrection = ref<boolean>(false)
  const valueModelCorrection = ref<string>()

  /**
   * CheckIn function
   */
  const checkIn = async () => {
    const data = await useNotifyPromise({
      callback: timeSheetApi.checkIn(),
    })

    startTime.value = data?.startTime
      ? localTimeToDate(data.startTime)
      : undefined
    timeDifference.value = Date.now() - startTime.value!.getTime()
  }

  /**
   * Checkout function
   */
  const checkOut = async () => {
    const data = await useNotifyPromise({
      callback: timeSheetApi.checkOut(),
    })

    endTime.value = data?.endTime ? localTimeToDate(data.endTime) : undefined
  }

  /**
   * Get today timesheet
   */
  const today = async () => {
    if (startTime.value) return

    const data = await timeSheetApi.getTodayTimeSheet()

    startTime.value = data.startTime
      ? localTimeToDate(data.startTime)
      : undefined
    endTime.value = data.endTime ? localTimeToDate(data.endTime) : undefined
  }

  /**
   * Get work time for current user
   */
  const getCurrentWorkTime = async () => {
    if (workTime.value) return

    workTime.value = await timeSheetApi.getTimes()
  }

  /**
   * open model timesheet correction
   *
   * @param data timesheetId
   */
  const openModelCorrection = (id?: string) => {
    isOpenModelCorrection.value = true

    valueModelCorrection.value = id
  }

  return {
    startTime,
    endTime,
    timeDifference,
    checkIn,
    checkOut,
    today,
    workTime,
    getCurrentWorkTime,
    isOpenModelCorrection,
    valueModelCorrection,
    openModelCorrection,
  }
})
