// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Preparatoria Uno',
      // web icon
      link: [{ rel: 'icon', href: '/uady.ico' }],
    },
  },
});
