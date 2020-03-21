<template>
  <component :is="tagName">
    <transition
      :name="transition"
      :enter-active-class="enterActiveClass"
      :leave-active-class="leaveActiveClass"
      @after-leave="doDestroy"
    >
      <span v-show="!disabled && showPopper" ref="popper" :class="rootClass">
        <slot>{{ content }}</slot>
      </span>
    </transition>
    <slot name="reference"></slot>
  </component>
</template>

<script>
  import { createPopper } from '@popperjs/core'
  /** TODO: Need to implement detectOverflow correctly */
  // import detectOverflow from '@popperjs/core/lib/utils/detectOverflow.js'

  function on(element, event, handler) {
    if (element && event && handler) {
      document.addEventListener
        ? element.addEventListener(event, handler, false)
        : element.attachEvent('on' + event, handler)
    }
  }

  function off(element, event, handler) {
    if (element && event) {
      document.removeEventListener
        ? element.removeEventListener(event, handler, false)
        : element.detachEvent('on' + event, handler)
    }
  }

  export default {
    props: {
      tagName: {
        type: String,
        default: 'span',
      },
      trigger: {
        type: String,
        default: 'hover',
        validator: (value) =>
          ['clickToOpen', 'clickToToggle', 'hover', 'focus'].includes(value),
      },
      delayOnMouseOver: {
        type: Number,
        default: 10,
      },
      delayOnMouseOut: {
        type: Number,
        default: 10,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      content: {
        type: String,
        default: '',
      },
      enterActiveClass: {
        type: String,
        default: '',
      },
      leaveActiveClass: {
        type: String,
        default: '',
      },
      boundariesSelector: {
        type: String,
        default: '',
      },
      reference: {
        type: Object,
        default: () => {},
      },
      forceShow: {
        type: Boolean,
        default: false,
      },
      appendToBody: {
        type: Boolean,
        default: false,
      },
      visibleArrow: {
        type: Boolean,
        default: true,
      },
      transition: {
        type: String,
        default: '',
      },
      stopPropagation: {
        type: Boolean,
        default: false,
      },
      preventDefault: {
        type: Boolean,
        default: false,
      },
      options: {
        type: Object,
        default: () => {},
      },
      rootClass: {
        type: String,
        default: '',
      },
    },

    data() {
      return {
        referenceElm: null,
        popperJS: null,
        showPopper: false,
        currentPlacement: '',
        popperOptions: {
          /**
           * placement options:
           *   auto
           *   auto-start
           *   auto-end
           *   top
           *   top-start
           *   top-end
           *   bottom
           *   bottom-start
           *   bottom-end
           *   right
           *   right-start
           *   right-end
           *   left
           *   left-start
           *   left-end
           */
          placement: 'bottom',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
          ],
        },
      }
    },

    watch: {
      showPopper(value) {
        if (value) {
          this.updatePopper()
          this.$emit('show', this)
        } else {
          this.$emit('hide', this)
        }
      },

      forceShow: {
        handler(value) {
          this[value ? 'doShow' : 'doClose']()
        },
        immediate: true,
      },

      disabled(value) {
        if (value) {
          this.showPopper = false
        }
      },
    },

    created() {
      this.appendedArrow = false
      this.appendedToBody = false
      this.popperOptions = Object.assign(this.popperOptions, this.options)
    },

    mounted() {
      this.referenceElm = this.reference || this.$slots.reference[0].elm
      this.popper = this.$slots.default[0].elm

      switch (this.trigger) {
        case 'clickToOpen':
          on(this.referenceElm, 'click', this.doShow)
          on(document, 'click', this.handleDocumentClick)
          break
        case 'clickToToggle':
          on(this.referenceElm, 'click', this.doToggle)
          on(document, 'click', this.handleDocumentClick)
          break
        case 'hover':
          on(this.referenceElm, 'mouseover', this.onMouseOver)
          on(this.popper, 'mouseover', this.onMouseOver)
          on(this.referenceElm, 'mouseout', this.onMouseOut)
          on(this.popper, 'mouseout', this.onMouseOut)
          break
        case 'focus':
          on(this.referenceElm, 'focus', this.onMouseOver)
          on(this.popper, 'focus', this.onMouseOver)
          on(this.referenceElm, 'blur', this.onMouseOut)
          on(this.popper, 'blur', this.onMouseOut)
          break
      }
    },

    destroyed() {
      this.destroyPopper()
    },

    methods: {
      doToggle(event) {
        if (this.stopPropagation) {
          event.stopPropagation()
        }

        if (this.preventDefault) {
          event.preventDefault()
        }

        if (!this.forceShow) {
          this.showPopper = !this.showPopper
        }
      },

      doShow() {
        this.showPopper = true
      },

      doClose() {
        this.showPopper = false
      },

      doDestroy() {
        if (this.showPopper) {
          return
        }

        if (this.popperJS) {
          this.popperJS.destroy()
          this.popperJS = null
        }

        if (this.appendedToBody) {
          this.appendedToBody = false
          document.body.removeChild(this.popper.parentElement)
        }
      },

      doCreatePopper() {
        this.$nextTick(() => {
          if (this.visibleArrow) {
            this.appendArrow(this.popper)
          }

          if (this.appendToBody && !this.appendedToBody) {
            this.appendedToBody = true
            document.body.appendChild(this.popper.parentElement)
          }

          if (this.popperJS && this.popperJS.destroy) {
            this.popperJS.destroy()
          }

          /** TODO: Need to implement detectOverflow correctly */

          // if (this.boundariesSelector) {
          //   const customBoundary = document.querySelector(
          //     this.boundariesSelector,
          //   )

          //   if (customBoundary) {
          //     detectOverflow(state, {
          //       boundary: customBoundary, // 'clippingParents' by default
          //     })
          //   }
          // }

          this.popperOptions.onFirstUpdate = () => {
            this.$emit('created', this)
            this.$nextTick(this.updatePopper)
          }

          this.popperJS = createPopper(
            this.referenceElm,
            this.popper,
            this.popperOptions,
          )
        })
      },

      destroyPopper() {
        off(this.referenceElm, 'click', this.doToggle)
        off(this.referenceElm, 'mouseup', this.doClose)
        off(this.referenceElm, 'mousedown', this.doShow)
        off(this.referenceElm, 'focus', this.doShow)
        off(this.referenceElm, 'blur', this.doClose)
        off(this.referenceElm, 'mouseout', this.onMouseOut)
        off(this.referenceElm, 'mouseover', this.onMouseOver)
        off(document, 'click', this.handleDocumentClick)

        this.showPopper = false
        this.doDestroy()
      },

      appendArrow(element) {
        if (this.appendedArrow) {
          return
        }

        this.appendedArrow = true

        const arrow = document.createElement('div')
        arrow.setAttribute('data-popper-arrow', '')
        arrow.className = 'popper__arrow'
        element.appendChild(arrow)
      },

      updatePopper() {
        this.popperJS ? this.popperJS.update() : this.doCreatePopper()
      },

      onMouseOver() {
        clearTimeout(this._timer)
        this._timer = setTimeout(() => {
          this.showPopper = true
        }, this.delayOnMouseOver)
      },

      onMouseOut() {
        clearTimeout(this._timer)
        this._timer = setTimeout(() => {
          this.showPopper = false
        }, this.delayOnMouseOut)
      },

      handleDocumentClick(e) {
        if (
          !this.$el ||
          !this.referenceElm ||
          this.elementContains(this.$el, e.target) ||
          this.elementContains(this.referenceElm, e.target) ||
          !this.popper ||
          this.elementContains(this.popper, e.target)
        ) {
          return
        }

        this.$emit('documentClick', this)

        if (this.forceShow) {
          return
        }

        this.showPopper = false
      },

      elementContains(elm, otherElm) {
        if (typeof elm.contains === 'function') {
          return elm.contains(otherElm)
        }

        return false
      },
    },
  }
</script>

<style>
  .popper {
    background: #fff;
    color: #000;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 13px;
    border-radius: 4px;
  }

  .popper__arrow,
  .popper__arrow::before {
    position: absolute;
    left: 0;
    width: 8px;
    height: 8px;
    z-index: -1;
  }

  .popper__arrow::before {
    content: '';
    transform: rotate(45deg);
    background: #fff;
  }

  .popper[data-popper-placement^='top'] .popper__arrow {
    bottom: -4px;
  }

  .popper[data-popper-placement^='bottom'] .popper__arrow {
    top: -4px;
  }

  .popper[data-popper-placement^='right'] .popper__arrow {
    left: -4px;
  }
  .popper[data-popper-placement^='left'] .popper__arrow {
    right: -4px;
  }
</style>
