import { ApiException } from '@/generate-api'
import { notification } from 'ant-design-vue'

type SuccessResult<T> = T | null
type CallbackType<T> =
  | (() => Promise<T | undefined | void>)
  | Promise<T | undefined | void>

export const useNotifyPromise = async <T>({
  callback,
  successTitle,
}: {
  callback: CallbackType<T>
  successTitle?: string
}): Promise<SuccessResult<T>> => {
  try {
    const data =
      typeof callback === 'function' ? await callback() : await callback

    if (successTitle) {
      notification.success({
        message: 'Successfully Completed',
        description: successTitle,
      })
    }

    return (data ?? null) as SuccessResult<T>
  } catch (error) {
    const message =
      error instanceof ApiException
        ? JSON.parse(error.body)?.message || 'Oups! Something went wrong!'
        : 'Oups! Something went wrong!'

    notification.error({
      message: 'ERROR',
      description: message,
    })

    return null
  }
}
