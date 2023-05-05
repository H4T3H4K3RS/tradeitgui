import axios from "axios"

const instance = axios.create ({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
  validateStatus: function (status) {
    return true
  },
})

export default instance
