<script lang="ts" setup>
import {
  UserCreateUpdateRequest,
  UserDtoPositionEnum,
  UserDtoStatusEnum,
  type TeamDto,
} from '@/generate-api'
import { teamApi, userApi } from '@/lib/api'
import { useEmployeeStore } from '@/stores/employee'
import { onMounted, onUpdated, reactive, ref, watch } from 'vue'

// Store
const employeeStore = useEmployeeStore()

// Stages
const loadingConfirm = ref<boolean>(false)
const loadingDetails = ref<boolean>(false)
const teams = ref<TeamDto[]>([])
const formRef = ref()
const formState = reactive<UserCreateUpdateRequest>({
  name: '',
  email: '',
  username: '',
  teamId: undefined,
  position: undefined,
  supervisorId: undefined,
  roleIds: [],
  workTimeId: undefined,
  status: undefined,
  password: undefined,
  profile: {
    birthDate: undefined,
    gender: undefined,
    phone: undefined,
    permanentAddress: undefined,
    contactAddress: undefined,
  },
})

// const rules

// Methods
const handelSubmit = async () => {
  formRef.value.validate().then(async () => {
    loadingConfirm.value = true

    // await userApi.updateUser({})
  })
}

const afterOpenChange = async (bool: boolean) => {}

const resetForm = () => {
  formRef.value.resetFields()
}

watch(
  () => employeeStore.isUserUpdateOpen,
  async val => {
    try {
      if (!val) {
        return resetForm()
      }

      if (employeeStore.userUpdateId) {
        loadingDetails.value = true
        const body = await userApi.getUserDetails(employeeStore.userUpdateId)

        Object.assign(formState, {
          name: body.name,
          email: body.email,
          username: body.username,
          teamId: body.team?.id,
          position: body.position,
          supervisorId: body.supervisor?.id,
          roleIds: body.roles.map(v => v.id),
          workTimeId: body.workTime?.id,
          status: body.status,
          profile: {
            birthDate: body.profile?.birthDate,
            gender: body.profile?.gender,
            phone: body.profile?.phone,
            permanentAddress: body.profile?.permanentAddress,
            contactAddress: body.profile?.contactAddress,
          },
        })

        loadingDetails.value = false
      }
    } catch (error) {
      console.error(error)
    }
  },
)

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
    :root-class-name="`drawer-employee ${loadingDetails ? 'loading' : ''}`"
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
            <template v-for="p in UserDtoPositionEnum">
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
            <template v-for="p in UserDtoStatusEnum">
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
            <template v-for="p in UserDtoStatusEnum">
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
          <a-select placeholder="please choose Status">
            <template v-for="s in UserDtoStatusEnum">
              <a-select-option :value="s">{{ s }}</a-select-option>
            </template>
          </a-select>
        </a-form-item>
      </div>
      <a-collapse ghost>
        <a-collapse-panel header="This is panel header 1">
          <p>23213</p>
        </a-collapse-panel>
      </a-collapse>
    </a-form>

    <div
      class="ant-drawer-loading absolute left-0 top-0 hidden h-full w-full place-items-center bg-black/30"
    >
      <i-bx-loader-alt class="animate-spin text-white" />
    </div>
  </a-drawer>
</template>

<style lang="postcss">
.drawer-employee .ant-drawer-content-wrapper {
  @apply !w-full max-w-screen-xl;
}

.drawer-employee .ant-drawer-body {
  @apply relative;
}

.drawer-employee.loading .ant-drawer-body {
  @apply overflow-hidden;
}

.drawer-employee.loading .ant-drawer-loading {
  @apply !grid;
}
</style>
