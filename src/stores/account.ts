import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { UserDto } from '@/generate-api'
import { accountApi } from '@/lib/api'

export const useAccountStore = defineStore('account', () => {
  const loading = ref(true)
  const user = ref<UserDto>()
  const accessToken = ref()
  const refreshToken = ref()

  async function login(username: string, password: string) {
    const response = await accountApi.login({
      username,
      password,
    })

    user.value = response.user
    accessToken.value = response.token
    refreshToken.value = response.refreshToken
  }

  async function logged() {
    await new Promise(resolve => setTimeout(resolve, 500))
    user.value = {}
  }

  return { loading, user, login, logged }
})
