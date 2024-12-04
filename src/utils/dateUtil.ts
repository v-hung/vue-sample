import type { LocalTime } from '@/generate-api'
import type { SupportedLocale } from '@/i18n/translation'
import { format, type Locale } from 'date-fns'
import { enUS, vi } from 'date-fns/locale'

const LOCALE_MAP: Record<SupportedLocale, Locale> = {
  'en-US': enUS,
  'vi-VN': vi,
}

export function formatDate(date: Date, formatStr: string = 'PP'): string {
  const storedLocale =
    (localStorage.getItem('locale') as SupportedLocale) || undefined
  const locale = LOCALE_MAP[storedLocale as SupportedLocale] || enUS

  return format(date, formatStr, {
    locale,
  })
}

export function localTimeToDate(localTime: LocalTime) {
  const baseDate = new Date(1970, 0, 1)

  baseDate.setHours(
    localTime.hour ?? 0,
    localTime.minute ?? 0,
    localTime.second ?? 0,
    (localTime.nano ?? 0) / 1000000,
  )

  return baseDate
}
