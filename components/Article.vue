<script setup lang="ts">
const time = useTimeAgo(new Date(2021, 0, 1))
</script>

<template>
  <article class="my-7">
    <NuxtLink to="/detail" class="underline underline-4 underline-yellow-500">标题1</NuxtLink>
    <div class="text-gray-500 py-3" text-gray>1/2，{{ time }}</div>
  </article>
</template>
