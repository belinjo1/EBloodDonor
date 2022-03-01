import AppointmentService from "@/services/AppointmentService";

const state = {
  //njo per admin njo per user qe ka me marr vec appoin te vet
  appointments: null,
  appointment: null,
};

const getters = {
  appointments: (state) => state.appointments,
  appointment: (state) => state.appointment,
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
  async getAppointment({ commit }, id) {
    var appointments = null;

    await AppointmentService.getAppointment(id).then((response) => {
      appointments = response.data.data.appointments;
      console.log(appointments);
    });
    await commit("setAppointment", appointments);
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
  setAppointment(state, appointment) {
    state.appointment = appointment;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
