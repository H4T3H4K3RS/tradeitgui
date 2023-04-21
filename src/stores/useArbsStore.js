import { defineStore } from 'pinia'
import instance from "@/services/api";

export const useArbsStore = defineStore ('ArbsStore', {
  actions: {
    fetchCex (params) {
      return instance.get ('/arbs/cex', { params })
    },
    fetchDex (params) {
      return instance.get ('/arbs/dex', { params })
    },
  },
})
