<script setup>
import { ref, onMounted } from 'vue'
import VueQrcode from '@chenfengyuan/vue-qrcode'


const props = defineProps ({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits ([ 'update:isDialogVisible' ])

const snackbar = ref ({
  enabled: false,
  type: 'success',
  message: 'Hello!',
})

const link = ref ("")

watchEffect (
  () => {
    link.value = window.location.href
  },
)

const copyToClipboard = (valueToCopy, alertMessage, alertType = "error") => {
  navigator.clipboard.writeText (valueToCopy)
    .then (() => {
      snackbar.value = {
        ...snackbar.value,
        enabled: true,
        message: alertMessage,
        type: alertType,
      }
    })
    .catch (error => {
      console.error ('Failed to copy to clipboard: ', error)
    })
}

const dialogModelValueUpdate = val => {
  emit ('update:isDialogVisible', val)
}
</script>

<template>
  <div>
    <!-- 👉 upgrade plan -->
    <VDialog
      :width="$vuetify.display.lgAndUp ? '40%' : 700"
      :model-value="props.isDialogVisible"
      @update:model-value="dialogModelValueUpdate"
    >
      <VSnackbar
        v-model="snackbar.enabled"
        location="top end"
        variant="flat"
        :color="snackbar.type"
      >
        {{ snackbar.message }}
      </VSnackbar>
      <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

      <VCard class="py-8">
        <VCardItem class="text-center">
          <VCardTitle class="text-h5 mb-5">
            Поделиться
          </VCardTitle>
        </VCardItem>
        <VCardText class="d-flex align-center flex-wrap flex-sm-nowrap px-15">
          <VRow class="d-flex">
            <VCol
              cols="12"
              sm="4"
              class="d-flex justify-center"
            >
              <VueQrcode
                :value="link"
                :options="{
                  width: 200
                }"
              />
            </VCol>
            <VCol
              cols="12"
              sm="8"
              class="justify-center"
            >
              <VTextField
                v-model="link"
                label="Cсылка"
                append-inner-icon="tabler-clipboard"
                readonly
                @click:append-inner="copyToClipboard(link, `Ссылка скопирована`, 'success')"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VDialog>
  </div>
</template>
