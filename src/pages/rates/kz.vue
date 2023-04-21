<script setup>
import { usePsStore } from "@/stores/usePsStore";

const loadMessage = ref ("Загружаем данные...")
const store = usePsStore ();
const data = ref ([]);
const priorityCurrencies = new Set ([ "USD", "EUR", "RUB" ]);
store.fetchBank ({ bank: 'kzBanks' }).then (response => {
  data.value = response.data.data;
  data.value.sort (
    function (a, b) {
      if (priorityCurrencies.has (a.name) && !priorityCurrencies.has (b.name)) {
        return -1;
      }
      if (!priorityCurrencies.has (a.name) && priorityCurrencies.has (b.name)) {
        return 1;
      }
      return 0;
    }
  )
}).catch (error => {
  loadMessage.value = "Ошибка загрузки данных"
  console.log (error);
})
let formatFloat = number => {
  let sign = number < 0 ? "-" : "";
  let intPart = Math.abs (parseInt (number));
  let floatPart = (Math.abs (number) % 1).toFixed (2).slice (2);
  return `<span class="text-h6">${sign}${intPart}</span>.${floatPart}`
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
          image="/src/assets/images/misc/currencies/fiat/KZT.png"
        />
        Основные курсы валют Казахстана
      </VCardText>
      <template
        v-for="currency in data"
        :key="currency.name"
      >
        <VCardText
          class="text-h5 font-weight-bold"
        >
          Обмен {{ currency.name }} в Казахстане
        </VCardText>
        <VTable class="text-no-wrap pb-10 px-10">
          <!-- 👉 Table head -->
          <thead>
          <tr>
            <th
              scope="col"
              class="text-subtitle-1"
            >
              Банк
            </th>
            <th
              scope="col"
              class="text-subtitle-1"
            >
              Валюта
            </th>
            <th
              scope="col"
              class="text-subtitle-1"
            >
              Покупка
            </th>
            <th
              scope="col"
              class="text-subtitle-1"
            >
              Продажа
            </th>
          </tr>
          </thead>

          <!-- 👉 Table Body -->
          <tbody>
          <tr
            v-for="item in currency.rates"
            :key="item.bank"
            style="height: 3.5rem;"
          >
            <td class="text-high-emphasis text-h6 font-weight-bold">
              {{ item.bank }}
            </td>
            <td class="text-high-emphasis text-h6 font-weight-bold">
              KZT-{{ item.code }}
            </td>
            <td class="text-medium-emphasis"
                v-html="formatFloat(item.priceBuy)"
            >
            </td>
            <td class="text-medium-emphasis"
                v-html="formatFloat(item.priceSell)"
            >
            </td>
          </tr>
          </tbody>

        </VTable>
      </template>
      <template
        v-if="!data.length"
      >
        <VCardItem>
          <div
            colspan="8"
            class="text-center text-body-1 justify-center align-center"
          >
            {{ loadMessage }}&nbsp;
            <VProgressCircular
              :width="3"
              color="primary"
              indeterminate
            />
          </div>
        </VCardItem>
      </template>

    </VCard>
  </div>
</template>
<route lang="yaml">
meta:
title: Republic Kazakhstan - Rates
</route>
