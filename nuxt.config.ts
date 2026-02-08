// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/scss/main.scss'],
  components: [
    {
      path: "~/components/ui",
      pathPrefix: false,
      global: true
    },
    '~/components'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
        },
        { rel: 'icon', type: 'image/png', href: '/2.png' }
      ]
    }
  },
  devtools: { enabled: false }
})
