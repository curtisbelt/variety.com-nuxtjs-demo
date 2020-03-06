<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
  import TheHeader from '~/components/shared/The/TheHeader'
  export default {
    name: 'Default',
    components: {
      TheHeader,
      TheFooter: () => import('~/components/shared/The/TheFooter')
    }
  }
</script>
