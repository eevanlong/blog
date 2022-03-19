<script setup lang='ts'>
const color = useColorMode()

const isShow = ref(true)
const toggleDark = () => {
  isShow.value = !isShow.value
  color.value = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <nav class="flex text-7">
    <a class="p-2" href="https://github.com/toolse/blog" target="__blank">
      <icons-carbon-logo-github />
    </a>
    <button class="p-2" @click="toggleDark()">
      <icons-carbon-sun class="dark:bg-current" v-if="isShow" />
      <icons-carbon-asleep v-else />
    </button>
  </nav>
</template>
