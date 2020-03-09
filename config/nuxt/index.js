import apollo from './apollo'
import build from './build'
import features from './features'
import head from './head'
import router from './router'

export default {
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    'nuxt-svg-loader'
  ],
  css: [
    '~/assets/css/fonts.pcss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/global.pcss'
  ],
  eslint: { fix: true },
  modern: process.env.NODE_ENV === 'production',
  modules: ['@nuxtjs/apollo'],
  plugins: [
    { src: '~plugins/font-awesome.js' },
    { src: '~plugins/register-app-components.js' }
  ],
  purgeCSS: {
    whitelistPatterns: [
      // font-awesome
      /^fa-/,
      /--fa$/,
      // flickity slider
      /^flickity-/
    ]
  },
  vue: { config: { productionTip: false } },
  watch: ['~/config/**/*'],
  apollo,
  build,
  features,
  head,
  router
}
