<script setup>
import { urlValidator } from '@core/utils/validators'
import { useItemStore, useReportStore, useWishStore } from "@/stores/useRest"
import PhotoList from "@/views/items/PhotoList.vue"
import { capitalize } from "vue"
import CreateReportDialog from "@/views/report/CreateReportDialog.vue"

const isCreateReportDialogVisible = ref (false)
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

              <VChip
                color="info"
                class="float-end me-1 mt-1"
                append-icon="tabler-share-2"
              >
                Share
              </VChip><VChip
                color="primary"
                class="float-end me-1 mt-1"
                append-icon="tabler-arrows-exchange"
              >
                Trade
              </VChip>
              <VChip
                class="float-end me-1 mt-1"
                append-icon="tabler-pencil"
              >
                Message
              </VChip>
              <VChip
                color="warning"
                class="float-end me-1 mt-1"
                append-icon="tabler-alert-triangle"
                @click="isCreateReportDialogVisible = true"
              >
                Report
              </VChip>
            </span>
            <span>
              <VChip
                v-if="!wish"
                color="success"
                class="float-end me-1 mt-1"
                append-icon="tabler-plus"
                @click="addToWhitelist"
              >
                Add to wishlist
              </VChip>
              <VChip
                v-else
                color="error"
                class="float-end me-1 mt-1"
                append-icon="tabler-x"
                @click="deleteFromWhitelist"
              >
                Delete from wishlist
              </VChip>
            </span>
          </VCardText>
          <VCardText>
            <span
              class="font-weight-bold text-white text-h6"
            >
              Description:
            </span>
            {{ item.description }}
          </VCardText>
          <VCardText>
            <span
              class="font-weight-bold text-white text-h6"
            >
              Category:
            </span>
            <VChip
              color="warning"
              variant="tonal"
            >
              {{ capitalize (item.category) }}
            </VChip>
          </VCardText>
          <VCardText>
            <span
              class="font-weight-bold text-white text-h6"
            >
              Tags:
            </span>
            <template
              v-if="item.tags"
            >
              <VChip
                v-for="(tag, i) in item.tags"
                :key="i"
                variant="tonal"
                class="me-1"
              >
                {{ tag }}
              </VChip>
            </template>

            <template v-else>
              <VChip
                variant="tonal"
                class="me-1"
              >
                No tags
              </VChip>
            </template>
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
    <CreateReportDialog
      v-model:isDialogVisible="isCreateReportDialogVisible"
      v-model:item="item"
    />
  </div>
</template>
