<script setup>
import { useReportStore } from "@/stores/useRest"
import Chat from "@/views/messages/Chat.vue"

const props = defineProps ({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  trade: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits ([ 'update:isDialogVisible' ])

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
      <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

      <VCard class="py-8">
        <Chat :trade="props.trade" />
      </VCard>
    </VDialog>
  </div>
</template>
