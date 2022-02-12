import axios from "axios";


const state = {
  user: null
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  isAdmin: (state) => (state.user != null) ? state.user.role.toLowerCase().includes('admin') : false,
  StateUser: (state) => state.user
};

const actions = {

  async LogIn({commit}, user) {
    var userData = null

    await axios.post("api/v1/users/login", user)
    .then((response) => {
        userData = response.data.data.user
        console.log(userData)
    });
    await commit("setUser", userData);
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },
  logout(state, user) {
    state.user = user;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};