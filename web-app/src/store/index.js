import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import sidebar from "./modules/sidebar";
import auth from "./modules/auth";
import user from "./modules/user";
import announcement from "./modules/announcement";
import contactUs from "./modules/ContactUs";
import appointment from "./modules/appointment";
import dropdowns from "./modules/dropdowns";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sidebar,
    auth,
    user,
    announcement,
    contactUs,
    appointment,
    dropdowns
  },
  plugins: [createPersistedState()],
});
