<script lang="ts" setup>
  definePageMeta({
    layout: 'default',
  });
  // const { data } = await useFetch('https://api.123mtr.top/menu/findAll')

  // import request from '~/utils/request';
  // const { data } = await request('/menu/findAll').get().json();
  // console.log('🚀 ~ file: Header.vue ~ line 4 ~ data', data.value);

  const { data } = await useFetch('https://api.123mtr.top/menu/findAll');
  console.log('🚀 ~ file: Header.vue ~ line 4 ~ data', data.value);
</script>

<template>
  <NuxtLayout>
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Paging />
  </NuxtLayout>
</template>
