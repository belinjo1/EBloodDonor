import UserService from '@/services/UserService'

const state = {
  users: null
};

const getters = {
  users: (state) => state.users
};

const actions = {
  async getAllUsers({commit}) {
    var allUsers = null

    await UserService.getAllUsers()
    .then((response) => {
        allUsers = response.data.data
        console.log(allUsers)
    });
    await commit("setUsers", allUsers);
  },
  async editUser({commit}, user) {

    await UserService.editUser(user)
    .then((response) => {
        allUsers = response.data.data
        console.log(allUsers)
    });
    await commit("setUsers", allUsers);
  },
  deleteUser({}, id) {
    // console.log(id)
    console.log(id)
    UserService.deleteUser(id)
  }
};

const mutations = {
  setUsers(state, allUsers) {
    state.users = allUsers;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};