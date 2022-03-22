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
  <div class="space-x-3 flex items-center font-semibold">
    <button
      class="w-8 h-8 flex justify-center items-center rounded bg-gray-200 hover:bg-gray-300"
    >
      <icons-carbon-page-first class="text-lg" />
    </button>
    <button
      class="w-8 h-8 font-mono font-semibold flex justify-center items-center rounded bg-gray-200 hover:bg-gray-300"
      v-for="(item, index) in 10"
      :key="index"
    >
      {{ item }}
    </button>
    <button
      class="w-8 h-8 flex justify-center items-center rounded bg-gray-200 hover:bg-gray-300"
    >
      <icons-carbon-page-last class="text-lg" />
    </button>
    <!-- :disabled="isFirstPage" @click="prev" -->
    <!-- :disabled="isLastPage" @click="next" -->
  </div>
</template>
