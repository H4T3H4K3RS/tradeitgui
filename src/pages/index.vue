<script setup>
import { useItemStore, useWishStore } from "@/stores/useRest"
import { useAuthStore } from "@/stores/useAuthStore"

const router = useRouter ()
const itemStore = useItemStore ()
const wishStore = useWishStore ()
const authStore = useAuthStore ()
const data = ref (null)

const snackbar = ref ({
  enabled: false,
  type: 'success',
  message: 'Hello!',
})

watchEffect (
  () => {
    if (data.value === null) {
      snackbar.value = {
        enabled: true,
        message: "Загружаем предметы 🧠",
        type: 'warning',
      }
    } else if (data.value.length === 0) {
      snackbar.value = {
        enabled: true,
        message: "Больше нет предметов :(",
        type: 'error',
      }
    }
  },
)
watchEffect (
  () => {
    itemStore.fetchItems (
      {
        state: 'exposed',
      },
    ).then (
      response => {
        data.value = [ ...response.data ]
        snackbar.value = {
          enabled: true,
          message: "Предметы загружены 🎉",
          type: 'success',
        }
      },
    ).catch (
      error => {
        snackbar.value = {
          enabled: true,
          message: `Error occured: ${error}`,
          type: 'error',
        }
      },
    )
  },
)
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
    <VRow>
      <VCol
        v-for="item in data"
        :key="item.id"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
      >
        <VCard
          class="h-100 w-100"
        >
          <VImg
            height="300px"
            max-height="300px"
            :src="item.photos[0]"
          />

          <VCardItem>
            <VCardTitle>{{ item.name }}t</VCardTitle>
          </VCardItem>

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
          <VCardActions>
            <VBtn
              variant="flat"
              :to="{name: 'items-view-id', params: {id: item.id}}"
              append-icon="tabler-eye"
            >
              View
            </VBtn>
            <VSpacer />
            <div>
              <VIcon
                icon="tabler-calendar"
                size="1.2rem"
                class="me-2 cursor-pointer"
              />
              <span class="text-subtitle-2 me-4">{{ item.time_created.replace ("T", " ").slice (0, -11) }}</span>
            </div>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
