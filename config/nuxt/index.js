import apollo from './apollo'
import build from './build'
import features from './features'
import head from './head'
import router from './router'

require('dotenv').config()

export default {
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-svg-loader',
  ],
  css: [
    '~/assets/css/fonts.pcss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  eslint: { fix: true },
  env: {
    RELATIVE_BASE_URL: process.env.RELATIVE_BASE_URL,
    WPGRAPHQL_HTTP_ENDPOINT: process.env.WPGRAPHQL_HTTP_ENDPOINT,
    HEADER_MENU_LOCATION: process.env.HEADER_MENU_LOCATION,
  },
  modern: process.env.NODE_ENV === 'production',
  modules: ['@nuxtjs/apollo'],
  plugins: [
    { src: '~plugins/font-awesome.js' },
    { src: '~plugins/globally-register-atom-components.js' },
    { src: '~plugins/v-click-outside.js', mode: 'client' },
  ],
  purgeCSS: {
    whitelistPatterns: [
      // font-awesome
      /^fa-/,
      /--fa$/,
      // flickity slider
      /^flickity-/,
    ],
  },
  vue: { config: { productionTip: false } },
  watch: ['~/config/**/*'],
  apollo,
  build,
  features,
  head,
  router,
}
