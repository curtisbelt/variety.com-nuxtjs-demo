<template>
  <div>
    <div v-if="$apollo.queries.nodeByUri.loading">Loading</div>
    <div v-else class="VideoSingle">
      nodeByUri is {{ nodeByUri }}

      <img :src="nodeByUri.featuredImage.sourceUrl" />
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  export default {
    name: 'VideoSingle',
    apollo: {
      nodeByUri: {
        query: gql`
          query GetNodeByUri($uri: String!) {
            nodeByUri(uri: $uri) {
              ... on VideoSingle {
                featuredImage {
                  sourceUrl
                }
                content
                genreCategories {
                  edges {
                    node {
                      children {
                        nodes {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        // Static parameters
        variables() {
          return { uri: this.$route.params.pathMatch }
        },
      },
    },
  }
</script>
