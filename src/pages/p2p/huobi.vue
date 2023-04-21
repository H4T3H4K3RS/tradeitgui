<script setup>
import CurrenciesTable from '@/views/p2p/CurrenciesTable.vue'
</script>
<template>
  <VRow class="match-height">
    <CurrenciesTable cex="huobi"/>
  </VRow>
</template>
<route lang="yaml">
meta:
  title: Huobi - P2P
</route>
