<script setup>
import { useArbsStore } from "@/stores/useArbsStore";

const isSnackbarEnabled = ref (false)
const snackbarMessage = ref ("")
const snackbarType = ref ("error")
const loadMessage = ref ("Загружаем данные...")
const currencies = [ "RUB" ];
const store = useArbsStore ();
const data = ref ([]);

const rowPerPage = ref (10)
const currentPage = ref (1)
const totalPage = ref (1)
const total = ref (0)
watchEffect(
  () => {
    data.value = []
    store.fetchDex ({
      page: currentPage.value,
    }).then (response => {
      data.value = response.data.results
      total.value = response.data.count;
      totalPage.value = parseInt(total.value / rowPerPage.value) + 1;
    }).catch (error => {
      loadMessage.value = "Ошибка загрузки данных"
      console.log (error);
    })
  },
)

watchEffect (() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})
const paginationData = computed (() => {
  const firstIndex = data.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = data.value.length + (currentPage.value - 1) * rowPerPage.value

  return `Showing ${firstIndex} to ${lastIndex} of ${total.value} entries`
})
const formatFloat = number => {
  number = -number;
  let sign = number < 0 ? "-" : "+";
  let intPart = Math.abs (parseInt (number));
  let floatPart = (Math.abs (number) % 1).toFixed (2).slice (2);
  return `<span class="text-error"><span class="text-h6 text-error">${sign}${intPart}</span>.${floatPart}%</span>`
}
const copyToClipboard = (valueToCopy, alertMessage, alertType="error") => {
  navigator.clipboard.writeText (valueToCopy)
    .then (() => {
      isSnackbarEnabled.value = true
      snackbarMessage.value = alertMessage
      snackbarType.value = alertType
    })
    .catch ((error) => {
      console.error ('Failed to copy to clipboard: ', error);
    });
};
const formatTimestamp = (timestamp) => {
  let date = ""
  if (typeof timestamp === "string")
    date = timestamp
  else
    date = new Date (timestamp * 1000).toISOString ()
  return date.slice (0, -5).replaceAll ("T", " ").replaceAll ("-", ".");
}

</script>
<template>
  <div>
    <VSnackbar
      v-model="isSnackbarEnabled"
      location="top end"
      variant="flat"
      transition="scroll-y-reverse-transition"
      :color="snackbarType"
    >
      {{ snackbarMessage }}
    </VSnackbar>
    <VCard
      class="mb-6"
    >
      <VCardText
        class="text-h4 px-10 font-weight-bold"
      >
        <!--        <VAvatar-->
        <!--          size="50"-->
        <!--          image="/src/assets/images/misc/banks/contact.png"-->
        <!--        />-->
        DEX ARBS
      </VCardText>
      <VTable class="text-no-wrap pb-10 px-10">
        <!-- 👉 Table head -->
        <thead>
        <tr>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Токен
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Адрес
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Ликвидность
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Возраст токена (дн.)
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Процент дампа
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Налог на покупку/продажу
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Открытые вводы/выводы на CEX
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Дата
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
            {{ item.tokenName }}
          </td>
          <td class="text-high-emphasis cursor-pointer"
              @click="copyToClipboard(item.address, `Адрес токена ${item.tokenName} скопирован в буффер обмена`, 'success')"
          >
            {{ item.address.slice(0, 7) }}...{{ item.address.slice(-6, -1) }}
            <VIcon
              size="small"
              icon="tabler-copy"
            ></VIcon>
            <VTooltip
              activator="parent"
              location="top"
            >
              Нажмите, что скопировать адрес в буфер
            </VTooltip>
          </td>
          <td class="text-high-emphasis">
            {{ item.LPSize }} $
          </td>
          <td class="text-high-emphasis">
            {{ item.tokenAge }}
          </td>
          <td class="text-high-emphasis font-weight-bold"
              v-html="formatFloat(item.dumpPercentage)">
          </td>
          <td class="text-high-emphasis font-weight-bold">
            {{ item.buyFee }} % / {{ item.sellFee }} %
          </td>
          <td class="text-high-emphasis font-weight-bold">
            <VMenu location="bottom" open-on-hover>
              <template #activator="{ props }">
                <VBtn
                  size="small"
                  v-bind="props"
                  append-icon="tabler-caret-down"
                >
                  CEX
                </VBtn>
              </template>
              <VList>
                <VListItem
                  v-for="(operations, dex) in item.networks"
                >
                  <VMenu location="end" open-on-hover>
                    <template #activator="{ props }">
                      <VBtn
                        size="small"
                        v-bind="props"
                        append-icon="tabler-caret-right"
                      >
                        {{ dex }}
                      </VBtn>
                    </template>
                    <VList>
                      <VListItem
                        v-for="(chains, type) in operations"
                      >
                        <VMenu location="end" open-on-hover>
                          <template #activator="{ props }">
                            <VBtn
                              size="small"
                              v-bind="props"
                              append-icon="tabler-caret-right"
                            >
                              {{ type }}
                            </VBtn>
                          </template>
                          <VList :items="chains"/>
                        </VMenu>
                      </VListItem>
                    </VList>
                  </VMenu>
                </VListItem>
              </VList>
            </VMenu>
          </td>
          <td class="text-high-emphasis font-weight-bold">
            {{ formatTimestamp (item.date) }}
          </td>
        </tr>
        </tbody>
        <tfoot v-show="!data.length">
        <tr>
          <td
            colspan="12"
            class="text-center text-body-1 justify-center align-center"
          >
            {{ loadMessage }}
            <VProgressCircular
              :width="3"
              color="primary"
              indeterminate
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
title: CEX - Arbitrage
</route>
