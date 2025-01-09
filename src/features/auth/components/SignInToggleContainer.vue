<template>
  <div
    class="h-full w-1/2 bg-indigo-500 rounded-r-[120px] text-white flex flex-col items-center justify-center gap-4 absolute left-0 z-10"
  >
    <h1 class="text-3xl font-extrabold text-center">Welcome Back!</h1>
    <p class="text-gray-100 font-normal text-center text-lg">
      Enter your personal details to use all of site features.
    </p>
    <button
      @click="auth.toggleSigninSignup"
      class="py-2 px-8 border rounded-lg text-lg hover:bg-white hover:text-indigo-500"
    >
      SIGN IN
    </button>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../../stores/auth/authStore'

// Use the store
const auth = useAuthStore()
</script>
