<script setup>
import { useItemStore, useTradeStore } from "@/stores/useRest"
import { useAuthStore } from "@/stores/useAuthStore"

const props = defineProps ({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  trade: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits ([ 'update:isDialogVisible', 'update:refresh' ])

const snackbar = ref ({
  enabled: false,
  type: 'success',
  message: 'Hello!',
})

const tradeStore = useTradeStore ()
const authStore = useAuthStore ()
const rating = ref (1)

const rateTrade = async () => {
  let mark =
    {
      id: props.trade.id,
    }
  mark[authStore.userData.id !== props.trade.user ? "mark2" : "mark1"] = rating.value
  tradeStore.patchItem (
    mark,
  ).then (
    response => {
      if (response.status > 399) {
        throw `Ошибка: ${response.status}`
      }
      snackbar.value = {
        enabled: true,
        message: "Оценка отправлена",
        type: 'success',
      }
      setTimeout (
        () => {
          emit ('update:refresh', true)
          dialogModelValueUpdate (false)
        },
        1000)
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
}

const dialogModelValueUpdate = val => {
  emit ('update:isDialogVisible', val)
}
</script>

<template>
  <!-- 👉 upgrade plan -->
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 560"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <VSnackbar
      v-model="snackbar.enabled"
      location="bottom end"
      variant="flat"
      :color="snackbar.type"
    >
      {{ snackbar.message }}
    </VSnackbar>
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="py-8">
      <VCardItem class="text-center">
        <VCardTitle class="text-h5 mb-5 text-wrap">
          Оценка обмена
          <span class="font-weight-semibold">{{
            authStore.userData.id !== props.trade.user ? (props.trade.item1 ? props.trade.item1.name : "&#8212;") :
            (props.trade.item2 ? props.trade.item2.name : "&#8212;")
          }}</span> на
          <span class="font-weight-semibold">{{
            authStore.userData.id !== props.trade.user ? (props.trade.item2 ? props.trade.item2.name : "&#8212;") :
            (props.trade.item1 ? props.trade.item1.name : "&#8212;")
          }}</span>
        </VCardTitle>

        <p>
          Оцените пользователя, с которым вы обменивались вещами!
        </p>
      </VCardItem>

      <VCardText class="d-flex align-center flex-wrap flex-sm-nowrap px-15 mx-auto">
        <VIcon
          v-for="i in [1, 2, 3, 4, 5]"
          :key="i"
          color="warning"
          size="large"
          :icon="rating < i ? 'tabler-star' : 'tabler-star-filled'"
          @click="rating = i"
        />
      </VCardText>
      <VCardText class="px-15">
        <div class="d-flex justify-center flex-wrap">
          <VBtn
            color="success"
            variant="tonal"
            class="mt-3"
            append-icon="tabler-send"
            @click="rateTrade"
          >
            Оценить
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>
