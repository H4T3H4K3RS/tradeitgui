<script setup>
// @formatter:off
import misc404 from '@/assets/images/logo.svg'
import miscMaskDark from '@images/pages/misc-mask-dark.png'
import miscMaskLight from '@images/pages/misc-mask-light.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { themeConfig } from "@themeConfig"
import { VNodeRenderer } from "@layouts/components/VNodeRenderer"

const authThemeMask = useGenerateImageVariant (miscMaskLight, miscMaskDark)
</script>

<template>
  <div class="misc-wrapper">
    <ErrorHeader
      error-title="Страница не найдена :("
      error-description="К сожалению, мы не можем найти страницу, которую вы запрашиваете."
    />

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
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
    </div>
    <VBtn
      to="/"
      class="mb-12"
    >
      Обратно на главную
    </VBtn>

    <VImg
      :src="authThemeMask"
      class="misc-footer-img d-none d-md-block"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/misc.scss";
</style>

<route lang="yaml">
meta:
    layout: blank
</route>
