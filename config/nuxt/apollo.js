export default {
  includeNodeModules: true, // In case you use *.gql files inside of node_module folder you can enable the graphql-tag/loader to parse the files for you.
  clientConfigs: {
    default: '@/config/apollo/default.js',
  },
}
