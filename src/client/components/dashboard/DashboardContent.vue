<template>
  <div class="grid grid-cols-12 gap-4 p-6">
    <!-- Portfolio Summary -->
    <div class="col-span-12 bg-white p-6 rounded-xl shadow-lg">
      <PortfolioSummary />
    </div>
    <!-- Portfolio Allocation -->
    <div class="col-span-6 bg-white p-6 rounded-xl shadow-lg">
      <PortfolioAllocation />
    </div>
    <!-- Portfolio Performance -->
    <div class="col-span-6 bg-white p-6 rounded-xl shadow-lg">
      <PortfolioPerformance />
    </div>
    <!-- Gainers / Losers -->
    <div class="col-span-4 bg-white p-6 rounded-xl shadow-lg">
      <GainersLosers />
    </div>
    <!-- Recent Transactions -->
    <div class="col-span-8 bg-white p-6 rounded-xl shadow-lg">
      <RecentTransactions />
    </div>
  </div>
</template>

<script setup lang="ts">
import PortfolioSummary from './portfolio-overview/PortfolioSummary.vue'
import PortfolioAllocation from './portfolio-overview/PortfolioAllocation.vue'
import PortfolioPerformance from './portfolio-overview/PortfolioPerformance.vue'
import GainersLosers from './portfolio-overview/GainersLosers.vue'
import RecentTransactions from './portfolio-overview/RecentTransactions.vue'
</script>
