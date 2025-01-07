<template>
  <section id="features" class="p-6 bg-gray-50 scroll-m-20">
    <div class="flex flex-col items-center text-center">
      <h1 class="font-extrabold text-3xl">Why Choose Investra?</h1>
      <p class="text-slate-600 font-medium">
        Unlock the true potential of your finances with powerful features.
      </p>
    </div>
    <div class="m-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="flex flex-col items-center text-center gap-2">
        <div
          class="text-blue-600 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center"
        >
          <Energy />
        </div>
        <h2 class="font-semibold text-xl">Smart Portfolio</h2>
        <p class="font-small text-slate-600">Analyze and optimize your investments effortlessly.</p>
      </div>
      <div class="flex flex-col items-center text-center gap-2">
        <div
          class="text-purple-600 bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center"
        >
          <Guard />
        </div>
        <h2 class="font-semibold text-xl">AI Insights</h2>
        <p class="font-small text-slate-600">
          Leverage cutting-edge AI for actionable recommendations.
        </p>
      </div>
      <div class="flex flex-col items-center text-center gap-2">
        <div
          class="text-green-600 bg-green-100 w-16 h-16 rounded-full flex items-center justify-center"
        >
          <Graphs />
        </div>
        <h2 class="font-semibold text-xl">Interactive Graphs</h2>
        <p class="font-small text-slate-600">
          Visualize your financial data with intuitive charts.
        </p>
      </div>
      <div class="flex flex-col items-center text-center gap-2">
        <div
          class="text-yellow-600 bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center"
        >
          <StayUpdated />
        </div>
        <h2 class="font-semibold text-xl">Stay Updated</h2>
        <p class="font-small text-slate-600">
          Receive the latest financial news directly in your dashboard.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Energy from '@/components/icons/Energy.vue'
import Guard from '@/components/icons/Guard.vue'
import Graphs from '@/components/icons/Graphs.vue'
import StayUpdated from '@/components/icons/StayUpdated.vue'
</script>
