<template>
  <div class="Home">
    <HomeTopStories />

    <ul v-if="menuItems" class="flex">
      <li v-for="menuItem in menuItems.nodes" :key="menuItem.id" class="mr-6">
        <AppLink :to="menuItem.url" class="text-blue-500 hover:text-blue-800">
          {{ menuItem.label }}
        </AppLink>
      </li>
    </ul>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  import HomeTopStories from '~/components/Home/HomeTopStories'
  import AppLink from '~/components/shared/App/AppLink'

  export default {
    name: 'Home',
    components: {
      HomeTopStories,
      AppLink
    },

    apollo: {
      menuItems: gql`
        {
          menuItems(where: { location: PRIMARY }) {
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
