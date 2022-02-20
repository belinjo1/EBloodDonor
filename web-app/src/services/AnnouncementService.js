import axios from "axios";

// const apiClient = axios.create({
//   baseURL: `http://localhost:5000`,
//   withCredentials: true, // This is the default
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// })
axios.defaults.withCredentials = true;

const apiClient = axios.create({
  baseURL: `http://localhost:5000`,
  withCredentials: true,
});

export default {
  getAllAnnouncements() {
    return apiClient.get("/api/v1/announcements");
  },
  getAnnouncement(id) {
    return apiClient.get("/api/v1/announcements/getAnnouncement/" + id);
  },
  createAnnouncement() {
    return apiClient.post("/api/v1/announcements");
  },
  updateAnnoucement(announcement) {
    apiClient.patch("/api/v1/announcements", announcement);
  },
  deleteAnnouncement(id) {
    apiClient.delete("/api/v1/announcements" + id);
  },
};
