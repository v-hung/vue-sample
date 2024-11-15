import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', () => {
  const loading = ref(true)
  const user = ref(true)

  async function login() {
    await new Promise(resolve => setTimeout(resolve, 500))

    user.value = true
  }

  async function logged() {
    // await new Promise(resolve => setTimeout(resolve, 500))
  }

  return { loading, user, login, logged }
})
