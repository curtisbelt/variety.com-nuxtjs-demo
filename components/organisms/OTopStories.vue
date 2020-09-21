<template>
  <div class="OTopStories // grid grid-cols-3 gap-4">
    <!-- BEGIN 1 -->
    <APanel class="col-span-3">
      <div class="flex h-full -m-2">
        <div class="m-2 aspect-ratio-4x3 flex-shrink-0" style="width: 57%">
          <img
            class="absolute w-full h-full inset-0 object-cover"
            :src="stories[0].masterArticle.featuredImage.sourceUrl"
          />
        </div>
        <div class="m-2 py-1 flex flex-col">
          <div
            class="text-cool-gray-500 uppercase text-13px font-bold font-ibm-plex-mono"
          >
            {{ stories[0].masterArticle.verticalCategories.nodes[0].name }}
          </div>
          <div class="flex-1">
            <h3 class="text-32px font-bold my-2">{{ stories[0].title }}</h3>
            <div
              class="text-24px font-para-supreme-serif my-2 leading-tight"
              v-html="stories[0].excerpt"
            />
          </div>
          <div class="text-12px">
            <span class="text-brand-teal-500 font-ibm-plex-sans font-bold">
              By {{ stories[1].masterArticle.author.name }}
            </span>
            <span class="pl-4 text-brand-teal-300 font-ibm-plex-mono">
              {{ timeAgo(stories[1].masterArticle.dateGmt) }}
            </span>
          </div>
        </div>
      </div>
    </APanel>

    <!-- BEGIN 2 -->
    <APanel class="col-span-2">
      <div class="flex h-full -m-2">
        <div class="m-2 aspect-ratio-5x4 flex-shrink-0" style="width: 36%">
          <img
            class="absolute w-full h-full inset-0 object-cover"
            :src="stories[1].masterArticle.featuredImage.sourceUrl"
          />
        </div>
        <div class="m-2">
          {{ stories[1].title }}
          {{ stories[1].masterArticle.author.name }}
        </div>
      </div>
    </APanel>

    <!-- BEGIN 3 -->
    <APanel class="col-span-1">
      <div>
        {{ stories[2].title }}
      </div>
    </APanel>

    <!-- BEGIN 4 -->
    <APanel class="col-span-1">
      <div>
        {{ stories[3].title }}
      </div>
    </APanel>

    <!-- BEGIN 5 -->
    <APanel class="col-span-2">
      <div class="flex h-full -m-2">
        <div class="m-2 mr-0 aspect-ratio-5x4 flex-shrink-0 w-1/2">
          <img
            class="absolute w-full h-full inset-0 object-cover pr-4"
            :src="stories[4].masterArticle.featuredImage.sourceUrl"
          />
        </div>
        <div class="m-2 ml-0">
          {{ stories[4].title }}
        </div>
      </div>
    </APanel>

    <!-- BEGIN 6 -->
    <APanel class="col-span-3">
      <div class="flex h-full -m-2">
        <div class="m-2 aspect-ratio-9x5 flex-shrink-0" style="width: 42%">
          <img
            class="absolute w-full h-full inset-0 object-cover"
            :src="stories[5].masterArticle.featuredImage.sourceUrl"
          />
        </div>
        <div class="m-2">
          {{ stories[5].title }}
        </div>
      </div>
    </APanel>
  </div>
</template>

<script>
  import timeAgo from '~/utils/time/timeAgo'

  export default {
    name: 'OTopStories',
    props: {
      stories: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      timeAgo,
    },
  }
</script>
