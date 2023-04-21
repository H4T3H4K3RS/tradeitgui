<script setup>
import navItems from '@/navigation/vertical'
import { useThemeConfig } from '@core/composable/useThemeConfig'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

// @layouts plugin
import { VerticalNavLayout } from '@layouts'

const { appRouteTransition, isLessThanOverlayNavBreakpoint } = useThemeConfig ()
const { width: windowWidth } = useWindowSize ()
import { useDefaultStore } from "@/stores/useDefaultStore"
import { useAuthStore } from "@/stores/useAuthStore"
import { isNavLinkActive } from "@layouts/utils"


const authStore = useAuthStore ()

let navItemsFiltered = navItems.filter (navItem => authStore.$state.userData.role >= navItem.role)
</script>

<template>
  <VerticalNavLayout
    :nav-items="navItemsFiltered"
  >
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <VBtn
          v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
          icon
          variant="text"
          color="default"
          class="ms-n3"
          size="small"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon
            icon="tabler-menu-2"
            size="24"
          />
        </VBtn>

        <VSpacer />
        <template
          v-if="isNavLinkActive({to: 'auth-login'}, $router) || isNavLinkActive({to: 'auth-register'}, $router)"
        />
        <template v-else-if="!authStore.$state.userData.role">
          <VBtn
            rounded="lg"
            class="mr-4"
            color="primary"
            :to="{ name: 'auth-login' }"
          >
            Войти
          </VBtn>
          <VBtn
            variant="outlined"
            rounded="lg"
            class="mr-4"
            color="primary"
            :to="{ name: 'auth-register' }"
          >
            Зарегистрироваться
          </VBtn>
        </template>
        <template v-else>
          <UserProfile />
        </template>
      </div>
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <!-- <TheCustomizer /> -->
  </VerticalNavLayout>
</template>

<style>
.marquee {
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
}

.marquee .marque-content {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 15s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}

.layout-wrapper.layout-nav-type-vertical.layout-navbar-sticky .layout-navbar {
  height: 55px;
}
</style>
