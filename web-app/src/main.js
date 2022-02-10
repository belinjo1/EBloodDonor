import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser, faUsers, faMapMarkerAlt, faHistory, faMedal, faPen, faDroplet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faHome, faUser, faUsers, faMapMarkerAlt, faHistory, faMedal, faPen, faDroplet)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
