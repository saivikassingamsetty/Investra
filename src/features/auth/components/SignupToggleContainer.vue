<template>
  <div
    class="h-full w-1/2 bg-indigo-500 rounded-l-[120px] text-white flex flex-col items-center justify-center gap-4 absolute right-0 z-0 translate-x-[100%]"
  >
    <h1 class="text-3xl font-bold text-center">Hello, Friend!</h1>
    <p class="text-gray-100 font-normal text-center text-lg">
      Register with your personal details to use all of site features.
    </p>
    <button
      @click="auth.toggleSigninSignup"
      class="py-2 px-8 border rounded-lg text-lg hover:bg-white hover:text-indigo-500"
    >
      SIGN UP
    </button>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../../stores/auth/authStore'

const auth = useAuthStore()
</script>
