<script lang="ts" setup>
import CheckIcon from '@/assets/CheckIcon.vue'
import UsIcon from '@/assets/UsIcon.vue'
import ViIcon from '@/assets/ViIcon.vue'
import {
  loadLocaleMessages,
  switchLocale,
  type SupportedLocales,
} from '@/i18n/translation'
import { h } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const logout = () => {
  console.log('ok')
}
</script>

<template>
  <a-menu class="min-w-32">
    <a-menu-item key="0"> Profile </a-menu-item>
    <a-sub-menu title="Language">
      <a-menu-item
        key="2"
        class="min-w-40"
        :icon="h(ViIcon)"
        @click="switchLocale('vi-VN')"
      >
        <div class="flex items-center justify-between space-x-2">
          <span>{{ $t('locale.vi-VN') }}</span>
          <template v-if="i18n.locale.value == 'vi-VN'">
            <CheckIcon class="w-4 text-sky-500" />
          </template>
        </div>
      </a-menu-item>
      <a-menu-item
        key="2"
        class="min-w-40"
        :icon="h(UsIcon)"
        @click="switchLocale('en-US')"
      >
        <div class="flex items-center justify-between space-x-2">
          <span>{{ $t('locale.en-US') }}</span>
          <template v-if="i18n.locale.value == 'en-US'">
            <CheckIcon class="w-4 text-sky-500" />
          </template>
        </div>
      </a-menu-item>
    </a-sub-menu>
    <a-menu-divider />
    <a-menu-item key="3" :danger="true" @click="logout"> Logout </a-menu-item>
  </a-menu>
</template>
