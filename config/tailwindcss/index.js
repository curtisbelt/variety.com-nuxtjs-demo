/**
 * Documentation: https://tailwindcss.com/docs/configuration
 * Defaults: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1260px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
    },
    fontFamily: {
      'graphik-sans': [
        '"Graphik XX Cond"',
        ...require('tailwindcss/defaultConfig').theme.fontFamily.sans,
      ],
      'ibm-plex-mono': [
        '"IBM Plex Mono"',
        ...require('tailwindcss/defaultConfig').theme.fontFamily.mono,
      ],
      'ibm-plex-sans': [
        '"IBM Plex Sans"',
        ...require('tailwindcss/defaultConfig').theme.fontFamily.sans,
      ],
      'ibm-plex-serif': [
        '"IBM Plex Serif"',
        ...require('tailwindcss/defaultConfig').theme.fontFamily.serif,
      ],
      'para-supreme-serif': [
        '"Para Supreme Regular"',
        ...require('tailwindcss/defaultConfig').theme.fontFamily.serif,
      ],
    },
    fontSize: {
      '10px': '0.625rem', // text-4xs
      '11px': '0.6875rem', // text-3xs
      '12px': '0.75rem', // text-2xs
      '13px': '0.8125rem', // text-xs
      '14px': '0.875rem', // text-sm
      '16px': '1rem', // text-base
      '18px': '1.125rem', // text-lg
      '21px': '1.313rem', // text-xl
      '24px': '1.5rem', // text-2xl
      '32px': '2rem', // text-3xl
      '36px': '2.25rem', // text-4xl
      '42px': '2.625rem', // text-5xl
      '47px': '2.9375rem', // text-6xl
      '52px': '3.25rem', // text-7xl
      '70px': '4.375rem', // text-8xl
    },
    extend: {
      colors: require('./colors'),
      boxShadow: {
        'card-dark': '0 2px 4px 0 rgba(0,0,0,0.5)',
        'card-light': '0 1px 3px 0 rgba(0,0,0,0.15)',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    // require('@curtisbelt/tailwindcss-extras'), // https://github.com/curtisbelt/tailwindcss-extras
  ],
}
