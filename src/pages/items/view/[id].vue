<script setup>
import { urlValidator } from '@core/utils/validators'
import { useItemStore, useReportStore, useWishStore } from "@/stores/useRest"
import PhotoList from "@/views/items/PhotoList.vue"
import { capitalize } from "vue"
import CreateReportDialog from "@/views/report/CreateReportDialog.vue"
import { useAuthStore } from "@/stores/useAuthStore"
import QrCodeDialog from "@/views/QrCodeDialog.vue"

const isCreateReportDialogVisible = ref (false)
const isQRVisible = ref (false)
const router = useRouter ()
const route = useRoute ()
const tab = ref ('base-info')
const authStore = useAuthStore ()
const itemStore = useItemStore ()
const wishStore = useWishStore ()

const snackbar = ref ({
  enabled: false,
  type: 'success',
  message: 'Hello!',
})

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
      snackbar.value = {
        enabled: true,
        message: 'Предмет добавлен в список желаний 🎉',
        type: 'success',
      }
      item.value.presented_in_wish_list = true
    },
  ).catch (
    error => {
      snackbar.value = {
        enabled: true,
        message: error,
        type: 'error',
      }
      console.log (error)
    },
  )
}

const deleteFromWhitelist = () => {
  wishStore.deleteItem ({
    id: item.value.id,
  }).then (
    response => {
      snackbar.value = {
        enabled: true,
        message: 'Предмет удалён из списка желаний 🎉',
        type: 'warning',
      }
      item.value.presented_in_wish_list = false
    },
  ).catch (
    error => {
      snackbar.value = {
        enabled: true,
        message: error,
        type: 'error',
      }
      console.log (error)
    },
  )
}


watchEffect (
  () => {
    if (!route.params.id) return

    snackbar.value = {
      enabled: true,
      message: 'Загрузка предмета',
      type: 'warning',
    }
    itemStore.fetchItem (
      {
        id: route.params.id,
      },
    ).then (
      response => {
        if (response.status > 250)
          throw `${response.status}`
        item.value = response.data

        snackbar.value = {
          enabled: true,
          message: 'Предмет загружен 🎉',
          type: 'success',
        }
      },
    ).catch (
      error => {
        snackbar.value = {
          enabled: true,
          message: error,
          type: 'error',
        }
        console.log (error)
        setTimeout (
          () => {
            router.push ({
              name: "index",
            })
          },
          500,
        )
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
      v-model="snackbar.enabled"
      location="top end"
      variant="flat"
      :color="snackbar.type"
    >
      {{ snackbar.message }}
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
                @click="isQRVisible = true"
              >
                Поделиться
              </VChip>
              <template
                v-if="item.user !== authStore.userData?.id"
              >
                <VChip
                  color="primary"
                  class="float-end me-1 mt-1"
                  append-icon="tabler-arrows-exchange"
                >
                  Обмен
                </VChip>
                <VChip
                  class="float-end me-1 mt-1"
                  append-icon="tabler-pencil"
                >
                  Сообщение
                </VChip>
                <VChip
                  color="warning"
                  class="float-end me-1 mt-1"
                  append-icon="tabler-alert-triangle"
                  @click="isCreateReportDialogVisible = true"
                >
                  Жалоба
                </VChip>
              </template>
            </span>
            <span v-if="item.user !== authStore.userData.id">
              <VChip
                v-if="!item.presented_in_wish_list"
                color="success"
                class="float-end me-1 mt-1"
                append-icon="tabler-plus"
                @click="addToWhitelist"
              >
                Добавить в избранное
              </VChip>
              <VChip
                v-else
                color="error"
                class="float-end me-1 mt-1"
                append-icon="tabler-x"
                @click="deleteFromWhitelist"
              >
                Удалить из избранного
              </VChip>
            </span>
            <span v-else-if="item.user === authStore.userData?.id">
              <RouterLink
                :to="{name: 'items-edit-id', params: {id: item.id}}"
              >
                <VChip
                  color="warning"
                  class="float-end me-1 mt-1 cursor-pointer"
                  append-icon="tabler-pencil"
                >
                  Редактировать
                </VChip>
              </RouterLink>
            </span>
          </VCardText>
          <VCardText>
            <span
              class="font-weight-bold text-h6"
            >
              Описание:
            </span>
            {{ item.description }}
          </VCardText>
          <VCardText>
            <span
              class="font-weight-bold text-h6"
            >
              Категория:
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
              class="font-weight-bold text-h6"
            >
              Теги:
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
                Нет тегов
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
    <QrCodeDialog
      v-model:isDialogVisible="isQRVisible"
    />
  </div>
</template>
