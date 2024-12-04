import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {
  AccountControllerApi,
  type LoginRequest,
  type LoginResponse,
  type UserDto,
} from '@/generate-api'
import { accountApi, config, configWithRefreshToken } from '@/lib/api'
import { useNotifyPromise } from '@/lib/promise'
import { AccountControllerApiResponseProcessor } from '@/generate-api/apis/AccountControllerApi'

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

    return new AccountControllerApi(configWithRefreshToken)
      .getCurrentUser()
      .then(res => {
        user.value = res
      })
      .catch(error => console.log(error))
  }

  return { isLogged, user, login, logged }
})
