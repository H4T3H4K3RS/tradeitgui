<script setup>
import MerchantSettingsDialog from "@/views/bot/MerchantSettingsDialog.vue";
import GlassSettingsDialog from "@/views/bot/GlassSettingsDialog.vue";
import SpotDialog from "@/views/bot/SpotDialog.vue";
import ExchangeDialog from "@/views/bot/ExchangeDialog.vue";

import { useBaseStore } from "@/stores/useBaseStore";
import { useBotStore } from "@/stores/useBotStore";

const isSnackbarEnabled = ref (false)
const snackbarMessage = ref ("")
const snackbarType = ref ("error")
const isMerchantSettingsDialogVisible = ref (false)
const isGreenGlassSettingsDialogVisible = ref (false)
const isRedGlassSettingsDialogVisible = ref (false)
const isDialogVisible = ref (false)
const isSpotDialogVisible = ref (false)
const isExchangeDialogVisible = ref (false)
const botStore = useBotStore ()
const baseStore = useBaseStore ()
const rowPerPage = ref (10)
const currentPage = ref (1)
const totalPage = ref (1)
const total = ref (0)
const fiats = ref ([])
const spreadTypes = ref ([
  {
    "name": "Все",
    "value": false
  },
  {
    "name": "Отобранные",
    "value": true
  },
])
const arbs = ref ([])
const paymentSystems = ref ([])
const splitDepths = ref ([
  {
    "name": "x1",
    "value": 1
  },
  {
    "name": "x2",
    "value": 2
  },
  {
    "name": "x3",
    "value": 3
  },
  {
    "name": "x4",
    "value": 4
  },
  {
    "name": "x5",
    "value": 5
  },
])
const volume = ref (100000)
const settings = ref ({
  fiat: null,
  isPro: false,
  spotEnabled: false,
  spreadType: false,
  filterEnabled: false,
  paymentSystems: [],
  splitDepth: 1,
  minimalSpread: 0,
  amount: 0,
  merchant: {},
  exchangesSell: {
    "USDT": {
      "taker": [],
      "maker": []
    },
    "BTC": {
      "taker": [],
      "maker": []
    },
    "ETH": {
      "taker": [],
      "maker": []
    },
    "BUSD": {
      "taker": [],
      "maker": []
    },
    "BNB": {
      "taker": [],
      "maker": []
    }
  },
  exchangesBuy: {
    "USDT": {
      "taker": [],
      "maker": []
    },
    "BTC": {
      "taker": [],
      "maker": []
    },
    "ETH": {
      "taker": [],
      "maker": []
    },
    "BUSD": {
      "taker": [],
      "maker": []
    },
    "BNB": {
      "taker": [],
      "maker": []
    }
  },
})
const settingsBackup = ref (JSON.parse (JSON.stringify (settings.value)))
const merchantSettings = ref ([])
const glassSettings = ref ([])
const spotData = ref ({
  "exchangeFrom": "Garantex",
  "exchangeTo": "Huobi",
  "buyType": "taker",
  "sellType": "maker",
  "advertiserBuy": "-",
  "advertiserSell": "FREERUSSIA",
  "profit": 17.01513610604161,
  "spread": 0.00017015136106041608,
  "fiat": "RUB",
  "networkToSpot": "internal",
  "spotOption": {
    "spotExchange": "-",
    "ccy": "-",
    "proxyToken": {},
    "exchangeRate": 1
  },
  "spotExchange": "-",
  "networkFromSpot": "TRC20",
  "buyOrders": {
    "99999.99999999994": {
      "fiatCurrency": "RUB",
      "price": 72.37,
      "minBoundary": 0,
      "maxBoundary": 986959.09,
      "paymentSystems": [
        "Other",
        "Sberbank",
        "Tinkoff",
        "SBP",
        "ADV",
        "Payeer",
        "QIWI",
        "Rosbank",
        "Alfabank",
        "Gazprombank",
        "VTB",
        "Otkritie",
        "AkBarsBank",
        "UralSibBank",
        "SovcomBank",
        "Cash",
        "Raiffaizen",
        "Yandex Money",
        "UniCredit",
        "Russian Standart",
        "RosselhozBank",
        "PochtaBank"
      ],
      "advertiserName": "-",
      "side": "BUY",
      "exchange": "Garantex",
      "isTrusted": true
    }
  },
  "sellOrders": {
    "1378.0244576481957": {
      "fiatCurrency": "RUB",
      "price": 72.58,
      "minBoundary": 10000,
      "maxBoundary": 156385,
      "paymentSystems": [
        "Sberbank",
        "Other",
        "Other"
      ],
      "advertiserName": "FREERUSSIA",
      "side": "BUY",
      "exchange": "Huobi",
      "isTrusted": true
    }
  },
  "crypto1": "USDT",
  "crypto2": "USDT",
  "paymentSystems": [
    "Sberbank",
    "SBP",
    "Tinkoff",
    "ADV",
    "QIWI",
    "Alfabank",
    "Payeer",
    "Raiffaizen",
    "Rosbank"
  ]
})
const exchangeType = ref ("buyOrders")
const exchangeData = ref ({
  "exchangeFrom": "Garantex",
  "exchangeTo": "Huobi",
  "buyType": "taker",
  "sellType": "maker",
  "advertiserBuy": "-",
  "advertiserSell": "FREERUSSIA",
  "profit": 17.01513610604161,
  "spread": 0.00017015136106041608,
  "fiat": "RUB",
  "networkToSpot": "internal",
  "spotOption": {
    "spotExchange": "-",
    "ccy": "-",
    "proxyToken": {},
    "exchangeRate": 1
  },
  "spotExchange": "-",
  "networkFromSpot": "TRC20",
  "buyOrders": {
    "99999.99999999994": {
      "fiatCurrency": "RUB",
      "price": 72.37,
      "minBoundary": 0,
      "maxBoundary": 986959.09,
      "paymentSystems": [
        "Other",
        "Sberbank",
        "Tinkoff",
        "SBP",
        "ADV",
        "Payeer",
        "QIWI",
        "Rosbank",
        "Alfabank",
        "Gazprombank",
        "VTB",
        "Otkritie",
        "AkBarsBank",
        "UralSibBank",
        "SovcomBank",
        "Cash",
        "Raiffaizen",
        "Yandex Money",
        "UniCredit",
        "Russian Standart",
        "RosselhozBank",
        "PochtaBank"
      ],
      "advertiserName": "-",
      "side": "BUY",
      "exchange": "Garantex",
      "isTrusted": true
    }
  },
  "sellOrders": {
    "1378.0244576481957": {
      "fiatCurrency": "RUB",
      "price": 72.58,
      "minBoundary": 10000,
      "maxBoundary": 156385,
      "paymentSystems": [
        "Sberbank",
        "Other",
        "Other"
      ],
      "advertiserName": "FREERUSSIA",
      "side": "BUY",
      "exchange": "Huobi",
      "isTrusted": true
    }
  },
  "crypto1": "USDT",
  "crypto2": "USDT",
  "paymentSystems": [
    "Sberbank",
    "SBP",
    "Tinkoff",
    "ADV",
    "QIWI",
    "Alfabank",
    "Payeer",
    "Raiffaizen",
    "Rosbank"
  ]
})
// 👉 Fetch Projects
const loadMessage = ref ("Загружаем данные...")
botStore.fetchSettings ({}).then (response => {
  settings.value = response.data
  settingsBackup.value = JSON.parse (JSON.stringify (settings.value))
}).catch (error => {
  isSnackbarEnabled.value = true
  snackbarMessage.value = "Не удалось загрузить ваши настройки бота!"
  snackbarType.value = "error"
  console.log (error);
})
baseStore.fetchFiats ({}).then (response => {
  fiats.value = response.data
}).catch (error => {
  isSnackbarEnabled.value = true
  snackbarMessage.value = "Не удалось загрузить фиатные валюты!"
  snackbarType.value = "error"
  console.log (error);
})

