<script setup>
import CurrenciesTable from '@/views/p2p/CurrenciesTable.vue'
</script>
<template>
  <VRow class="match-height">
    <CurrenciesTable cex="bybit"/>
  </VRow>
</template>
<route lang="yaml">
meta:
  title: ByBit - P2P
</route>
