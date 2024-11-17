import { ref } from 'vue'
import { defineStore } from 'pinia'
import { MENUS_DEFAULT } from '@/lib/constant'
import type { MenuItem } from '@/types/app'
import { useAccountStore } from './account'
import { computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // router
  const routerLoading = ref<boolean>(false)

  function setRouterLoading(data: boolean) {
    routerLoading.value = data
  }

  // menus
  const menus = ref<MenuItem[]>(MENUS_DEFAULT)

  const accountStore = useAccountStore()

  const accessibleMenus = computed(() => {
    return menus.value
  })

  return { routerLoading, setRouterLoading, menus, accessibleMenus }
})
