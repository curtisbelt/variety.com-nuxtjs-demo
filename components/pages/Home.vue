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

    <ALink
      to="/2019/dirt/finance/hedge-funder-thomas-laffont-scores-13-million-malibu-ranch-1203308095/"
    >
      Test post
    </ALink>
    <div class="m-10 font-ibm-plex-sans">
      <ul>
        <li v-for="(meta_value, meta_key, index) in meta_data" :key="index">
          <span class="uppercase font-semibold text-cool-gray-400">
            {{ meta_key }}:
          </span>
          {{ meta_value }}
        </li>
      </ul>
    </div>

    <p>
      {{ connected }}
    </p>

    <button @click="handleSetConnected">Set connected to true</button>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  import HomeTopStories from './Home/HomeTopStories'

  export default {
    name: 'Home',
    components: {
      HomeTopStories,
    },
    data() {
      return {
        connected: null,
        meta_data: {
          'View Gallery': 12,
          Location: 'Calabasas, Calif.',
          Price: '$4.625 million',
          Size: '6,040 square feet, 6 bedrooms, 6.5 bathrooms',
        },
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
