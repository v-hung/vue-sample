import { ApiException } from '@/generate-api'

export const getMessageError = (error: any): string => {
  return error instanceof ApiException
    ? JSON.parse(error.body)?.message || 'Oups! Something went wrong!'
    : 'Oups! Something went wrong!'
}
