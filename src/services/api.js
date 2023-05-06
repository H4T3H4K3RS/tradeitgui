import axios from "axios"

const instance = axios.create ({
  baseURL: `${import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : "http://localhost:8888/api/v1"}`,

  // baseURL: "https://api.happynewyear.space/api/v1",
  headers: import.meta.env.DEV ? {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  } : {
    "Content-Type": "application/json",
  },
  validateStatus: function (status) {
    return true
  },
})

export default instance
