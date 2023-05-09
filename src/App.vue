<script setup>
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { hexToRgb } from '@layouts/utils'
import EventBus from "@/services/EventBus"
import { useAuthStore } from "@/stores/useAuthStore"

const {
  syncInitialLoaderTheme,
  syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme,
  isAppRtl,
} = useThemeConfig ()

const { global } = useTheme ()

// ℹ️ Sync current theme with initial loader theme
syncInitialLoaderTheme ()
syncConfigThemeWithVuetifyTheme ()

const router = useRouter ()
const authStore = useAuthStore ()

onMounted (
  () => {
    EventBus.on ("logout", () => {
      authStore.logout ()
      router.push ({
        name: 'auth-login',
      })
    })
  },
)
onBeforeUnmount (
  () => {
    EventBus.remove ("logout")
  },
)
</script>

<template>
  <VLocaleProvider :rtl="isAppRtl">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
      <RouterView />
    </VApp>
  </VLocaleProvider>
</template>
