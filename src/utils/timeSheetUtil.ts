import type { WorkTime } from '@/generate-api'
import { localTimeToDate } from './dateUtil'
import { add, differenceInMinutes, isAfter, isBefore, toDate } from 'date-fns'

export function calculateWorkDay(
  startTime: Date,
  endTime: Date,
  workTime: WorkTime,
) {
  let totalWorkingMinutes = 0

  const startTimeMorning = localTimeToDate(workTime.startTimeMorning)
  const endTimeMorning = localTimeToDate(workTime.endTimeMorning)
  const startTimeAfternoon = localTimeToDate(workTime.startTimeAfternoon)
  const endTimeAfternoon = localTimeToDate(workTime.endTimeAfternoon)

  if (
    isInvalidTimeRange(startTime, endTime, startTimeMorning, endTimeAfternoon)
  ) {
    return totalWorkingMinutes
  }

  if (isAfter(startTime, startTimeMorning)) {
    let lateMinutes = differenceInMinutes(startTimeMorning, startTime)
    let adjustedMinutes = Math.min(workTime.allowedLateMinutes, lateMinutes)

    return add(endTimeAfternoon, { minutes: adjustedMinutes })
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
      totalWorkingMinutes += differenceInMinutes(
        validMorningStart,
        validMorningEnd,
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
      totalWorkingMinutes += differenceInMinutes(
        validAfternoonStart,
        validAfternoonEnd,
      )
    }
  }

  return totalWorkingMinutes
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
