<script setup lang="ts">
import type { ColumnType, TableProps } from 'ant-design-vue/es/table'
import type { Key } from 'ant-design-vue/es/_util/type'
import { computed, ref } from 'vue'
import { sendNotification } from '@/lib/notification'
import InboxHeader from '@/features/inbox/InboxHeader.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Stages
const selectedKeys = ref<Key[]>([])

const isAllSelected = computed(() => {
  return selectedKeys.value.length == data.length
})

const columns: ColumnType[] = [
  {
    title: 'type',
    dataIndex: 'type',
    key: 'type',
    width: '5%',
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'date',
    key: 'date',
    dataIndex: 'date',
  },
]

const data = Array(100)
  .fill(0)
  .map((v, i) => ({
    key: i,
    type: 'system_report',
    title: 'Đơn xin sửa chấm công của bạn đã được duyệt',
    description: 'Đơn xin sửa chấm công của Nguyễn Việt Hùng đã được duyệt',
    date: 'Dec 4',
  }))

const rowSelection = computed<TableProps['rowSelection']>(() => ({
  selectedRowKeys: selectedKeys.value,
  onChange: (keys: Key[], _: any[]) => {
    selectedKeys.value = keys
  },
}))

const toggleSelectAll = () => {
  if (isAllSelected.value) {
    selectedKeys.value = []
  } else {
    selectedKeys.value = data.map(item => item.key)
  }
}
</script>

<template>
  <div class="sticky top-0 z-10 bg-white">
    <InboxHeader />

    <div class="header-divine" />

    <div
      class="mx-6 flex flex-wrap justify-between gap-4 rounded bg-gray-50 px-4 py-2"
    >
      <div class="inline-flex flex-wrap items-center gap-3 rounded-md">
        <label class="inbox-top-bar-button !h-auto !w-auto !px-2">
          <a-checkbox
            id="check-all"
            :checked="isAllSelected"
            @change="toggleSelectAll"
          />
        </label>
        <button class="inbox-top-bar-button">
          <i-ion-refresh />
        </button>
        <button v-show="selectedKeys.length > 0" class="inbox-top-bar-button">
          <i-ion-trash-outline class="text-red-600" />
        </button>
      </div>

      <div class="inline-flex items-center gap-3">
        <span class="text-sm font-medium text-gray-500">1-50 of 62</span>
        <button class="inbox-top-bar-button">
          <i-ion-chevron-back />
        </button>
        <button class="inbox-top-bar-button">
          <i-ion-chevron-forward @click="sendNotification" />
        </button>
      </div>
    </div>
  </div>

  <a-table
    :columns="columns"
    :data-source="data"
    :scroll="{ x: 768 }"
    :pagination="false"
    :show-header="false"
    :row-selection="rowSelection"
    :customRow="
      (v, _) => ({
        onClick: () => {
          router.push({ name: 'inbox-detail', params: { id: v.key } })
        },
        class: 'cursor-pointer',
      })
    "
    class="inbox-table px-6"
  >
  </a-table>

  <div class="h-6" style="box-shadow: 0 -3px 2px -2px #e8eaed"></div>
</template>

<style lang="postcss">
.inbox-table .ant-table-cell.ant-table-selection-column {
  padding: 0rem 1.5rem;
}

.inbox-top-bar-button {
  @apply h-8 w-8 cursor-pointer rounded-full bg-transparent p-1.5 text-gray-600 transition-colors hover:bg-gray-200;
}

.inbox-top-bar-button > svg {
  @apply h-full w-full;
}
</style>
