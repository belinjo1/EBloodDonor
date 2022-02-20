import AnnouncementService from '@/services/AnnouncementService'

const state = {
  announcements: null
};

const getters = {
  announcements: (state) => state.announcements
};

const actions = {
  async getAnnouncements({commit}) {
    
    var allAnnouncements = null

    await AnnouncementService.getAllAnnouncements()
    .then((response) => {
      // allAnnouncements = response
        console.log("asdasd" + response)
    });
    // await commit("setAnnouncements", allAnnouncements);
  },
  updateAnnouncement({}, allAnnouncements) {

    try{
      AnnouncementService.updateAnnouncement(announcements)
    }catch(err){
      console.log(err)
    }

  },
  UpdateMe({}, user) {

    try{
      UserService.UpdateMe(user)
    }catch(err){
      console.log(err)
    }

  },
  deleteUser({}, id) {
    // console.log(id)
    console.log(id)
    AnnouncementService.deleteUser(id)
  }
};

const mutations = {
  setAnnouncements(state, allAnnouncements) {
    state.announcements = allAnnouncements;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};