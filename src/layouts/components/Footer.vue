<template>
  <div class="h-100 d-flex align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date ().getFullYear () }}
      Made With
      <VIcon
        icon="tabler-heart"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
      For <a
        href="https://vk.com/cshse"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >CS HSE</a>
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
        href="https://t.me/pseudomention"
        rel="noreferrer noopener"
        target="_blank"
      >Ovchinnikov</a>
      <a
        href="https://t.me/barkovbg"
        rel="noreferrer noopener"
        target="_blank"
      >Barkov</a>
    </span>
  </div>
</template>

<script setup>
</script>
