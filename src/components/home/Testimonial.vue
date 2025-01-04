<template>
  <div class="bg-white m-6 p-6 flex flex-col gap-4 shadow-lg rounded-lg">
    <!-- PP and Name -->
    <div class="flex gap-4">
      <img :src="pic" alt="Image" class="rounded-full" />
      <div class="text-center">
        <h1 class="text-xl font-semibold">{{ name }}</h1>
        <p class="font-small text-slate-600">{{ role }}</p>
      </div>
    </div>
    <!-- Testimonial -->
    <div class="text-center">{{ msg }}</div>
    <!-- Stars -->
    <div>
      <span>⭐⭐⭐⭐⭐</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  pic: string
  name: string
  role: string
  msg: string
}

defineProps<IProps>()
</script>
