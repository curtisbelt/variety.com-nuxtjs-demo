<template>
  <header class="TheHeader // bg-brand-teal-500 text-white text-12px font-bold">
    <div
      class="container p-6 grid grid-cols-3 items-center uppercase tracking-wider"
    >
      <div class="justify-start grid grid-flow-col gap-3 items-center">
        <button class="text-21px">
          <AppIcon :icon="['fal', 'bars']" />
        </button>
        <button class="text-21px">
          <AppIcon :icon="['fal', 'search']" />
        </button>
        <nav class="row-span-2">
          <ul class="ml-8 grid gap-1 justify-center">
            <li>Have a news tip?</li>
            <li>Newsletters</li>
            <li>U.S. Edition</li>
          </ul>
        </nav>
      </div>

      <div class="flex items-center justify-center">
        <OneFifteenLogo class="h-12 mr-4" />
        <VarietyLogo class="h-24" />
      </div>
      <div class="justify-end grid grid-flow-col gap-8">
        <button
          class="uppercase font-bold border border-white p-2 tracking-widest "
        >
          Subscribe
        </button>
        <button
          class="uppercase font-bold border border-white p-2 tracking-widest "
        >
          Login
        </button>
      </div>
    </div>

    <nav class="border-t border-white p-2">
      <ul v-if="menuItems" class="flex justify-center text-13px tracking-wider">
        <li v-for="menuItem in menuItems.nodes" :key="menuItem.id" class="mr-6">
          <ALink :to="menuItem.url" class="hover:text-brand-yellow-500 p-2">
            {{ menuItem.label }}
          </ALink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import gql from 'graphql-tag'

  // import { createPopper } from '@popperjs/core'
  import VarietyLogo from '@/assets/svg/VarietyLogo.svg'
  import OneFifteenLogo from '@/assets/svg/OneFifteenLogo.svg'

  export default {
    name: 'TheHeader',
    components: {
      VarietyLogo,
      OneFifteenLogo,
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
      `,
    },
  }
</script>
