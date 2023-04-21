<script setup>
const props = defineProps ({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})
const emit = defineEmits ([ 'update:isDialogVisible', ])
const orders = ref([])
const currentOrder = ref({})
const dialogModelValueUpdate = val => {
  emit ('update:isDialogVisible', val)
}

const formatFloat = number => {
  let sign = number < 0 ? "-" : "";
  let intPart = Math.abs (parseInt (number));
  let floatPart = (Math.abs (number) % 1).toFixed (2).slice (2);
  return `<span><span>${sign}${intPart}</span>.${floatPart}</span>`
}
watchEffect(
  () => {
    currentOrder.value = props.data[props.type]
  }
)
watchEffect(
  () => {
    console.log(orders.value)
    orders.value = [];
    for(let [_, value] of Object.entries(currentOrder.value)){
      orders.value.push(
        {
          amount: _,
          price: value.price,
          paymentSystem: value.paymentSystems[0],
          user: value.advertiserName,
          currency: value.fiatCurrency
        }
      )
    }
  }
)
</script>

<template>
  <!-- 👉 upgrade plan -->
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 560"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
    overlay-color="black"
    overlay-opacity="1"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)"/>

    <VCard class="py-8">
      <VCardItem class="text-center">
        <VCardTitle class="text-h6 mb-5">
          <template
            v-if="props.type !== 'sellOrders'"
          >
            Покупка: {{ props.data.exchangeFrom }} {{ props.data.crypto1 }} ({{ props.data.buyType[0].toUpperCase() }})
          </template>
          <template v-else>
            Продажа: {{ props.data.exchangeTo }} {{ props.data.crypto2 }} ({{ props.data.sellType[0].toUpperCase() }})
          </template>
        </VCardTitle>
      </VCardItem>
      <VCardText>
        <VTable class="text-no-wrap">
          <!-- 👉 Table head -->
          <thead>
          <tr class="">
            <th
              scope="col"
              class="font-weight-semibold text-h6"
            >
              Цена
            </th>
            <th
              scope="col"
              class="font-weight-semibold text-h6"
            >
              Объём
            </th>
            <th
              scope="col"
              class="font-weight-semibold text-h6"
            >
              Платёжная система
            </th>
          </tr>
          </thead>

          <!-- 👉 Table Body -->
          <tbody>
          <tr
            v-for="order in orders"
            :key="order.user"
            style="height: 3.5rem;"
          >
            <td class="text-medium-emphasis" v-html="formatFloat(order.price) + ` ${order.currency}`" />
            <td class="text-medium-emphasis" v-html="formatFloat(order.amount) + ` ${order.currency}`" />
            <td class="text-medium-emphasis">
              {{order.paymentSystem}}
            </td>
          </tr>
          </tbody>
        </VTable>
      </VCardText>
      <VCardText class="px-15">
        <div class="d-flex justify-center flex-wrap">
          <VSpacer/>
          <VBtn
            color="primary"
            variant="tonal"
            class="mt-3"
            append-icon="tabler-check"
            @click="dialogModelValueUpdate(false)"
          >
            Ок
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>
