<template>
  <header class="OHeader // bg-brand-teal-500 text-white text-12px font-bold">
    <div
      class="container px-4 py-6 grid grid-cols-3 items-center uppercase tracking-widest"
    >
      <div class="justify-start grid grid-flow-col gap-3 items-center">
        <button class="text-21px" aria-label="Main Menu">
          <AppIcon :icon="['fal', 'bars']" />
        </button>
        <button class="text-21px" aria-label="Search for articles">
          <AppIcon :icon="['fal', 'search']" />
        </button>
        <nav class="row-span-2">
          <ul class="ml-8 grid gap-1 justify-center">
            <li><ALink to="/">Have a news tip?</ALink></li>
            <li><ALink to="/">Newsletters</ALink></li>
            <MPopper
              ref="editionsMenu"
              tag-name="li"
              trigger="clickToOpen"
              :options="{
                placement: 'bottom-end',
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [0, 8],
                    },
                  },
                ],
              }"
            >
              <div class="popper w-24" @click="$refs.editionsMenu.doClose()">
                <ALink to="/variety-about-us/">Asia</ALink><br />
                <ALink to="/video/the-two-popes-sistine-chapel/">
                  Global
                </ALink>
              </div>

              <div slot="reference" class="cursor-pointer">
                U.S. Edition <AppIcon :icon="['fas', 'caret-down']" />
              </div>
            </MPopper>
          </ul>
        </nav>
      </div>

      <ALink to="/" class="flex items-center justify-center">
        <OneFifteenLogo class="h-12 mr-4" />
        <VarietyLogo class="h-24" />
      </ALink>
      <div class="justify-end grid grid-flow-col gap-8">
        <button
          class="uppercase font-bold border border-white p-2 tracking-widest"
        >
          Subscribe
        </button>
        <button
          class="uppercase font-bold border border-white p-2 tracking-widest"
        >
          Login
        </button>
      </div>
    </div>

    <nav class="hidden md:block border-t border-white p-2">
      <ul v-if="menuItems" class="flex justify-center text-13px tracking-wider">
        <li v-for="menuItem in menuItems.nodes" :key="menuItem.id" class="mr-4">
          <ALink :to="menuItem.url" class="hover:text-brand-yellow-500 p-2">
            {{ menuItem.label }}
          </ALink>
        </li>
      </ul>
    </nav>

    <nav class="hidden lg:block bg-white p-4">
      <ul
        class="container flex flex-wrap justify-center text-14px tracking-wider leading-6 uppercase text-brand-teal-400"
      >
        <li class="px-4 font-bold text-brand-teal-500">Trending:</li>
        <li class="px-4">'<ALink to="/gallery/">Gallery</ALink>'</li>
        <li class="px-4">'<ALink to="/list/">Lists</ALink>'</li>
        <li class="px-4">
          '<ALink
            to="/2019/dirt/finance/hedge-funder-thomas-laffont-scores-13-million-malibu-ranch-1203308095/"
          >
            Dirt </ALink
          >'
        </li>
        <li class="px-4">'<ALink to="/variety-about-us/">About Us</ALink>'</li>
        <li class="px-4">
          '<ALink
            to="/video/onward-to-the-next-pixar-film-does-this-one-have-sequel-potential/"
            >Onward</ALink
          >'
        </li>
        <li class="px-4">
          '<ALink to="/vip-marketing-page/">VIP Marketing</ALink>'
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import gql from 'graphql-tag'
  import MPopper from '~/components/need-to-package/MPopper'
  import VarietyLogo from '@/assets/svg/VarietyLogo.svg'
  import OneFifteenLogo from '@/assets/svg/OneFifteenLogo.svg'

  export default {
    name: 'OHeader',
    components: {
      VarietyLogo,
      OneFifteenLogo,
      MPopper,
    },
    apollo: {
      menuItems: gql`
        {
          menuItems(where: { location: PMC_VARIETY_HEADER }) {
            nodes {
              id
              url
              label
              cssClasses
            }
          }
        }
      `,
    },
  }
</script>
