<template>
  <div class="fixed left-0 top-0 z-50 h-1 w-full">
    <div
      ref="lineProcess"
      class="h-full w-0 rounded-r-full bg-blue-600 ease-in-out"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import { useTemplateRef, watch } from 'vue'

const lineProcess = useTemplateRef('lineProcess')

let timer: ReturnType<typeof setTimeout>
let timerEnd: ReturnType<typeof setTimeout>
let isLoading = false

const appStore = useAppStore()

watch(appStore.$state, state => {
  clearTimeout(timer)

  if (!state.routerLoading) {
    clearTimeout(timerEnd)

    if (!lineProcess.value) return

    if (isLoading) {
      isLoading = false
      lineProcess.value.style.width = '100%'
      lineProcess.value.style.transition = 'all .1s'

      timerEnd = setTimeout(() => {
        if (!lineProcess.value) return

        lineProcess.value.style.width = '0'
        lineProcess.value.style.transition = null as never
      }, 100)
    }
  } else {
    if (!lineProcess.value) return

    lineProcess.value.style.transition = null as never
    lineProcess.value.style.width = '0'

    timer = setTimeout(() => {
      isLoading = true
      if (!lineProcess.value) return
      if (state.routerLoading) {
        // lineProcess.value.style.width = '0'
        lineProcess.value.style.transition = 'all 2s'
        lineProcess.value.style.width = '70%'
        // setTimeout(() => {
        // }, 0);
      }
    }, 500)
  }
})
</script>
