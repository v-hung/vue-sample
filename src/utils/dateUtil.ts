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

  // if (localTime.split('.').length > 1) {
  //   return parse(dateTimeString, "yyyy-MM-dd'T'HH:mm:ss.SSS", new Date())
  // }
  return parse(dateTimeString, "yyyy-MM-dd'T'HH:mm:ss", new Date())
}
