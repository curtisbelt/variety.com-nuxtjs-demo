<template>
  <div
    class="HomeTopStories // lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-4"
  >
    <div class="p-4 my-4 bg-brand-teal-200 lg:row-span-3 lg:col-span-2 lg:my-0">
      {{ $route.params.pathMatch }}
    </div>
    <div class="p-4 my-4 bg-brand-teal-200 lg:row-span-2 lg:col-span-1 lg:my-0">
      {{ nodeByUri }}
    </div>
    <div class="p-4 my-4 bg-brand-teal-200 lg:row-span-1 lg:col-span-1 lg:my-0">
      In vel ultrices nisl, id blandit magna. Donec vel libero id ex gravida
      lobortis et eget turpis. Ut a tempus magna. Cras rutrum felis sed purus
      venenatis molestie. Phasellus bibendum quis libero nec elementum. Nullam
      tellus diam, scelerisque id risus sit amet, hendrerit iaculis diam.
      Suspendisse potenti. Etiam consequat pharetra nunc, sed varius diam
      consectetur ac. Sed lacinia sit amet arcu id commodo.
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'HomeTopStories',
    apollo: {
      nodeByUri: {
        query: gql`
          query GetNodeByUri($uri: String!) {
            nodeByUri(uri: $uri) {
              __typename
              databaseId

              ... on Page {
                content
                author {
                  firstName
                }
              }
              ... on Post {
                content
                author {
                  firstName
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
