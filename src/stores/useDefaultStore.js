import { defineStore } from 'pinia'
import instance from "@/services/api";

export const useDefaultStore = defineStore ({
  id: 'DefaultStore',
  actions: {
    fetchRates (params) {
      return instance.get ('/rates', { params })
      // return instance.get ('/e2d327529b6fb312714f', { params })
    },
  },
})
