<template>
  <section
    id="hero"
    class="flex flex-col md:flex-row items-center justify-center py-16 px-6 scroll-m-10"
  >
    <div class="text-center md:text-start">
      <h1 class="font-extrabold text-4xl md:text-5xl leading-tight">
        Your Investments, Simplified and Smart
      </h1>
      <p class="mt-4 text-slate-600 text-lg">
        Unlock the power of AI to track your portfolio, gain actionable insights, and stay ahead in
        your financial journey.
      </p>
      <div class="m-4 flex space-x-4 items-center justify-center md:justify-start">
        <a
          href="#features"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-medium hover:bg-blue-700 transition"
        >
          Explore Features
        </a>
        <RouterLink
          to="/login"
          class="text-blue-600 px-6 py-3 rounded-lg shadow-lg border-blue-600 border hover:bg-blue-600 hover:text-white transition"
        >
          Get Started
        </RouterLink>
      </div>
    </div>
    <HeroBoy class="flex justify-center" />
  </section>
</template>

<script setup lang="ts">
import HeroBoy from '../icons/HeroBoy.vue'
</script>
