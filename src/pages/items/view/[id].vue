<script setup>
import { urlValidator } from '@core/utils/validators'
import { useItemsStore } from "@/stores/useItemsStore"
import PhotoList from "@/views/items/PhotoList.vue"

const router = useRouter ()
const route = useRoute ()
const tab = ref ('base-info')
const itemsStore = useItemsStore ()
const isSnackbarEnabled = ref (false)
const snackbarMessage = ref ("")
const snackbarType = ref ("error")

const item = ref ({
  name: "",
  description: "",
  state: "draft",
  category: "clothes",
  user: null,
  photos: [],
})

watchEffect (
  () => {
    isSnackbarEnabled.value = true
    snackbarType.value = 'warning'
    snackbarMessage.value = 'Загрузка предмета'
    itemsStore.fetchItem (
      {
        id: route.params.id,
      },
    ).then (
      response => {
        item.value = response.data
        isSnackbarEnabled.value = true
        snackbarType.value = 'success'
        snackbarMessage.value = 'Предмет загружен 🎉'
      },
    ).catch (
      error => {
        isSnackbarEnabled.value = true
        snackbarType.value = 'error'
        snackbarMessage.value = error
        console.log (error)
      },
    )
  },
)

const prepareUrl = title => {
  let t = title.replace ("https://", "").replace ("http://", "")

  return t.slice (0, t.indexOf ('/'))
}
</script>

<template>
  <div>
    <VSnackbar
      v-model="isSnackbarEnabled"
      location="top end"
      variant="flat"
      :color="snackbarType"
    >
      {{ snackbarMessage }}
    </VSnackbar>
    <VCard>
      <VRow no-gutters>
        <VCol
          cols="12"
          sm="8"
          lg="8"
          :class="$vuetify.display.smAndUp ? 'border-e' : 'border-b'"
        >
          <VCardText class="pe-2">
            <span class="text-h6">
              {{ item.name }}

            <VBtn
              class="float-end"
              append-icon="tabler-pencil"
            >
              Message
            </VBtn>
            </span>
          </VCardText>
          <VCardText>
            {{ item.description }}
          </VCardText>
          <VCardText>
            Category:
            <VBtn
              variant="tonal"
              :to="{name: 'index'}"
            >
              {{ item.category }}
            </VBtn>
          </VCardText>
        </VCol>

        <VCol
          cols="12"
          sm="4"
        >
          <VCardText class="justify-center align-center text-center h-100">
            <PhotoList v-model:photos="item.photos"/>
          </VCardText>
        </VCol>
      </VRow>
    </VCard>
  </div>
</template>
