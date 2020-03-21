<template>
  <div class="VIPMarketingPage">
    <div
      class="flex flex-col md:flex-row items-center text-center bg-brand-teal-500 text-white"
    >
      <div class="w-full md:w-1/3">
        <div class="max-w-xs py-8 md:py-4 px-8 lg:p-0 m-auto">
          <h2
            class="font-graphik-sans text-42px lg:text-70px uppercase tracking-wide"
          >
            Master the<br />
            Media Business
          </h2>
          <div class="mb-5 ext-14px text-14px lg:text-18px">
            Explore the trends and issues that matter most to industry
            professionals navigating the age of disruption.
          </div>
          <div class="my-3">
            <ALink
              to="/"
              class="inline-block bg-brand-red-500 font-ibm-plex-mono text-white text-14px lg:text-18px px-6 py-2"
            >
              Subscribe Now
            </ALink>
          </div>
          <div class="my-3">
            <ALink
              to="/"
              class="inline-block text-13px border-b-2 border-blue-400"
            >
              Learn More
            </ALink>
          </div>
        </div>
      </div>
      <div class="w-full md:w-2/3 aspect-ratio-16-9">
        <JWPlayer
          script="https://content.jwplatform.com/libraries/TbqO5K8A.js"
          :options="{
            playlist: 'http://content.jwplatform.com/jw6/TTy91oNt.xml',
            repeat: true,
            autostart: 'viewable',
            mute: true,
            controls: false,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import JWPlayer from '~/components/need-to-package/JWPlayer'

  export default {
    name: 'VIPMarketingPage',
    components: {
      JWPlayer,
    },
  }
</script>

<style lang="postcss" scoped>
  /* Should upgrade @curtisbelt/tailwindcss-extras to use this */
  /*
  Note that traditionally this class would also have "width: 100%" as it doesn't fully work without setting a width.
  But for the video we need the width to actually be w-2/3 -- so it's best to only include style properties that are
  critical to fulfilling its purpose
  */
  .aspect-ratio-16-9 {
    position: relative;
    &:before {
      display: block;
      content: '';
      width: 100%;
      padding-top: 56.25%;
    }
  }
</style>
