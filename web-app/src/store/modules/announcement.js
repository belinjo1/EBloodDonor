import AnnouncementService from "@/services/AnnouncementService";

const state = {
  announcements: null,
  announcement: null,
};

const getters = {
  announcements: (state) => state.announcements,
  announcement: (state) => state.announcement,
};

const actions = {
  async getAnnouncements({ commit }) {
    var allAnnouncements = null;

    await AnnouncementService.getAllAnnouncements().then((response) => {
      allAnnouncements = response.data.data.announcements;
      console.log(allAnnouncements);
    });
    await commit("setAnnouncements", allAnnouncements);
  },
  async getAnnouncement({ commit }, id) {
    var announcements = null;

    await AnnouncementService.getAnnouncement(id).then((response) => {
      announcements = response.data.data.announcements;
      console.log(announcements);
    });
    await commit("setAnnouncement", announcements);
  },
  // updateAnnouncement({}, allAnnouncements) {

  //   try{
  //     AnnouncementService.updateAnnouncement(announcements)
  //   }catch(err){
  //     console.log(err)
  //   }

  // },
  // UpdateMe({}, user) {

  //   try{
  //     UserService.UpdateMe(user)
  //   }catch(err){
  //     console.log(err)
  //   }

  // },
  // deleteUser({}, id) {
  //   // console.log(id)
  //   console.log(id)
  //   AnnouncementService.deleteUser(id)
  // }
};

const mutations = {
  setAnnouncements(state, allAnnouncements) {
    state.announcements = allAnnouncements;
  },
  setAnnouncement(state, announcement) {
    state.announcement = announcement;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
