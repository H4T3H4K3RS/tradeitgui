<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import { resolveRole } from '@/services/formatters'

const isSnackbarEnabled = ref (false)
const snackbarMessage = ref ("")
const snackbarType = ref ("error")
const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})
const copyToClipboard = (valueToCopy, alertMessage, alertType="error") => {
  navigator.clipboard.writeText (valueToCopy)
    .then (() => {
      isSnackbarEnabled.value = true
      snackbarMessage.value = alertMessage
      snackbarType.value = alertType
    })
    .catch ((error) => {
      console.error ('Failed to copy to clipboard: ', error);
    });
};
const isUserInfoEditDialogVisible = ref(false)
const isUpgradePlanDialogVisible = ref(false)
</script>

<template>
  <VRow>
    <VSnackbar
      v-model="isSnackbarEnabled"
      location="top end"
      variant="flat"
      transition="scroll-y-reverse-transition"
      :color="snackbarType"
    >
      {{ snackbarMessage }}
    </VSnackbar>
    <!-- SECTION User Details -->
    <VCol cols="12">
      <VCard v-if="props.userData">
        <VCardText class="text-center pt-15">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="120"
            color="primary"
            variant="tonal"
          >
            <span
              class="text-5xl font-weight-semibold"
            >
              {{ avatarText(props.userData.email) }}
            </span>
          </VAvatar>
          <h6 class="text-h6 mt-4">
            {{ props.userData.email }}
          </h6>
          <!-- 👉 Role chip -->
          <VChip
            v-bind="resolveRole(props.userData.role).chip"
            class="text-capitalize mt-4"
            size="small"
          >
            {{ resolveRole (props.userData.role).status }}
          </VChip>
        </VCardText>

        <VCardText class="d-flex justify-center flex-wrap mt-3">
          <!-- 👉 Done task -->
          <div class="d-flex align-center ms-4 mb-2">
            <VAvatar
              :size="38"
              rounded
              color="primary"
              variant="tonal"
              class="me-3"
            >
              <VIcon
                size="24"
                icon="tabler-currency-dollar"
              />
            </VAvatar>

            <div>
              <h6 class="text-base font-weight-semibold">
                {{ kFormatter(props.userData.balance.available) }} $
              </h6>
              <span class="text-sm">Available Payout</span>
            </div>
          </div>

          <!-- 👉 Done Project -->
          <div class="d-flex align-center mx-4 mb-2">
            <VAvatar
              :size="38"
              rounded
              color="primary"
              variant="tonal"
              class="me-3"
            >
              <VIcon
                size="24"
                icon="tabler-snowflake"
              />
            </VAvatar>
            <div>
              <h6 class="text-base font-weight-semibold">
                {{ kFormatter(props.userData.balance.frozen) }} $
              </h6>
              <span class="text-sm">Frozen Payout</span>
            </div>
          </div>

          <div class="d-flex align-center mx-4 mb-2">
            <VAvatar
              :size="38"
              rounded
              color="success"
              variant="tonal"
              class="me-3"
            >
              <VIcon
                size="24"
                icon="tabler-users"
              />
            </VAvatar>
            <div>
              <h6 class="text-base font-weight-semibold">
                {{ kFormatter(props.userData.referer.profit) }} $
              </h6>
              <span class="text-sm">Referral Revenue</span>
            </div>
          </div>
        </VCardText>

        <!-- 👉 Edit and Suspend button -->
        <VCardText class="d-flex justify-center">
          <VBtn
            variant="tonal"
            color="error"
            prepend-icon="tabler-external-link"
            class="cursor-pointer"
            @click="isUpgradePlanDialogVisible = true"
          >
            Withdraw
          </VBtn>
          <VBtn
            variant="tonal"
            prepend-icon="tabler-copy"
            color="success"
            class="ms-3 cursor-pointer"
            @click="copyToClipboard(`${userData.referer.code}`, `Успешно скопирован реферальный код!`, 'success')"
          >
            Refer
            <VTooltip
              open-on-focus
              location="top"
              activator="parent"
            >
              Copy Referral Link
            </VTooltip>
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <!-- SECTION Current Plan -->
<!--    <VCol cols="12">-->
<!--      <VCard>-->
<!--        <VCardText class="d-flex">-->
<!--          &lt;!&ndash; 👉 Standard Chip &ndash;&gt;-->
<!--          <VChip-->
<!--            label-->
<!--            color="primary"-->
<!--            size="small"-->
<!--          >-->
<!--            Standard-->
<!--          </VChip>-->

<!--          <VSpacer />-->

<!--          &lt;!&ndash; 👉 Current Price  &ndash;&gt;-->
<!--          <div class="d-flex align-center">-->
<!--            <sup class="text-primary text-sm font-weight-regular">$</sup>-->
<!--            <h3 class="text-h3 text-primary font-weight-semibold">-->
<!--              99-->
<!--            </h3>-->
<!--            <sub class="mt-3"><h6 class="text-sm font-weight-regular">/ month</h6></sub>-->
<!--          </div>-->
<!--        </VCardText>-->

<!--        <VCardText>-->
<!--          &lt;!&ndash; 👉 Price Benefits &ndash;&gt;-->
<!--          <VList class="card-list">-->
<!--            <VListItem-->
<!--              v-for="benefit in standardPlan.benefits"-->
<!--              :key="benefit"-->
<!--            >-->
<!--              <VIcon-->
<!--                size="12"-->
<!--                color="#A8AAAE"-->
<!--                class="me-2"-->
<!--                icon="tabler-circle"-->
<!--              />-->
<!--              <span>{{ benefit }}</span>-->
<!--            </VListItem>-->
<!--          </VList>-->

<!--          &lt;!&ndash; 👉 Days &ndash;&gt;-->
<!--          <div class="my-6">-->
<!--            <div class="d-flex font-weight-semibold mt-3 mb-2">-->
<!--              <h6 class="text-base font-weight-semibold">-->
<!--                Days-->
<!--              </h6>-->
<!--              <VSpacer />-->
<!--              <h6 class="text-base font-weight-semibold">-->
<!--                26 of 30 Days-->
<!--              </h6>-->
<!--            </div>-->

<!--            &lt;!&ndash; 👉 Progress &ndash;&gt;-->
<!--            <VProgressLinear-->
<!--              rounded-->
<!--              rounded-bar-->
<!--              :model-value="65"-->
<!--              height="8"-->
<!--              color="primary"-->
<!--            />-->

<!--            <p class="mt-2">-->
<!--              4 days remaining-->
<!--            </p>-->
<!--          </div>-->

<!--          &lt;!&ndash; 👉 Upgrade Plan &ndash;&gt;-->
<!--          <VBtn-->
<!--            block-->
<!--            @click="isUpgradePlanDialogVisible = true"-->
<!--          >-->
<!--            Upgrade Plan-->
<!--          </VBtn>-->
<!--        </VCardText>-->
<!--      </VCard>-->
<!--    </VCol>-->
    <!-- !SECTION -->
  </VRow>


  <!-- 👉 Upgrade plan dialog -->
  <UserUpgradePlanDialog v-model:isDialogVisible="isUpgradePlanDialogVisible" />
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.7rem;
}

.text-capitalize {
  text-transform: capitalize !important;
}
</style>
