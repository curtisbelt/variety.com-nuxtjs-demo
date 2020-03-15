import gql from 'graphql-tag'

export default {
  render(h) {
    return h(this.loadComponent)
  },
  apollo: {
    nodeByUri: {
      query: gql`
        query GetNodeByUri($uri: String!) {
          nodeByUri(uri: $uri) {
            __typename
          }
        }
      `,
      variables() {
        return { uri: this.$route.params.pathMatch }
      },
    },
  },
  computed: {
    loadComponent() {
      if (this.nodeByUri && this.nodeByUri.__typename) {
        return () => import(`~/components/pages/${this.nodeByUri.__typename}`)
      }
    },
  },
}
