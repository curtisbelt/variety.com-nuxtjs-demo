<template>
  <nav class="TheHeader // bg-brand-teal-500 text-white p-6">
    <AppIcon :icon="['far', 'bars']" />
    <AppIcon :icon="['far', 'search']" />

    <div class="flex items-center justify-center">
      <OneFifteenLogo class="h-12 mr-4" />
      <VarietyLogo class="h-24" />
    </div>
  </nav>
</template>

<script>
  import VarietyLogo from '@/assets/svg/VarietyLogo.svg'
  import OneFifteenLogo from '@/assets/svg/OneFifteenLogo.svg'

  export default {
    name: 'TheHeader',
    components: {
      VarietyLogo,
      OneFifteenLogo
    }
  }
</script>
