import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faBars,
  faHome,
  faUser,
  faUsers,
  faMapMarkerAlt,
  faPen,
  faDroplet,
  faEnvelope,
  faInfoCircle,
  faAddressBook,
  faBullhorn,
  faCalendarCheck,
  faArrowRightFromBracket,
  faKey
} from '@fortawesome/free-solid-svg-icons'

const importedIcons = { 
  faBars, 
  faHome,
  faUser,
  faUsers,
  faMapMarkerAlt,
  faPen,
  faDroplet,
  faEnvelope,
  faInfoCircle,
  faAddressBook,
  faBullhorn,
  faCalendarCheck,
  faArrowRightFromBracket,
  faKey
}

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(importedIcons)

const vuetifyOptions = {
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
 }
Vue.use(Vuetify)

new Vue({
  router,
  store,
  vuetify: new Vuetify(vuetifyOptions),
  render: h => h(App)
}).$mount('#app')
