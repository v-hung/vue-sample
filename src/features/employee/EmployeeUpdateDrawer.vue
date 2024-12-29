<script lang="ts" setup>
import {
  UserPositionEnum,
  UserStatusEnum,
  type Team,
  type TeamDto,
} from '@/generate-api'
import { teamApi, userApi } from '@/lib/api'
import { useEmployeeStore } from '@/stores/employee'
import { useTimesheetStore } from '@/stores/timesheet'
import { onMounted, reactive, ref } from 'vue'

// Store
const employeeStore = useEmployeeStore()

// Stages
const confirmLoading = ref<boolean>(false)
const teams = ref<TeamDto[]>([])
const formRef = ref()
const formState = reactive({
  reviewerId: '',
  correctionDate: '',
  startTime: '',
  endTime: '',
  reason: '',
})

// const rules

// Methods
const handelSubmit = async () => {
  formRef.value.validate().then(async () => {
    confirmLoading.value = true

    // await userApi.updateUser({})
  })
}

const afterOpenChange = (bool: boolean) => {
  console.log('open', bool)
}

const resetForm = () => {
  formRef.value.resetFields()
}

// Lifecycle
onMounted(async () => {
  try {
    const body = await teamApi.getTeams()
    teams.value = body || []
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <a-drawer
    v-model:open="employeeStore.isUserUpdateOpen"
    root-class-name="drawer-employee"
    title="Update Employee"
    placement="right"
    @after-open-change="afterOpenChange"
  >
    <template #extra>
      <a-space>
        <a-button>Cancel</a-button>
        <a-button type="primary">Submit</a-button>
      </a-space>
    </template>
    <a-form ref="formRef" layout="vertical" v-model:model="formState">
      <div class="grid grid-cols-12 gap-x-6">
        <a-form-item label="Name" name="name" class="col-span-6">
          <a-input />
        </a-form-item>

        <div class="col-span-6"></div>

        <a-form-item label="Email" name="email" class="col-span-6">
          <a-input />
        </a-form-item>

        <a-form-item label="Username" name="username" class="col-span-6">
          <a-input />
        </a-form-item>

        <a-form-item
          label="Team"
          name="TeamId"
          class="col-span-6"
          :rules="[{ required: true, message: 'Please choose Team!' }]"
        >
          <a-select placeholder="please choose Teams">
            <template v-for="team in teams">
              <a-select-option :value="team.id">{{
                team.name
              }}</a-select-option>
            </template>
          </a-select>
        </a-form-item>

        <a-form-item
          label="Position"
          name="PositionId"
          class="col-span-6"
          :rules="[{ required: true, message: 'Please choose Position!' }]"
        >
          <a-select placeholder="please choose Positions">
            <template v-for="p in UserPositionEnum">
              <a-select-option :value="p">{{ p }}</a-select-option>
            </template>
          </a-select>
        </a-form-item>

        <a-form-item
          label="supervisor"
          name="supervisorId"
          class="col-span-6"
          :rules="[{ required: true, message: 'Please choose supervisor!' }]"
        >
          <a-select placeholder="please choose supervisors">
            <template v-for="team in teams">
              <a-select-option :value="team.id">{{
                team.name
              }}</a-select-option>
            </template>
          </a-select>
        </a-form-item>

        <a-form-item
          label="Role"
          name="RoleId"
          class="col-span-6"
          :rules="[{ required: true, message: 'Please choose Role!' }]"
        >
          <a-select placeholder="please choose Roles">
            <template v-for="p in UserStatusEnum">
              <a-select-option :value="p">{{ p }}</a-select-option>
            </template>
          </a-select>
        </a-form-item>

        <a-form-item
          label="WorkTime"
          name="WorkTimeId"
          class="col-span-6"
          :rules="[{ required: true, message: 'Please choose WorkTime!' }]"
        >
          <a-select placeholder="please choose WorkTimes">
            <template v-for="p in UserStatusEnum">
              <a-select-option :value="p">{{ p }}</a-select-option>
            </template>
          </a-select>
        </a-form-item>

        <a-form-item
          label="Status"
          name="StatusId"
          class="col-span-6"
          :rules="[{ required: true, message: 'Please choose Status!' }]"
        >
          <a-select placeholder="please choose Statuss">
            <template v-for="s in UserStatusEnum">
              <a-select-option :value="s">{{ s }}</a-select-option>
            </template>
          </a-select>
        </a-form-item>
      </div>
    </a-form>
  </a-drawer>
</template>

<style lang="postcss">
.drawer-employee .ant-drawer-content-wrapper {
  @apply !w-full max-w-screen-xl;
}
</style>
