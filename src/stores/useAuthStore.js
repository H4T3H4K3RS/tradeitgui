import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import instance from "@/services/api"

export const useAuthStore = defineStore ({
  id: 'AuthStore', state: () => ({
    userData: useStorage ('userData', {
      email: "", role: 0,
    }), authData: useStorage ('authData', {
      'access': '', 'refresh': '', 'nextUrl': 'index',
    }),
  }), actions: {
    login (params) {
      console.log (params)

      return instance.post ('/token', params)
    }, async me (params) {
      console.log (params)

      // this.userData = {
      //   email: "mock@mail.ru",
      //   role: 1,
      //   id: 1,
      // }

      let response = await instance.get ('/me/', { params })
      if (response.status !== 200) {
        localStorage.removeItem ('userData')
      } else {
        this.userData = response.data
      }

      return { data: this.userData }
    }, register (params) {
      console.log (params)

      return instance.post ('/register/', params)
    }, refresh (params) {
      console.log (params)

      return instance.post ('/token/refresh', params)
    }, logout (params) {
      localStorage.removeItem ('userData')
      localStorage.removeItem ('authData')

      // this.$reset ()
    },
  },
})
