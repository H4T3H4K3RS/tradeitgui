import { defineStore } from 'pinia'
import instance from "@/services/api"

export const useProductsStore = defineStore ({
  id: 'ProductsStore',
  actions: {
    fetchProducts (params) {
      return instance.get ('/products', { params })
    },
  },
})
