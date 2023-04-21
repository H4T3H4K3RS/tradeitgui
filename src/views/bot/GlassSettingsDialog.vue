<script setup>
const props = defineProps ({
  type: {
    type: String,
    required: true,
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  glassSettings: {
    type: Object,
    required: true,
  },
  glassSettingsSelection: {
    type: Object,
    required: true,
  }
})
const glassSettingsSelection = ref ({})
watchEffect(() => {
  glassSettingsSelection.value = JSON.parse (JSON.stringify (props.glassSettingsSelection))
})
const emit = defineEmits ([ 'update:glassSettingsSelection', 'update:isDialogVisible', ])

const updateForm = () => {
  emit ('update:glassSettingsSelection', JSON.parse (JSON.stringify (glassSettingsSelection.value)))
}
const cancelForm = () => {
  glassSettingsSelection.value = JSON.parse (JSON.stringify (props.glassSettingsSelection))
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
    overlay-color="black"
    overlay-opacity="1"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)"/>

    <VCard class="py-8">
      <VCardItem class="text-center">
        <VCardTitle class="text-h5 mb-5">
          {{ props.type }} Glass Settings
        </VCardTitle>
        <p>
          Setup settings of the selected glass
        </p>
      </VCardItem>
      <VRow>
        <VCol
          cols="12"
          md="6"
        >
          <VCardTitle class="d-flex align-center flex-wrap flex-sm-nowrap mb-2">
            Taker
          </VCardTitle>
          <VCardText
            v-for="glassSetting in props.glassSettings"
            :key="glassSetting.name"
            class="d-flex align-center flex-wrap flex-sm-nowrap">
            <VSelect
              :label="glassSetting.name"
              :items="glassSetting.selection"
              item-title="name"
              item-value="name"
              density="compact"
              class="me-3"
              v-model="glassSettingsSelection[glassSetting.name].taker"
              multiple
            />
          </VCardText>
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <VCardTitle class="d-flex align-center flex-wrap flex-sm-nowrap mb-2">
            Maker
          </VCardTitle>
          <VCardText
            v-for="glassSetting in props.glassSettings"
            :key="glassSetting.name"
            class="d-flex align-center flex-wrap flex-sm-nowrap">
            <VSelect
              :label="glassSetting.name"
              :items="glassSetting.selection"
              item-title="name"
              item-value="name"
              density="compact"
              class="me-3"
              v-model="glassSettingsSelection[glassSetting.name].maker"
              multiple
            />
          </VCardText>
        </VCol>
      </VRow>
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
