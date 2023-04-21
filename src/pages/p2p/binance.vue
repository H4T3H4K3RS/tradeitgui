<script setup>
import CurrenciesTable from '@/views/p2p/CurrenciesTable.vue'
</script>
<template>
  <VRow class="match-height">
    <CurrenciesTable cex="binance"/>
  </VRow>
</template>
<route lang="yaml">
meta:
  title: Binance - P2P
</route>
