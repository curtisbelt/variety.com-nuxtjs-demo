<template>
  <div class="absolute inset-0 mt-60 z-50">
    <input v-model="sampleText" class="border m-auto mb-3" />

    <div class="grid grid-cols-6 items-center">
      <template
        v-for="(fontSize, index) in [
          '10',
          '11',
          '12',
          '13',
          '14',
          '16',
          '18',
          '21',
          '24',
          '32',
          '36',
          '42',
          '52',
          '70',
        ]"
      >
        <div :key="`${index}0`" class="p-2 w-10">
          {{ fontSize }}
        </div>
        <div
          :key="`${index}1`"
          :class="`text-${fontSize}px`"
          class="p-2 font-ibm-plex-sans"
        >
          {{ sampleText }}
        </div>
        <div
          :key="`${index}2`"
          :class="`text-${fontSize}px`"
          class="p-2 font-ibm-plex-serif"
        >
          {{ sampleText }}
        </div>
        <div
          :key="`${index}3`"
          :class="`text-${fontSize}px`"
          class="p-2 font-ibm-plex-mono"
        >
          {{ sampleText }}
        </div>
        <div
          :key="`${index}4`"
          :class="`text-${fontSize}px`"
          class="p-2 font-graphik-sans"
        >
          {{ sampleText }}
        </div>
        <div
          :key="`${index}5`"
          :class="`text-${fontSize}px`"
          class="p-2 font-para-supreme-serif"
        >
          {{ sampleText }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Design',
    data() {
      return {
        sampleText: 'test',
      }
    },
  }
</script>
