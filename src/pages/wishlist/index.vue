<script setup>
import { useWishStore } from "@/stores/useRest"
import { useAuthStore } from "@/stores/useAuthStore"

const router = useRouter ()

const wishStore = useWishStore ()
const authStore = useAuthStore ()

const snackbar = ref ({
  enabled: false,
  type: 'success',
  message: 'Hello!',
})

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
        message: "Нет результатов",
        status: 2,
      }
    }
  },
)
watchEffect (
  () => {
    data.value = null
    wishStore.fetchItems (
      {},
    ).then (
      response => {
        data.value = response.data.results
        total.value = response.data.count
        totalPage.value = parseInt (total.value / rowPerPage.value) + 1
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
  wishStore.deleteItem (
    {
      id: id,
    },
  ).then (
    response => {
      console.log (response.data)
      data.value = data.value.filter (item => item.id !== id)
      total.value -= 1
      if (response.status > 250) {
        throw `Failed to save! Response: ${JSON.stringify (response.data)}`
      }

      snackbar.value = {
        enabled: true,
        message: `Item ${id} deleted`,
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
                Название
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
                <RouterLink
                  :to="{name: 'items-view-id', params: {id: item.item}}"
                >
                  <VChip
                    class="cursor-pointer"
                    color="primary"
                  >
                    {{ item.item_name }}
                  </VChip>
                </RouterLink>
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
