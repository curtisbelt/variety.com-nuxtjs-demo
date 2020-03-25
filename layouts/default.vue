<template>
  <div>
    <OHeader />
    <Nuxt />
    <OFooter />
  </div>
</template>

<script>
  import OHeader from '~/components/organisms/OHeader'
  import OFooter from '~/components/organisms/OFooter'
  export default {
    name: 'Default',
    components: {
      OHeader,
      OFooter,
    },
  }
</script>
