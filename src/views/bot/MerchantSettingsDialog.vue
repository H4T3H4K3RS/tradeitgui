<script setup>
const props = defineProps ({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  merchantSettings: {
    type: Object,
    required: true,
  },
  merchantSettingsSelection: {
    type: Object,
    required: true,
  }
})
const merchantSettingsSelection = ref ({})

watchEffect(() => {
  merchantSettingsSelection.value = JSON.parse(JSON.stringify(props.merchantSettingsSelection))
})
const emit = defineEmits ([ 'update:merchantSettingsSelection', 'update:isDialogVisible', ])


const updateForm = () => {
  emit ('update:merchantSettingsSelection', JSON.parse(JSON.stringify(merchantSettingsSelection.value)))
}
const cancelForm = () => {
  merchantSettingsSelection.value = JSON.parse(JSON.stringify(props.merchantSettingsSelection))
}

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
    <DialogCloseBtn @click="dialogModelValueUpdate(false)"/>

    <VCard class="py-8">
      <VCardItem class="text-center">
        <VCardTitle class="text-h5 mb-5">
          Merchant Settings
        </VCardTitle>

        <p>
          Setup CEX parameters
        </p>
      </VCardItem>

      <VCardText
        v-for="merchantSetting in props.merchantSettings"
        :key="merchantSetting.name"
        class="d-flex align-center flex-wrap flex-sm-nowrap px-15">
        <VSelect
          :label="merchantSetting.name"
          :items="merchantSetting.selection"
          item-title="text"
          item-value="value"
          density="compact"
          class="me-3"
          v-model="merchantSettingsSelection[merchantSetting.name]"
          multiple
        />
      </VCardText>
      <VCardText class="px-15">
        <div class="d-flex justify-center flex-wrap">
          <VBtn
            color="error"
            variant="tonal"
            class="mt-3"
            append-icon="tabler-x"
            @click="cancelForm(); dialogModelValueUpdate(false)"
          >
            Cancel
          </VBtn>
          <VSpacer/>
          <VBtn
            color="success"
            variant="tonal"
            class="mt-3"
            append-icon="tabler-checks"
            @click="updateForm(); dialogModelValueUpdate(false)"
          >
            Done
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>
