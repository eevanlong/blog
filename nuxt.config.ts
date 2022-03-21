import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  meta: {
    title: 'my-blog',
    meta: [],
    script: [],
    link: [],
    style: [],
  },
  buildModules: ['@vueuse/nuxt', '@pinia/nuxt', 'nuxt-windicss'],
  vueuse: {
    ssrHandlers: true,
  },
  proxy: {
    '/': {
      target: 'https://api.123mtr.top',
      changeOrigin: true,
    },
  },
});
