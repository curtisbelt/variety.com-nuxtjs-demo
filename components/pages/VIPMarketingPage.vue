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
            <AButton to="/">
              Subscribe Now
            </AButton>
          </div>
          <div class="my-3">
            <ALink
              to="/"
              class="inline-block text-13px border-b-2 border-blue-400 tracking-wide"
            >
              Learn More
            </ALink>
          </div>
        </div>
      </div>
      <div class="order-first md:order-none w-full md:w-2/3 aspect-ratio-16x9">
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

    <div
      class="container max-w-sm md:max-w-none text-center text-24px md:text-36px uppercase text-gray-500 my-8"
    >
      Here's what <VIPPlusSVG class="inline-block" /> subscribers recieve:
    </div>
    <div
      class="container px-10 grid md:grid-cols-2 gap-4 md:gap-8 items-center"
    >
      <div class="text-center md:text-left">
        <ASmallCircle>1</ASmallCircle>
        <h2
          class="font-para-supreme-serif text-32px md:text-36px lg:text-47px my-4"
        >
          Deep-Dive Special Reports
        </h2>
        <p class="my-2">
          • A growing collection of meticulously researched special reports
          filled every month with data visualizations, analysis and actionable
          insights
        </p>
        <p class="my-2">
          • Also available to produce commissioned reports. Inquire within.
        </p>
      </div>
      <img
        class="order-first md:order-none"
        src="~/assets/images/VIPMarketingPage/row1.png"
      />
    </div>

    <div
      class="md:grey-stripped-bg border-t-2 border-b-2 md:border-t-6 md:border-b-6 border-gray-600 my-8"
    >
      <div
        class="container px-10 text-center grid md:grid-cols-2 gap-4 md:gap-8 items-center py-8"
      >
        <img
          class="md:-my-16"
          src="~/assets/images/VIPMarketingPage/row2.png"
        />
        <div>
          <ASmallCircle>2</ASmallCircle>
          <h2
            class="font-para-supreme-serif text-32px md:text-36px lg:text-47px my-4"
          >
            Commentary on the Latest Developments in Media
          </h2>
          <p class="my-2">
            • Daily viewpoints on top news stories, and their industry
            implications
          </p>
          <p class="my-2">
            • Our weekly Take 5 newsletter delivered straight to your inbox
          </p>
        </div>
      </div>
    </div>

    <div
      class="container px-10 text-center grid md:grid-cols-2 gap-4 md:gap-8 items-center my-6 md:my-12"
    >
      <div>
        <ASmallCircle>3</ASmallCircle>
        <h2
          class="font-para-supreme-serif text-32px md:text-36px lg:text-47px my-4"
        >
          Exclusive Video Featuring Execs at Variety Events
        </h2>
        <p class="my-2">
          Full-length videos of select keynote speakers and panels from recent
          Variety events are available exclusively to VIP subscribers.
        </p>
      </div>
      <img src="~/assets/images/VIPMarketingPage/row3.png" />
    </div>

    <div class="border-t-6 border-gray-600 py-6 md:py-12">
      <div class="container text-center md:grid md:grid-cols-4 gap-8 max-w-4xl">
        <h2
          class="uppercase md:normal-case font-graphik-sans md:font-ibm-plex-sans col-span-4 text-center md:text-left text-32px font-bold tracking-widest md:tracking-normal"
        >
          Meet the VIP Team
        </h2>
        <template v-for="(person, index) in $options.meetTheVIPTeam">
          <div :key="index" class="mt-6 md:mt-0">
            <img
              class="m-auto hidden md:block"
              :src="require(`../../assets/images/${person.imageSource}.png`)"
            />
            <div class="font-bold text-18px mt-5 tracking-wide">
              {{ person.name }}
            </div>
            <div
              class="uppercase text-14px text-cool-gray-500 mb-4 mt-2 md:mt-0 tracking-wider"
            >
              {{ person.title }}
            </div>
            <div
              class="hidden md:block m-auto h-1 w-12 border-b-2 border-brand-red-500 mb-5"
            />
            <div class="text-14px">
              {{ person.biography }}
            </div>
            <div
              v-if="index + 1 !== $options.meetTheVIPTeam.length"
              class="md:hidden m-auto h-1 w-56 border-b-2 border-gray-300 my-6"
            />
          </div>
        </template>
      </div>
    </div>

    <div class="grey-stripped-bg border-t-6 border-gray-600 py-6 sm:py-12">
      <div class="container text-center md:max-w-4xl lg:max-w-none">
        <h2
          class="font-para-supreme-serif text-32px md:text-36px lg:text-47px mb-6 sm:mb-12 mx-auto w-72 md:w-auto leading-9"
        >
          Don't Miss Our
          <span class="text-brand-red-500">Limited Time Offer</span>
        </h2>
        <div class="max-w-5xl mx-auto">
          <div
            class="sm:-m-2 md:-m-4 flex flex-col sm:flex-row sm:flex-wrap md:flex-no-wrap"
          >
            <MCard
              class="my-3 sm:m-2 md:m-4 pb-6 sm:pb-12 w-full sm:flex-1 md:flex-initial md:w-1/3"
            >
              <div class="flex flex-col h-full">
                <div class="font-bold flex-grow">
                  <h3 class="text-24px tracking-wider uppercase">
                    Annual
                  </h3>
                  <p class="my-1 text-brand-red-500 text-24px">
                    $299.99 + 1 month free
                  </p>
                  <p class="m-2 text-18px uppercase">Save Over 50%</p>
                </div>
                <div>
                  <AButton to="/">
                    Get 1 month free
                  </AButton>
                </div>
              </div>
            </MCard>
            <MCard
              class="my-3 sm:m-2 md:m-4 pb-6 sm:pb-12 w-full sm:w-full sm:order-first md:order-none md:w-1/3"
            >
              <template #ribbon>
                BEST OFFER
              </template>

              <div class="flex flex-col h-full">
                <div class="font-bold flex-grow">
                  <h3 class="text-24px tracking-wider uppercase">
                    2 YEARS
                  </h3>
                  <p class="my-1 text-brand-red-500 text-24px">
                    $499.99 + 1 month free
                  </p>
                  <p class="m-2 text-18px uppercase">Save 60%</p>
                </div>
                <div>
                  <AButton to="/">
                    Get 1 month free
                  </AButton>
                </div>
              </div>
            </MCard>
            <MCard
              class="my-3 sm:m-2 md:m-4 pb-6 sm:pb-12 w-full sm:flex-1 md:flex-initial md:w-1/3"
            >
              <div class="flex flex-1 flex-col h-full">
                <h3
                  class="pb-4 flex justify-center items-center font-bold flex-grow text-24px tracking-wider uppercase"
                >
                  Corporate Subscription
                </h3>
                <div>
                  <AButton to="/">
                    Learn More
                  </AButton>
                </div>
              </div>
            </MCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import JWPlayer from '~/components/need-to-package/JWPlayer'
  import MCard from '~/components/molecules/MCard'
  import VIPPlusSVG from '@/assets/svg/VIPPlus.svg'

  export default {
    name: 'VIPMarketingPage',
    meetTheVIPTeam: [
      {
        imageSource: 'VIPMarketingPage/wallenstein-andy',
        name: 'Andrew Wallenstein',
        title: 'Co-Editor in Chief',
        biography:
          'Gavin Bridge is a veteran of market research having spent the past decade at Ipsos, LRW and GfK MRI, where he assisted TV networks, studios and streaming services with better understanding the needs of their audiences.',
      },
      {
        imageSource: 'VIPMarketingPage/bridge-gavin',
        name: 'Gavin Bridge',
        title: 'Senior Media Analyst',
        biography:
          'Gavin Bridge is a veteran of market research having spent the past decade at Ipsos, LRW and GfK MRI, where he assisted TV networks, studios and streaming services with better understanding the needs of their audiences.',
      },
      {
        imageSource: 'VIPMarketingPage/tran-kevin',
        name: 'Kevin Tran',
        title: 'Media Analyst',
        biography:
          'Kevin Tran worked for Business Insider Intelligence, the paid research unit of Business Insider, where his coverage focused on how digital platforms were affecting traditional media.',
      },
      {
        imageSource: 'VIPMarketingPage/eriksen-kaare',
        name: 'Kaare Eriksen',
        title: 'Information Editor',
        biography:
          "Kaare Eriksen was previously a research coordinator for the past two years with Penske Media's Variety Insight division covering television in the U.K. and Canada.",
      },
    ],
    components: {
      JWPlayer,
      VIPPlusSVG,
      MCard,
    },
  }
</script>

<style lang="postcss" scoped>
  .grey-stripped-bg {
    background: url('~assets/images/grey-stripped-bg.png');
  }
  @screen md {
    .md\:grey-stripped-bg {
      background: url('~assets/images/grey-stripped-bg.png');
    }
  }
</style>
