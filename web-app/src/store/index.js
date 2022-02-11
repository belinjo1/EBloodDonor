import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideBarOpen: false
  },
  getters: {
      g_sideBarOpen(state){
          return state.sideBarOpen
      }
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
  }
})
