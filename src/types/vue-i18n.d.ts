/**
 * you need to import the some interfaces
 */
import type { MessageSchema } from '@/i18n/translation'
import {
  DefineLocaleMessage,
  DefineDateTimeFormat,
  DefineNumberFormat,
} from 'vue-i18n'

declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {
    short: {
      hour: 'numeric'
      minute: 'numeric'
      second: 'numeric'
      timeZoneName: 'short'
      timezone: string
    }
  }

  // define the number format schema
  export interface DefineNumberFormat {
    currency: {
      style: 'currency'
      currencyDisplay: 'symbol'
      currency: string
    }
  }
}
