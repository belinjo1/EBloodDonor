import UserService from '@/services/UserService'

const state = {
  users: null
};

const getters = {
  users: (state) => state.users
};

const actions = {
  async getAllUsers({ commit }) {
    var allUsers = null

    await UserService.getAllUsers()
      .then((response) => {
        allUsers = response.data.data
        console.log(allUsers)
      });
    await commit("setUsers", allUsers);
  },
  editUser({ }, user) {

    try {
      UserService.editUser(user)
    } catch (err) {
      console.log(err)
    }

  },
  UpdateMe({ }, user) {

    try {
      UserService.UpdateMe(user)
    } catch (err) {
      console.log(err)
    }

  },
  deleteUser({ }, id) {
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