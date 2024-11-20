import dayjs from 'dayjs'

export function formatDurationTime(startTime?: Date, endTime?: Date) {
  if (!startTime) return '00:00:00'

  const duration = new Date().getTime() - startTime.getTime()
  return dayjs.duration(duration).format('HH:mm:ss')
}
