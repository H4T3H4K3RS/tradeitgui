<script setup>
import { capitalize } from "vue"
import ChatLog from "@/views/messages/ChatLog.vue"
import { useMessageStore } from "@/stores/useRest"

const props = defineProps ({
  trade: {
    type: Object,
    default: () => {
    },
    required: true,
  },
})

const store = useMessageStore ()
const chatLogPS = ref ()

const scrollToBottomInChatLog = () => {
  const scrollEl = chatLogPS.value.$el || chatLogPS.value

  scrollEl.scrollTop = scrollEl.scrollHeight
}

const actionTrigger = action => {
  console.log (`Action triggered ${action}`)
}

const msg = ref ('')

const sendMessage = () => {
  if (!msg.value)
    return
  store.postItem (
    {
      trade: props.trade.id,
      message: msg.value,
    },
  )
  console.log (`Msg sent ${msg.value}`)
  msg.value = ''

  // Scroll to bottom
  nextTick (() => {
    scrollToBottomInChatLog ()
  })
}
</script>

<template>
  <div>
    <!-- 👉 Chat content -->
    <VMain class="chat-content-container">
      <!-- 👉 Right content: Active Chat -->
      <div
        class="d-flex flex-column h-100"
      >
        <div class="active-chat-header d-flex align-center text-medium-emphasis">
          <!-- avatar -->
          <div
            class="d-flex align-center cursor-pointer"
          >
            <div class="ms-4 mb-4 overflow-hidden">
              <h6 class="text-h5 font-weight-regular">
                <RouterLink
                  v-if="props.trade.item1"
                  :to="{name: 'items-view-id', params: {id: props.trade.item1.id}}"
                >
                  <VChip
                    class="cursor-pointer"
                    color="primary"
                    size="large"
                    variant="tonal"
                  >
                    {{ props.trade.item1.name }}
                  </VChip>
                </RouterLink>
                <VIcon
                  icon="tabler-replace"
                />

                <RouterLink
                  v-if="props.trade.item2"
                  :to="{name: 'items-view-id', params: {id: props.trade.item2.id}}"
                >
                  <VChip
                    class="cursor-pointer"
                    color="primary"
                    size="large"
                    variant="tonal"
                  >
                    {{ props.trade.item2.name }}
                  </VChip>
                </RouterLink>
              </h6>
            </div>
          </div>

          <VSpacer />

          <!--          <VBtn -->
          <!--            variant="text" -->
          <!--            color="default" -->
          <!--            icon -->
          <!--            size="small" -->
          <!--          > -->
          <!--            <VIcon -->
          <!--              size="22" -->
          <!--              icon="tabler-dots-vertical" -->
          <!--            /> -->

          <!--            &lt;!&ndash;            <VMenu activator="parent">&ndash;&gt; -->
          <!--            &lt;!&ndash;              <VList>&ndash;&gt; -->
          <!--            &lt;!&ndash;                <VListItem&ndash;&gt; -->
          <!--            &lt;!&ndash;                  v-for="(item, index) in ['View Contact', 'Mute Notifications', 'Block Contact', 'Clear Chat', 'Report']"&ndash;&gt; -->
          <!--            &lt;!&ndash;                  :key="index"&ndash;&gt; -->
          <!--            &lt;!&ndash;                  :value="index"&ndash;&gt; -->
          <!--            &lt;!&ndash;                >&ndash;&gt; -->
          <!--            &lt;!&ndash;                  <VListItemTitle @click="actionTrigger(item)">&ndash;&gt; -->
          <!--            &lt;!&ndash;                    {{ item }}&ndash;&gt; -->
          <!--            &lt;!&ndash;                  </VListItemTitle>&ndash;&gt; -->
          <!--            &lt;!&ndash;                </VListItem>&ndash;&gt; -->
          <!--            &lt;!&ndash;              </VList>&ndash;&gt; -->
          <!--            &lt;!&ndash;            </VMenu>&ndash;&gt; -->
          <!--          </VBtn> -->
        </div>

        <VDivider />

        <!-- Chat log -->
        <PerfectScrollbar
          ref="chatLogPS"
          tag="ul"
          :options="{ wheelPropagation: false }"
          class="flex-grow-1"
        >
          <ChatLog :trade="props.trade" />
        </PerfectScrollbar>

        <!-- Message form -->
        <VForm
          class="chat-log-message-form mx-5"
          @submit.prevent="sendMessage"
        >
          <VTextField
            :key="props.trade.id"
            v-model="msg"
            variant="solo"
            class="chat-message-input"
            placeholder="Введите сообщение..."
            density="default"
            autofocus
          >
            <template #append-inner>
              <VBtn
                class="mt-n2"
                rounded="pill"
                variant="tonal"
                @click="sendMessage"
              >
                Отправить
              </VBtn>
            </template>
          </VTextField>
        </VForm>
      </div>
    </VMain>
  </div>
</template>
