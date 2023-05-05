<script setup>
import {
  confirmedValidator,
  emailValidator,
  passwordValidator,
  requiredValidator,
} from '@validators'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { useAuthStore } from "@/stores/useAuthStore"

const snackbar = ref ({
  enabled: false,
  type: 'success',
  message: 'Hello!',
})

const form = ref ({
  // email: '',
  username: '',
  password: '',
  stay_signed: false,
})

const isPasswordVisible = ref (false)

const router = useRouter ()
const authStore = useAuthStore ()

const login = async () => {
  let response
  console.log ("BBBB")
  try {
    response = await authStore.login (form.value)
    console.log (response.status)
    if (!response.data || !response.data?.access) {
      snackbar.value = {
        enabled: true,
        message: `Ошибка входа: ${response.data}`,
        type: 'error',
      }

      return
    }
  } catch (e) {
    snackbar.value = {
      enabled: true,
      message: e.data,
      type: 'error',
    }

    return
  }
  authStore.$state.authData =
    {
      access: `${response.data.access}`,
      refresh: `${response.data.refresh}`,
    }
  response = await authStore.me ()
  if (response.data.error) {
    console.log ("AAA")
    snackbar.value = {
      enabled: true,
      message: `Ошибка входа: ${response.data}`,
      type: 'error',
    }

    return
  }
  authStore.$state.userData =
    {
      ...response.data,
    }
  snackbar.value = {
    enabled: true,
    type: 'success',
    message: "Вы успешно вошли!",
  }
  setTimeout (
    () => {
      router.push ({ "name": 'index' })
    },
    1000,
  )
}
</script>

<template>
  <div
    class="auth-wrapper  d-flex justify-center align-center pa-md-4"
  >
    <VSnackbar
      v-model="snackbar.enabled"
      location="top end"
      variant="flat"
      :color="snackbar.type"
    >
      {{ snackbar.message }}
    </VSnackbar>
    <div class="position-relative">
      <!-- 👉 Top shape -->

      <!-- 👉 Auth Card -->
      <VCard
        class="auth-card pa-4"
        max-width="448"
      >
        <VCardItem class="justify-center">
          <template #prepend>
            <div class="d-flex">
              <VNodeRenderer :nodes="themeConfig.app.logo" />
            </div>
          </template>

          <VCardTitle class="font-weight-bold text-h5 py-1">
            {{ themeConfig.app.title }}
          </VCardTitle>
        </VCardItem>

        <VCardText class="pt-1">
          <h5 class="text-h5 font-weight-semibold mb-1">
            Добро пожаловать!
          </h5>
          <p class="mb-0">
            Пожалуйста авторизуйтесь, чтобы начать заботиться о природе
          </p>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <VTextField
                  v-model="form.username"
                  label="Username"
                  placeholder="Введите username"
                  type="text"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="form.password"
                  label="Пароль"
                  placeholder="Введите пароль"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :rules="[requiredValidator, passwordValidator]"
                  autocomplete="on"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <!-- remember me checkbox -->
                <div class="d-flex align-center justify-space-between flex-wrap mt-2 mb-4">
                  <VCheckbox
                    v-model="form.stay_signed"
                    label="Запомнить меня"
                  />

                  <RouterLink
                    class="text-primary ms-2 mb-1"
                    :to="{ name: 'auth-forgot' }"
                  >
                    Забыли пароль?
                  </RouterLink>
                </div>

                <!-- login button -->
                <VBtn
                  block
                  type="submit"
                  @click="login"
                >
                  Войти
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol
                cols="12"
                class="text-center text-base"
              >
                <span>Нет аккаунта?</span>
                <RouterLink
                  class="text-primary ms-2"
                  :to="{ name: 'auth-register' }"
                >
                  Зарегистрироваться
                </RouterLink>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
title: Login
</route>
