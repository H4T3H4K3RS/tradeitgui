<script setup>
import { useItemStore, useTradeStore } from "@/stores/useRest"
import { useAuthStore } from "@/stores/useAuthStore"

const props = defineProps ({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits ([ 'update:isDialogVisible' ])

const snackbar = ref ({
  enabled: false,
  type: 'success',
  message: 'Hello!',
})

const itemStore = useItemStore ()
const tradeStore = useTradeStore ()
const authStore = useAuthStore ()
const selectedItem = ref (null)

const items = ref (null)

watchEffect (
  () => {
    items.value = []
    itemStore.fetchItems (
      {
        state: 'exposed',
        moderation_state: "Accepted",
        user: authStore.userData.id,
      },
    ).then (
      response => {
        if (response.status > 399) {
          throw `Ошибка: ${response.status}`
        }
        console.log (response.data)
        items.value = response.data
        items.value.unshift (
          {
            name: "Ничего",
            id: -1,
          },
        )
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

const suggestTrade = async () => {
  console.log (props.item.id)
  console.log (selectedItem.value)
  tradeStore.postItem (
    {
      item1: props.item.id,
      item2: selectedItem.value === -1 ? null : selectedItem.value,
    },
  ).then (
    response => {
      if (response.status > 399) {
        throw `Ошибка: ${response.status}`
      }
      snackbar.value = {
        enabled: true,
        message: "Предложение отправлено",
        type: 'success',
      }
      setTimeout (
        () => {
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
        <VCardTitle class="text-h5 mb-5">
          Предложение Обмена
        </VCardTitle>

        <p>
          Выберите вещь, предложите и ожидайте подтверждения от пользователя!
        </p>
      </VCardItem>

      <VCardText class="d-flex align-center flex-wrap flex-sm-nowrap px-15">
        <VSelect
          :model-value="props.item"
          label="Получаете"
          :items="[props.item]"
          item-title="name"
          item-value="id"
          density="compact"
          class="me-3"
        />
      </VCardText>
      <VCardText class="d-flex align-center flex-wrap flex-sm-nowrap px-15">
        <VSelect
          v-model="selectedItem"
          label="Отдаёте"
          :loading="!items"
          :items="items ? items : []"
          item-title="name"
          item-value="id"
          density="compact"
          class="me-3"
        />
      </VCardText>
      <VCardText class="px-15">
        <div class="d-flex justify-center flex-wrap">
          <VBtn
            color="success"
            variant="tonal"
            class="mt-3"
            append-icon="tabler-send"
            @click="suggestTrade"
          >
            Предложить обмен
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>
