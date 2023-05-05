import { defineStore } from 'pinia'
import instance from '@/services/api'

const createStore = resource => {
  return defineStore ({
    id: `${resource}Store`, actions: {
      fetchItems (params) {
        return instance.get (`/${resource}`, { params })
      }, fetchItem (params) {
        return instance.get (`/${resource}/${params.id}`, { params })
      }, postItem (params) {
        return instance.post (`/${resource}/`, params)
      }, patchItem (params) {
        return instance.patch (`/${resource}/${params.id}/`, params)
      }, putItem (params) {
        return instance.put (`/${resource}/${params.id}/`, params)
      }, deleteItem (params) {
        return instance.delete (`/${resource}/${params.id}/`, { params })
      },
    },
  })
}

export const useItemStore = createStore ('item')
export const useWishStore = createStore ('wish')
export const useTradeStore = createStore ('trade')
export const useReportStore = createStore ('report')
export const useMessageStore = createStore ('message')
export const useNotificationStore = createStore ('notification')
