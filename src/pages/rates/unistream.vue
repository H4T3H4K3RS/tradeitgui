<script setup>
import { usePsStore } from "@/stores/usePsStore";

const loadMessage = ref("Загружаем данные...")
const currencies = [ "RUB" ];
const store = usePsStore ();
const data = ref ([]);
store.fetchProvider ({slug: 'unistream'}).then (response => {
  data.value = response.data.data;
}).catch (error => {
  loadMessage.value = "Ошибка загрузки данных"
  console.log (error);
})
let formatFloat = number => {
  let sign = number < 0 ? "-" : "";
  let intPart = Math.abs(parseInt (number));
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
          image="/src/assets/images/misc/banks/unistream.png"
        />
        Unistream
      </VCardText>
      <VTable class="text-no-wrap pb-10 px-10">
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
            Курс
          </th>
          <th
            scope="col"
            class="text-subtitle-1"
          >
            Страна-получатель
          </th>
        </tr>
        </thead>

        <!-- 👉 Table Body -->
        <tbody>
        <tr
          v-for="item in data"
          :key="item.country"
          style="height: 3.5rem;"
        >


          <!-- 👉 Leader -->
          <td class="text-high-emphasis text-h6 font-weight-bold">
            RUB в {{ item.name }}
          </td>
          <td class="text-medium-emphasis"
              v-html="formatFloat(item.rate)">
          </td>
          <td class="text-high-emphasis text-h6 font-weight-bold">
            {{ item.country }}
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
    </VCard>
  </div>
</template>
<route lang="yaml">
meta:
title: Golden Crown - Rates
</route>
