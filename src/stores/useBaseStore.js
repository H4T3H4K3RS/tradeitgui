import { defineStore } from 'pinia'
import instance from "@/services/api";

export const useBaseStore = defineStore ({
  id: 'BaseStore',
  actions: {
    fetchFiats (params) {
      return instance.get ('/base/fiat/', { params })
      // return instance.get ('/e2d327529b6fb312714f', { params })
    },
  },
})
