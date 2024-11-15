<template>
  <div
    class="animated-background grid h-screen w-full place-items-center bg-gradient-to-tr from-blue-400 to-green-400"
  >
    <a-spin size="large" />
  </div>
</template>

<style scoped>
.animated-background {
  background-size: 400%;

  -webkit-animation: animation 3s ease infinite;
  -moz-animation: animation 3s ease infinite;
  animation: animation 3s ease infinite;
}

@keyframes animation {
  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

:deep(.ant-spin .ant-spin-dot-item) {
  background-color: white !important;
}
</style>
