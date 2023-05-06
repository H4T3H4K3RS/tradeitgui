<script setup>
const props = defineProps ({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits ([ 'update:isDialogVisible' ])

const selectedItem = ref (null)

const items = ref (null)

const dialogModelValueUpdate = val => {
  emit ('update:isDialogVisible', val)
}
</script>

<template>
  <!-- 👉 upgrade plan -->
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 560"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="py-8">
      <VCardItem class="text-center">
        <VCardTitle class="text-h5 mb-5">
          Предложение Обмена
        </VCardTitle>

        <p>
          Выберите вещь, предложите и ожидайте подтверждения от пользователя!
        </p>
      </VCardItem>

      <VCardText class="d-flex align-center flex-wrap flex-sm-nowrap px-15">
        <VSelect
          v-model="selectedItem"
          label="Choose Plan"
          :loading="!items?.length"
          :items="items ? item : []"
          item-title="text"
          item-value="value"
          density="compact"
          class="me-3"
        />
      </VCardText>
      <VCardText class="px-15">
        <div class="d-flex justify-center flex-wrap">
          <VBtn
            color="success"
            variant="tonal"
            class="mt-3"
          >
            Buy Subscription
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>
