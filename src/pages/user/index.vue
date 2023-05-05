<script setup>
// import UserBioPanel from '@/views/user/UserBioPanel.vue'
// import UserTabBillingsPlans from '@/views/user/UserTabBillingsPlans.vue'
import { useAuthStore } from "@/stores/useAuthStore"

// import UserTabWallet from "@/views/user/UserTabWallet.vue"

const route = useRoute ()
const authStore = useAuthStore ()
const userData = ref ()
const userTab = ref (null)

const tabs = [
  {
    icon: 'tabler-credit-card',
    title: 'Подписка',
  },
  {
    icon: 'tabler-wallet',
    title: 'Кошелёк',
  },
]

authStore.me ().then (
  () => {
    userData.value = authStore.$state.userData
  },
)
</script>

<template>
  <VRow v-if="userData">
    <!--    <VCol -->
    <!--      cols="12" -->
    <!--      md="5" -->
    <!--      lg="4" -->
    <!--    > -->
    <!--      <UserBioPanel :user-data="userData" /> -->
    <!--    </VCol> -->

    <!--    <VCol -->
    <!--      cols="12" -->
    <!--      md="7" -->
    <!--      lg="8" -->
    <!--    > -->
    <!--      <VTabs -->
    <!--        v-model="userTab" -->
    <!--        class="v-tabs-pill" -->
    <!--      > -->
    <!--        <VTab -->
    <!--          v-for="tab in tabs" -->
    <!--          :key="tab.icon" -->
    <!--          class="me-1" -->
    <!--        > -->
    <!--          <VIcon -->
    <!--            :size="18" -->
    <!--            :icon="tab.icon" -->
    <!--            class="me-1" -->
    <!--          /> -->
    <!--          <span>{{ tab.title }}</span> -->
    <!--        </VTab> -->
    <!--      </VTabs> -->

    <!--      <VWindow -->
    <!--        v-model="userTab" -->
    <!--        class="mt-6 disable-tab-transition" -->
    <!--        :touch="false" -->
    <!--      > -->
    <!--        <VWindowItem> -->
    <!--          <UserTabBillingsPlans :user-data="userData" /> -->
    <!--        </VWindowItem> -->
    <!--        <VWindowItem> -->
    <!--          <UserTabWallet :user-data="userData" /> -->
    <!--        </VWindowItem> -->
    <!--      </VWindow> -->
    <!--    </VCol> -->
  </VRow>
</template>
