<script setup>
import { useAuthStore } from "@/stores/useAuthStore"
import { resolveRole } from '@/services/formatters'

const authStore = useAuthStore ()
const router = useRouter ()

const logout = () => {
  authStore.logout ()
  router.go (0)
}
</script>

<template>
  <VBtn
    rounded
    class="cursor-pointer"
    color="primary"
    variant="tonal"
  >
    {{ authStore.$state.userData.email }}&nbsp;
    <VChip
      v-if="authStore.$state.userData.rating"
      variant="elevated"
      color="warning"
      append-icon="tabler-star"
    >
      {{ authStore.$state.userData.rating }}
    </VChip>
    <!-- SECTION Menu -->
    <VMenu
      open-on-hover
      activator="parent"
      width="230"
      location="bottom end"
      offset="14px"
    >
      <VList>
        <!-- 👉 User Avatar & Name -->
        <VListItem>
          <template #prepend>
            <VListItemAction start>
              <VAvatar
                color="primary"
                variant="tonal"
              >
                <VIcon
                  icon="tabler-user"
                />
              </VAvatar>
            </VListItemAction>
          </template>

          <VListItemTitle class="font-weight-semibold">
            {{ authStore.$state.userData.email }}
          </VListItemTitle>
          <VListItemSubtitle>
            <VChip
              label
              v-bind="resolveRole(authStore.$state.userData.role).chip"
              size="small"
            >
              {{ resolveRole (authStore.$state.userData.role).status }}
            </VChip>
          </VListItemSubtitle>
        </VListItem>

        <VDivider class="my-2" />
        <VListItem
          link
          @click="logout"
        >
          <template #prepend>
            <VIcon
              class="me-2"
              icon="tabler-logout"
              size="22"
            />
          </template>

          <VListItemTitle>Выйти</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
    <!-- !SECTION -->
  </VBtn>
</template>
