<script setup lang="ts">
import { userApi } from '@/lib/api'
import { useNotifyPromise } from '@/lib/promise'
import { useDebounceFn } from '@vueuse/core'
import type { DefaultOptionType } from 'ant-design-vue/es/select'
import { onMounted, ref, watch } from 'vue'

const model = defineModel<number>('value')

const options = ref<DefaultOptionType[]>([])
const loading = ref(false)

const onSearch = useDebounceFn(async (searchText: string) => {
  if (!searchText) {
    return (options.value = [])
  }

  loading.value = true

  const body = await useNotifyPromise({
    callback: userApi.getUsers(
      { page: 1 },
      {
        name: searchText,
      },
    ),
  })

  options.value = body
    ? body.content.map(v => ({ label: v.name, value: v.id }))
    : []

  loading.value = false
}, 500)

watch(
  model,
  async newValue => {
    if (newValue) {
      loading.value = true

      await useNotifyPromise({
        callback: userApi.getUser(newValue).then(body => {
          options.value = [{ label: body.name, value: body.id }]
        }),
      })
      loading.value = false
    }
  },
  { immediate: true },
)
</script>

<template>
  <a-select
    v-model:value="model"
    :options="options"
    :filter-option="false"
    placeholder="supervisor"
    @search="onSearch"
    :loading="loading"
    show-search
  />
</template>
