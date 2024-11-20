<template>
  <div class="mb-2 flex justify-between gap-2">
    <a-date-picker picker="month" />
    <a-button
      :icon="h(CalendarCheckIcon, { class: 'w-5' })"
      class="mr-auto"
    ></a-button>
    <a-dropdown :trigger="['click']" placement="bottomLeft">
      <a-button class="flex items-center text-sm" type="text">
        <ListIcon class="mr-1 w-5" />
        <span>List view</span>
        <DownOutlined class="text-xs leading-none" />
      </a-button>
      <template #overlay>
        <a-menu>
          <a-menu-item key="1"
            >Clicking me will not close the menu.</a-menu-item
          >
          <a-menu-item key="2"
            >Clicking me will not close the menu also.</a-menu-item
          >
          <a-menu-item key="3">Clicking me will close the menu</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>

  <a-table
    :columns="columns"
    :data-source="data"
    :scroll="{ x: 768 }"
    :pagination="false"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'requests'">
        <span>
          <a-tag
            v-for="request in record.requests"
            :key="request"
            :color="
              request === 'loser'
                ? 'volcano'
                : request.length > 5
                  ? 'geekblue'
                  : 'green'
            "
          >
            {{ request.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a>Repair</a>
          <a-divider type="vertical" />
          <a>Overtime</a>
        </span>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue'
import ListIcon from '@/assets/ListIcon.vue'
import { h } from 'vue'
import CalendarCheckIcon from '@/assets/CalendarCheckIcon.vue'
const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Employee',
    dataIndex: 'employee',
    key: 'employee',
  },
  {
    title: 'Start Time',
    dataIndex: 'startTime',
    key: 'startTime',
  },
  {
    title: 'End Time',
    key: 'endTime',
    dataIndex: 'endTime',
  },
  {
    title: 'Total Work',
    key: 'totalWork',
    dataIndex: 'totalWork',
  },
  {
    title: 'Requests',
    key: 'requests',
    dataIndex: 'requests',
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
    date: '2017-01-01',
    employee: 'John Brown',
    startTime: '08:00',
    endTime: '16:00',
    totalWork: '8 hours',
    requests: ['Leave'],
  },
]
</script>
