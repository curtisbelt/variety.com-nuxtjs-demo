/**
 * Documentation: https://tailwindcss.com/docs/configuration
 * Defaults: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    container: {
      center: true,
    },
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
    fontSize: {
      '10px': '0.625rem',
      '11px': '0.6875rem',
      '12px': '0.75rem',
      '13px': '0.8125rem',
      '14px': '0.875rem',
      '16px': '1rem',
      '18px': '1.125rem',
      '21px': '1.313rem',
      '24px': '1.5rem',
      '32px': '2rem',
      '36px': '2.25rem',
      '42px': '2.625rem',
      '52px': '3.25rem',
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
