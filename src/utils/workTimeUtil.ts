import type { DisabledTime } from 'ant-design-vue/es/vc-picker/interface'
import { localTimeToDate } from './dateUtil'
import type { WorkTime } from '@/generate-api'
import { isWithinInterval } from 'date-fns'

export const workTimeDisabledTime: DisabledTime<Date> = (now: Date | null) => {
  return {
    disabledHours: () => {
      return []
    },
    disabledMinutes: (selectedHour: number) => {
      const allowedMinutes = [0, 10, 20, 30, 40, 50]
      return Array.from({ length: 60 }, (_, i) => i).filter(
        minute => !allowedMinutes.includes(minute),
      )
    },
    disabledSeconds: () => {
      return []
    },
  }
}

export const workTimeValidateTime = () => (rule: any, value: string) => {
  if (!value) {
    return Promise.reject(new Error('Please choose time!'))
  }

  const time = localTimeToDate(value)

  const validMinutes = [0, 10, 20, 30, 40, 50].includes(time.getMinutes())

  if (validMinutes) {
    return Promise.resolve()
  }

  return Promise.reject(new Error('Invalid time.'))
}
