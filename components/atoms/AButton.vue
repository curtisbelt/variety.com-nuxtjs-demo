<template>
  <ALink
    class="inline-block bg-brand-red-500 font-ibm-plex-mono text-white text-14px lg:text-18px px-4 lg:px-6 py-2 tracking-wide"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </ALink>
</template>

<script>
  export default {
    name: 'AButton',
    inheritAttrs: false,
  }
</script>
