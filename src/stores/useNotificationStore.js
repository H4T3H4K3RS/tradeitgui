import { defineStore } from "pinia"
import instance from "@/services/api"

export const useNotificationStore = defineStore ({
  id: `notificationStore`, actions: {
    fetchItems (params) {
      return instance.get (`/notification/`, { params })
    }, fetchItem (params) {
      return instance.get (`/notification/${params.id}/`, { params })
    }, postItem (params) {
      return instance.post (`/notification/`, params)
    }, patchItem (params) {
      return instance.patch (`/notification/${params.id}/`, params)
    }, putItem (params) {
      return instance.put (`/notification/${params.id}/`, params)
    }, deleteItem (params) {
      return instance.delete (`/notification/${params.id}/`, { params })
    }, read (params) {
      return instance.get (`/bulk_update_notifications/`, { params })
    },
  },
})
