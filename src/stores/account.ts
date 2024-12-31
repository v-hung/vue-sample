import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  AccountControllerApi,
  UserDto,
  type LoginRequest,
  type LoginResponse,
} from '@/generate-api'
import { accountApi, configWithRefreshToken } from '@/lib/api'
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
    // return (user.value = {
    //   name: 'Việt Hùng',
    //   email: 'hungnv@wbcvn.vn',
    //   id: 1,
    //   username: 'hungnv@wbcvn.vn',
    //   roles: [],
    // })

    await new AccountControllerApi(configWithRefreshToken)
      .getCurrentUser()
      .then(res => {
        user.value = res
      })
      .catch(error => console.log(error))
  }

  return { isLogged, user, login, logged }
})
