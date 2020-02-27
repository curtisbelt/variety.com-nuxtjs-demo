const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

export default {
  head: {
    titleTemplate: (titleChunk) =>
      titleChunk ? `${titleChunk} - Nuxt.js Template` : 'Nuxt.js Template'
  },

  router: {
    trailingSlash: false
  },

  css: ['assets/css/tailwind'],

  plugins: [],

  modules: ['@nuxtjs/axios', '@nuxtjs/apollo'],

  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],

  eslint: {
    fix: true
  },

  modern: isProd,

  build: {
    parallel: isDev,
    cache: isDev,
    hardSource: isDev
  },

  apollo: {
    includeNodeModules: true, // In case you use *.gql files inside of node_module folder you can enable the graphql-tag/loader to parse the files for you.
    clientConfigs: {
      default: {
        httpEndpoint: 'http://variety.variety.localhost/graphql',
        persisting: true // https://www.apollographql.com/docs/apollo-server/performance/apq/
      }
    }
  }
}
