import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { LoginRequest, LoginResponse, UserDto } from '@/generate-api'
import { accountApi } from '@/lib/api'
import { useNotifyPromise } from '@/lib/promise'

export const useAccountStore = defineStore('account', () => {
  const isLogged = ref(true)
  const user = ref<UserDto>()
  const accessToken = ref()
  const refreshToken = ref()

  async function login(
    request: LoginRequest,
    cb: (response: LoginResponse | null) => void,
  ) {
    const response = await useNotifyPromise({
      callback: accountApi.login(request),
    })

    if (response) {
      user.value = response.user
      accessToken.value = response.token
      refreshToken.value = response.refreshToken
    }

    if (cb) {
      cb(response)
    }
  }

  async function logged() {
    // user.value = {
    //   name: 'Việt Hùng',
    // }
    // return

    return accountApi
      .getCurrentUser()
      .then(res => {
        user.value = res
      })
      .catch(error => console.log(error))
  }

  return { isLogged, user, login, logged }
})
