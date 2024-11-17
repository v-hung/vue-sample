<template>
  <div>
    <a-page-header
      title="Timesheet"
      sub-title="Track your work hours effectively"
    >
      <template #tags>
        <a-tag color="blue">Running</a-tag>
      </template>
      <template #extra>
        <a-button key="3">Repair</a-button>
        <a-button key="2">Leave</a-button>
        <a-radio-group>
          <a-radio-button value="large">Large</a-radio-button>
          <a-radio-button value="small">Start</a-radio-button>
        </a-radio-group>
      </template>
    </a-page-header>

    <div class="flex flex-col gap-6">
      <div class="mx-6 rounded bg-gray-50 px-6 py-6 shadow-inner">fd</div>

      <div class="px-6">
        <a-table :columns="columns" :data-source="data">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span>
                <smile-outlined />
                Name
              </span>
            </template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <template v-else-if="column.key === 'tags'">
              <span>
                <a-tag
                  v-for="tag in record.tags"
                  :key="tag"
                  :color="
                    tag === 'loser'
                      ? 'volcano'
                      : tag.length > 5
                        ? 'geekblue'
                        : 'green'
                  "
                >
                  {{ tag.toUpperCase() }}
                </a-tag>
              </span>
            </template>
            <template v-else-if="column.key === 'action'">
              <span>
                <a>Invite 一 {{ record.name }}</a>
                <a-divider type="vertical" />
                <a>Delete</a>
                <a-divider type="vertical" />
                <a class="ant-dropdown-link">
                  More actions
                  <down-outlined />
                </a>
              </span>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue'
const columns = [
  {
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]
</script>
