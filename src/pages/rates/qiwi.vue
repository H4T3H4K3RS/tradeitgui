<script setup>
import { usePsStore } from "@/stores/usePsStore";

const loadMessage = ref("Загружаем данные...")
const currencies = [ "RUB" ];
const store = usePsStore ();
const data = ref ([]);
store.fetchQiwi ({},).then (response => {
  data.value = response.data.data;
}).catch (error => {
  loadMessage.value = "Ошибка загрузки данных"
  console.log (error);
})
let formatFloat = number => {
  let sign = number < 0 ? "-" : "";
  let intPart = Math.abs(parseInt (number));
  let floatPart = (Math.abs (number) % 1).toFixed (4).slice (2);
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
          image="/src/assets/images/misc/banks/qiwi.png"
        />
        Курсы Qiwi при конвертации валют
      </VCardText>
      <div
        v-for="currency in currencies"
        :key="currency.name">
        <VCardText
          class="text-h5 font-weight-bold"
        >
          Конвертация из {{ currency }}
        </VCardText>
        <VTable class="text-no-wrap pb-10 px-10 w-100">
          <!-- 👉 Table head -->
          <thead>
          <tr>

            <th
              scope="col"
              class="text-subtitle-1"
            >
              Код
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
            <th
              scope="col"
              class="text-subtitle-1"
            >
              % зазор
              <br>
              от покупки на MOEX
            </th>
            <th
              scope="col"
              class="text-subtitle-1"
            >
              % спреда
              <br>
              от покупки на MOEX
            </th>
          </tr>
          </thead>

          <!-- 👉 Table Body -->
          <tbody>
          <tr
            style="height: 3.5rem;"
            v-for="value in data"
            :key="value.name"
          >
            <td class="text-high-emphasis text-h6 font-weight-bold">
              {{ currency }}-{{ value.name }}
            </td>
            <td class="text-medium-emphasis"
                v-html="formatFloat(value.priceBuy)">
            </td>
            <td class="text-medium-emphasis"
                v-html="formatFloat(value.priceSell)">
            </td>
            <td class="text-medium-emphasis"
                v-html="formatFloat(value.moexZazor)">
            </td>
            <td class="text-medium-emphasis"
                v-html="formatFloat(value.moexSpread)">
            </td>
          </tr>
          </tbody>
          <tfoot v-show="!data.length">
          <tr>
            <td
              colspan="8"
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
      </div>
    </VCard>
  </div>
</template>
<route lang="yaml">
meta:
title: QIWI - Rates
</route>
