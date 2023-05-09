<script setup>
import { useItemStore } from "@/stores/useRest"
import { useAuthStore } from "@/stores/useAuthStore"
import { capitalize } from "vue"

const router = useRouter ()
const itemStore = useItemStore ()
const authStore = useAuthStore ()
const data = ref (null)

const loadMessage = ref ({
  message: "Загружаем предметы 🧠",
  status: 0,
})

const snackbar = ref ({
  enabled: false,
  type: 'success',
  message: 'Hello!',
})

watchEffect (
  () => {
    if (data.value === null) {
      loadMessage.value = {
        message: "Загружаем предметы 🧠",
        status: 0,
      }
    } else if (data.value.length === 0) {
      loadMessage.value = {
        message: "Больше нет предметов",
        status: 2,
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
        if (response.status > 250)
          throw `${response.status}`
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
          message: `Ошибка загрузки предметов: ${error}`,
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
      location="bottom end"
      variant="flat"
      :color="snackbar.type"
    >
      {{ snackbar.message }}
    </VSnackbar>
    <VRow>
      <VCol
        v-if="!data || !data.length"
        cols="12"
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
      </VCol>
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
            <VCardTitle>{{ item.name }}</VCardTitle>
          </VCardItem>

          <VCardText>
            {{ item.description.slice (0, 20) }}
            {{ item.description.length > 20 ? '...' : '' }}
          </VCardText>
          <VCardText>
            Категория:
            <RouterLink
              :to="{
                name: 'category-id',
                params: {
                  id: item.category
                }
              }"
            >
              <VChip
                color="warning"
                variant="tonal"
                class="cursor-pointer"
              >
                {{ capitalize (item.category) }}
              </VChip>
            </RouterLink>
          </VCardText>
          <VCardText>
            Теги:
            <VChip
              v-for="(tag, i) in item.tags.slice(0, 3)"
              :key="i"
              variant="tonal"
              class="me-1"
            >
              {{ tag }}
            </VChip>
          </VCardText>
          <VCardActions>
            <RouterLink
              :to="{name: 'items-view-id', params: {id: item.id}}"
            >
              <VChip
                class="cursor-pointer"
                size="large"
                color="primary"
                variant="flat"
                append-icon="tabler-eye"
              >
                Просмотр
              </VChip>
            </RouterLink>
            <VSpacer />
            <div>
              <span class="text-subtitle-2 me-4">{{
                item.time_created.replace ("T", " ").slice (0, -17)
              }}</span>
            </div>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
