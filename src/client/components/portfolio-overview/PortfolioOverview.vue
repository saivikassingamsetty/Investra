<template>
  <div class="grid grid-cols-12 gap-4 p-6 mt-0">
    <!-- Portfolio Summary -->
    <div class="col-span-12 bg-white p-6 rounded-xl shadow-lg">
      <PortfolioSummary />
    </div>
    <!-- Portfolio Allocation -->
    <div class="col-span-12 md:col-span-6 bg-white p-6 rounded-xl shadow-lg">
      <PortfolioAllocation />
    </div>
    <!-- Portfolio Performance -->
    <div class="col-span-12 md:col-span-6 bg-white p-6 rounded-xl shadow-lg">
      <PortfolioPerformance />
    </div>
    <!-- Gainers / Losers -->
    <div class="col-span-12 md:col-span-4 bg-white p-6 rounded-xl shadow-lg">
      <GainersLosers />
    </div>
    <!-- Recent Transactions -->
    <div class="col-span-12 md:col-span-8 bg-white p-6 rounded-xl shadow-lg">
      <RecentTransactions />
    </div>
    <!-- Sector Wise Distribution -->
    <div class="col-span-12 md:col-span-4 bg-white p-6 rounded-xl shadow-lg">
      <SectorWiseDistribution />
    </div>
    <!-- Risk Assessment -->
    <div class="col-span-12 md:col-span-4 bg-white p-6 rounded-xl shadow-lg">
      <RiskAssessment />
    </div>
    <!-- Scenario Simulator -->
    <div class="col-span-12 md:col-span-4 bg-white p-6 rounded-xl shadow-lg">
      <ScenarioSimulator />
    </div>
  </div>
</template>

<script setup lang="ts">
import PortfolioSummary from './PortfolioSummary.vue'
import PortfolioAllocation from './PortfolioAllocation.vue'
import PortfolioPerformance from './PortfolioPerformance.vue'
import GainersLosers from './GainersLosers.vue'
import RecentTransactions from './RecentTransactions.vue'
import SectorWiseDistribution from './SectorWiseDistribution.vue'
import RiskAssessment from './RiskAssessment.vue'
import ScenarioSimulator from './ScenarioSimulator.vue'
</script>
