<script setup>
const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:isDialogVisible'])

const selectedPlan = ref('monthly')

const plansList = [
  {
    text: 'Monthly - $99/month',
    value: 'monthly',
  },
  {
    text: 'Enterprise - $499/month',
    value: 'enterprise',
  },
  {
    text: 'Company - $999/month',
    value: 'company',
  },
]

const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
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
          Buy Subscription
        </VCardTitle>

        <p>
          Choose the best subscription for you.
        </p>
      </VCardItem>

      <VCardText class="d-flex align-center flex-wrap flex-sm-nowrap px-15">
        <VSelect
          v-model="selectedPlan"
          label="Choose Plan"
          :items="plansList"
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
