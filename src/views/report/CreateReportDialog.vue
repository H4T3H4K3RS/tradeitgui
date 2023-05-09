<script setup>
import { useReportStore } from "@/stores/useRest"

const props = defineProps ({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  item: {
    type: Object,
    default: () => {
    },
    required: false,
  },
  report: {
    type: Object,
    default: () => {
    },
    required: false,
  },
})

const emit = defineEmits ([ 'update:isDialogVisible' ])

const snackbar = ref ({
  enabled: false,
  type: 'success',
  message: 'Hello!',
})

const reportStore = useReportStore ()

const report = ref ({
  "message": "",
})

const createReport = () => {
  reportStore.postItem (
    {
      ...report.value,
    },
  ).then (
    response => {
      if (response.status > 250) {
        throw `Failed to send report! Response: ${JSON.stringify (response.data)}`
      }
      snackbar.value = {
        enabled: true,
        message: "Жалоба отправлена",
        type: 'success',
      }
      setTimeout (
        () => {
          dialogModelValueUpdate (false)
        },
        1000,
      )
    },
  ).catch (
    error => {
      snackbar.value = {
        enabled: true,
        message: `Error occured: ${error}`,
        type: 'error',
      }
    },
  )
}

watchEffect (
  () => {
    report.value.message = props.item && props.item.id ? `Жалоба на объявление #${props.item.id}\n\n>` : ``
    report.value = props.report ? props.report : report.value
    console.log (report.value)
  },
)

const dialogModelValueUpdate = val => {
  emit ('update:isDialogVisible', val)
}
</script>

<template>
  <div>
    <!-- 👉 upgrade plan -->
    <VDialog
      :width="$vuetify.display.lgAndUp ? '40%' : 560"
      :model-value="props.isDialogVisible"
      @update:model-value="dialogModelValueUpdate"
    >
      <VSnackbar
        v-model="snackbar.enabled"
        location="bottom end"
        variant="flat"
        :color="snackbar.type"
      >
        {{ snackbar.message }}
      </VSnackbar>
      <!-- Dialog close btn -->
      <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

      <VCard class="py-8">
        <VCardItem class="text-center">
          <VCardTitle class="text-h5 mb-5">
            Жалоба
            <template v-if="report.id">
              #{{ report.id }}
              <VChip
                size="large"
                variant="tonal"
                :color="report.state === 'Accepted' ? 'success' : (report.state === 'Pending' ? 'warning' : 'error')"
              >
                {{ report.state }}
              </VChip>
            </template>
          </VCardTitle>
        </VCardItem>

        <VCardText class="d-flex align-center flex-wrap flex-sm-nowrap px-15">
          <VTextarea
            v-model="report.message"
            counter
            label="Text"
          />
        </VCardText>
        <VCardText class="px-15">
          <div class="d-flex justify-center flex-wrap">
            <VBtn
              v-if="!props.report?.state"
              color="success"
              variant="tonal"
              class="mt-3"
              append-icon="tabler-send"
              @click="createReport"
            >
              Отправить
            </VBtn>
          </div>
        </VCardText>
      </VCard>
    </VDialog>
  </div>
</template>
