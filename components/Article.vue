<script setup lang="ts">
  const time = useTimeAgo(new Date(2021, 0, 1));
</script>

<template>
  <article class="my-12">
    <div class="space-y-4">
      <NuxtLink
        to="/detail"
        class="bg-clip-text text-xl underline underline-4 underline-yellow-500"
      >
        标题1
      </NuxtLink>
      <div class="text-gray-500 text-xs space-x-2">
        <span>标签1</span>
        <span>标签2</span>
      </div>
      <div class="text-gray-500 text-x">1/2，{{ time }}</div>
    </div>
  </article>
</template>
