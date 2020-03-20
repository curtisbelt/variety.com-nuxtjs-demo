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
        <iframe
          class="absolute inset-0 w-full h-full"
          src="https://cdn.jwplayer.com/players/TTy91oNt-TbqO5K8A.html"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VIPMarketingPage',
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
