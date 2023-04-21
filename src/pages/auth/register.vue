<script setup>
import {
  confirmedValidator,
  emailValidator,
  passwordValidator,
  requiredValidator,
  regexValidator,
} from '@validators'
import authV1BottomShape from '@images/svg/auth-v1-bottom-shape.svg'
import authV1TopShape from '@images/svg/auth-v1-top-shape.svg'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { useAuthStore } from "@/stores/useAuthStore"
import instance from "@/services/api"

const form = ref ({
  email: '',
  username: '',
  password: '',

  // password2: '',
  // referral_code: '',
  // confirm: false,
})

const refForm = ref ()

const snackbar = ref ({
  enabled: false,
  type: 'error',
  message: 'Permission denied!',
})

const isPasswordVisible = ref (false)
const authStore = useAuthStore ()
const router = useRouter ()

const register = async () => {
  let response = await authStore.register (form.value)
  console.log (response.data)
  if (!response.data.success) {
    snackbar.value.enabled = true
    snackbar.value.type = 'warning'
    snackbar.value.message = response.data

    return
  }
  snackbar.value.enabled = true
  snackbar.value.type = 'success'
  snackbar.value.message = "Успешно зарегистрирован пользователь!"

  //
  //   return
  // authStore.$state.authData =
  //   {
  //     access: `${response.data.result}`,
  //   }
  // response = (await authStore.me ())
  // if (response.data.error) {
  //   isError.value = true
  //   errorMessage.value = response.data.error
  //
  //   return
  // }
  // authStore.$state.userData = response.data.result
  setTimeout (
    () => {
      router.push ({ name: 'auth-login' })
    }, 1000,
  )

}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-0 pa-md-4 h-100">
    <VSnackbar
      v-model="snackbar.enabled"
      location="top end"
      variant="flat"
      transition="scroll-y-reverse-transition"
      :color="snackbar.type"
    >
      {{ snackbar.message }}
    </VSnackbar>
    <div class="position-relative my-sm-16">
      <!-- 👉 Top shape -->

      <!-- 👉 Auth card -->
      <VCard
        class="auth-card pa-4"
        max-width="448"
      >
        <VCardItem class="justify-center">
          <template #prepend>
            <div class="d-flex">
              <VNodeRenderer :nodes="themeConfig.app.logo"/>
            </div>
          </template>

          <VCardTitle class="font-weight-bold text-h5 py-1">
            {{ themeConfig.app.title }}
          </VCardTitle>
        </VCardItem>

        <VCardText class="pt-2">
          <h5 class="text-h5 font-weight-semibold mb-1">
            Добро пожаловать!
          </h5>
          <p class="mb-0">
            Пожалуйста зарегистрируйтесь, чтобы начать создавать заявки на визы
          </p>
        </VCardText>

        <VCardText>
          <VForm
            ref="refForm"
            @submit.prevent="() => {}"
          >
            <VRow>
              <!-- username -->
              <VCol cols="12">
                <VTextField
                  v-model="form.username"
                  label="Username"
                  placeholder="Введите имя пользователя"
                  type="text"
                  :rules="[requiredValidator]"
                />
              </VCol>
              <!-- email -->
              <VCol cols="12">
                <VTextField
                  v-model="form.email"
                  label="Почта"
                  placeholder="Введите почту"
                  type="email"
                  :rules="[requiredValidator, emailValidator]"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="form.password"
                  class="mb-4"
                  label="Пароль"
                  placeholder="Введите пароль"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  :rules="[requiredValidator, passwordValidator]"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
                <VBtn
                  block
                  type="submit"
                  class="mt-4"
                  @click="register"
                >
                  Зарегистрироваться
                </VBtn>
              </VCol>
              <!--              <VCol -->
              <!--                cols="12" -->
              <!--              > -->
              <!--                <VCheckbox -->
              <!--                  v-model="form.confirm" -->
              <!--                  :rules="[requiredValidator]" -->
              <!--                  label="Я согласен с политикой конфиденциальности" -->
              <!--                /> -->
              <!--              </VCol> -->

              <!-- login instead -->
              <VCol
                cols="12"
                class="text-center text-base"
              >
                <span>Уже зарегистрированы ?</span>
                <RouterLink
                  class="text-primary ms-2"
                  :to="{ name: 'auth-login' }"
                >
                  Войти
                </RouterLink>
              </VCol>

              <!--              <VCol -->
              <!--                cols="12" -->
              <!--                class="d-flex align-center" -->
              <!--              > -->
              <!--                <VDivider /> -->
              <!--                <span class="mx-4">or</span> -->
              <!--                <VDivider /> -->
              <!--              </VCol> -->

              <!--              &lt;!&ndash; auth providers &ndash;&gt; -->
              <!--              <VCol -->
              <!--                cols="12" -->
              <!--                class="text-center" -->
              <!--              > -->
              <!--                <AuthProvider /> -->
              <!--              </VCol> -->
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
title: Register
</route>
