import type { WorkTime } from '@/generate-api'
import type { SupportedLocale } from '@/i18n/translation'
import type {
  DisabledTime,
  DisabledTimes,
} from 'ant-design-vue/es/vc-picker/interface'
import {
  add,
  format,
  isAfter,
  isWithinInterval,
  parse,
  type Locale,
} from 'date-fns'
import { enUS, vi } from 'date-fns/locale'

const LOCALE_MAP: Record<SupportedLocale, Locale> = {
  'en-US': enUS,
  'vi-VN': vi,
}

export function formatDate(date: Date, formatStr: string = 'HH:mm:ss'): string {
  const storedLocale =
    (localStorage.getItem('locale') as SupportedLocale) || undefined
  const locale = LOCALE_MAP[storedLocale as SupportedLocale] || enUS

  return format(date, formatStr, {
    locale,
  })
}

export function localTimeToDate(localTime: string) {
  const today = new Date()
  const dateTimeString = today.toISOString().split('T')[0] + `T${localTime}`

  if (localTime.split('.').length > 1) {
    return parse(dateTimeString, "yyyy-MM-dd'T'HH:mm:ss.SSS", new Date())
  }
  return parse(dateTimeString, "yyyy-MM-dd'T'HH:mm:ss", new Date())
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
    console.log({ rule, value })
    if (!value) {
      return Promise.reject(new Error('Please choose End time!'))
    }

    const startTimeMorning = localTimeToDate(workTime.startTimeMorning)
    const endTimeMorning = localTimeToDate(workTime.endTimeMorning)
    const startTimeAfternoon = localTimeToDate(workTime.startTimeAfternoon)
    const endTimeAfternoon = localTimeToDate(workTime.endTimeAfternoon)

    console.log(1, 2)

    // heck the input value (convert to Date)
    const time = localTimeToDate(value)

    console.log(time)

    const isInMorning = isWithinInterval(time, {
      start: startTimeMorning,
      end: endTimeMorning,
    })
    const isInAfternoon = isWithinInterval(time, {
      start: startTimeAfternoon,
      end: endTimeAfternoon,
    })

    console.log(isInMorning, isInAfternoon)

    // Minute conditions
    const validMinutes = [0, 15, 30, 45].includes(time.getMinutes())

    if ((isInMorning || isInAfternoon) && validMinutes) {
      return Promise.resolve()
    }

    return Promise.reject(new Error('Invalid time.'))
  }
