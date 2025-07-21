import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faGithub, faSpotify, faTwitter, faTwitch, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import {
  faCalendarDay,
  faEnvelope,
  faGlobeEurope,
  faSearch,
  faWifi,
  faCaretDown as faSolidCaretDown,
  faMoon
} from '@fortawesome/free-solid-svg-icons'

import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(faTwitter, faInstagram,  faTwitch,  faGithub, faDiscord, faSpotify,  faLinkedin, faLinkedinIn, faEnvelope, faSearch, faCalendarDay, faGlobeEurope, faWifi, faSolidCaretDown, faMoon, faClock)
