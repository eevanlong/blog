<script setup lang="ts">
  const database = ref([]);

  const {
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next,
  } = useOffsetPagination({
    total: database.value.length,
    page: 1,
    pageSize: 10,
    // onPageChange: fetchData,
    // onPageSizeChange: fetchData,
  });
</script>

<template>
  <div class="gap-x-4 gap-y-2 grid-cols-2 inline-grid items-center">
    <div opacity="50">total:</div>
    <div>{{ database.length }}</div>
    <div opacity="50">pageCount:</div>
    <div>{{ pageCount }}</div>
    <div opacity="50">currentPageSize:</div>
    <div>{{ currentPageSize }}</div>
    <div opacity="50">currentPage:</div>
    <div>{{ currentPage }}</div>
    <div opacity="50">isFirstPage:</div>
    <div>{{ isFirstPage }}</div>
    <div opacity="50">isLastPage:</div>
    <div>{{ isLastPage }}</div>
  </div>
  <div>
    <button :disabled="isFirstPage" @click="prev">prev</button>
    <button :disabled="isLastPage" @click="next">next</button>
  </div>
</template>
