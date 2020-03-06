/**
 * Documentation: https://tailwindcss.com/docs/configuration
 * Defaults: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    colors: require('./colors')
  },
  variants: {},
  plugins: [require('@curtisbelt/tailwindcss-extras')] // https://github.com/curtisbelt/tailwindcss-extras
}
