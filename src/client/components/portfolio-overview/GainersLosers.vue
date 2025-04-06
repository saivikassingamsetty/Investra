<template>
  <div class="flex flex-col gap-4">
    <!-- Gainers -->
    <h2 class="text-xl font-bold text-gray-800">Top Gainers</h2>
    <div class="flex flex-col gap-4">
      <div v-for="{name, chg} in gainers" :key="name" class="flex flex-row justify-between text-green-600 text-l">
        <p>{{ name }}</p>
        <p>+{{ chg }}%</p>
      </div>
    </div>

    <!-- Losers -->
    <h2 class="text-xl font-bold text-gray-800">Top Losers</h2>
    <div class="flex flex-col gap-4">
      <div v-for="{name, chg} in losers" :key="name" class="flex flex-row justify-between text-red-600 text-l">
        <p>{{ name }}</p>
        <p>{{ chg }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const gainers = ref([
  {name: 'Anant Raj', chg: 3.24},
  {name: 'Marksans', chg: 2.57},
])
const losers = [
  {name: 'Tarachand', chg: -2.67},
  {name: 'Skipper', chg: -5.0},
]
</script>
