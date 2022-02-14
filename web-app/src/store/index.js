import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import user from "./modules/user";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideBarOpen: false
  },
  getters: {
    sideBarOpen: (state) => state.sideBarOpen,
  },
  mutations: {
      TOGGLE_SIDE_BAR(state){
        state.sideBarOpen = !state.sideBarOpen;
      }
  },
  actions: {
    toggleSideBar({ commit }){
      commit('TOGGLE_SIDE_BAR');
    }
  },
  modules: {
    auth,
    user
  },
  plugins: [createPersistedState()]
  
})
