<script setup lang="ts">
import viVN from 'ant-design-vue/es/locale/vi_VN'
import enUS from 'ant-design-vue/es/locale/en_US'
import ProcessIndicator from './components/UI/ProcessIndicator.vue'
import PageLoading from './components/UI/PageLoading.vue'
import { useAccountStore } from './stores/account'
const accountStore = useAccountStore()
</script>

<template>
  <a-config-provider
    :locale="enUS"
    :theme="{
      token: {
        colorPrimary: '#0284c7',
      },
    }"
  >
    <template v-if="accountStore.isLogged">
      <PageLoading />
    </template>

    <template v-else>
      <RouterView />
    </template>

    <ProcessIndicator />
  </a-config-provider>
</template>
