import type { LocalTime } from '@/generate-api'
import dayjs from 'dayjs'

export function formatDurationTime(startTime?: Date, endTime?: Date) {
  if (!startTime) return '00:00:00'

  const duration = new Date().getTime() - startTime.getTime()
  return dayjs.duration(duration).format('HH:mm:ss')
}

export function convertLocalTimeToDates(localTime?: LocalTime) {
  if (!localTime) return new Date()

  const date = new Date()
  date.setHours(
    localTime.hour ?? 0,
    localTime.minute ?? 0,
    localTime.second ?? 0,
    (localTime.nano ?? 0) / 1000000,
  )
  return date
}
