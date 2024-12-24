<script setup lang="ts">
import { h, ref } from 'vue'
import {
  DeleteOutlined,
  PlusOutlined,
  ReloadOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'
import type { ColumnType, TableProps } from 'ant-design-vue/es/table'
import type { Key } from 'ant-design-vue/es/_util/type'

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
  .map(() => ({
    key: '1',
    type: 'system_report',
    title: 'Đơn xin sửa chấm công của bạn đã được duyệt',
    description: 'Đơn xin sửa chấm công của Nguyễn Việt Hùng đã được duyệt',
    date: 'Dec 4',
  }))

const rowSelection: TableProps['rowSelection'] = {
  onChange: (selectedRowKeys: Key[], selectedRows: any[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    )
  },
  getCheckboxProps: (record: any) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
}
</script>

<template>
  <div class="h-full overflow-y-auto pb-6">
    <div class="sticky top-0 z-10 bg-white">
      <a-page-header
        title="Inbox"
        sub-title="Manager and collaboration within your organization's teams"
      >
      </a-page-header>

      <div class="header-divine" />

      <div
        class="mx-6 flex flex-wrap justify-between gap-4 rounded bg-gray-50 px-6 py-2"
      >
        <div class="inline-flex flex-wrap items-center gap-3 rounded-md">
          <label
            for="check-all"
            class="cursor-pointer rounded-md border bg-white px-2 py-1"
          >
            <a-checkbox id="check-all" />
          </label>
          <a-button
            :icon="h(ReloadOutlined, { class: 'w-5' })"
            class="mr-auto text-gray-600"
          ></a-button>
          <a-button
            :icon="h(DeleteOutlined, { class: 'w-5' })"
            :danger="true"
            class="mr-auto text-gray-600"
          ></a-button>
        </div>

        <a-input placeholder="Enter search here" class="h-10 w-72">
          <template #prefix> <SearchOutlined /> </template
        ></a-input>
      </div>
    </div>

    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 768 }"
      :pagination="false"
      :show-header="false"
      :row-selection="rowSelection"
      class="px-6"
    >
    </a-table>
  </div>
</template>

<!-- https://cdn.dribbble.com/userupload/16714106/file/original-ead35fd296fc28515c61560a642c7b0e.png?resize=1024x768&vertical=center -->

<!-- https://cdn.dribbble.com/userupload/17081405/file/original-8e02547473083fae57e3299a4305f7bf.png?resize=1024x878&vertical=center -->

<!-- https://cdn.dribbble.com/userupload/6997698/file/original-44bed7c29ca40a49bcac251e2e462deb.png?resize=1024x683&vertical=center -->

<style></style>
