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
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    bordered
    color="success"
  >
    <VBtn
      rounded
      class="cursor-pointer"
      color="primary"
      variant="tonal"
      append-icon="tabler-user"
    >
      {{ authStore.$state.userData.email }}

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
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    color="primary"
                    variant="tonal"
                  >
                    <VIcon
                      icon="tabler-user"
                    />
                  </VAvatar>
                </VBadge>
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

          <VDivider class="my-2"/>

          <!-- 👉 Profile -->
          <VListItem :to="{ name: 'user'}">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-user"
                size="22"
              />
            </template>

            <VListItemTitle>Профиль</VListItemTitle>
          </VListItem>

<!--          &lt;!&ndash; Divider &ndash;&gt;-->
<!--          <VDivider class="my-2"/>-->

<!--          &lt;!&ndash; 👉 Logout &ndash;&gt;-->
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
  </VBadge>
</template>
