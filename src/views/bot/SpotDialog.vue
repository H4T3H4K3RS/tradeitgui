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
})
const emit = defineEmits ([ 'update:isDialogVisible', ])

const dialogModelValueUpdate = val => {
  emit ('update:isDialogVisible', val)
}

const formatFloat = number => {
  let sign = number < 0 ? "-" : "";
  let intPart = Math.abs (parseInt (number));
  let floatPart = (Math.abs (number) % 1).toFixed (2).slice (2);
  return `<span><span>${sign}${intPart}</span>.${floatPart}</span>`
}
const rate = computed (
  () => {
    return props.data.spotOption.exchangeRate > 1 ? props.data.spotOption.exchangeRate : (1 / props.data.spotOption.exchangeRate)
  }
)
const exchange = computed (
  () => {
    return props.data.spotOption.exchangeRate > 1 ? `${props.data.crypto1} / ${props.data.crypto2}` : `${props.data.crypto2} / ${props.data.crypto1}`
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
          {{ props.data.spotOption.spotExchange }} Спот
        </VCardTitle>
      </VCardItem>
      <VCardText
        class="text-center"
      >
        Путь:
        <span class="text-h6">{{
            props.data.crypto1 !== props.data.crypto2 ? `${props.data.crypto1} -> ` + (props.data.spotOption.proxyToken !== '-' ? `${props.data.spotOption.proxyToken} -> ` : ``) + `${props.data.crypto2}` : `${props.data.crypto1}`
          }}</span>
      </VCardText>
      <VCardText>
        <VTable class="text-no-wrap">
          <!-- 👉 Table head -->
          <thead>
          <tr class="">
            <th
              scope="col"
              class="font-weight-semibold text-h6"
            >
              Курс
            </th>
            <th
              scope="col"
              class="font-weight-semibold text-h6"
            >
              Пара
            </th>
          </tr>
          </thead>

          <!-- 👉 Table Body -->
          <tbody>
          <tr
            style="height: 3.5rem;"
          >
            <td class="text-medium-emphasis" v-html="formatFloat(rate)">
            </td>
            <td class="text-medium-emphasis">
              {{ exchange }}
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
