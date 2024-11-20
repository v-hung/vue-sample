import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTimesheetStore = defineStore('timesheet', () => {
  const startTime = ref<Date>()
  const endTime = ref<Date>()

  const checkIn = async () => {
    await new Promise(resolve => setTimeout(resolve, 500))
    startTime.value = new Date()
  }

  const checkOut = async () => {
    await new Promise(resolve => setTimeout(resolve, 500))

    endTime.value = new Date()
  }

  return { startTime, endTime, checkIn, checkOut }
})
