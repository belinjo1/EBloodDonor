import AuthService from '@/services/AuthService'
import UserService from '@/services/UserService'

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

    await AuthService.Login(user)
    .then((response) => {
        userData = response.data.data.user
        console.log(userData)
    });
    await commit("setUser", userData);
  },
  async fetchUserData({commit, state}) {
    var userData = null
    
    await UserService.getUser(state.user._id)
    .then((response) => {
        userData = response.data.data.user
        console.log(userData)
    });
    await commit("setUser", userData);
  },
  async checkCookie({commit}, user) {

    const check = await AuthService.checkIfCookieExpired()
    if(check){
      await commit("logout", user);
    }
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },

  async Register({commit}, user) {
    var userData = null

    await AuthService.Register(user)
    .then((response) => {
        userData = response.data.data.user
        console.log(userData)
    });
    await commit("setUser", userData);
  },
};

const mutations = {
  setUser(state, userdata) {
    state.user = userdata;
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