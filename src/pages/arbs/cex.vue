<script setup>
import { useArbsStore } from "@/stores/useArbsStore";

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
    store.fetchCex ({
      page: currentPage.value
    }).then (response => {
      data.value = response.data.results.map(obj => Object.assign({}, obj, {
        token1: obj.ticker.split('/')[0],
        token2: obj.ticker.split("/")[1],
      }));
      total.value = response.data.count;
      totalPage.value = parseInt(total.value / rowPerPage.value) + 1;
      console.log(data.value);
    }).catch (error => {
      loadMessage.value = "Ошибка загрузки данных"
      console.log (error);
    })
  }
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
  let sign = number < 0 ? "-" : "+";
  let intPart = Math.abs (parseInt (number));
  let floatPart = (Math.abs (number) % 1).toFixed (2).slice (2);
  return `<span class="text-success"><span class="text-h6 text-success">${sign}${intPart}</span>.${floatPart}</span>`
}

const formatTimestamp = (timestamp) => {
  let date = ""
  if (typeof timestamp === "string")
    date = timestamp
  else
    date = new Date (timestamp * 1000).toISOString()
  return date.slice(0, -5).replaceAll("T", " ").replaceAll("-", ".");
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
        <!--        <VAvatar-->
        <!--          size="50"-->
        <!--          image="/src/assets/images/misc/banks/contact.png"-->
        <!--        />-->
        CEX ARBS
      </VCardText>
      <VTable class="text-no-wrap pb-10 px-10">
        <!-- 👉 Table head -->
        <thead>
        <tr>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Тикер
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Спред %
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Биржа 1 (покупка)
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Биржа 2 (продажа)
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Цена покупки
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Цена продажи
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Объём на бирже 1
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Объём на бирже 2
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Сети вывода на бирже 1
          </th>
          <th
            scope="col"
            class="text-subtitle-2 text-wrap"
          >
            Сети ввода на бирже 2
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
            {{ item.ticker }}
          </td>
          <td class="text-high-emphasis font-weight-bold"
              v-html="formatFloat(item.spread)">
          </td>
          <td class="text-high-emphasis font-weight-bold">
            {{ item.buyExchangeName }}
          </td>
          <td class="text-high-emphasis font-weight-bold">
            {{ item.sellExchangeName }}
          </td>
          <td class="text-high-emphasis font-weight-bold">
            {{ item.askPrice }}
          </td>
          <td class="text-high-emphasis font-weight-bold">
            {{ item.bidPrice }}
          </td>
          <td class="text-high-emphasis font-weight-bold">
            {{ item.buyVolumeBase }}
            <VIcon
              size="small"
              icon="tabler-question-circle"
            />
            <VTooltip
              activator="parent"
              location="start"
            >
              {{ item.buyVolumeBase }} {{ item.token1 }} / {{ item.buyVolumeQuote }} {{ item.token2 }}
            </VTooltip>
          </td>
          <td class="text-high-emphasis font-weight-bold">
            {{ item.sellVolumeBase }}
            <VIcon
              size="small"
              icon="tabler-question-circle"
            />
            <VTooltip
              activator="parent"
              location="end"
            >
              {{ item.sellVolumeBase }} {{ item.token1 }} / {{ item.sellVolumeQuote }} {{ item.token2 }}
            </VTooltip>
          </td>
          <td class="text-high-emphasis font-weight-bold">
            <VMenu open-on-hover>
              <template #activator="{ props }">
                <VBtn
                  size="small"
                  v-bind="props"
                  append-icon="tabler-caret-down"
                >
                  {{ item.token1 }}
                </VBtn>
              </template>
              <VList>
                <VListItem
                  v-for="chain in item.buyExchangeNetworks"
                  :title="chain"
                />
              </VList>
            </VMenu>
          </td>
          <td class="text-high-emphasis font-weight-bold">
            <VMenu open-on-hover>
              <template #activator="{ props }">
                <VBtn
                  size="small"
                  v-bind="props"
                  append-icon="tabler-caret-down"
                >
                  {{ item.token1 }}
                </VBtn>
              </template>
              <VList>
                <VListItem
                  v-for="chain in item.sellExchangeNetworks"
                  :title="chain"
                />
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
