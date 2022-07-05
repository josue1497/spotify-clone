export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'spotify-clone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/css/tailwind.css', './assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vuex-persist.ts', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components', '~/components/icons', '~/components/core'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID || '',
    SPOTIFY_SECRET_KEY: process.env.SPOTIFY_SECRET_KEY || '',
    SPOTIFY_AUTHORIZE_URL: process.env.SPOTIFY_AUTHORIZE_URL || '',
    REDIRECT_URI: process.env.REDIRECT_URI || '',
    SPOTIFY_AUTH_URI: process.env.SPOTIFY_AUTH_URI || '',
    SPOTIFY_API_URI: process.env.SPOTIFY_API_URI || '',
  },
  router: {
    linkExactActiveClass: 'text-primary', // tailwind class with custom color
  },
  middleware: ['auth'],
}
