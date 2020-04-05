import gql from 'graphql-tag'

import {
  IntrospectionFragmentMatcher,
  InMemoryCache,
} from 'apollo-cache-inmemory'
import introspectionQueryResultData from '../../fragmentTypes'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

const cache = new InMemoryCache({ fragmentMatcher })

export default function (ctx) {
  return {
    cache,
    // Does nuxt-apollo handle this automatically?
    // ssrMode: true,
    httpEndpoint: process.env.WPGRAPHQL_HTTP_ENDPOINT,
    httpLinkOptions: {
      credentials: 'same-origin',
    },
    persisting: false, // https://www.apollographql.com/docs/apollo-server/performance/apq/ -- but not supported by wp-graphql https://github.com/wp-graphql/wp-graphql/issues/590
    typeDefs: gql`
      type Query {
        connected: Boolean!
      }
    `,
    resolvers: {
      Mutation: {
        connectedSet: (root, { value }, { cache }) => {
          const data = {
            connected: value,
          }
          cache.writeData({ data })
        },
      },
    },
    onCacheInit: (cache) => {
      const data = {
        connected: false,
      }
      cache.writeData({ data })
    },
    // getAuth: () => 'Bearer 1234'
  }
}
