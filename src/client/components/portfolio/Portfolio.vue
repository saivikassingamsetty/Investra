<template>
  <div class="flex flex-col items-center justify-center m-6">
    <Toolbar />
    <InvestmentGrid />
    <WeightageChart />
  </div>
</template>

<script setup lang="ts">
import InvestmentGrid from './InvestmentGrid.vue'
import Toolbar from './Toolbar.vue'
import WeightageChart from './WeightageChart.vue'
</script>
