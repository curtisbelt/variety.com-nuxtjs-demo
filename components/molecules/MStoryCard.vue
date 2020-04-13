<template>
  <APanel class="MStoryCard">
    <div class="flex h-full -m-2">
      <div class="m-2 flex-shrink-0" :class="imgWrapperClass">
        <img
          class="absolute w-full h-full inset-0 object-cover"
          :class="imgClass"
          :src="story.masterArticle.featuredImage.sourceUrl"
        />
      </div>
      <div class="m-2">
        {{ story.title }}
        {{ story.title }}
      </div>
    </div>
  </APanel>
</template>

<script>
  export default {
    name: 'MStoryCard',
    props: {
      story: {
        type: Object,
        default: () => {},
      },
      imgWrapperClass: {
        type: String,
        default: 'aspect-ratio-4x3 w-4/12',
      },
      imgClass: {
        type: String,
        default: '',
      },
    },
  }
</script>
