<script setup lang="ts">
import { h, onMounted, ref } from 'vue'
import { PlusOutlined, UserOutlined } from '@ant-design/icons-vue'
import type { ColumnType } from 'ant-design-vue/es/table'
import type { TeamDto } from '@/generate-api'
import { userApi } from '@/lib/api'
import { getTeamColor } from '@/utils/teamUtil'
import { useRouter } from 'vue-router'

const columns: ColumnType[] = [
  { title: 'Name', dataIndex: 'name', key: 'name', width: '20%' },
  { title: 'Position', dataIndex: 'position', key: 'position' },
  { title: 'Team', dataIndex: 'team', key: 'team' },
  { title: 'Supervisor', dataIndex: 'supervisor', key: 'supervisor' },
  { title: 'Status', key: 'status', dataIndex: 'status' },
  { title: 'Action', key: 'action', width: 0 },
]

const router = useRouter()

// Stages
const data = ref<(TeamDto & { key: number })[]>([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true

  const body = await userApi.getUsers(
    {
      page: 1,
    },
    {},
  )

  loading.value = false

  data.value = body?.content?.map(v => ({ ...v, key: v.id })) || []
})
</script>

<template>
  <div class="flex h-full flex-col items-stretch">
    <a-page-header
      title="Team"
      sub-title="Track performance and projects across all teams"
      class="flex-none"
    >
      <template #extra>
        <a-button
          :icon="h(PlusOutlined)"
          type="primary"
          @click="router.push('/team/create')"
          >Add Team</a-button
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
      class="ant-table-custom mx-6 mt-6 min-h-0 flex-grow"
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
              <h5 class="mb-0 text-sm font-semibold">{{ record.name }}</h5>
              <p class="mb-0 text-xs text-gray-600">{{ record.email }}</p>
            </div>
          </div>
        </template>
        <template v-else-if="column.key === 'team'">
          <span v-if="record.team">
            <a-tag
              v-for="item in record.team.name"
              :key="item"
              :color="getTeamColor(record.team.name)"
              class="mr-1"
            >
              {{ item.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a @click="router.push('/team/' + record.id)">Edit</a>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>
