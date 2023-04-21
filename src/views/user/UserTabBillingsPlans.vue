<script setup>
import UserBuySubscriptionDialog from '@/views/user/UserBuySubscriptionDialog.vue'
const props = defineProps ({
  userData: {
    type: Object,
    required: true,
  },
})
const isBuySubscriptionDialogVisible = ref (false)
const isRenewSubscriptionDialogVisible = ref (false)
const isCancelSubscriptionDialogVisible = ref (false)
const currentCardDetails = ref ()
const isCardEditDialogVisible = ref (false)
const isCardAddDialogVisible = ref (false)
const toDays = (timestamp, delta = false) => {
  const now = Date.now () / 1000;
  const difference = (!delta) ? (timestamp - now) : timestamp;
  return parseInt (difference / (24 * 60 * 60));
}
const toMonths = (timestamp) => {
  return toDays (timestamp / 30, true);
}
const formatTimestamp = (timestamp) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date (timestamp * 1000).toLocaleDateString ('en-US', options);
}
</script>

<template>
  <VRow>
    <!-- 👉 Current Plan -->
    <VCol cols="12">
      <VCard>
        <VCardText class="d-flex">
          <!-- 👉 Standard Chip -->
          <VChip
            label
            :color="props.userData.subscription.end !== 0 ? 'primary' : 'error'"
            size="small"
          >
            {{ props.userData.subscription.end !== 0 ? 'Active' : 'No Subscription' }}
          </VChip>
          <template v-if="props.userData.subscription.end !== 0">
            <VSpacer/>

            <!-- 👉 Current Price  -->
            <div class="d-flex align-center">
              <sup class="text-primary text-sm font-weight-regular">$</sup>
              <h3 class="text-h3 text-primary font-weight-semibold">
                {{ props.userData.subscription.price }}
              </h3>
              <sub class="mt-3"><h6 class="text-sm font-weight-regular"> /
                {{ toMonths (props.userData.subscription.duration) }} month(s)</h6></sub>
            </div>
          </template>
        </VCardText>
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
              order-md="1"
              order="2"
            >
              <h6 class="text-base font-weight-semibold mb-1">
                {{ props.userData.subscription.end !== 0 ? 'Plan active' : 'No plan active' }}
              </h6>

              <h6
                v-if="props.userData.subscription.end !== 0"
                class="text-base font-weight-semibold mb-1">
                Active until {{ formatTimestamp (props.userData.subscription.end) }}
              </h6>
            </VCol>

            <VCol
              v-if="props.userData.subscription.end !== 0"
              cols="12"
              md="6"
              order-md="2"
              order="1"
            >
              <!-- 👉 Alert -->

              <!-- 👉 Progress -->
              <div class="d-flex justify-space-between font-weight-bold mt-8 mb-2">
                <h6 class="text-sm">
                  Days
                </h6>
                <h6 class="text-sm">
                  {{ toDays (props.userData.subscription.duration, true) - toDays (props.userData.subscription.end) }} of
                  {{ toDays (props.userData.subscription.duration, true) }} Days
                </h6>
              </div>

              <VProgressLinear
                rounded
                color="primary"
                :height="10"
                :model-value="(toDays(props.userData.subscription.duration, true) - toDays(props.userData.subscription.end) ) / toDays(props.userData.subscription.duration, true) * 100"
              />
              <p class="text-sm mt-2">
                {{ toDays (props.userData.subscription.end) }} days remaining until your plan requires update
              </p>
            </VCol>

            <VCol
              cols="12"
              order="3"
            >
              <div
                class="d-flex flex-wrap gap-4">
                <VBtn
                  v-if="props.userData.subscription.end === 0"
                  color="success"
                  variant="tonal"
                  @click="isBuySubscriptionDialogVisible = true">
                  Buy Subscription
                </VBtn>
                <VBtn
                  v-else-if="props.userData.subscription.end >= Date.now()"
                  color="error"
                  variant="tonal"
                >
                  Cancel Subscription
                </VBtn>
                <VBtn
                  v-else
                  color="primary"
                  variant="tonal"
                  @click="isBuySubscriptionDialogVisible = true">
                  Renew Subscription
                </VBtn>
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Payment Methods -->
    <!--    <VCol cols="12">-->
    <!--      <VCard title="Payment Methods">-->
    <!--        <template #append>-->
    <!--          <VBtn-->
    <!--            prepend-icon="tabler-plus"-->
    <!--            size="small"-->
    <!--            @click="isCardAddDialogVisible = !isCardAddDialogVisible"-->
    <!--          >-->
    <!--            Add Card-->
    <!--          </VBtn>-->
    <!--        </template>-->

    <!--        <VCardText class="d-flex flex-column gap-y-4">-->
    <!--          <VCard-->
    <!--            v-for="card in creditCards"-->
    <!--            :key="card.name"-->
    <!--            border-->
    <!--            flat-->
    <!--          >-->
    <!--            <VCardText class="d-flex flex-sm-row flex-column pa-4">-->
    <!--              <div class="text-no-wrap">-->
    <!--                <VImg-->
    <!--                  :src="card.image"-->
    <!--                  :width="60"-->
    <!--                  :height="25"-->
    <!--                />-->
    <!--                <h4 class="text-base my-3">-->
    <!--                  {{ card.name }}-->
    <!--                  <VChip-->
    <!--                    v-if="card.isPrimary"-->
    <!--                    label-->
    <!--                    color="primary"-->
    <!--                    size="small"-->
    <!--                  >-->
    <!--                    Primary-->
    <!--                  </VChip>-->
    <!--                </h4>-->
    <!--                <span class="text-body-1">**** **** **** {{ card.number.substring(card.number.length - 4) }}</span>-->
    <!--              </div>-->

    <!--              <VSpacer />-->

    <!--              <div class="d-flex flex-column text-sm-end gap-2">-->
    <!--                <div class="order-sm-0 order-1">-->
    <!--                  <VBtn-->
    <!--                    variant="tonal"-->
    <!--                    class="me-2"-->
    <!--                    @click="openEditCardDialog(card)"-->
    <!--                  >-->
    <!--                    Edit-->
    <!--                  </VBtn>-->
    <!--                  <VBtn-->
    <!--                    color="secondary"-->
    <!--                    variant="tonal"-->
    <!--                  >-->
    <!--                    Delete-->
    <!--                  </VBtn>-->
    <!--                </div>-->

    <!--                <span class="mt-auto order-sm-1 order-0">Card expires at {{ card.expiry }}</span>-->
    <!--              </div>-->
    <!--            </VCardText>-->
    <!--          </VCard>-->
    <!--        </VCardText>-->
    <!--      </VCard>-->
    <!--    </VCol>-->
  </VRow>
  <!-- 👉 Upgrade plan dialog -->
  <UserBuySubscriptionDialog v-model:isDialogVisible="isBuySubscriptionDialogVisible"/>
</template>

<style lang="scss">
.billing-address-table {
  tr {
    td:first-child {
      inline-size: 148px;
    }
  }
}
</style>
