<template>
  <nav class="TheFooter">
    <button @click="onLogout">Logout</button>
    <ul>
      <li>
        <router-link to="/">Index</router-link>
      </li>
      <li>
        <router-link to="/page-a">Page A - only logged in user</router-link>
      </li>
      <li>
        <router-link to="/page-b">Page B</router-link>
      </li>
    </ul>
    <p>
      {{ connected }}
    </p>

    <button @click="handleSetConnected">Set connected to false</button>
  </nav>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'TheFooter',
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
      async onLogout() {
        await this.$apolloHelpers.onLogout()
      },
      handleSetConnected() {
        this.$apollo.mutate({
          mutation: gql`
            mutation setConnected($value: Boolean!) {
              connectedSet(value: $value) @client
            }
          `,
          variables: {
            value: false,
          },
        })
      },
    },
  }
</script>
