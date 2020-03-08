import apollo from './apollo'
import build from './build'
import features from './features'
import head from './head'
import router from './router'

export default {
  css: ['@fortawesome/fontawesome-svg-core/styles.css', 'assets/css/tailwind'],
  eslint: { fix: true },
  modern: process.env.NODE_ENV === 'production',
  modules: ['@nuxtjs/apollo'],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    'nuxt-svg-loader'
  ],
  plugins: [{ src: '~plugins/font-awesome.js' }],
  vue: { config: { productionTip: false } },
  watch: ['~/config/**/*'],
  apollo,
  build,
  features,
  head,
  router
}
