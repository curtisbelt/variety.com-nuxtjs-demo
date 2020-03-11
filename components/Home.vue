<template>
  <div class="Home // font-ibm-plex-sans">
    <HomeTopStories />

    <h3 class="font-graphik-sans text-4xl font-bold uppercase">
      The Big Ticket
    </h3>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
      nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
      tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
      nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos.
    </p>

    <AppLink
      to="/2020/film/news/iranian-yalda-to-screen-at-sundance-without-director-due-to-u-s-iran-tensions-1203466584/"
    >
      Test post
    </AppLink>

    <p>
      {{ connected }}
    </p>

    <button @click="handleSetConnected">Set connected to true</button>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  import HomeTopStories from '~/components/Home/HomeTopStories'

  export default {
    name: 'Home',
    components: {
      HomeTopStories,
    },
    data() {
      return {
        connected: null,
      }
    },
    apollo: {
      connected: {
        query: gql`
          query isConnected {
            connected @client
          }
        `,
      },
    },
    methods: {
      handleSetConnected() {
        this.$apollo.mutate({
          mutation: gql`
            mutation setConnected($value: Boolean!) {
              connectedSet(value: $value) @client
            }
          `,
          variables: {
            value: true,
          },
        })
      },
    },
  }
</script>
