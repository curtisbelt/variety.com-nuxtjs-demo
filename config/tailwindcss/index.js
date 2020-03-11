/**
 * Documentation: https://tailwindcss.com/docs/configuration
 * Defaults: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    fontFamily: {
      'ibm-plex-sans': [
        '"IBM Plex Sans"',
        ...require('tailwindcss/defaultConfig').theme.fontFamily.sans,
      ],
      'ibm-plex-serif': [
        '"IBM Plex Serif"',
        ...require('tailwindcss/defaultConfig').theme.fontFamily.serif,
      ],
      'ibm-plex-mono': [
        '"IBM Plex Mono"',
        ...require('tailwindcss/defaultConfig').theme.fontFamily.mono,
      ],
      'graphik-sans': [
        '"Graphik XX Cond"',
        ...require('tailwindcss/defaultConfig').theme.fontFamily.sans,
      ],
      'para-supreme-serif': [
        '"Para Supreme Regular"',
        ...require('tailwindcss/defaultConfig').theme.fontFamily.serif,
      ],
    },
    extend: {
      colors: require('./colors'),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@curtisbelt/tailwindcss-extras'), // https://github.com/curtisbelt/tailwindcss-extras
  ],
}
