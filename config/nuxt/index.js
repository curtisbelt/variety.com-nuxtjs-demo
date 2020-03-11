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
    APPLINK_RELATIVE_BASE_URL: process.env.APPLINK_RELATIVE_BASE_URL,
    WPGRAPHQL_HTTP_ENDPOINT: process.env.WPGRAPHQL_HTTP_ENDPOINT,
    MENU_LOCATION_THEHEADER: process.env.MENU_LOCATION_THEHEADER,
  },
  modern: process.env.NODE_ENV === 'production',
  modules: ['@nuxtjs/apollo'],
  plugins: [
    { src: '~plugins/font-awesome.js' },
    { src: '~plugins/register-app-components.js' },
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
