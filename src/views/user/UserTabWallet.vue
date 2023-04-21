<script setup>
// import asana from '@images/icons/brands/asana.png'
// import behance from '@images/icons/brands/behance.png'
// import dribbble from '@images/icons/brands/dribbble.png'
// import facebook from '@images/icons/brands/facebook.png'
// import github from '@images/icons/brands/github.png'
// import google from '@images/icons/brands/google.png'
// import linkedin from '@images/icons/brands/linkedin.png'
// import mailchimp from '@images/icons/brands/mailchimp.png'
// import slack from '@images/icons/brands/slack.png'
// import twitter from '@images/icons/brands/twitter.png'
const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})
const connectedAccounts = ref([
  {
    img: null,
    title: 'Google',
    text: 'Calendar and contacts',
    connected: true,
  },
  {
    img: null,
    title: 'Slack',
    text: 'Communication',
    connected: false,
  },
  {
    img: null,
    title: 'Github',
    text: 'Manage your Git repositories',
    connected: true,
  },
  {
    img: null,
    title: 'Mailchimp',
    text: 'Email marketing service',
    connected: false,
  },
  {
    img: null,
    title: 'Asana',
    text: 'Communication',
    connected: false,
  },
])

const socialAccounts = ref([
  {
    img: null,
    title: 'Facebook',
    connected: false,
  },
  {
    img: null,
    title: 'Twitter',
    link: 'https://twitter.com/theme_selection',
    username: '@Theme_Selection',
    connected: true,
  },
  {
    img: null,
    title: 'Linkedin',
    link: 'https://www.linkedin.com/company/pixinvent',
    username: '@Pixinvent',
    connected: true,
  },
  {
    img: null,
    title: 'Dribbble',
    connected: false,
  },
  {
    img: null,
    title: 'Behance',
    connected: false,
  },
])
</script>

<template>
  <VRow>
    <!-- 👉 connected accounts -->
    <VCol cols="12">
      <VCard title="Connected Accounts">
        <VCardText>
          <p class="text-sm mt-n6 mb-6">
            Display content from your connected accounts on your site
          </p>

          <VList class="card-list">
            <VListItem
              v-for="account in connectedAccounts"
              :key="account.title"
              :title="account.title"
              :subtitle="account.text"
            >
              <template #prepend>
                <VAvatar
                  start
                  :size="35"
                  :image="account.img"
                />
              </template>

              <template #append>
                <VSwitch
                  v-model="account.connected"
                  density="compact"
                  class="me-1"
                />
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
