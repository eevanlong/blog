<script setup lang="ts">
  const color = useColorMode();
</script>

<template>
  <nav class="flex items-center">
    <div class="flex-auto space-x-6 text-x <md:hidden">
      <NuxtLink to="/">首页</NuxtLink>
      <NuxtLink to="/">菜单1</NuxtLink>
      <NuxtLink>菜单1</NuxtLink>
      <NuxtLink>菜单1</NuxtLink>
      <NuxtLink>菜单1</NuxtLink>
    </div>

    <div class="flex items-center space-x-6 <md:w-1/1">
      <div class="w-1/1 relative">
        <icons-carbon-search
          class="absolute inset-2 font-semibold text-size-1rem"
        />
        <input class="ipt" type="text" placeholder="搜索" />
      </div>
      <a href="https://github.com/toolse" target="__blank">
        <icons-carbon-logo-github class="text-2xl" />
      </a>
      <button @click="color = color === 'dark' ? 'light' : 'dark'">
        <icons-carbon-sun v-if="color === 'light'" class="text-2xl" />
        <icons-carbon-asleep v-else class="text-2xl" />
      </button>
    </div>
  </nav>
</template>
