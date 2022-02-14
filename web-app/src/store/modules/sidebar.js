
const state = {
  sideBarOpen: false
};

const getters = {
  sideBarOpen: (state) => state.sideBarOpen,
};

const mutations = {
  TOGGLE_SIDE_BAR(state){
    state.sideBarOpen = !state.sideBarOpen;
  }
};

const actions = {
  toggleSideBar({ commit }){
    commit('TOGGLE_SIDE_BAR');
  }
};



export default {
  state,
  getters,
  actions,
  mutations,
};