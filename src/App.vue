<script setup lang="ts">
import ProcessIndicator from './components/UI/ProcessIndicator.vue'
import PageLoading from './components/UI/PageLoading.vue'
import { useAccountStore } from './stores/account'

const accountStore = useAccountStore()
</script>

<template>
  <template v-if="accountStore.loading">
    <PageLoading />
  </template>

  <template v-else>
    <RouterView />
  </template>

  <ProcessIndicator class="fixed left-0 top-0 z-50" />
</template>
