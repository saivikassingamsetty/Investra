<template>
  <section id="testimonials" class="bg-gray-100 py-16 scroll-m-20">
    <h1 class="text-center font-extrabold text-3xl">What Our Users Are Saying</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Testimonial v-for="detail in details" :key="detail.name" v-bind="detail" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Testimonial from '@/components/home/Testimonial.vue'

const details = [
  {
    name: 'John Doe',
    pic: 'https://via.placeholder.com/50',
    role: 'Financial Analyst',
    msg: '"Investra has completely transformed how I manage my portfolio. The insights and tools are game-changing!"',
  },
  {
    name: 'Jane Smith',
    pic: 'https://via.placeholder.com/50',
    role: 'Entrepreneur',
    msg: '"I love how intuitive and responsive Investra is. Managing my investments has never been easier."',
  },
  {
    name: 'Michael Lee',
    pic: 'https://via.placeholder.com/50',
    role: 'Software Engineer',
    msg: '"The AI-driven insights are fantastic. I\'ve saved so much time and made better financial decisions."',
  },
]
</script>
