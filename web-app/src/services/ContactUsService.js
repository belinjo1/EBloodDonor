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
    getAllMessages() {
        return apiClient.get("/api/v1/contactUsMessages");
    },
    createMessage(message) {
        return apiClient.post("/api/v1/contactUsMessages", message);
    },
    deleteMessage(id) {
        apiClient.delete("/api/v1/contactUsMessages/" + id);
    },
};
