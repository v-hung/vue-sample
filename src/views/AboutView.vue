<template>about</template>

<script lang="ts">
export default {
  setup() {
    return {
      name: 'about',
    }
  },
  async beforeRouteEnter(to, from, next) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    next()
  },
}
</script>

<style></style>
