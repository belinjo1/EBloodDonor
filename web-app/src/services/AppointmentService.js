import axios from "axios";

axios.defaults.withCredentials = true;

const apiClient = axios.create({
  baseURL: `http://localhost:5000`,
  withCredentials: true,
});

export default {
  getAllAppointments() {
    return apiClient.get("/api/v1/appointments/getAllAppointments");
  },
  getAppointment(id) {
    return apiClient.get("/api/v1/appointments/" + id);
  },
  createAppointment(appointment) {
    return apiClient.post("/api/v1/appointments", appointment);
  },
  updateAppointment(appointments) {
    apiClient.patch("/api/v1/appointments", appointments);
  },
  deleteAppointment(id) {
    apiClient.delete("/api/v1/appointments/" + id);
  },
};
