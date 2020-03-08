import { apollo, build, features, head, router } from './config/nuxt'

const isProd = process.env.NODE_ENV === 'production'

export default {
  css: ['@fortawesome/fontawesome-svg-core/styles.css', 'assets/css/tailwind'],
  eslint: { fix: true },
  modern: isProd,
  modules: ['@nuxtjs/apollo'],
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],
    '@nuxtjs/tailwindcss',
  plugins: [{ src: '~plugins/font-awesome.js' }],
  vue: { config: { productionTip: false } },
  watch: ['~/config/**/*'],
  apollo,
  build,
  features,
  head,
  router
}
