<script lang="ts" setup>
  // const { data } = await useFetch('https://api.123mtr.top/menu/findAll')

  import request from '~/utils/request';
  const { data } = await request('/menu/findAll').get().json();
  console.log('🚀 ~ file: Header.vue ~ line 4 ~ data', data.value);
</script>

<template>
  <div>
    <Header />
    <Article class="space-y-6" />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <!-- <Paging /> -->
  </div>
</template>
