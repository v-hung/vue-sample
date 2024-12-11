import type { SupportedLocale } from '@/i18n/translation'
import { format, parse, type Locale } from 'date-fns'
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
  const defaultDate = '1970-01-01'
  const dateTimeString = `${defaultDate}T${localTime}`

  // Parse chuỗi ngày và giờ
  return parse(dateTimeString, "yyyy-MM-dd'T'HH:mm:ss.SSS", new Date())
}
