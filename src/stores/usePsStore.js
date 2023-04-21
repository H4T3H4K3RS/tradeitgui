import { defineStore } from 'pinia'
import instance from "@/services/api";

export const usePsStore = defineStore ('PsStore', {
  actions: {
    fetchQiwi (params) {
      return instance.get ('/ps/qiwi/', { params })
    },
    fetchBank(params){
      return instance.get (`/ps/banks/`, {params} )
    },
    fetchProvider(params){
      return instance.get (`/ps/${params.slug}/` )
    }
  },
})
