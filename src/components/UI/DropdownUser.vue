<script lang="ts" setup>
const logout = () => {
  console.log('ok')
}
</script>

<template>
  <a-menu class="min-w-32">
    <a-menu-item key="0">
      <RouterLink to="/profile">Profile</RouterLink>
    </a-menu-item>
    <a-menu-divider />
    <a-menu-item key="3" :danger="true" @click="logout"> Logout </a-menu-item>
  </a-menu>
</template>
