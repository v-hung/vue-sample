import { notification } from 'ant-design-vue'

type SuccessResult<T> = T | null

export const useNotifyPromise = async <T>({
  callback,
  successTitle,
}: {
  callback: () => Promise<T | undefined | void>
  successTitle?: string
}): Promise<SuccessResult<T>> => {
  try {
    const data = await callback()

    if (successTitle) {
      notification.success({
        message: 'Successfully Completed',
        description: successTitle,
      })
    }

    return (data ?? null) as SuccessResult<T>
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Oups! Something went wrong!'

    notification.error({
      message: 'ERROR',
      description: message,
    })

    return null
  }
}
