import { defineStore } from 'pinia'
import instance from "@/services/api";

export const useP2PStore = defineStore ('CurrenciesStore', {
  actions: {
    fetchFiat (params) {
      return instance.get ('/p2p/fiat', { params })
    },
    fetchCrypto (params) {
      return instance.get ('/p2p/crypto', { params })
    },
    fetchRates (params) {
      return instance.get ('/p2p/rates', { params })
    },
  },
})
