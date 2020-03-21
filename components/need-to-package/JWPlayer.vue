<template>
  <div
    class="JWPlayer // absolute inset-0 w-full h-full // opacity-0 transition-opacity duration-700 ease-in-out"
    :class="{ 'opacity-100': playing }"
  >
    <div id="jw-player-element" ref="videoElement" />
  </div>
</template>

<script>
  /**
   * https://github.com/micnews/react-jw-player is a good reference for expanding this component
   */
  export default {
    name: 'JWPlayer',
    props: {
      script: {
        type: String,
        default: '',
      },
      options: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        playing: false,
      }
    },
    mounted() {
      const isJWPlayerScriptLoaded = !!window.jwplayer
      const existingScript = document.getElementById('jw-player-script')

      if (!existingScript) {
        this.installPlayerScript()
      }

      if (existingScript && isJWPlayerScriptLoaded) {
        this.initialize()
      }
    },
    destroyed() {
      const jwplayer = window.jwplayer(this.$refs.videoElement)
      if (jwplayer) {
        jwplayer.remove()
      }
    },
    methods: {
      initialize() {
        const jwplayer = window.jwplayer(this.$refs.videoElement)
        if (!jwplayer) {
          return
        }

        jwplayer.setup(this.options)
        jwplayer.on('play', (event) => {
          this.playing = true
        })
      },
      installPlayerScript() {
        const jwPlayerScript = document.createElement('script')

        jwPlayerScript.src = this.script
        jwPlayerScript.id = 'jw-player-script'
        jwPlayerScript.onload = this.initialize
        document.head.appendChild(jwPlayerScript)
      },
    },
  }
</script>
