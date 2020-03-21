<template>
  <div class="MCard // bg-white shadow-card px-4 py-5 relative">
    <div
      v-if="$slots.ribbon"
      class="flex align-middle items-center p-4 sm:p-0 sm:absolute w-full left-0 right-0 top-0 -mt-3 z-20"
    >
      <div class="ribbon">
        <div
          class="ribbon-content text-18px font-bold tracking-widest text-white"
        >
          <slot name="ribbon" />
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'MCard',
  }
</script>

<style lang="postcss" scoped>
  .ribbon {
    position: relative;
    margin: auto;
    @apply bg-brand-teal-500;
    z-index: 20;
    color: #fff;
    text-align: center;
    padding: 0em 1.6em;
  }
  .ribbon:before,
  .ribbon:after {
    content: '';
    position: absolute;
    display: block;
    bottom: -0.6em;
    border: 0.6em solid;
    @apply border-brand-teal-500;
    z-index: -1;
  }
  .ribbon:before {
    left: -3em;
    border-right-width: 3.5em;
    border-left-color: transparent;
  }
  .ribbon:after {
    right: -3em;
    border-left-width: 3.5em;
    border-right-color: transparent;
  }
  .ribbon .ribbon-content:before,
  .ribbon .ribbon-content:after {
    content: '';
    position: absolute;
    display: block;
    border-top-style: solid;

    /* Hacky use of currentColor here -- need to setup color variables */
    @apply text-brand-teal-400;
    border-color: currentColor transparent transparent transparent;

    border-width: 1em 0 0 0;
    bottom: -0.54em;
  }
  .ribbon .ribbon-content:before {
    left: 0;
    border-width: 0.54em 0 0 1em;
  }
  .ribbon .ribbon-content:after {
    right: 0;
    border-width: 0.54em 1em 0 0;
  }
</style>
