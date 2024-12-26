<script setup lang="ts">
import { sendNotification } from '@/lib/notification'
import InboxHeader from '@/features/inbox/InboxHeader.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Stages
</script>

<template>
  <div class="sticky top-0 z-10 bg-white">
    <InboxHeader />

    <div class="header-divine" />

    <div
      class="mx-6 flex flex-wrap justify-between gap-4 rounded-t bg-gray-100 px-4 py-2"
    >
      <div class="inline-flex flex-wrap items-center gap-3 rounded-md">
        <button class="inbox-top-bar-button" @click="router.push('/inbox')">
          <i-ion-chevron-back />
        </button>
        <button class="inbox-top-bar-button">
          <i-ion-trash-outline class="h-5 w-5 text-red-600" />
        </button>
      </div>

      <div class="inline-flex items-center gap-3">
        <span class="text-sm font-medium text-gray-500">1-50 of 62</span>
        <button class="inbox-top-bar-button">
          <i-ion-chevron-back class="h-5 w-5" />
        </button>
        <button class="inbox-top-bar-button">
          <i-ion-chevron-forward class="h-5 w-5" @click="sendNotification" />
        </button>
      </div>
    </div>
  </div>

  <div class="mx-6 rounded-b border border-t-0 border-gray-100 px-6 py-6">
    <div class="prose prose-sm max-w-full">
      <h3>Đơn xin sửa chấm công của Nguyễn Việt Hùng</h3>
      <p></p>
      <a-form
        :label-col="{ style: { width: '150px' } }"
        :wrapper-col="{ span: 14 }"
      >
        <a-form-item label="Activity name">
          <a-input />
        </a-form-item>
        <a-form-item label="Instant delivery">
          <a-switch />
        </a-form-item>
        <a-form-item label="Activity type">
          <a-checkbox-group>
            <a-checkbox value="1" name="type">Online</a-checkbox>
            <a-checkbox value="2" name="type">Promotion</a-checkbox>
            <a-checkbox value="3" name="type">Offline</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <a-form-item label="Resources">
          <a-radio-group>
            <a-radio value="1">Sponsor</a-radio>
            <a-radio value="2">Venue</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="Activity form">
          <a-textarea />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary">Create</a-button>
          <a-button style="margin-left: 10px">Cancel</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style lang="postcss">
.inbox-top-bar-button {
  @apply h-8 w-8 cursor-pointer rounded-full bg-transparent p-1.5 text-gray-600 transition-colors hover:bg-gray-200;
}

.inbox-top-bar-button > svg {
  @apply h-full w-full;
}
</style>