watch (
  () => settings.value.fiat,
  (newValue, oldValue) => {
    console.log ("Fetching settings...")
    botStore.fetchSettings ({
      fiat: newValue
    }).then (response => {
      settings.value = response.data
      settingsBackup.value = JSON.parse (JSON.stringify (settings.value))
    }).catch (error => {
      isSnackbarEnabled.value = true
      snackbarMessage.value = "Не удалось загрузить ваши настройки бота!"
      snackbarType.value = "error"
      console.log (error);
    })
    console.log ("Fetching systems...")
    if (oldValue !== null) {
      settings.value.paymentSystems = []
    }
    botStore.fetchHelpful ({
      type: 'systems',
      fiat: newValue,
    }).then (response => {
      paymentSystems.value = []
      response.data.data?.forEach (paymentSystem => paymentSystems.value.push ({
        name: paymentSystem
      }));
    }).catch (error => {
      console.log (error)
    })
    console.log ("Fetching merchants...")
    if (oldValue !== null) {
      settings.value.merchant = {}
    }
    botStore.fetchHelpful ({
      type: 'merchant',
      fiat: newValue,
    }).then (response => {
      merchantSettings.value = []
      response.data.data?.forEach (merchant => merchantSettings.value.push ({
        name: merchant,
        selection: [
          {
            text: 'Buy',
            value: 'buy'
          }, {
            text: 'Sell',
            value: 'sell'
          },
        ]
      }));
      if (oldValue !== null) {
        console.log (settings.value.merchant)
        merchantSettings.value?.forEach (merchantSetting => settings.value.merchant[merchantSetting.name] = settings.value.merchant[merchantSetting.name] === undefined ? [] : settings.value.merchant[merchantSetting.name]);
      }
    }).catch (error => {
      console.log (error)
    })
    if (oldValue !== null) {
      settings.value.exchangesBuy = {}
      settings.value.exchangesSell = {}
    }
    console.log ("Fetching exchanges...")
    botStore.fetchHelpful ({
      type: 'exchanges',
      fiat: newValue,
    }).then (response => {
      glassSettings.value = []
      Object.entries (response.data?.data)?.forEach (exchange => {
        const [ key, value ] = exchange;
        let selection = [];
        value.forEach (cex => selection.push ({
          name: cex,
        },));
        glassSettings.value.push ({
          name: key,
          selection
        })
      });
      if (oldValue !== null) {
        glassSettings.value?.forEach (setting => {
          settings.value.exchangesSell[setting.name] = { taker: [], maker: [] }
          settings.value.exchangesBuy[setting.name] = { taker: [], maker: [] }
        });
      }
    }).catch (error => {
    })
  }
);
watchEffect (() => {
  if (settings.value.fiat === null)
    return
  console.log ("Fetching arbs...")
  botStore.fetchArbs ({
    fiat: settings.value.fiat,
    page: currentPage.value,
  }).then (response => {
    arbs.value = response.data.results;
    total.value = response.data.count;
    totalPage.value = parseInt(total.value / rowPerPage.value) + 1;
    console.log (response.data)
  }).catch (error => {
    console.log (typeof settings.value.fiat)
    isSnackbarEnabled.value = true
    snackbarMessage.value = "Не удалось загрузить арбитражные ситуации!"
    snackbarType.value = "error"
    console.log (error);
  })
})

