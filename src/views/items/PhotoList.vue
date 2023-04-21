<script setup>
const props = defineProps (
  {
    photos: {
      type: Array,
      required: true,
    },
  },
)

const bigImage = ref (0)

watchEffect (
  () => {
    bigImage.value = props.photos[0]
  })

</script>

<template>
  <div>
    <VRow>
      <VCol
        v-if="bigImage"
        cols="12"
      >
        <VCard>
          <VImg
            :src="bigImage"
            height="200px"
          />
          <VCardTitle></VCardTitle>
        </VCard>
      </VCol>
      <VCol
        v-for="(photo, index) in photos"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <VCard @click="bigImage = props.photos[index]">
          <VImg
            :src="photo"
            height="100px"
          />
          <VCardTitle></VCardTitle>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

