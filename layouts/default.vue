<template>
  <div class="min-h-screen flex flex-col">
    <OHeader />
    <div class="flex-1">
      <Nuxt />
    </div>
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
