<script setup>
const props = defineProps ({
  cex: {
    type: null,
    required: true,
  },
})
const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""
import { avatarText } from '@core/utils/formatters'
import { useP2PStore } from "@/stores/useP2PStore";

const currenciesStore = useP2PStore ()
const rowPerPage = ref (10)
const currentPage = ref (1)
const totalPage = ref (1)
const total = ref (0)
const fiat = ref (null)
const crypto = ref (null)
const rate = ref (1.01)
let fiats = ref ([])
let cryptos = ref ([])
let rates = ref ([])
// 👉 Fetch Projects
const loadMessage = ref("Загружаем данные...")
currenciesStore.fetchFiat ({
  cex: props.cex,
  perPage: rowPerPage.value,
  currentPage: currentPage.value,
}).then (response => {
  fiats.value = response.data.data
  if (fiats.value.length > 0) {
    fiat.value = fiats.value[0].id
  }
}).catch (error => {
  loadMessage.value = "Ошибка загрузки фиатных валют"
  console.log(error)
})
currenciesStore.fetchCrypto ({
  cex: props.cex,
  perPage: rowPerPage.value,
  currentPage: currentPage.value,
}).then (response => {
  cryptos.value = response.data.data
  if (cryptos.value.length > 0) {
    crypto.value = cryptos.value[0].id
  }
}).catch (error => {
  loadMessage.value = "Ошибка загрузки криптовалют"
  console.log(error)
})
watchEffect (() => {
  rates.value = []
  currenciesStore.fetchRates ({
    cex: props.cex,
    fiat: fiat.value,
    crypto: crypto.value,
    page: currentPage.value,
  }).then (response => {
    // console.log (response.data)
    rates.value = response.data.results;
    total.value = response.data.count;
    totalPage.value = parseInt(total.value / rowPerPage.value) + 1;
  }).catch (error => {
    loadMessage.value = "Загружаем спреды..."
    console.log(error)
  })
})