watchEffect (() => {
  console.log (arbs.value)
  console.log (settings.value)
})
// 👉 Computing pagination data
const paginationData = computed (() => {
  const firstIndex = arbs.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = arbs.value.length + (currentPage.value - 1) * rowPerPage.value

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

const findSpread = async () => {
  console.log ("Fetching arbs...")
  arbs.value = []
  botStore.fetchArbs ({
    fiat: settings.value.fiat,
    page: currentPage.value,
  }).then (response => {
    console.log (response.data)
    arbs.value = response.data.results
    total.value = response.data.count;
    totalPage.value = parseInt(total.value / rowPerPage.value) + 1;
    console.log (response.data)
    isSnackbarEnabled.value = true
    snackbarMessage.value = `Арбитражные ситуации обновлены!`
    snackbarType.value = "success"
  }).catch (error => {
    isSnackbarEnabled.value = true
    snackbarMessage.value = "Не удалось загрузить арбитражные ситуации!"
    snackbarType.value = "error"
    console.log (error);
  })
}

const saveSettings = async () => {
  botStore.saveSettings (settings.value).then (
    response => {
      isSnackbarEnabled.value = true
      snackbarMessage.value = response.status > 250 ? `Ошибка сохранения: ${response.data}` : "Настройки сохранены!"
      snackbarType.value = response.status > 250 ? "error" : "success"
    }
  ).catch (
    err => {
      console.log (err)
      isSnackbarEnabled.value = true
      snackbarMessage.value = `Ошибка сохранения: ${err}`
      snackbarType.value = "error"
    }
  )
}

const resetSettings = async () => {
  settings.value = JSON.parse (JSON.stringify (settingsBackup.value))
  isSnackbarEnabled.value = true
  snackbarMessage.value = `Все несохранённые изменения сброшены!`
  snackbarType.value = "success"
}
const formatFloat = number => {
  let sign = number < 0 ? "-" : "+";
  let intPart = Math.abs (parseInt (number));
  let floatPart = (Math.abs (number) % 1).toFixed (2).slice (2);
  return `<span class="text-${sign === '-' ? 'error' : 'success'}"><span class="text-h6 text-${sign === '-' ? 'error' : 'success'}">${sign}${intPart}</span>.${floatPart}</span>`
}
const showSpot = async (arb) => {
  isSpotDialogVisible.value = true
  spotData.value = arb
}
const showExchange = async (arb, type='buyOrders') => {
  isExchangeDialogVisible.value = true
  exchangeData.value = arb
  exchangeType.value = type
}
watchEffect (() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})
</script>

<template>
  <VCol
    cols="12"
  >
    <VSnackbar
      v-model="isSnackbarEnabled"
      location="top end"
      variant="flat"
      :color="snackbarType"
    >
      {{ snackbarMessage }}
    </VSnackbar>
    <VCard>
      <VCardItem class="project-header d-flex flex-wrap justify-space-between py-4 gap-4">
        <VCardText
          class="text-h4 px-10 font-weight-bold"
        >
          Бот
        </VCardText>
        <VRow
          class="mt-1 justify-center"
        >
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="4"
            md="2"
          >
            <div
              class="w-100"
            >
              <VSelect
                v-model="settings.fiat"
                variant="outlined"
                label="Fiat"
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
          </VCol> <!-- Fiat -->
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="4"
            md="2"
          >
            <div
              class="w-100"
            >
              <VTextField
                v-model="settings.minimalSpread"
                label="Min. Spread"
                placeholder="0.5"
                type="number"
                append-inner-icon="tabler-percentage"
              />
            </div>
          </VCol> <!-- Min Spread -->
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="4"
            md="2"
          >
            <div
              class="w-100"
            >
              <VSelect
                v-model="settings.spreadType"
                variant="outlined"
                :items="spreadTypes"
                label="SpreadType"
                item-title="name"
                item-value="value"
              />
            </div>
          </VCol> <!-- SpreadType -->
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="4"
            md="2"
          >
            <div
              class="w-100"
            >
              <VSelect
                v-model="settings.splitDepth"
                variant="outlined"
                :items="splitDepths"
                label="Split Depth"
                item-title="name"
                item-value="value"
              />
            </div>
          </VCol> <!-- Split Depth -->
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="6"
            md="4"
          >
            <div
              class="w-100"
            >
              <VSelect
                v-model="settings.paymentSystems"
                variant="outlined"
                :items="paymentSystems"
                label="Payment Systems"
                item-title="name"
                item-value="name"
                multiple
              />
            </div>
          </VCol> <!-- Payment Systems -->
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="5"
            lg="2"
          >
            <div
              class="w-100"
            >
              <VTextField
                v-model="settings.amount"
                label="Volume"
                placeholder="100000"
                type="number"
                append-inner-icon="tabler-currency-rubel"
              />
            </div>
          </VCol> <!-- Volume -->
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="5"
            md="4"
            lg="2"
          >
            <div
              class="w-100"
            >
              <VBtn
                @click="isMerchantSettingsDialogVisible = true"
                v-text="'Merchant Settings'"
                color="secondary"
                variant="outlined"
              />
            </div>
          </VCol> <!-- Merchant Settings -->
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="5"
            md="4"
            lg="2"
          >
            <div
              class="w-100"
            >
              <VBtn
                @click="isRedGlassSettingsDialogVisible = true"
                v-text="'Red Glass Settings'"
                color="secondary"
                variant="outlined"
              />
            </div>
          </VCol> <!-- Red Glass Settings -->
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="5"
            md="4"
            lg="3"
          >
            <div
              class="w-100"
            >
              <VBtn
                class="w-100"
                @click="isGreenGlassSettingsDialogVisible = true"
                v-text="'Green Glass Settings'"
                color="secondary"
                variant="outlined"
              />
            </div>
          </VCol> <!-- Green Glass Settings -->
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="3"
            lg="1"
          >
            <div
            >
              <VSwitch
                v-model="settings.spotEnabled"
                inset
                color="error"
              >
                <template #label>
                  <span :class="settings.spotEnabled ? 'text-error font-weight-bold': 'text-secondary'">Spot</span>
                </template>
              </VSwitch>
              <!--                <VBtn-->
              <!--                  @click="() => {}"-->
              <!--                  v-text="'Clear Orders'"-->
              <!--                  color="success"-->
              <!--                  variant="outlined"-->
              <!--                />-->
            </div>
          </VCol> <!-- Spot -->
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="4"
            lg="2"
          >
            <div
            >
              <VSwitch
                v-model="settings.filterEnabled"
                inset
                color="success"
              >
                <template #label>
                  <span :class="settings.filterEnabled ? 'text-success font-weight-bold': 'text-secondary'"> Clear Orders</span>
                </template>
              </VSwitch>
              <!--                <VBtn-->
              <!--                  @click="() => {}"-->
              <!--                  v-text="'Clear Orders'"-->
              <!--                  color="success"-->
              <!--                  variant="outlined"-->
              <!--                />-->
            </div>
          </VCol> <!-- Clear Orders -->
        </VRow>
        <VRow class="justify-end">
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="2"
            md="2"
            lg="2"
          >
            <div
              class="w-100"
            >
              <VBtn
                @click="resetSettings"
                color="error"
                variant="outlined"
                prepend-icon="tabler-refresh"
              >
                Reset
              </VBtn>
            </div>
          </VCol> <!-- Reset settings -->
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="5"
            md="4"
            lg="2"
          >
            <div
              class="w-100"
            >
              <VBtn
                @click="saveSettings"
                color="success"
                variant="outlined"
                prepend-icon="tabler-device-floppy"
              >
                Save Settings
              </VBtn>
            </div>
          </VCol> <!-- Save settings -->
          <VCol
            class="d-flex justify-center text-center"
            cols="12"
            sm="5"
            md="4"
            lg="3"
          >
            <div
              class="w-100"
            >
              <VBtn
                class="w-100"
                @click="findSpread"
                color="primary"
                variant="outlined"
                append-icon="tabler-search"
              >
                Find Spread
              </VBtn>
            </div>
          </VCol> <!-- Green Glass Settings -->
        </VRow>
      </VCardItem>

      <VDivider/>

      <!-- SECTION Table -->
      <VTable class="text-no-wrap">
        <!-- 👉 Table head -->
        <thead>
        <tr class="">

          <th
            scope="col"
            class="font-weight-semibold text-h6"
          >
            Спред
          </th>
          <th
            scope="col"
            class="font-weight-semibold text-h6"
          >
            Профит
          </th>
          <th
            scope="col"
            class="font-weight-semibold text-h6"
          >
            Путь
          </th>
          <th
            scope="col"
            class="font-weight-semibold text-h6"
          >
            Закуп
          </th>
          <th
            scope="col"
            class="font-weight-semibold text-h6"
          >
            Перевод
          </th>
          <th
            scope="col"
            class="font-weight-semibold text-h6"
          >
            Спот
          </th>
          <th
            scope="col"
            class="font-weight-semibold text-h6"
          >
            Перевод
          </th>
          <th
            scope="col"
            class="font-weight-semibold text-h6"
          >
            Продажа
          </th>
        </tr>
        </thead>

        <!-- 👉 Table Body -->
        <tbody>
        <tr
          v-for="arb in arbs"
          :key="arb.id"
          style="height: 3.5rem;"
        >
          <td class="text-medium-emphasis"
              v-html="formatFloat(arb.spread * 100) + '%'"/>
          <td class="text-medium-emphasis "
              v-html="formatFloat(arb.profit) + ` ${arb.fiat}`"
          />
          <td class="text-medium-emphasis ">
            {{ arb.fiat }} -> {{
              arb.crypto1 !== arb.crypto2 ? `${arb.crypto1} -> ` + (arb.spotOption.proxyToken !== '-' ? `${arb.spotOption.proxyToken} -> ` : ``) + `${arb.crypto2}` : `${arb.crypto1}`
            }}
            -> {{ arb.fiat }}
          </td>
          <td class="text-medium-emphasis "
          >
            <VBtn
              rounded
              size="small"
              class="cursor-pointer"
              color="primary"
              variant="tonal"
              @click="showExchange(arb, 'buyOrders')"
            >
              {{ arb.exchangeFrom }} {{ arb.crypto1 }} ({{ arb.buyType[0] }})
            </VBtn>
          </td>
          <td class="text-medium-emphasis ">
            {{ arb.networkToSpot.toUpperCase () }}
          </td>
          <td class="text-medium-emphasis ">
            <template
              v-if="arb.spotOption.spotExchange !== '-'"
            >
              <VBtn
                rounded
                size="small"
                class="cursor-pointer"
                color="primary"
                variant="tonal"
                @click="showSpot(arb)"
              >
                {{ arb.spotOption.spotExchange }} {{ arb.crypto2 }}
              </VBtn>
            </template>
            <template v-else>
              <VBtn
                rounded
                size="small"
                color="error"
                variant="tonal"
                disabled
              >
                No Spot
              </VBtn>
            </template>
          </td>
          <td class="text-medium-emphasis ">
            {{ arb.networkFromSpot.toUpperCase () }}
          </td>
          <td class="text-medium-emphasis ">
            <VBtn
              rounded
              size="small"
              class="cursor-pointer"
              color="primary"
              variant="tonal"
              @click="showExchange(arb, 'sellOrders')"
            >
              {{ arb.exchangeTo }} {{ arb.crypto2 }} ({{ arb.sellType[0] }})
            </VBtn>
          </td>
        </tr>
        </tbody>

        <!-- 👉 table footer  -->
        <tfoot v-show="!arbs.length">
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

          <td
            colspan="8"
            class="text-center text-body-1 justify-center align-center"
          >
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
          :total-visible="4"
          :length="totalPage"
        />
      </VCardText>
      <!-- !SECTION -->
    </VCard>
    <MerchantSettingsDialog
      v-model:is-dialog-visible="isMerchantSettingsDialogVisible"
      v-model:merchant-settings="merchantSettings"
      v-model:merchant-settings-selection="settings.merchant"
      @update:merchantSettingsSelection="settings.merchant = $event"
    />
    <GlassSettingsDialog
      type="Green"
      v-model:is-dialog-visible="isGreenGlassSettingsDialogVisible"
      v-model:glass-settings="glassSettings"
      v-model:glass-settings-selection="settings.exchangesBuy"
      @update:glassSettingsSelection="settings.exchangesBuy = $event"
    />
    <GlassSettingsDialog
      type="Red"
      v-model:is-dialog-visible="isRedGlassSettingsDialogVisible"
      v-model:glass-settings="glassSettings"
      v-model:glass-settings-selection="settings.exchangesSell"
      @update:glassSettingsSelection="settings.exchangesSell = $event"
    />
    <SpotDialog
      v-model:is-dialog-visible="isSpotDialogVisible"
      v-model:data="spotData"
    />
    <ExchangeDialog
      v-model:is-dialog-visible="isExchangeDialogVisible"
      v-model:type="exchangeType"
      v-model:data="exchangeData"
    />
  </VCol>
</template>

<style lang="scss">
.v-overlay__scrim {
  opacity: 10% !important;
}

.project-header .v-card-item__append {
  padding-inline-start: 0;
}
</style>
