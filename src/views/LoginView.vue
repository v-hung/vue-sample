<script setup lang="ts">
import { useAccountStore } from '@/stores/account'
import { reactive } from 'vue'

const accountStore = useAccountStore()

const formState = reactive({
  username: '',
  password: '',
  remember: true,
})

const onFinish = async (values: unknown) => {
  console.log('Success:', values)
}

const onFinishFailed = async (errorInfo: unknown) => {
  console.log('Failed:', errorInfo)
}
</script>

<template>
  <div class="px-4">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      class="mx-auto mt-10 w-full max-w-sm rounded border border-solid border-gray-300 p-4 shadow"
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
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
