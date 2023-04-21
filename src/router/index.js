import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { themeConfig } from '/themeConfig'
import { useAuthStore } from "@/stores/useAuthStore"
import navigationPermissions from "@/router/navigationPermissions"

const router = createRouter ({
  history: createWebHistory (import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts (routes),
  ],
})


router.beforeEach (
  (toRoute, fromRoute, next) => {
    const authStore = useAuthStore ()
    if (!navigationPermissions.paths[toRoute.name]) {
    } else if (navigationPermissions.paths[toRoute.name] === -1 && authStore.$state.userData.role > 0) {
      router.push ({
        name: 'index',
      })
    } else if (navigationPermissions.paths[toRoute.name] > authStore.$state.userData.role) {
      authStore.logout ()
      router.push ({
        name: navigationPermissions.loginPath,
      })
    }
    window.document.title = toRoute && toRoute.title ? `${toRoute.title} - ${themeConfig.app.title}` : themeConfig.app.title
    next ()
  },
)

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
export default router
