<script lang="ts">
import { useAccountStore } from '@/stores/account'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const accountStore = useAccountStore()

    const formState = reactive({
      username: '',
      password: '',
      remember: true,
    })

    const loading = ref(false)

    const onFinish = async () => {
      loading.value = true
      await accountStore.login(formState, res => {
        if (res) router.push('/')
      })
      loading.value = false
    }

    const onFinishFailed = async (errorInfo: unknown) => {
      // console.log('Failed:', errorInfo)
    }

    return {
      formState,
      loading,
      onFinish,
      onFinishFailed,
    }
  },
  beforeRouteEnter(to, from, next) {
    const accountStore = useAccountStore()

    if (accountStore.user) {
      next('/')
    } else {
      next()
    }
  },
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 px-4 py-10">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      class="mx-auto w-full max-w-sm rounded border border-solid border-gray-300 bg-white p-4 shadow"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>
      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit" :loading="loading"
          >Submit</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>
