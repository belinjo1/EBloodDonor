import AppointmentService from "@/services/AppointmentService";

const state = {
  //njo per admin njo per user qe ka me marr vec appoin te vet
  appointments: null,
  getMyAppointments: null,
};

const getters = {
  appointments: (state) => state.appointments,
  myappointments: (state) => state.getMyAppointments,
};

const actions = {
  async getAppointments({ commit }) {
    var allAppointments = null;

    await AppointmentService.getAllAppointments().then((response) => {
      allAppointments = response.data.data.appointments;
      console.log(allAppointments);
    });
    await commit("setAppointments", allAppointments);
  },
  async getUserAppointments({ commit }) {
    var appointments = null;

    await AppointmentService.getMyAppointments().then((response) => {
      appointments = response.data.data.appointment;
      console.log(response);
    });
    await commit("setUserAppointments", appointments);
  },

  createAppointment({}, appointment) {
    try {
      AppointmentService.createAppointment(appointment);
    } catch (err) {
      console.log(err);
    }
  },

  editAppointment({}, appointment) {
    console.log("Method called from vuex");
    console.log(appointment);
    try {
      AppointmentService.updateAppointment(appointment);
    } catch (err) {
      console.log(err);
    }
  },

  deleteAppointment({}, id) {
    AppointmentService.deleteAppointment(id);
  },
};

const mutations = {
  setAppointments(state, allAppointments) {
    state.appointments = allAppointments;
  },
  setUserAppointments(state, appointments) {
    state.getMyAppointments = appointments;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
