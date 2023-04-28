<script setup>
import { urlValidator } from '@core/utils/validators'
import { useItemStore, useWishStore } from "@/stores/useRest"
import PhotoList from "@/views/items/PhotoList.vue"

const router = useRouter ()
const route = useRoute ()
const tab = ref ('base-info')
const itemStore = useItemStore ()
const wishStore = useWishStore ()
const isSnackbarEnabled = ref (false)
const snackbarMessage = ref ("")
const snackbarType = ref ("error")
const wishItems = ref ([])

const item = ref ({
  name: "",
  description: "",
  state: "draft",
  category: "clothes",
  user: null,
  photos: [],
})

const addToWhitelist = () => {
  wishStore.postItem ({
    item: item.value.id,
  }).then (
    response => {
      wishItems.value.push (response.data)
      isSnackbarEnabled.value = true
      snackbarType.value = 'success'
      snackbarMessage.value = 'Предмет добавлен в список желаний 🎉'
    },
  ).catch (
    error => {
      isSnackbarEnabled.value = true
      snackbarType.value = 'error'
      snackbarMessage.value = error
      console.log (error)
    },
  )
}

const deleteFromWhitelist = () => {
  wishStore.deleteItem ({
    id: wish.value.id,
  }).then (
    response => {
      wishItems.value = wishItems.value.filter (item => item.id !== wish.value.id)
      isSnackbarEnabled.value = true
      snackbarType.value = 'warning'
      snackbarMessage.value = 'Предмет удалён из списка желаний 🎉'
    },
  ).catch (
    error => {
      isSnackbarEnabled.value = true
      snackbarType.value = 'error'
      snackbarMessage.value = error
      console.log (error)
    },
  )
}

watchEffect (
  () => {
    wishStore.fetchItems (
      {},
    ).then (
      response => {
        wishItems.value = response.data
        console.log (wishItems.value)
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

watchEffect (
  () => {
    if (!route.params.id) return
    isSnackbarEnabled.value = true
    snackbarType.value = 'warning'
    snackbarMessage.value = 'Загрузка предмета'
    itemStore.fetchItem (
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

// const wishAdded = computed (
//   () => {
//     let value = wishItems.value.some (obj => obj.id === item.value.id)
//     =console.log (value)
//
//     return value
//   },
// )

const wish = computed (
  () => {
    let value = wishItems.value.find (obj => obj.item === item.value.id)
    console.log (value)

    return value
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
            <span>
              <VBtn
                v-if="!wish"
                color="success"
                class="float-end me-3"
                append-icon="tabler-plus"
                @click="addToWhitelist"
              >
                Add to wishlist
              </VBtn>
              <VBtn
                v-else
                color="error"
                class="float-end me-3"
                append-icon="tabler-x"
                @click="deleteFromWhitelist"
              >
                Delete from wishlist
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
            <PhotoList v-model:photos="item.photos" />
          </VCardText>
        </VCol>
      </VRow>
    </VCard>
  </div>
</template>
