<script setup>
import { formatDate } from '@core/utils/formatters'
import { useMessageStore } from "@/stores/useRest"
import { useAuthStore } from "@/stores/useAuthStore"

const props = defineProps ({
  trade: {
    type: Object,
    default: () => {
    },
    required: true,
  },
})

const defaultAvatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Font_Awesome_5_solid_user-circle.svg/1200px-Font_Awesome_5_solid_user-circle.svg.png"
const pollingThreshold = ref (600)
const userPolling = ref (null)

const authStore = useAuthStore ()
const store = useMessageStore ()

const loadMessage = ref ({
  message: "Загружаем предметы 🧠",
  status: 0,
})

const contact = computed (() => ({
  id: authStore.userData.id,

  // id: props.trade?.user,
  // id: 0,
  avatar: defaultAvatar,
}))

const resolveFeedbackIcon = msg => {
  if (msg.state === 'shown')
    return {
      icon: 'tabler-checks',
      color: 'success',
    }
  else
    return {
      icon: 'tabler-check',
      color: undefined,
    }
}

const messages = ref (null)

watchEffect (
  () => {
    if (messages.value === null) {
      loadMessage.value = {
        message: "Загружаем сообщения 🧠",
        status: 0,
      }
    } else if (messages.value.length === 0) {
      loadMessage.value = {
        message: "Нет сообщений",
        status: 2,
      }
    }
  },
)
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
  } else if (!polling) {
    loadMessage.value = {
      message: "Загружаем данные...",
      status: 0,
    }
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
        trade: props.trade.id,
      },
    ).then (
      response => {
        if (response.status > 399) {
          throw `Ошибка: ${response.status}`
        }
        console.log (response.data)
        messages.value = response.data
      },
    ).catch (
      error => {
        snackbar.value = {
          enabled: true,
          message: error,
          type: 'error',
        }
      },
    )
  },
)

const msgGroups = computed (() => {
  const _msgGroups = []
  let current_messages = messages.value
  if (!current_messages || current_messages.length === 0) {
    return []
  }
  let msgSenderId = current_messages[0].user
  let msgGroup = {
    senderId: msgSenderId,
    messages: [],
  }
  current_messages.forEach ((msg, index) => {
    if (msgSenderId === msg.user) {
      msgGroup.messages.push ({
        message: msg.message,
        time: msg.time_created,
        state: msg.state,
      })
    } else {
      msgSenderId = msg.user
      _msgGroups.push (msgGroup)
      msgGroup = {
        senderId: msg.user,
        messages: [ {
          message: msg.message,
          time: msg.time_created,
          state: msg.state,
        } ],
      }
    }
    if (index === current_messages.length - 1)
      _msgGroups.push (msgGroup)
  })

  return _msgGroups
})
</script>

<template>
  <div
    class="chat-log pa-5"
  >
    <template

      v-if="msgGroups?.length"
    >
      <div
        v-for="(msgGrp, index) in msgGroups"
        :key="msgGrp.senderId + String(index)"
        class="chat-group d-flex align-start"
        :class="[{
          'flex-row-reverse': msgGrp.senderId === contact.id,
          'mb-8': msgGroups.length - 1 !== index,
        }]"
      >
        <div
          class="chat-avatar"
          :class="msgGrp.senderId === contact.id ? 'ms-4' : 'me-4'"
        >
          <VAvatar size="38">
            <VImg :src="msgGrp.senderId !== contact.id ? contact.avatar : defaultAvatar" />
          </VAvatar>
        </div>
        <div
          class="chat-body d-inline-flex flex-column"
          :class="msgGrp.senderId === contact.id ? 'align-end' : 'align-start'"
        >
          <p
            v-for="(msgData, msgIndex) in msgGrp.messages"
            :key="msgData.time"
            class="chat-content text-sm py-3 px-4 elevation-1"
            :class="[
              msgGrp.senderId !== contact.id ? 'bg-surface chat-left' : 'bg-primary text-white chat-right',
              msgGrp.messages.length - 1 !== msgIndex ? 'mb-2' : 'mb-1',
            ]"
          >
            {{ msgData.message }}
          </p>
          <div :class="{ 'text-right': msgGrp.senderId === contact.id }">
            <span class="text-xs me-1 text-disabled">{{
              formatDate (msgGrp.messages[msgGrp.messages.length - 1].time, {
                hour: 'numeric',
                minute: 'numeric'
              })
            }}</span>
            <VIcon
              v-if="msgGrp.senderId === contact.id"
              size="16"
              :color="resolveFeedbackIcon(msgGrp.messages[msgGrp.messages.length - 1]).color"
            >
              {{ resolveFeedbackIcon (msgGrp.messages[msgGrp.messages.length - 1]).icon }}
            </VIcon>
          </div>
        </div>
      </div>
    </template>
    <template
      v-else
    >
      <VCard>
        <VCardText
          class="d-flex justify-center text-center text-body-1 align-center"
        >
          {{ loadMessage.message }}
          <VProgressCircular
            v-if="loadMessage.status === 0"
            :width="3"
            color="primary"
            indeterminate
          />
          <VIcon
            v-else-if="loadMessage.status === 1"
            color="success"
            icon="tabler-tick"
          />
          <VIcon
            v-else
            color="error"
            icon="tabler-x"
          />
        </VCardText>
      </VCard>
    </template>
  </div>
</template>

<style lang=scss>
.chat-log {
  .chat-content {
    border-end-end-radius: 6px;
    border-end-start-radius: 6px;

    &.chat-left {
      border-start-end-radius: 6px;
    }

    &.chat-right {
      border-start-start-radius: 6px;
    }
  }
}
</style>
