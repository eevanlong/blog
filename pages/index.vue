<script lang="ts" setup>
const { data } = await useFetch('/api/menu')
console.log("🚀 ~ file: Header.vue ~ line 4 ~ data", data.value)
</script>

<template>
  <div>
    <Header />
    <Article />
  </div>
</template>
