<script setup lang="ts">
const time = useTimeAgo(new Date(2021, 0, 1))
</script>

<template>
  <article w-60% h-50 ma rounded shadow-green-500>
    <div>1/2</div>
    <div text-gray>{{ time }}</div>
  </article>
</template>
