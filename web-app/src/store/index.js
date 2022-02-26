import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import sidebar from "./modules/sidebar";
import auth from "./modules/auth";
import user from "./modules/user";
import announcement from "./modules/announcement";
import contactUs from "./modules/ContactUs"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sidebar,
    auth,
    user,
    announcement,
    contactUs
  },
  plugins: [createPersistedState()]

})
