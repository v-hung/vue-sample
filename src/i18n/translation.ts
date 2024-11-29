import { createI18n, type I18n, type I18nOptions, type Locale } from 'vue-i18n'
import enUS from '@/i18n/locales/en-US.json'
import { nextTick } from 'vue'

// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = typeof enUS

export const SUPPORT_LOCALES = ['en-US', 'vi-VN'] as const
export type SupportedLocales = (typeof SUPPORT_LOCALES)[number]

const defaultLocale: SupportedLocales =
  (localStorage.getItem('locale') as SupportedLocales) || 'en-US'

type Messages = {
  [locale in SupportedLocales]: MessageSchema
}

let i18nInstance: I18n<Messages, any, any, string, true>

// Define the i18n instance with strong typing
export async function setupI18n() {
  if (!i18nInstance) {
    i18nInstance = createI18n<[MessageSchema], SupportedLocales>({
      locale: defaultLocale,
      fallbackLocale: 'en-US',
      messages: { 'en-US': enUS } as any,
    })

    if (defaultLocale != 'en-US') {

      await loadLocaleMessages(i18nInstance, defaultLocale)
    }
    setI18nLanguage(i18nInstance, defaultLocale)
  }
  return i18nInstance
}

export function setI18nLanguage(i18n: I18n, locale: SupportedLocales): void {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    ;(i18n.global.locale as { value: SupportedLocales }).value = locale
  }

  localStorage.setItem('locale', locale)
  document.querySelector('html')?.setAttribute('lang', locale)
}

export async function loadLocaleMessages(
  i18n: I18n,
  locale: SupportedLocales,
): Promise<void> {
  // Load locale messages with dynamic import
  const messages = await import(`@/i18n/locales/${locale}.json`)

  // Set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}

export const switchLocale = async (locale: SupportedLocales) => {
  const i18n = await setupI18n()

  // load locale messages
  if (!i18n.global.availableLocales.includes(locale)) {
    await loadLocaleMessages(i18n, locale)
  }

  // set i18n language
  setI18nLanguage(i18n, locale)
}
