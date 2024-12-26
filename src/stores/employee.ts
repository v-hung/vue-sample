import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEmployeeStore = defineStore('employee', () => {
  // Stages
  const isUserUpdateOpen = ref<boolean>(false)
  const userUpdateId = ref<number>()

  // Methods
  const openDrawerUserUpdate = (id?: number) => {
    isUserUpdateOpen.value = true

    userUpdateId.value = id
  }

  return {
    isUserUpdateOpen,
    userUpdateId,
    openDrawerUserUpdate,
  }
})
