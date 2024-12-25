<script lang="ts" setup>
import { DownOutlined, UserOutlined } from '@ant-design/icons-vue'
import IonList from '~icons/ion/list'
import { h, onMounted, ref, watch } from 'vue'
import BxCalendarCheck from '~icons/bx/calendar-check'
import DatePicker from 'ant-design-vue/es/date-picker/date-fns'
import { timesheetApi } from '@/lib/api'
import { useNotifyPromise } from '@/lib/promise'
import type { TimesheetDto } from '@/generate-api'
import { useElementSize } from '@vueuse/core'
import { isSameMonth } from 'date-fns'
import { formatDate } from '@/utils/dateUtil'
import { useTimesheetStore } from '@/stores/timesheet'
const columns = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'User', dataIndex: 'user', key: 'user' },
  { title: 'Start Time', dataIndex: 'startTime', key: 'startTime' },
  { title: 'End Time', key: 'endTime', dataIndex: 'endTime' },
  { title: 'Total Work', key: 'workMinutes', dataIndex: 'workMinutes' },
  { title: 'Requests', key: 'requests', dataIndex: 'requests' },
  { title: 'Action', key: 'action', width: 200 },
]

// Store
const timesheetStore = useTimesheetStore()

// States
const el = ref(null)
const { height } = useElementSize(el)
const loading = ref(true)
const month = ref(new Date())

const data = ref<TimesheetDto[]>([])

watch(month, async newMonth => {
  loading.value = true

  const timesheets = await useNotifyPromise({
    callback: timesheetApi.getMonthlyTimesheets(
      formatDate(newMonth, 'yyyy-MM'),
    ),
  })

  data.value = timesheets ? timesheets : []

  loading.value = false
})

// Lifecycle
onMounted(async () => {
  loading.value = true

  const timesheets = await useNotifyPromise({
    callback: timesheetApi.getMonthlyTimesheets(),
  })

  data.value = timesheets ? timesheets : []

  loading.value = false
})
</script>

<template>
  <div class="mb-2 flex flex-none justify-between gap-2 px-6">
    <DatePicker v-model:value="month" picker="month" />
    <a-button
      :icon="h(BxCalendarCheck, { class: 'w-5' })"
      class="mr-auto text-gray-600"
      :class="{ '!text-sky-500': isSameMonth(month, new Date()) }"
      @click.prevent="month = new Date()"
    ></a-button>
    <a-dropdown :trigger="['click']" placement="bottomLeft">
      <a-button class="flex items-center text-sm" type="text">
        <IonList class="mr-1 w-5" />
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

  <div ref="el" class="min-h-0 flex-grow px-6">
    <a-skeleton v-if="loading" />

    <div v-else>
      <a-table
        :columns="columns"
        :data-source="data"
        :scroll="{ x: 768, y: height - 55 }"
        :pagination="false"
        class="border-b border-gray-200"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'user'">
            <div class="inline-flex gap-3">
              <a-avatar shape="square" :size="40">
                <template #icon><UserOutlined /></template>
              </a-avatar>
              <div>
                <p class="font-semibold">{{ record.user.name }}</p>
                <p class="text-gray-600">{{ record.user.email }}</p>
              </div>
            </div>
          </template>
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
              <a @click="timesheetStore.openModelCorrection(record.date)"
                >Correction</a
              >
              <a-divider type="vertical" />
              <a>Overtime</a>
            </span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
