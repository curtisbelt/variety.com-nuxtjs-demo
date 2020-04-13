<template>
  <div class="VideoSingle // container">
    <div v-if="$apollo.queries.nodeByUri.loading">Loading</div>
    <div v-else class="VideoSingle">
      <img :src="nodeByUri.featuredImage.sourceUrl" />
      <div v-html="nodeByUri.content" />
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
