<script setup>
import CurrenciesTable from '@/views/p2p/CurrenciesTable.vue'
</script>
<template>
  <VRow class="match-height">
    <CurrenciesTable cex="pexpay"/>
  </VRow>
</template>
<route lang="yaml">
meta:
  title: PexPay - P2P
</route>
