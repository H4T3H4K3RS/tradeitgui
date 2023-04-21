<script setup>
import { useProductsStore } from "@/stores/useProductsStore"

const loadMessage = ref ({
  message: "Загружаем данные...",
  status: 0,
})

const currencies = [ "RUB" ]
const store = useProductsStore ()
const data = ref (null)
const rowPerPage = ref (10)
const currentPage = ref (1)
const totalPage = ref (1)
const total = ref (0)
const q = ref ("")

watchEffect (
  () => {
    if (data.value === null) {
      loadMessage.value = {
        message: "Загружаем данные...",
        status: 0,
      }
    } else if (!data.value) {
      loadMessage.value = {
        message: "Ошибка соединения",
        status: 2,
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
    store.fetchProducts ({
      q: q.value,
      perPage: 10,
      currentPage: currentPage.value,
    }).then (response => {
      data.value = response.data.data
      if(data.value) {
        total.value = response.data.totalItems
        totalPage.value = response.data.totalPage
      }
      console.log (data.value)
    }).catch (error => {
      loadMessage.value = {
        message: "Ошибка загрузки данных!",
        status: 2,
      }
      console.log (error)
    })
  },
)
watchEffect (() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

const paginationData = computed (() => {
  const firstIndex = !data.value ? 0 : data.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = !data.value ? 0 : data.value.length + (currentPage.value - 1) * rowPerPage.value

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
</script>

<template>
  <div>
    <VCard
      class="mb-6"
    >
      <VCardText
        class="text-h4 px-10 font-weight-bold"
      >
        <VAvatar
          size="50"
          icon="tabler-database"
        />
        Products
      </VCardText>
      <VTextField
        v-model="q"
        class="text-no-wrap pb-10 px-10"
        placeholder="Search query"
      />
      <VTable class="text-no-wrap pb-10 px-10">
        <!-- 👉 Table head -->
        <thead>
        <tr>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            ID
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Name
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Image
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Description
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
          <td class="text-high-emphasis text-h6 font-weight-bold">
            {{ item.id }}
          </td>
          <td class="text-high-emphasis font-weight-bold">
            {{ item.name }}
          </td>
          <td class="text-high-emphasis font-weight-bold">
            <VAvatar
              :image="item.image"
              size="50"
            />
          </td>
          <td class="text-high-emphasis font-weight-bold">
            {{ item.description }}
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
    </VCard>
  </div>
</template>

<route lang="yaml">
meta:
title: Products
</route>
