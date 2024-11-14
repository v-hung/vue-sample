<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from 'ant-design-vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <Button>dasd</Button>
  </header>

  <RouterView />
</template>
