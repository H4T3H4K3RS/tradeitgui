<script setup>
const tab = ref ('draft')

// const tabs = ref ([
//   {
//     name: 'Draft',
//     value: "draft",
//   },
//   {
//     name: 'Exchnaged',
//     value: "exchanged",
//   },
//   {
//     name: 'Exposed',
//     value: "exposed",
//   },
// ])

import { useTradeStore } from "@/stores/useRest"
import { useAuthStore } from "@/stores/useAuthStore"

const router = useRouter ()

const tradeStore = useTradeStore ()
const authStore = useAuthStore ()
const isSnackbarEnabled = ref (false)
const snackbarMessage = ref ("")
const snackbarType = ref ("error")
const data = ref (null)
const rowPerPage = ref (10)
const currentPage = ref (1)
const totalPage = ref (1)
const total = ref (0)

const loadMessage = ref ({
  message: "Загружаем данные...",
  status: 0,
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
        message: "Нет данных",
        status: 2,
      }
    }
  },
)
watchEffect (
  () => {
    data.value = null
    wishStore.fetchItems (
      {
        user: authStore.$state.userData.id,
      },
    ).then (
      response => {
        data.value = response.data
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
watchEffect (() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

const paginationData = computed (() => {
  const firstIndex = data.value ? (data.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0) : 0
  const lastIndex = data.value ? (data.value.length + (currentPage.value - 1) * rowPerPage.value) : 0

  return `Showing ${firstIndex} to ${lastIndex} of ${total.value} entries`
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

  return date.slice (0, -5).replaceAll ("T", " ").replaceAll ("-", ".")
}

const deleteItem = async id => {
  wishStore.deleteItem (
    {
      id: id,
    },
  ).then (
    response => {
      console.log (response.data)
      data.value = data.value.filter (item => item.id !== id)
      if (response.status > 250) {
        throw `Failed to save! Response: ${JSON.stringify (response.data)}`
      }
      isSnackbarEnabled.value = true
      snackbarType.value = 'success'
      snackbarMessage.value = `Item ${id} deleted`
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
    <VCard flat>
      <VCardText>
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
                Author
              </th>
              <th
                scope="col"
                class="text-subtitle-2 text-wrap"
              >
                Modified date
              </th>
              <th
                scope="col"
                class="text-subtitle-2 text-wrap"
              >
                Creation date
              </th>
              <th
                scope="col"
                class="text-subtitle-2 text-wrap"
              >
                Actions
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
                {{ item.author }}
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
                  :to="{name: 'items-view-id', params: {id: item.item}}"
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
      </VCardText>
    </VCard>
  </div>
</template>
