<script setup>
const tab = ref ('exposed')

const tabs = ref ([
  {
    name: 'Выставленные',
    value: "exposed",
  },
  {
    name: 'Черновики',
    value: "draft",
  },
  {
    name: 'Уже обменяли 🎉',
    value: "exchanged",
  },
])

import { useItemStore } from "@/stores/useRest"
import { useAuthStore } from "@/stores/useAuthStore"

const router = useRouter ()
const itemStore = useItemStore ()
const authStore = useAuthStore ()
const data = ref (null)
const rowPerPage = ref (10)
const currentPage = ref (1)
const totalPage = ref (1)
const total = ref (0)

const loadMessage = ref ({
  message: "Загружаем данные...",
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
        message: "Загружаем данные...",
        status: 0,
      }
    } else if (data.value.length === 0) {
      loadMessage.value = {
        message: "Нет результатов",
        status: 2,
      }
    }
  },
)
watchEffect (
  () => {
    data.value = null
    itemStore.fetchItems (
      {
        state: tab.value,
        user: authStore.userData.id,
      },
    ).then (
      response => {
        data.value = response.data.results
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
watchEffect (() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

const paginationData = computed (() => {
  const firstIndex = data.value ? (data.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0) : 0
  const lastIndex = data.value ? (data.value.length + (currentPage.value - 1) * rowPerPage.value) : 0

  return `Показаны с ${firstIndex} по ${lastIndex} из ${total.value} строк`
})

const formatFloat = number => {
  let sign = number < 0 ? "-" : "+"
  let intPart = Math.abs (parseInt (number))
  let floatPart = (Math.abs (number) % 1).toFixed (2).slice (2)

  return `<span class="text-success"><span class="text-h6 text-success">${sign}${intPart}</span>.${floatPart}</span>`
}

const formatTimestamp = timestamp => {
  let date = ""
  if (typeof timestamp === "string")
    date = timestamp
  else
    date = new Date (timestamp * 1000).toISOString ()

  return date.slice (0, -11).replaceAll ("T", " ").replaceAll ("-", ".")
}

const deleteItem = async id => {
  itemStore.deleteItem (
    {
      id: id,
    },
  ).then (
    response => {
      console.log (response.data)
      data.value = data.value.filter (item => item.id !== id)
      if (response.status > 250) {
        throw response.data
      }

      snackbar.value = {
        enabled: true,
        message: `Предмет ${id} удалён`,
        type: 'success',
      }
    },
  ).catch (
    error => {
      snackbar.value = {
        enabled: true,
        message: `Ошибка удаления предмета: ${error}`,
        type: 'error',
      }
    },
  )
}
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
        cols="12"
        sm="8"
        class="w-100 d-flex d-md-block justify-center justify-md-start"
      >
        <VTabs
          v-model="tab"
          class="mb-1"
        >
          <VTab
            v-for="tabItem in tabs"
            :key="tabItem.value"
            :value="tabItem.value"
          >
            {{ tabItem.name }}
          </VTab>
        </VTabs>
      </VCol>
      <VCol
        cols="12"
        sm="4"
      >
        <VBtn
          class="w-100"
          :to="{name: 'items-new'}"
          append-icon="tabler-circle-plus"
        >
          Разместить
        </VBtn>
      </VCol>
    </VRow>
    <VCard flat>
      <VCardText>
        <VWindow v-model="tab">
          <VWindowItem
            v-for="tabItem in tabs"
            :key="tabItem.value"
            :value="tabItem.value"
          >
            <VTable class="text-no-wrap pb-5">
              <!-- 👉 Table head -->
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="text-subtitle-2 text-wrap"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="text-subtitle-2 text-wrap"
                  >
                    Название
                  </th>
                  <th
                    scope="col"
                    class="text-subtitle-2 text-wrap"
                  >
                    Описание
                  </th>
                  <th
                    scope="col"
                    class="text-subtitle-2 text-wrap"
                  >
                    Количество Фото
                  </th>
                  <th
                    scope="col"
                    class="text-subtitle-2 text-wrap"
                  >
                    Статус
                  </th>
                  <th
                    scope="col"
                    class="text-subtitle-2 text-wrap"
                  >
                    Дата Изменения
                  </th>
                  <th
                    scope="col"
                    class="text-subtitle-2 text-wrap"
                  >
                    Дата Создания
                  </th>
                  <th
                    scope="col"
                    class="text-subtitle-2 text-wrap"
                  >
                    Действия
                  </th>
                </tr>
              </thead>

              <!-- 👉 Table Body -->
              <tbody>
                <tr
                  v-for="item in data"
                  :key="item.id"
                  style="height: 3.5rem;"
                >
                  <!-- 👉 Leader -->
                  <td class="text-high-emphasis">
                    {{ item.id }}
                  </td>
                  <td class="text-high-emphasis">
                    {{ item.name }}
                  </td>
                  <td class="text-high-emphasis">
                    {{ item.description.slice (0, 100) }}
                    {{ item.description.length > 100 ? '...' : '' }}
                  </td>
                  <td class="text-high-emphasis">
                    {{ item.photos.length }}
                  </td>
                  <td class="text-high-emphasis">
                    <VChip
                      variant="tonal"
                      :color="item.moderation_state === 'Accepted' ? 'success' : (item.moderation_state === 'Pending' ? 'warning' : 'error')"
                    >
                      {{ item.moderation_state }}
                    </VChip>
                  </td>
                  <td class="text-high-emphasis">
                    {{ formatTimestamp (item.time_modified) }}
                  </td>
                  <td class="text-high-emphasis">
                    {{ formatTimestamp (item.time_created) }}
                  </td>
                  <td class="text-high-emphasis">
                    <VBtn
                      icon
                      size="x-small"
                      color="default"
                      variant="text"
                      :to="{name: 'items-view-id', params: {id: item.id}}"
                    >
                      <VIcon
                        size="22"
                        icon="tabler-eye"
                      />
                    </VBtn>
                    <VBtn
                      icon
                      size="x-small"
                      color="default"
                      variant="text"
                      :to="{name: 'items-edit-id', params: {id: item.id}}"
                    >
                      <VIcon
                        size="22"
                        icon="tabler-edit"
                      />
                    </VBtn>
                    <VBtn
                      icon
                      size="x-small"
                      color="default"
                      variant="text"
                      @click="deleteItem(item.id)"
                    >
                      <VIcon
                        size="22"
                        icon="tabler-trash"
                      />
                    </VBtn>
                  </td>
                </tr>
              </tbody>
              <tfoot v-show="!data || !data.length">
                <tr>
                  <td
                    colspan="8"
                    class="text-center text-body-1 justify-center align-center"
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
                  </td>
                </tr>
              </tfoot>
            </VTable>
            <VCardText class="d-flex align-center flex-wrap justify-space-between gap-4 py-3">
              <!-- 👉 Pagination meta -->
              <span class="text-sm text-disabled">{{ paginationData }}</span>

              <!-- 👉 Pagination -->
              <VPagination
                v-model="currentPage"
                size="small"
                :total-visible="4"
                :length="totalPage"
              />
            </VCardText>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
