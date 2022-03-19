<script setup lang='ts'>
const color = useColorMode()
function toggleDark() {
  color.value = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <nav text="xl gray4" m-5 flex gap-5 justify-center>
    <button class="!outline-none" @click="toggleDark()">
      <div class="dark:i-carbon-moon i-carbon-sun" />
    </button>
    <a i-carbon-logo-github href="https://github.com/toolse/blog" target="__blank" />
  </nav>
</template>
