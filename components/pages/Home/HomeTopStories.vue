<template>
  <OTopStories :stories="featuredArchive.nodes" />
</template>

<script>
  import gql from 'graphql-tag'
  import OTopStories from '~/components/organisms/OTopStories'

  export default {
    name: 'HomeTopStories',
    components: {
      OTopStories,
    },
    apollo: {
      featuredArchive: {
        query: gql`
          query getTopStories {
            featuredArchive(
              where: {
                metaQuery: {
                  relation: AND
                  metaArray: [
                    {
                      key: "_pmc_tax"
                      value: "pmc_carousel_modules"
                      compare: EQUAL_TO
                    }
                    {
                      key: "_pmc_term"
                      value: "vy-homepage-top-stories"
                      compare: EQUAL_TO
                    }
                  ]
                }
                orderby: { field: MENU_ORDER, order: ASC }
              }
            ) {
              nodes {
                title
                excerpt
                masterArticle {
                  ... on VideoSingle {
                    title
                    dateGmt
                    author {
                      name
                    }
                    featuredImage {
                      sourceUrl
                    }
                    verticalCategories {
                      nodes {
                        name
                      }
                    }
                  }
                  ... on Post {
                    title
                    dateGmt
                    author {
                      name
                    }
                    featuredImage {
                      sourceUrl
                    }
                    verticalCategories {
                      nodes {
                        name
                      }
                    }
                  }
                  ... on VipReportSingle {
                    title
                    dateGmt
                    author {
                      name
                    }
                    featuredImage {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        `,
      },
    },
  }
</script>
