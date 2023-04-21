import { defineStore } from 'pinia'
import instance from "@/services/api"

export const useItemsStore = defineStore ({
  id: 'ItemsStore',
  actions: {
    fetchItems (params) {
      return instance.get ('/item', { params })
    },
    fetchItem(params){
      return instance.get (`/item/${params.id}`, { params } )
    },
    postItem(params){
      return instance.post (`/item/`, params )
    },
    patchItem(params){
      return instance.patch (`/item/${params.id}/`, params )
    },
    putItem(params){
      return instance.put (`/item/${params.id}/`, params )
    },
    deleteItem(params){
      return instance.delete (`/item/${params.id}/`, { params } )
    },
  },
})
