export default {
  includeNodeModules: true, // In case you use *.gql files inside of node_module folder you can enable the graphql-tag/loader to parse the files for you.
  clientConfigs: {
    default: {
      httpEndpoint: 'http://vanilla.localhost/graphql',
      persisting: false // https://www.apollographql.com/docs/apollo-server/performance/apq/ -- but not supported by wp-graphql https://github.com/wp-graphql/wp-graphql/issues/590
    }
  }
}
