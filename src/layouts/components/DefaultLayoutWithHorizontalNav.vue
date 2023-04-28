<script setup>
import navItems from '@/navigation/horizontal'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { themeConfig } from '@themeConfig'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import { HorizontalNavLayout } from '@layouts'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'

const { appRouteTransition } = useThemeConfig ()
import { useAuthStore } from "@/stores/useAuthStore"
import { isNavLinkActive } from "@layouts/utils"


const authStore = useAuthStore ()

let navItemsFiltered = navItems.filter (navItem => authStore.$state.userData.role >= navItem.role)
</script>

<template>
  <HorizontalNavLayout
    :nav-items="navItemsFiltered"
  >
    <template #navbar>
      <RouterLink
        to="/"
        class="app-logo d-flex align-center gap-x-3"
      >
        <VNodeRenderer :nodes="themeConfig.app.logo" />

        <h1 class="app-title font-weight-bold leading-normal text-xl">
          {{ themeConfig.app.title }}
        </h1>
      </RouterLink>
      <VSpacer />

      <!--      <NavbarThemeSwitcher class="me-2"/> -->
      <!--      <UserProfile/> -->
      <template
        v-if="isNavLinkActive({to: 'auth-login'}, $router) || isNavLinkActive({to: 'auth-register'}, $router)"
      />
      <template
        v-else-if="!authStore.$state.userData.role"
      >
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
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component, route }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <Component
          :is="Component"
          :key="route.path"
        />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <!-- <TheCustomizer /> -->
  </HorizontalNavLayout>
</template>

<style>
.marquee {
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
}

.marquee .marque-content {
  display: inline-block;
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
</style>
