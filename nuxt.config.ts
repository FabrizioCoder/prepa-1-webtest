// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Preparatoria Uno',
      link: [{ rel: 'icon', href: '/uady.ico' }],
      meta: [
        { name: 'description', content: 'Preparatoria Uno' },
        { charset: 'utf-8' },
        { name: 'author', content: 'Preparatoria Uno, UADY' },
        {
          name: 'keywords',
          content:
            'Preparatoria Uno, UADY, Preparatoria, Universidad, Yucatán, Mérida, Bachillerato, Prepa, Preparatoria Uno UADY, Preparatoria Uno Mérida, Preparatoria Uno Yucatán, Preparatoria Uno Bachillerato, Preparatoria Uno Prepa, Preparatoria Uno Universidad',
        },
      ],
    },
  },
});
