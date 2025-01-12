import type { WorkTime } from '@/generate-api'
import { localTimeToDate } from './dateUtil'
import {
  add,
  differenceInSeconds,
  isAfter,
  isBefore,
  isWithinInterval,
} from 'date-fns'
import type { DisabledTime } from 'ant-design-vue/es/vc-picker/interface'

export function calculateWorkDay(
  startTime: Date,
  endTime: Date,
  workTime: WorkTime,
): number {
  let totalWorkingSeconds = 0

  const startTimeMorning = localTimeToDate(workTime.startTimeMorning)
  const endTimeMorning = localTimeToDate(workTime.endTimeMorning)
  const startTimeAfternoon = localTimeToDate(workTime.startTimeAfternoon)
  const endTimeAfternoon = localTimeToDate(workTime.endTimeAfternoon)

  if (
    isInvalidTimeRange(startTime, endTime, startTimeMorning, endTimeAfternoon)
  ) {
    return totalWorkingSeconds
  }

  if (isAfter(startTime, startTimeMorning)) {
    let lateSeconds = differenceInSeconds(startTimeMorning, startTime)
    let adjustedSeconds = Math.min(
      workTime.allowedLateMinutes * 60,
      lateSeconds,
    )

    add(endTimeAfternoon, { seconds: adjustedSeconds })
  }

  // Calculate morning work minutes
  if (isBefore(startTime, endTimeMorning)) {
    let validMorningStart = isBefore(startTime, startTimeMorning)
      ? startTimeMorning
      : startTime
    let validMorningEnd = isAfter(endTime, endTimeMorning)
      ? endTimeMorning
      : endTime

    if (isBefore(validMorningStart, validMorningEnd)) {
      totalWorkingSeconds += differenceInSeconds(
        validMorningEnd,
        validMorningStart,
      )
    }
  }

  // Calculate afternoon work minutes
  if (isAfter(endTime, endTimeMorning)) {
    let validAfternoonStart = isBefore(startTime, startTimeAfternoon)
      ? startTime
      : startTimeAfternoon
    let validAfternoonEnd = isAfter(endTime, endTimeAfternoon)
      ? endTimeAfternoon
      : endTime

    if (isBefore(validAfternoonStart, validAfternoonEnd)) {
      totalWorkingSeconds += differenceInSeconds(
        validAfternoonEnd,
        validAfternoonStart,
      )
    }
  }

  return totalWorkingSeconds / 3600
}

function isInvalidTimeRange(
  startTime: Date,
  endTime: Date,
  startTimeMorning: Date,
  endTimeAfternoon: Date,
) {
  return (
    !startTime ||
    !endTime ||
    isAfter(startTime, endTime) ||
    isAfter(startTime, endTimeAfternoon) ||
    isBefore(endTime, startTimeMorning)
  )
}

export const timesheetDisabledTime: DisabledTime<Date> = (now: Date | null) => {
  return {
    disabledHours: () => {
      const allHours = Array.from({ length: 24 }, (_, i) => i)
      // Disabled hours: Before 8:00 a.m., from 12:00 p.m. to 1:00 p.m., and after 6:00 p.m.
      return allHours.filter(
        hour => hour < 8 || (hour > 12 && hour < 13) || hour > 18,
      )
    },
    disabledMinutes: (selectedHour: number) => {
      // If the hour is 13, only allow from 30 minutes onwards
      if (selectedHour === 13) {
        return Array.from({ length: 60 }, (_, i) => i).filter(
          minute => minute < 30 || ![0, 15, 30, 45].includes(minute),
        )
      }
      // For other hours, only minutes 0, 15, 30, 45 are allowed
      return Array.from({ length: 60 }, (_, i) => i).filter(
        minute => ![0, 15, 30, 45].includes(minute),
      )
    },
    disabledSeconds: () => [],
  }
}

export const timesheetValidateTime =
  (workTime: WorkTime) => (rule: any, value: string) => {
    if (!value) {
      return Promise.reject(new Error('Please choose time!'))
    }

    const startTimeMorning = localTimeToDate(workTime.startTimeMorning)
    const endTimeMorning = localTimeToDate(workTime.endTimeMorning)
    const startTimeAfternoon = localTimeToDate(workTime.startTimeAfternoon)
    const endTimeAfternoon = localTimeToDate(workTime.endTimeAfternoon)

    // heck the input value (convert to Date)
    const time = localTimeToDate(value)

    const isInMorning = isWithinInterval(time, {
      start: startTimeMorning,
      end: endTimeMorning,
    })
    const isInAfternoon = isWithinInterval(time, {
      start: startTimeAfternoon,
      end: endTimeAfternoon,
    })

    // Minute conditions
    const validMinutes = [0, 15, 30, 45].includes(time.getMinutes())

    if ((isInMorning || isInAfternoon) && validMinutes) {
      return Promise.resolve()
    }

    return Promise.reject(new Error('Invalid time.'))
  }
