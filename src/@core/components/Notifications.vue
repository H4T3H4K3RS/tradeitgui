<script setup>
import { avatarText } from '@core/utils/formatters'

const props = defineProps ({
  notifications: {
    type: Array,
    required: true,
  },
  badgeProps: {
    type: null,
    required: false,
    default: undefined,
  },
  location: {
    type: null,
    required: false,
    default: 'bottom end',
  },
})

const emit = defineEmits ([ 'click:readAllNotifications' ])
</script>

<template>
  <VBadge
    :model-value="!!props.badgeProps"
    v-bind="props.badgeProps"
  >
    <VBtn
      icon
      variant="text"
      color="default"
      size="small"
    >
      <VBadge
        :model-value="!!props.notifications.length"
        color="error"
        :content="props.notifications.length"
      >
        <VIcon
          icon="tabler-bell"
          size="24"
        />
      </VBadge>

      <VMenu
        activator="parent"
        width="380px"
        :location="props.location"
        offset="14px"
      >
        <VList class="py-0">
          <!-- 👉 Header -->
          <VListItem
            title="Уведомления"
            class="notification-section"
            height="48px"
          >
            <template #append>
              <VChip
                v-if="props.notifications && props.notifications.length"
                color="primary"
                size="small"
              >
                {{ (props.notifications && props.notifications.length) ? props.notifications.length : 0 }} Новых
              </VChip>
            </template>
          </VListItem>

          <VDivider />

          <!-- 👉 Notifications list -->
          <template v-if="props.notifications && props.notifications.length !== 0">
            <template
              v-for="notification in props.notifications"
              :key="notification.id"
            >
              <VListItem
                :title="notification.message"
                :subtitle="notification.subtitle"
                link
                lines="one"
                min-height="66px"
              >
                <!-- Slot: Prepend -->
                <!-- Handles Avatar: Image, Icon, Text -->
                <template #prepend>
                  <VListItemAction start>
                    <VAvatar
                      :color="notification.color || 'primary'"
                      :image="notification.img || undefined"
                      :icon="notification.icon || undefined"
                      size="40"
                      variant="tonal"
                    >
                      <span v-if="notification.text">{{ avatarText (notification.text) }}</span>
                    </VAvatar>
                  </VListItemAction>
                </template>
                <!-- Slot: Append -->
                <template #append>
                  <small class="whitespace-no-wrap text-medium-emphasis">{{ notification.time }}</small>
                </template>
              </VListItem>
              <VDivider />
            </template>
          </template>
          <template v-else>
            <VListItem
              class="mb-1"
              title="Уведомлений нет!"
              link
              lines="one"
              min-height="66px"
            >
              <!-- Slot: Prepend -->
              <!-- Handles Avatar: Image, Icon, Text -->
              <template #prepend>
                <VListItemAction start>
                  <VAvatar
                    color="success"
                    icon="tabler-check"
                    size="40"
                    variant="tonal"
                  />
                </VListItemAction>
              </template>
            </VListItem>
          </template>
          <!-- 👉 Footer -->
          <VListItem
            v-if="props.notifications && props.notifications.length !== 0"
            class="notification-section"
          >
            <VBtn
              block
              @click="$emit('click:readAllNotifications', props.notifications.map(item => item.id).join(','))"
            >
              Отметить прочитанными
            </VBtn>
          </VListItem>
        </VList>
      </VMenu>
    </VBtn>
  </VBadge>
</template>

<style lang="scss">
.notification-section {
  padding: 14px !important;
}
</style>
