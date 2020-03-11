export default {
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Variety` : 'Variety'
  },
  htmlAttrs: {
    lang: 'us-en',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
}
