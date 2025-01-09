<script setup lang="ts">
import {
  UserCreateUpdateRequest,
  UserDtoPositionEnum,
  UserDtoStatusEnum,
  type TeamDto,
} from '@/generate-api'
import { teamApi, userApi } from '@/lib/api'
import { onMounted, reactive, ref, watch } from 'vue'
import DatePicker from 'ant-design-vue/es/date-picker/date-fns'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Stages
const loadingConfirm = ref<boolean>(false)
const loadingDetails = ref<boolean>(true)
const teams = ref<TeamDto[]>([])
const formRef = ref()
const formState = reactive<UserCreateUpdateRequest>({
  name: '',
  email: '',
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

const resetForm = () => {
  formRef.value.resetFields()
}

watch(
  () => route.path,
  async _ => {
    if (
      !['employee-create', 'employee-edit'].includes(
        route.name?.toString() ?? '',
      )
    ) {
      return resetForm()
    }

    if (route.name == 'employee-edit') {
      loadDataDetail()
    }
  },
)

const loadDataDetail = async () => {
  try {
    loadingDetails.value = true
    const body = await userApi.getUserDetails(+route.params.id)

    Object.assign(formState, {
      name: body.name,
      email: body.email,
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
  } catch (error) {
    console.error(error)
  }
}

// Lifecycle
onMounted(async () => {
  try {
    const body = await teamApi.getTeams()
    teams.value = body || []

    if (route.name == 'employee-edit') {
      loadDataDetail()
    }
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div class="sticky top-0 z-10 flex-none">
    <a-page-header
      title="Employee"
      sub-title="Update employee"
      @back="() => router.push('/employee')"
      class="!bg-white"
    >
      <template #extra>
        <a-button type="primary" @click="router.push('/employee/create')"
          >Save Employee</a-button
        >
      </template>
    </a-page-header>

    <div class="header-divine" />
  </div>

  <div
    v-if="loadingDetails"
    class="grid flex-grow place-items-center bg-white/20"
  >
    <i-bx-loader-alt class="animate-spin text-blue-500" />
  </div>

  <div v-else class="px-12">
    <a-form ref="formRef" layout="vertical" v-model:model="formState">
      <div class="grid grid-cols-12 gap-x-6">
        <a-form-item label="Name" name="name" class="col-span-6">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item label="Email" name="email" class="col-span-6">
          <a-input v-model:value="formState.email" />
        </a-form-item>
        <a-form-item label="BirthDate" name="birthDate" class="col-span-6">
          <DatePicker
            v-model:value="formState.profile!.birthDate"
            value-format="yyyy-mm-dd"
            class="w-full"
          />
        </a-form-item>
        <a-form-item label="Phone" name="phone" class="col-span-6">
          <a-input v-model:value="formState.profile!.phone" />
        </a-form-item>
        <a-form-item label="Gender" name="username" class="col-span-6">
          <a-radio-group v-model:value="formState.profile!.gender">
            <a-radio :value="1">Male</a-radio>
            <a-radio :value="0">Female</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          label="Remaining leave hours"
          name="phone"
          class="col-span-6"
        >
          <a-input-number class="w-full" />
        </a-form-item>
        <a-form-item
          label="Permanent address"
          name="username"
          class="col-span-12"
        >
          <a-textarea
            placeholder="Permanent address"
            :auto-size="{ minRows: 2, maxRows: 5 }"
            v-model:value="formState.profile!.permanentAddress"
          />
        </a-form-item>
        <a-form-item
          label="Contact address"
          name="username"
          class="col-span-12"
        >
          <a-textarea
            placeholder="Contact address"
            :auto-size="{ minRows: 2, maxRows: 5 }"
            v-model:value="formState.profile!.contactAddress"
          />
        </a-form-item>
        <a-form-item
          label="supervisor"
          name="supervisorId"
          class="col-span-6"
          :rules="[{ required: true, message: 'Please choose supervisor!' }]"
        >
          <a-select
            placeholder="please choose supervisors"
            v-model:value="formState.supervisorId"
          >
            <template v-for="team in teams">
              <a-select-option :value="team.id">{{
                team.name
              }}</a-select-option>
            </template>
          </a-select>
        </a-form-item>
        <a-form-item
          label="Team"
          name="TeamId"
          class="col-span-6"
          :rules="[{ required: true, message: 'Please choose Team!' }]"
        >
          <a-select
            placeholder="please choose Teams"
            v-model:value="formState.teamId"
          >
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
          <a-select
            placeholder="please choose Positions"
            v-model:value="formState.position"
          >
            <template v-for="p in UserDtoPositionEnum">
              <a-select-option :value="p">{{ p }}</a-select-option>
            </template>
          </a-select>
        </a-form-item>
        <a-form-item
          label="Role"
          name="RoleId"
          class="col-span-6"
          :rules="[{ required: true, message: 'Please choose Role!' }]"
        >
          <a-select
            placeholder="please choose Roles"
            mode="multiple"
            v-model:value="formState.roleIds"
          >
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
          <a-select
            placeholder="please choose WorkTimes"
            v-model:value="formState.workTimeId"
          >
            <template #suffixIcon
              ><i-ion-cog
                class="hover:text-black"
                @click="() => console.log('click')"
            /></template>
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
          <a-select
            placeholder="please choose Status"
            v-model:value="formState.status"
          >
            <template v-for="s in UserDtoStatusEnum">
              <a-select-option :value="s">{{ s }}</a-select-option>
            </template>
          </a-select>
        </a-form-item>
      </div>
      <a-collapse ghost class="drawer-employee-collapse">
        <a-collapse-panel header="Advance">
          <div class="grid grid-cols-12 gap-x-6">
            <a-form-item label="Password" class="col-span-6">
              <a-input-password v-model:value="formState.password" />
            </a-form-item>
            <a-form-item label="RePassword" class="col-span-6">
              <a-input-password />
            </a-form-item>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </a-form>
  </div>
</template>

<!-- https://cdn.dribbble.com/userupload/16714106/file/original-ead35fd296fc28515c61560a642c7b0e.png?resize=1024x768&vertical=center -->

<!-- https://cdn.dribbble.com/userupload/17081405/file/original-8e02547473083fae57e3299a4305f7bf.png?resize=1024x878&vertical=center -->

<!-- https://cdn.dribbble.com/userupload/6997698/file/original-44bed7c29ca40a49bcac251e2e462deb.png?resize=1024x683&vertical=center -->

<style lang="postcss">
/* custom select */
.ant-select-arrow {
  @apply !pointer-events-auto;
}
</style>
