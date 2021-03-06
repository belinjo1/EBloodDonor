import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faHome,
  faUser,
  faCalendar,
  faUsers,
  faUserPen,
  faUserPlus,
  faMapMarkerAlt,
  faPen,
  faMessage,
  faDroplet,
  faEnvelope,
  faPaperPlane,
  faInfoCircle,
  faAddressBook,
  faBullhorn,
  faCalendarCheck,
  faArrowRightFromBracket,
  faKey,
  faCircleExclamation,
  faCircleXmark,
  faImage,
  faArrowLeft,
  faFaceFrownOpen
} from "@fortawesome/free-solid-svg-icons";

const importedIcons = {
  faBars,
  faHome,
  faUser,
  faCalendar,
  faUsers,
  faUserPen,
  faUserPlus,
  faMapMarkerAlt,
  faPen,
  faMessage,
  faDroplet,
  faEnvelope,
  faPaperPlane,
  faInfoCircle,
  faAddressBook,
  faBullhorn,
  faCalendarCheck,
  faArrowRightFromBracket,
  faKey,
  faCircleExclamation,
  faCircleXmark,
  faImage,
  faArrowLeft,
  faFaceFrownOpen
};

Vue.config.productionTip = false;

Vue.component("font-awesome-icon", FontAwesomeIcon);

library.add(importedIcons);

const vuetifyOptions = {
  icons: {
    iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
};
Vue.use(Vuetify);

// register jw pagination component globally
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);


new Vue({
  router,
  store,
  vuetify: new Vuetify(vuetifyOptions),
  render: (h) => h(App),
}).$mount("#app");
