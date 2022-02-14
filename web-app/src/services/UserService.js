import axios from 'axios'

// const apiClient = axios.create({
//   baseURL: `http://localhost:5000`,
//   withCredentials: true, // This is the default
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// })
axios.defaults.withCredentials = true

const apiClient = axios.create({
    baseURL: `http://localhost:5000`,
    withCredentials: true
})
  
export default {
  getAllUsers() {
    return apiClient.get("/api/v1/users/")
  },
  deleteUser(id) {
    apiClient.delete("/api/v1/users/deleteMe/" + id)
  },
  editUser(user) {
    console.log(user)
    apiClient.patch("/api/v1/users/editUser", user)
  }
}
