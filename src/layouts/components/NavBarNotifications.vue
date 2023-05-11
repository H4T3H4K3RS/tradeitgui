<script setup>
import Notifications from '@core/components/Notifications.vue'

// Images
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import paypal from '@images/svg/paypal.svg'
import { useNotificationStore } from "@/stores/useNotificationStore"

const pollingThreshold = ref (600)
const userPolling = ref (null)
const store = useNotificationStore ()

const notifications = ref ([])

onBeforeMount (
  () => {
    getUser ()
    userPolling.value = setInterval (
      getUser,
      1000,
    )
  },
)
onUnmounted (
  () => {
    clearInterval (userPolling.value)
  },
)

const getUser = (polling = true) => {
  if (polling && pollingThreshold.value <= 0) {
    return
  }
  pollingThreshold.value -= 1
}

watchEffect (
  () => {
    if (pollingThreshold.value === 0) {
      console.log ("Reload")

      return
    }
    store.fetchItems (
      {
        state: 'not_shown',
      },
    ).then (
      response => {
        if (response.status > 399) {
          throw `Ошибка: ${response.status}`
        }
        console.log (response.data)
        let tmpNotifications = response.data.results
        tmpNotifications.forEach (obj => {
          obj.icon = 'tabler-bell'
        })
        notifications.value = tmpNotifications
      },
    ).catch (
      error => {

      },
    )
  },
)

const readNotifications = ids => {
  console.log (ids)
  store.read (
    {
      data: ids,
    },
  )
}
</script>

<template>
  <Notifications
    v-model:notifications="notifications"
    @click:read-all-notifications="readNotifications($event)"
  />
</template>
