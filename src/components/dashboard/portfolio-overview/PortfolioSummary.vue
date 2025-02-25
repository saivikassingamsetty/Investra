<template>
  <div class="flex flex-col">
    <!-- Portfolio Summary -->
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-bold text-gray-800">Portfolio Summary</h2>
      <div class="flex gap-2">
        <button
          v-for="time in timeframes"
          :key="time.id"
          @click="changeActiveTimeframe(time.id)"
          :class="{
            'bg-indigo-600 text-white': time.id === activeTimeframe,
            'bg-gray-100 text-gray-700 hover:bg-gray-200': time.id !== activeTimeframe,
          }"
          class="p-2 rounded-lg transition-colors duration-300"
        >
          {{ time.value }}
        </button>
      </div>
    </div>

    <div class="flex flex-wrap justify-between gap-4 mt-4">
      <!-- Total Invested Value -->
      <div class="bg-white p-6 rounded-xl shadow-md w-full md:w-auto md:flex-1">
        <h2 class="text-gray-700 text-lg">Invested Value</h2>
        <p class="text-3xl font-semibold mt-2">₹{{ totalInvestedValue }}</p>
      </div>

      <!-- Total Portfolio Value -->
      <div class="bg-white p-6 rounded-xl shadow-md w-full md:w-auto md:flex-1">
        <h2 class="text-gray-700 text-lg">Portfolio Value</h2>
        <p class="text-3xl font-semibold mt-2 text-green-600">₹{{ totalPortfolioValue }}</p>
      </div>

      <!-- Daily Change -->
      <div class="bg-white p-6 rounded-xl shadow-md w-full md:w-auto md:flex-1">
        <h2 class="text-gray-700 text-lg">Daily Change</h2>
        <p class="text-3xl font-semibold mt-2 text-green-600">+{{ dailyChange }}%</p>
      </div>

      <!-- Total Returns -->
      <div class="bg-white p-6 rounded-xl shadow-md w-full md:w-auto md:flex-1">
        <h2 class="text-gray-700 text-lg">Total Returns</h2>
        <p class="text-3xl font-semibold mt-2 text-green-600">₹{{ totalReturns }}</p>
      </div>

      <!-- XIRR -->
      <div class="bg-white p-6 rounded-xl shadow-md w-full md:w-auto md:flex-1">
        <h2 class="text-gray-700 text-lg">XIRR</h2>
        <p class="text-3xl font-semibold mt-2">+{{ totalReturnsPercentage }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ref } from 'vue'

const timeframes = ref([
  { id: 'oneDay', value: '1D' },
  { id: 'oneWeek', value: '1W' },
  { id: 'oneMonth', value: '1M' },
  { id: 'oneYear', value: '1Y' },
  { id: 'allTime', value: 'All Time' },
  { id: 'custom', value: 'Custom' },
])

const activeTimeframe = ref('oneDay')

const changeActiveTimeframe = (timeframe: string) => {
  activeTimeframe.value = timeframe
}

const totalInvestedValue = ref(1000000)
const totalPortfolioValue = ref(1200000)
const dailyChange = ref(1.25)
const totalReturns = computed(() => totalPortfolioValue.value - totalInvestedValue.value)
const totalReturnsPercentage = computed(() => {
  return (totalReturns.value / totalInvestedValue.value) * 100
})
</script>
