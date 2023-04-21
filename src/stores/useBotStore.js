import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import instance from "@/services/api"

export const useBotStore = defineStore ({
  id: 'BotStore',
  actions: {
    async fetchSettings (params) {
      return { data: (await instance.get ('/bot/settings/main/obtain/', { params })).data[0] }
    },
    // async fetchSettings (params) {
    //   console.log (params)
    //   return {data: (await instance.get ('/bot/settings/main/', { params })).data[0]}
    // },
    saveSettings (params) {
      return instance.patch (`/bot/settings/main/${params.id}/`, params)
    },
    fetchArbs(params){
      return instance.get (`/bot/arbs/`, { params })
    },
    fetchHelpful (params) {
      return instance.get ('/bot/helpful/', { params })
    },
  },
})
