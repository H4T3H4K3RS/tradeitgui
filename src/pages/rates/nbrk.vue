<script setup>
import { usePsStore } from "@/stores/usePsStore";

const loadMessage = ref("Загружаем данные...")
const store = usePsStore ();
const data = ref ([]);
store.fetchBank ({bank: 'nbrk'}).then (response => {
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
          image="/src/assets/images/misc/currencies/fiat/KZT.png"
        />
        Основные курсы валют Национального Банка Казахстана
      </VCardText>
      <VCardText
        class="text-h5 font-weight-bold"
      >
        Обмен KZT
      </VCardText>
      <VTable class="text-no-wrap pb-10 px-10">
        <!-- 👉 Table head -->
        <thead>
        <tr>
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
        </tr>
        </thead>

        <!-- 👉 Table Body -->
        <tbody>
        <tr
          v-for="item in data"
          :key="item.code"
          style="height: 3.5rem;"
        >
          <td class="text-high-emphasis text-h6 font-weight-bold">
            {{ item.code }}
          </td>
          <td class="text-medium-emphasis"
              v-html="formatFloat(item.price)"
          />
        </tr>
        </tbody>
        <tfoot v-show="!data.length">
        <tr>
          <td
            colspan="8"
            class="text-center text-body-1 justify-center align-center"
          >
            {{ loadMessage }}&nbsp;
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
  title: National Bank Republic Kazakhstan - Rates
</route>
