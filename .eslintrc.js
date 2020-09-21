module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',

    /**
     * All of the raw HTML being used should be from WordPress
     * and therefore already sanitized. If this is ever not the
     * case, consider turning this back on for awareness.
     */
    'vue/no-v-html': 'off',
  },
}
