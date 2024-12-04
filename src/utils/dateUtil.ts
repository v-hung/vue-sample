import type { LocalTime } from '@/generate-api'
import dayjs from 'dayjs'

export function formatDurationTime(startTime?: Date, endTime?: Date) {
  if (!startTime) return '00:00:00'

  const duration = new Date().getTime() - startTime.getTime()
  return dayjs.duration(duration).format('HH:mm:ss')
}

export function localTimeToDate(localTime: LocalTime) {
  const date = new Date()
  date.setHours(
    localTime.hour ?? 0,
    localTime.minute ?? 0,
    localTime.second ?? 0,
    (localTime.nano ?? 0) / 1000000,
  )
  return date
}

export function localTimeToTime(localTime: LocalTime) {
  return localTimeToDate(localTime).getTime()
}
