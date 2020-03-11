<template>
  <nav class="TheHeader // bg-brand-teal-500 text-white p-6">
    <div class="flex justify-between items-center m-auto ">
      <AppIcon :icon="['far', 'bars']" />
      <AppIcon :icon="['far', 'search']" />

      Have a news tip? Newsletters U.S. Edition

      <div class="flex items-center justify-center">
        <OneFifteenLogo class="h-12 mr-4" />
        <VarietyLogo class="h-24" />
      </div>

      <div
        class="text-xs uppercase  font-bold border border-white p-2 tracking-widest"
      >
        Subscribe
      </div>
    </div>
    <ul v-if="menuItems" class="flex">
      <li v-for="menuItem in menuItems.nodes" :key="menuItem.id" class="mr-6">
        <AppLink :to="menuItem.url" class="text-blue-500 hover:text-blue-800">
          {{ menuItem.label }}
        </AppLink>
      </li>
    </ul>
  </nav>
</template>

<script>
  import gql from 'graphql-tag'

  import VarietyLogo from '@/assets/svg/VarietyLogo.svg'
  import OneFifteenLogo from '@/assets/svg/OneFifteenLogo.svg'

  export default {
    name: 'TheHeader',
    components: {
      VarietyLogo,
      OneFifteenLogo
    },
    apollo: {
      menuItems: gql`
        {
          menuItems(where: { location: PMC_VARIETY_HEADER }) {
            nodes {
              id
              url
              label
              cssClasses
            }
          }
        }
      `
    }
  }
</script>
