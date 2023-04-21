<template>
  <div class="h-100 d-flex align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
      Made With
      <VIcon
        icon="tabler-heart"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
      By <a
        href="https://vk.com/hydralabs"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >HydraLabs</a>
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
        href="lorem"
        target="noopener noreferrer"
      >Lorem</a>
      <a
        href="lorem"
        target="noopener noreferrer"
      >Lorem</a>
      <a
        href="lorem"
        target="noopener noreferrer"
      >Lorem</a>
    </span>
  </div>
</template>
