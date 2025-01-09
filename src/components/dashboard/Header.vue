<template>
  <header
    id="header"
    class="sticky top-0 z-10 shadow-md flex justify-between py-4 pl-2 pr-6 bg-gray-50"
  >
    <section>
      <a href="/dashboard" class="flex my-auto">
        <img
          src="../../assets/investra_logo.png"
          alt="Investra Logo"
          class="h-10 w-20 my-auto object-cover header-logo"
          draggable="false"
        />
        <h1 class="text-2xl md:text-3xl text-blue-700 font-bold m-2 hidden min-[330px]:block">
          Investra
        </h1>
      </a>
    </section>
    <section class="flex space-x-6">
      <button
        @click="onLogout"
        class="bg-blue-600 text-white px-6 py-2 text-center my-auto rounded-lg shadow-lg cursor-pointer"
      >
        Log Out
      </button>
    </section>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/authStore'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const onLogout = () => {
  auth.logoutUser()
  router.replace('/')
}
</script>

<style scoped>
.header-logo {
  object-position: 0 25%;
}
</style>
