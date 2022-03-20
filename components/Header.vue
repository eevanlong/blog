<script setup lang='ts'>
const color = useColorMode()
</script>

<template>
  <nav class="flex items-center justify-between text-5" :class="color">
    <div class="flex-auto space-x-6">
      <a>菜单1</a>
      <a>菜单1</a>
      <a>菜单1</a>
      <a>菜单1</a>
    </div>
    <div class="flex items-center text-6 space-x-4">
      <input
        class="h-1/2 outline-none bg-gray-200 rounded px-3 py-2 text-1 text-gray-500"
        type="text"
        placeholder="搜索文章"
      />
      <a href="https://github.com/toolse" target="__blank">
        <icons-carbon-logo-github />
      </a>
      <button @click="color = color === 'dark' ? 'light' : 'dark'">
        <icons-carbon-sun v-if="color === 'light'" />
        <icons-carbon-asleep v-else />
      </button>
    </div>
  </nav>
</template>
