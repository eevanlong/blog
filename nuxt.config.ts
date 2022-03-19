import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'my-blog',
  },
  buildModules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    'nuxt-windicss',
  ],
  vueuse: {
    ssrHandlers: true,
  },
  proxy: {
    '/': {
      target: 'https://api.123mtr.top',
      changeOrigin: true,
    },
  },
})
