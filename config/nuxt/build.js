const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

export default {
  parallel: isDev
  // cache: isDev,
  // hardSource: isDev

  // TODO: Is this needed?
  // extend(config, { isClient, isDev }) {
  //   if (isDev && isClient) {
  //     config.module.rules.push({
  //       enforce: 'pre',
  //       test: /\.(js|vue)$/,
  //       loader: 'eslint-loader',
  //       exclude: /(node_modules)/
  //     })
  //     config.devtool = '#eval-source-map'
  //   }
  // }
}
