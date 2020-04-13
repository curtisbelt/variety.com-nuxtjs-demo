<template>
  <div class="Home // font-ibm-plex-sans bg-gray-100 grid gap-4">
    <div class="container grid grid-cols-4 grid-flow-col gap-4 my-4">
      <div class="col-span-3">
        <HomeTopStories />
      </div>
      <div
        class="col-span-1 grid gap-4"
        style="grid-template-rows: 250px 1fr 250px; min-width: 250px;"
      >
        <div class="p-4 bg-white shadow row-auto">
          Advertisement
        </div>
        <div class="p-4 bg-white shadow">Most Popular</div>
        <div class="p-4 bg-white shadow row-auto">
          Advertisement
        </div>
      </div>
    </div>

    <div class="container my-8">
      <ALink
        class="text-blue-500"
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

      <button class="text-blue-500" @click="handleSetConnected">
        Set connected to true
      </button>
    </div>
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
