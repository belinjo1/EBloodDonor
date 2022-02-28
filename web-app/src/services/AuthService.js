import axios from 'axios'

// const apiClient = axios.create({
//   baseURL: `http://localhost:5000`,
//   withCredentials: true, // This is the default
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// })

const apiClient = axios.create({
    baseURL: `http://localhost:5000`,
    withCredentials: true,
})
  
export default {
  Login(user) {
    return apiClient.post("/api/v1/users/login", user)
  },
  Register(user) {
    return apiClient.post("/api/v1/users/signup", user)
  }
}
