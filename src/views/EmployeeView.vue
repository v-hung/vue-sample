<script setup lang="ts">
import { h, ref } from 'vue'
import {
  PlusOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'
import type { ColumnType } from 'ant-design-vue/es/table'

const type = ref('active')

const columns: ColumnType[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Teams',
    dataIndex: 'teams',
    key: 'teams',
  },
  {
    title: 'Employment Type',
    key: 'employmentType',
    dataIndex: 'employmentType',
  },
  {
    title: 'Action',
    key: 'action',
    width: 200,
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    date: '2017-01-01',
    teams: ['Stnet'],
    employmentType: 'Dev',
  },
]
</script>

<template>
  <a-page-header
    title="Employee"
    sub-title="Manager and collaboration within your organization's teams"
  >
    <template #extra>
      <a-button :icon="h(PlusOutlined)" type="primary">Add Employee</a-button>
    </template>
  </a-page-header>

  <div class="mx-6 mb-4 h-0 border-0 border-b border-solid border-gray-200" />

  <div class="px-6">
    <div class="flex flex-wrap justify-between gap-4">
      <div class="inline-flex flex-wrap gap-1 rounded-md bg-gray-50 p-1">
        <div
          class="tab-title"
          :class="{ active: type == 'active' }"
          @click="type = 'active'"
        >
          Active
        </div>
        <div
          class="tab-title"
          :class="{ active: type == 'onboarding' }"
          @click="type = 'onboarding'"
        >
          Onboarding
        </div>
        <div
          class="tab-title"
          :class="{ active: type == 'off-boarding' }"
          @click="type = 'off-boarding'"
        >
          Off-boarding
        </div>
        <div
          class="tab-title"
          :class="{ active: type == 'retired' }"
          @click="type = 'retired'"
        >
          Retired
        </div>
      </div>

      <a-input placeholder="Enter search here" class="w-72">
        <template #prefix> <SearchOutlined /> </template
      ></a-input>
    </div>

    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 768 }"
      :pagination="false"
      class="mt-6"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <div class="inline-flex items-center space-x-2">
            <a-avatar
              :size="46"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxo2NFiYcR35GzCk5T3nxA7rGlSsXvIfJwg&s"
            >
              <template #icon><UserOutlined /></template>
            </a-avatar>
            <div>
              <h5 class="mb-0 text-sm font-semibold">Việt Hùng</h5>
              <p class="mb-0 text-xs text-gray-600">hungnv@wbcvn.vn</p>
            </div>
          </div>
        </template>
        <template v-else-if="column.key === 'teams'">
          <span>
            <a-tag
              v-for="team in record.teams"
              :key="team"
              :color="
                team === 'loser'
                  ? 'volcano'
                  : team.length > 5
                    ? 'geekblue'
                    : 'green'
              "
            >
              {{ team.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a>Edit</a>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>

<!-- https://cdn.dribbble.com/userupload/16714106/file/original-ead35fd296fc28515c61560a642c7b0e.png?resize=1024x768&vertical=center -->

<!-- https://cdn.dribbble.com/userupload/17081405/file/original-8e02547473083fae57e3299a4305f7bf.png?resize=1024x878&vertical=center -->

<!-- https://cdn.dribbble.com/userupload/6997698/file/original-44bed7c29ca40a49bcac251e2e462deb.png?resize=1024x683&vertical=center -->

<style>
.tab-title {
  @apply min-w-20 cursor-pointer whitespace-nowrap rounded-md px-3 py-1.5 text-center text-sm font-medium text-gray-700 hover:text-primary-500;
}
.tab-title.active {
  @apply pointer-events-none bg-white text-black shadow;
}
</style>
