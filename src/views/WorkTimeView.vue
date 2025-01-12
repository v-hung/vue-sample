<script setup lang="ts">
import { h, onMounted, ref } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import type { ColumnType } from 'ant-design-vue/es/table'
import type { WorkTimeDto } from '@/generate-api'
import { workTimeApi } from '@/lib/api'
import { useRouter } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const WorkTimeDrawerLazy = defineAsyncComponent(
  () => import('@/features/workTime/WorkTimeDrawer.vue'),
)

const columns: ColumnType[] = [
  { title: 'Title', dataIndex: 'title', key: 'title', width: '20%' },
  {
    title: 'Start Time Morning',
    dataIndex: 'startTimeMorning',
    key: 'startTimeMorning',
  },
  {
    title: 'End Time Morning',
    dataIndex: 'endTimeMorning',
    key: 'endTimeMorning',
  },
  {
    title: 'Start Time Afternoon',
    dataIndex: 'startTimeAfternoon',
    key: 'startTimeAfternoon',
  },
  {
    title: 'End Time Afternoon',
    key: 'endTimeAfternoon',
    dataIndex: 'endTimeAfternoon',
  },
  {
    title: 'Allowed Late Minutes',
    key: 'allowedLateMinutes',
    dataIndex: 'allowedLateMinutes',
  },
  { title: 'Action', key: 'action', width: 0 },
]

const router = useRouter()

// Stages
const data = ref<(WorkTimeDto & { key: number })[]>([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true

  const body = await workTimeApi.getWorkTimes()

  loading.value = false

  data.value = body.map(v => ({ ...v, key: v.id })) || []
})
</script>

<template>
  <div class="flex h-full flex-col items-stretch">
    <a-page-header
      title="Work Time"
      sub-title="Manager and collaboration within your organization's teams"
      class="flex-none"
    >
      <template #extra>
        <a-button
          :icon="h(PlusOutlined)"
          type="primary"
          @click="router.push('/work-times/create')"
          >Add Work Time</a-button
        >
      </template>
    </a-page-header>

    <div class="header-divine" />

    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 768, y: 'auto' }"
      :pagination="{ pageSize: 20 }"
      :loading="loading"
      class="mx-6 min-h-0 flex-grow"
    >
      <template #bodyCell="{ column, record }">
        <template
          v-if="
            [
              'startTimeMorning',
              'endTimeMorning',
              'startTimeAfternoon',
              'endTimeAfternoon',
            ].includes(column.key?.toString() ?? '')
          "
        >
          <span>
            {{ record[column.key!]?.split('.')[0] }}
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a @click="router.push('/work-times/' + record.id)">Edit</a>
          </span>
        </template>
      </template>
    </a-table>
  </div>

  <WorkTimeDrawerLazy />
</template>

<style lang="postcss">
.ant-spin-nested-loading,
.ant-spin-container,
.ant-table,
.ant-table-container {
  height: 100%;
}

.ant-table-body {
  max-height: calc(100% - 77px);
}
</style>
