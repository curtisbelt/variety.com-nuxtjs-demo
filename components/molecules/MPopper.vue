<template>
  <div class="MPopper">
    <div ref="button" v-click-outside="clickOutside" @click="toggle">
      <slot />
    </div>

    <div ref="popper" class="MPopper__tooltip" style="z-index: 9999;">
      <Transition v-on="transitionHandlers">
        <template v-if="isOpen">
          <slot name="popper" />
        </template>
      </Transition>
      <div class="MPopper__arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script>
  // https://popper.js.org/popper-documentation.html
  import { createPopper } from '@popperjs/core'

  export default {
    name: 'MPopper',
    defaults: {
      placement: 'bottom',
      arrowElement: '.popper-arrow',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    },
    props: {
      options: {
        type: Object,
        default: () => {},
      },
      offset: {
        type: String,
        default: null,
      },
      closeOnClickOutside: {
        type: Boolean,
        default: true,
      },
      transitionMethods: {
        type: Object,
        default: () => {
          return {
            /**
             * * Default Slide Animation
             * The CSS max-height technique normally calls for using an excessive value.
             * Instead we can use a hybrid JS/CSS approach -- keep the pure CSS performance,
             * but use `getBoundingClientRect` to get the correct max-height.
             */
            beforeEnter(el) {
              el.style.maxHeight = 0
              el.style.opacity = 0
            },
            enter(el) {
              el.style.transition =
                'max-height 230ms ease-out, opacity 230ms ease-out'
              el.style.maxHeight =
                el.childNodes[0].getBoundingClientRect().height + 'px' // ! IE11: Must use getBoundingClientRect
              el.style.opacity = 1
            },
            leave(el) {
              el.style.maxHeight = 0
              el.style.opacity = 0
            },
            afterLeave(el) {
              el.style.overflow = 'auto'
              el.style.opacity = 0
            },
          }
        },
      },
    },
    data() {
      return {
        isOpen: false,
      }
    },
    computed: {
      transitionHandlers() {
        const boundHandlers = {}
        if (this.transitionMethods.beforeEnter !== undefined) {
          boundHandlers['before-enter'] = this.transitionMethods.beforeEnter
        }
        if (this.transitionMethods.enter !== undefined) {
          boundHandlers.enter = this.transitionMethods.enter
        }
        if (this.transitionMethods.afterLeave !== undefined) {
          boundHandlers['after-leave'] = this.transitionMethods.afterLeave
        }
        if (this.transitionMethods.leave !== undefined) {
          boundHandlers.leave = this.transitionMethods.leave
        }
        return boundHandlers
      },
    },
    mounted() {
      this.Popper = createPopper(this.$refs.button, this.$refs.popper, {
        ...this.$options.defaults,
        ...this.options, // * Merge custom options
      })
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen

        if (this.isOpen) {
          this.$nextTick(() => {
            this.Popper.update()
          })
        }
      },
      clickOutside($event) {
        if (this.closeOnClickOutside) {
          this.close()
        }
      },
      close($event) {
        this.isOpen = false
      },
      open($event) {
        this.isOpen = true
      },
    },
  }
</script>

<style lang="postcss">
  .MPopper__tooltip {
    background: #333;
    color: white;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 13px;
    border-radius: 4px;
    /* display: none; */
  }

  .MPopper__tooltip[data-show] {
    display: block;
  }

  .MPopper__arrow,
  .MPopper__arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: -1;
  }

  .MPopper__arrow::before {
    content: '';
    transform: rotate(45deg);
    background: #333;
  }

  .MPopper__tooltip[data-popper-placement^='top'] > .MPopper__arrow {
    bottom: -4px;
  }

  .MPopper__tooltip[data-popper-placement^='bottom'] > .MPopper__arrow {
    top: -4px;
  }

  .MPopper__tooltip[data-popper-placement^='left'] > .MPopper__arrow {
    right: -4px;
  }

  .MPopper__tooltip[data-popper-placement^='right'] > .MPopper__arrow {
    left: -4px;
  }
</style>
