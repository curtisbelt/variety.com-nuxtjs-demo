<template>
  <div>
    <OHeader />
    <Nuxt />
    <OFooter />
  </div>
</template>

<script>
  import OHeader from '~/components/organisms/OHeader'
  export default {
    name: 'Default',
    components: {
      OHeader,
      OFooter: () => import('~/components/organisms/OFooter'),
    },
  }
</script>