// 👉 Fetch Projects
watchEffect (() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed (() => {
  const firstIndex = rates.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = rates.value.length + (currentPage.value - 1) * rowPerPage.value

  return `Showing ${firstIndex} to ${lastIndex} of ${total.value} entries`
})
const resolveRateColor = (number) => {
  if (number > 0)
    return {
      status: `${number}`,
      chip: { color: 'success' },
    }
  if (number < 0)
    return {
      status: `${number}`,
      chip: { color: 'error' },
    }
  return {
    status: `${number}`,
    chip: { color: 'primary' },
  }
}
</script>

<template>
  <VCol
    cols="12"
  >
    <VCard>
      <VCardItem class="project-header d-flex flex-wrap justify-space-between py-4 gap-4">
        <VCardText
          class="text-h4 px-10 font-weight-bold"
        >
          <VAvatar
            size="50"
            variant="text"
            color="primary"
            :image="`/src/assets/images/misc/cex/${props.cex}.png`"
          />
          Спреды {{capitalize(props.cex)}}
        </VCardText>
        <template #append >

          <VRow
          >
            <!--            <VCol-->
            <!--              class="d-flex justify-center text-center"-->
            <!--              cols="12"-->
            <!--              sm="12"-->
            <!--              md="4"-->
            <!--            >-->
            <!--              <div-->
            <!--                style="width: 200px;"-->
            <!--              >-->
            <!--                <VLabel>Rate:</VLabel>-->
            <!--                <VTextField-->
            <!--                  v-model="rate"-->
            <!--                  prefix="$"-->
            <!--                  type="number"-->
            <!--                />-->
            <!--              </div>-->
            <!--            </VCol>-->
            <VCol
              class="d-flex justify-center text-center"
              cols="12"
              sm="6"
              md="4"
            >
              <div
                style="width: 200px;"
              >
                <VLabel>Fiat:</VLabel>
                <VSelect
                  v-model="fiat"
                  variant="outlined"
                  :items="fiats"
                  item-title="symbol"
                  item-value="id"
                >
                  <template #selection="{ item }">
                    <VChip>
                      <VAvatar
                        start
                        :image="item.raw.avatar"
                      />
                      <span>{{ item.title }}</span>
                    </VChip>
                  </template>
                </VSelect>
              </div>
            </VCol>
            <VCol
              class="d-flex justify-center text-center"
              cols="12"
              sm="6"
              md="4"
            >
              <div
                style="width: 200px;"
              >
                <VLabel>Crypto:</VLabel>
                <VSelect
                  v-model="crypto"
                  variant="outlined"
                  :items="cryptos"
                  item-title="ticker"
                  item-value="id"
                >
                  <template #selection="{ item }">
                    <VChip>
                      <VAvatar
                        start
                        :image="item.raw.avatar"
                      />
                      <span>{{ item.title }}</span>
                    </VChip>
                  </template>
                </VSelect>
              </div>
            </VCol>
          </VRow>
        </template>
      </VCardItem>

      <VDivider/>

      <!-- SECTION Table -->
      <VTable class="text-no-wrap">
        <!-- 👉 Table head -->
        <thead>
        <tr>

          <th
            scope="col"
            class="font-weight-semibold"
          >
            Метод
          </th>
          <th
            scope="col"
            class="font-weight-semibold"
          >
            Ликвидность за 24 часа
          </th>
          <th
            scope="col"
            class="font-weight-semibold"
          >
            BUY
          </th>
          <th
            scope="col"
            class="font-weight-semibold"
          >
            SELL
          </th>
          <th
            scope="col"
            class="font-weight-semibold"
          >
            % спред
            <br>
            тейкер - тейкер
          </th>
          <th
            scope="col"
            class="font-weight-semibold"
          >
            % спред
            <br>
            тейкер - мейкер
          </th>
          <th
            scope="col"
            class="font-weight-semibold"
          >
            % спред
            <br>
            мейкер - мейкер
          </th>
          <th
            scope="col"
            class="font-weight-semibold"
          >
            % спред
            <br>
            мейкер - тейкер
          </th>
        </tr>
        </thead>

        <!-- 👉 Table Body -->
        <tbody>
        <tr
          v-for="rate in rates"
          :key="rate.id"
          style="height: 3.5rem;"
        >

          <!-- 👉 Name -->
          <td>
            <div class="d-flex align-center gap-3">
              <VAvatar
                variant="tonal"
                color="primary"
                size="38"
              >
                <VImg
                  v-if="rate.avatar.length"
                  :src="rate.avatar"
                />
                <span
                  v-else
                  class="font-weight-semibold"
                >{{ avatarText (rate.name) }}</span>
              </VAvatar>

              <div>
                <h6 class="text-base text-medium-emphasis font-weight-semibold">
                  {{ rate.name }}
                </h6>
              </div>
            </div>
          </td>

          <!-- 👉 Leader -->
          <td class="text-medium-emphasis"
          >
            {{ rate['24hLiq'] }}
          </td>
          <td class="text-medium-emphasis">
            {{ rate.BUY.maker }}
          </td>
          <td class="text-medium-emphasis">
            {{ rate.SELL.maker }}
          </td>
          <td class="text-medium-emphasis">
            <VChip
              label
              v-bind="resolveRateColor(rate['t-t']).chip"
              size="small"
            >
              {{ resolveRateColor (rate['t-t']).status }}
            </VChip>
          </td>
          <td class="text-medium-emphasis">
            <VChip
              label
              v-bind="resolveRateColor(rate['t-m']).chip"
              size="small"
            >
              {{ resolveRateColor (rate['t-m']).status }}
            </VChip>
          </td>
          <td class="text-medium-emphasis">
            <VChip
              label
              v-bind="resolveRateColor(rate['m-t']).chip"
              size="small"
            >
              {{ resolveRateColor (rate['m-t']).status }}
            </VChip>
          </td>
          <td class="text-medium-emphasis">
            <VChip
              label
              v-bind="resolveRateColor(rate['m-m']).chip"
              size="small"
            >
              {{ resolveRateColor (rate['m-m']).status }}
            </VChip>
          </td>
        </tr>
        </tbody>

        <!-- 👉 table footer  -->
        <tfoot v-show="!rates.length">
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
      <!-- !SECTION -->
      <!-- SECTION Pagination -->
      <VCardText class="d-flex align-center flex-wrap justify-space-between gap-4 py-3">
        <!-- 👉 Pagination meta -->
        <span class="text-sm text-disabled">{{ paginationData }}</span>

        <!-- 👉 Pagination -->
        <VPagination
          v-model="currentPage"
          size="small"
          :total-visible="2"
          :length="totalPage"
        />
      </VCardText>
      <!-- !SECTION -->
    </VCard>
  </VCol>
</template>

<style lang="scss">
.project-header .v-card-item__append {
  padding-inline-start: 0;
}
</style>
