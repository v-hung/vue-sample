<script setup lang="ts">
import { SearchOutlined } from '@ant-design/icons-vue'
import type { ColumnType, TableProps } from 'ant-design-vue/es/table'
import type { Key } from 'ant-design-vue/es/_util/type'
import { computed, ref } from 'vue'

// Stages
const selectedRowKeys = ref<Key[]>([])

const selectedAllRowKeys = computed(() => {
  return selectedRowKeys.value.length == data.length
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

const data = Array(50)
  .fill(0)
  .map((v, i) => ({
    key: i,
    type: 'system_report',
    title: 'Đơn xin sửa chấm công của bạn đã được duyệt',
    description: 'Đơn xin sửa chấm công của Nguyễn Việt Hùng đã được duyệt',
    date: 'Dec 4',
  }))

const rowSelection: TableProps['rowSelection'] = {
  onChange: (keys: Key[], selectedRows: any[]) => {
    selectedRowKeys.value = keys
  },
}
</script>

<template>
  <div class="h-full overflow-y-auto pb-6">
    <div class="sticky top-0 z-10 bg-white">
      <a-page-header
        title="Inbox"
        sub-title="Manager and collaboration within your organization's teams"
        class="py-4"
      >
        <template #extra>
          <a-input placeholder="Enter search here" class="h-10 w-72">
            <template #prefix> <SearchOutlined /> </template
          ></a-input>
        </template>
      </a-page-header>

      <div class="header-divine" />

      <div
        class="mx-6 flex flex-wrap justify-between gap-4 rounded bg-gray-50 px-4 py-2"
      >
        <div class="inline-flex flex-wrap items-center gap-3 rounded-md">
          <label for="check-all" class="inbox-top-bar-button !px-2">
            <a-checkbox id="check-all" />
          </label>
          <button class="inbox-top-bar-button">
            <i-ion-refresh class="h-5 w-5" />
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
            <i-ion-chevron-forward class="h-5 w-5" />
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
      class="inbox-table px-6"
    >
    </a-table>
  </div>
</template>

<!-- https://cdn.dribbble.com/userupload/16714106/file/original-ead35fd296fc28515c61560a642c7b0e.png?resize=1024x768&vertical=center -->

<!-- https://cdn.dribbble.com/userupload/17081405/file/original-8e02547473083fae57e3299a4305f7bf.png?resize=1024x878&vertical=center -->

<!-- https://cdn.dribbble.com/userupload/6997698/file/original-44bed7c29ca40a49bcac251e2e462deb.png?resize=1024x683&vertical=center -->

<style lang="postcss">
.inbox-table .ant-table-cell.ant-table-selection-column {
  padding: 0rem 1.5rem;
}

.inbox-top-bar-button {
  @apply cursor-pointer rounded-full bg-transparent p-1.5 text-gray-600 transition-colors hover:bg-gray-200;
}
</style>
