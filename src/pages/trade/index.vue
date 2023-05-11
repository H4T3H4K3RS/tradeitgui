<script setup>
import SendMessageDialog from "@/views/user/SendMessageDialog.vue"

const tab = ref ('')
const isChatDialogVisible = ref (false)

const tabs = ref ([
  {
    name: 'Все',
    value: '',
  },
  {
    name: 'В процессе',
    value: "created",
  },
  {
    name: 'Принятые',
    value: "accepted",
  },
  {
    name: 'Отклонённые',
    value: "not_accepted",
  },
])

import { useReportStore, useTradeStore } from "@/stores/useRest"
import { useAuthStore } from "@/stores/useAuthStore"
import { capitalize } from "vue"

const router = useRouter ()

const tradeStore = useTradeStore ()
const authStore = useAuthStore ()
const data = ref (null)
const rowPerPage = ref (10)
const currentPage = ref (1)
const totalPage = ref (1)
const total = ref (0)
const selectedItem = ref ({})
const activeTrade = ref ({})

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
    tradeStore.fetchItems (
      {
        state: tab.value,
      },
    ).then (
      response => {
        data.value = response.data.results
        selectedItem.value = response.data.results.length > 0 ? response.data.results[0] : null
        total.value = response.data.count
        totalPage.value = parseInt (total.value / rowPerPage.value) + 1
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

const changeState = async (id, state) => {
  tradeStore.patchItem (
    {
      id: id,
      state: state,
    },
  ).then (
    response => {
      console.log (response.data)
      data.value = data.value.filter (item => item.id !== id)
      total.value -= 1
      totalPage.value = parseInt (total.value / rowPerPage.value) + 1
      if (response.status > 250) {
        throw `Ошибка сохранения: ${JSON.stringify (response.data)}`
      }
      snackbar.value = {
        enabled: true,
        message: `Статус обмена ${id} изменён`,
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

const refresh = () => {
  let prevVal = tab.value
  tab.value = null
  tab.value = prevVal
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
          append-icon="tabler-refresh"
          @click="refresh"
        >
          Обновить
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
                    Отданный Предмет
                  </th>
                  <th
                    scope="col"
                    class="text-subtitle-2 text-wrap"
                  >
                    Полученный Предмет
                  </th>
                  <th
                    scope="col"
                    class="text-subtitle-2 text-wrap"
                  >
                    Оценка
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
                  <template v-if="authStore.userData.id === item.user">
                    <td class="text-high-emphasis">
                      <RouterLink
                        v-if="item.item1"
                        :to="{name: 'items-view-id', params: {id: item.item1.id}}"
                      >
                        <VChip
                          class="cursor-pointer"
                          color="primary"
                          variant="tonal"
                        >
                          {{ item.item1.name }}
                        </VChip>
                      </RouterLink>
                      <VChip
                        v-else
                        color="error"
                        variant="tonal"
                      >
                        Ничего
                      </VChip>
                    </td>
                    <td class="text-high-emphasis">
                      <RouterLink
                        v-if="item.item2"
                        :to="{name: 'items-view-id', params: {id: item.item2.id}}"
                      >
                        <VChip
                          class="cursor-pointer"
                          color="primary"
                          variant="tonal"
                        >
                          {{ item.item2.name }}
                        </VChip>
                      </RouterLink>
                      <VChip
                        v-else
                        color="error"
                        variant="tonal"
                      >
                        Ничего
                      </VChip>
                    </td>
                  </template>
                  <template v-else>
                    <td class="text-high-emphasis">
                      <RouterLink
                        v-if="item.item2"
                        :to="{name: 'items-view-id', params: {id: item.item2.id}}"
                      >
                        <VChip
                          class="cursor-pointer"
                          color="primary"
                          variant="tonal"
                        >
                          {{ item.item2.name }}
                        </VChip>
                      </RouterLink>
                      <VChip
                        v-else
                        color="error"
                        variant="tonal"
                      >
                        Отсутствует
                      </VChip>
                    </td>
                    <td class="text-high-emphasis">
                      <RouterLink
                        v-if="item.item1"
                        :to="{name: 'items-view-id', params: {id: item.item1.id}}"
                      >
                        <VChip
                          class="cursor-pointer"
                          color="primary"
                          variant="tonal"
                        >
                          {{ item.item1.name }}
                        </VChip>
                      </RouterLink>
                      <VChip
                        v-else
                        color="error"
                        variant="tonal"
                      >
                        Отсутствует
                      </VChip>
                    </td>
                  </template>
                  <td class="text-high-emphasis">
                    <VChip
                      color="warning"
                      variant="tonal"
                      append-icon="tabler-star"
                    >
                      {{ item.mark ? item.mark : '-' }}
                    </VChip>
                  </td>
                  <td class="text-high-emphasis">
                    <VChip
                      :color="item.state === 'created' ? 'warning' : (item.state === 'accepted'?'success': 'warning')"
                      variant="tonal"
                    >
                      {{ capitalize (item.state) }}
                    </VChip>
                  </td>
                  <td
                    class="text-high-emphasis"
                  >
                    <template v-if="item.state === 'created' && item.user !== authStore.userData.id">
                      <VBtn
                        icon
                        size="x-small"
                        color="default"
                        variant="text"
                        @click="changeState(item.id, 'accepted')"
                      >
                        <VIcon
                          size="22"
                          icon="tabler-circle-check"
                        />
                      </VBtn>
                      <VBtn
                        icon
                        size="x-small"
                        color="default"
                        variant="text"
                        @click="changeState(item.id, 'not_accepted')"
                      >
                        <VIcon
                          size="22"
                          icon="tabler-circle-x"
                        />
                      </VBtn>
                    </template>
                    <VBtn
                      icon
                      size="x-small"
                      color="default"
                      variant="text"
                      @click="activeTrade = JSON.parse(JSON.stringify(item)); isChatDialogVisible = true"
                    >
                      <VIcon
                        size="22"
                        icon="tabler-message"
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
      <SendMessageDialog
        v-model:trade="activeTrade"
        v-model:is-dialog-visible="isChatDialogVisible"
      />
    </VCard>
  </div>
</template>
