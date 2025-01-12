<script setup lang="ts">
import { h, onMounted, ref } from 'vue'
import {
  PlusOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'
import type { ColumnType } from 'ant-design-vue/es/table'
import type { UserDto } from '@/generate-api'
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
const data = ref<(UserDto & { key: number })[]>([])
const type = ref('active')
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
      title="Employee"
      sub-title="Manager and collaboration within your organization's teams"
      class="flex-none"
    >
      <template #extra>
        <a-button
          :icon="h(PlusOutlined)"
          type="primary"
          @click="router.push('/employee/create')"
          >Add Employee</a-button
        >
      </template>
    </a-page-header>

    <div class="header-divine" />

    <div class="flex flex-none flex-wrap justify-between gap-4 px-6">
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
      :scroll="{ x: 768, y: 'auto' }"
      :pagination="{ pageSize: 20 }"
      :loading="loading"
      class="mx-6 mt-6 min-h-0 flex-grow"
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
            <a @click="router.push('/employee/' + record.id)">Edit</a>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>

<!-- https://cdn.dribbble.com/userupload/16714106/file/original-ead35fd296fc28515c61560a642c7b0e.png?resize=1024x768&vertical=center -->

<!-- https://cdn.dribbble.com/userupload/17081405/file/original-8e02547473083fae57e3299a4305f7bf.png?resize=1024x878&vertical=center -->

<!-- https://cdn.dribbble.com/userupload/6997698/file/original-44bed7c29ca40a49bcac251e2e462deb.png?resize=1024x683&vertical=center -->

<style lang="postcss">
.ant-spin-nested-loading,
.ant-spin-container,
.ant-table-container {
  height: 100%;
}

.ant-spin-container {
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */

  .ant-table {
    /* flex: 0 1 auto; */
    overflow-y: auto;
  }
  .ant-pagination {
    flex: none;
  }
}

.ant-table-body {
  max-height: calc(100% - 55px);
}

.tab-title {
  @apply min-w-20 cursor-pointer whitespace-nowrap rounded-md px-3 py-1.5 text-center text-sm font-medium text-gray-700 hover:text-primary-500;
}
.tab-title.active {
  @apply pointer-events-none bg-white text-black shadow;
}
</style>
