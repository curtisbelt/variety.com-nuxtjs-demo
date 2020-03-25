import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from '@fortawesome/vue-fontawesome'

// Brands
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest'
import { faTumblr } from '@fortawesome/free-brands-svg-icons/faTumblr'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'

// Light
import { faBars } from '@fortawesome/pro-light-svg-icons/faBars'
import { faSearch } from '@fortawesome/pro-light-svg-icons/faSearch'

// Regular
// import { faBars } from '@fortawesome/pro-regular-svg-icons/faBars'
// import { faSearch } from '@fortawesome/pro-regular-svg-icons/faSearch'

// Solid
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons/faCaretDown'

// Duotone

library.add(
  // Brands
  faFacebookF,
  faInstagram,
  faPinterest,
  faTumblr,
  faTwitter,

  // Light
  faBars,
  faSearch,

  // Regular

  // Solid
  faCaretDown

  // Duotone
)

config.autoAddCss = false // https://github.com/FortAwesome/vue-fontawesome/issues/14

Vue.component('AppIcon', FontAwesomeIcon)
Vue.component('AppIconLayers', FontAwesomeLayers)
