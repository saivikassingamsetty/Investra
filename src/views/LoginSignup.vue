<template>
  <section id="login" class="p-4 bg-gradient-to-r from-gray-100 to-blue-200 h-lvh w-full">
    <RouterLink to="/">
      <div class="h-6 w-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
      </div>
    </RouterLink>
    <div class="container flex items-center justify-center h-full relative overflow-hidden">
      <div class="h-1/2 w-full bg-white m-6 max-w-2xl mx-auto rounded-3xl shadow-xl flex absolute">
        <!-- Sign In blue container -->
        <div
          v-if="isSignup"
          class="h-full w-1/2 bg-indigo-500 rounded-r-[120px] text-white flex flex-col items-center justify-center gap-4 absolute left-0 translate-x-[0%]"
        >
          <h1 class="text-2xl font-bold text-center">Welcome Back!</h1>
          <p class="text-gray-100 font-normal text-center text-sm">
            Enter your personal details to use all of site features.
          </p>
          <button
            @click="toggle"
            class="py-2 px-8 border rounded-lg text-sm hover:bg-white hover:text-indigo-500"
          >
            SIGN IN
          </button>
        </div>

        <!-- Sign up blue container -->
        <div
          v-if="!isSignup"
          class="h-full w-1/2 bg-indigo-500 rounded-l-[120px] text-white flex flex-col items-center justify-center gap-4 absolute right-0"
        >
          <h1 class="text-2xl font-bold text-center">Welcome Back!</h1>
          <p class="text-gray-100 font-normal text-center text-sm">
            Enter your personal details to use all of site features.
          </p>
          <button
            @click="toggle"
            class="py-2 px-8 border rounded-lg text-sm hover:bg-white hover:text-indigo-500"
          >
            SIGN UP
          </button>
        </div>

        <!-- Sign up page -->
        <div
          v-if="isSignup"
          class="flex flex-col items-center justify-center gap-4 w-1/2 absolute right-0 my-4"
        >
          <h1 class="text-2xl font-bold text-center">Create Account</h1>
          <nav class="flex gap-2">
            <a href="#"
              ><GoogleIcon class="h-10 w-10 border-2 border-slate-200 p-2 rounded-lg shadow-lg"
            /></a>
            <a href="#">
              <FaceBookIcon class="h-10 w-10 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
            </a>
            <a href="#">
              <GitHubIcon class="h-10 w-10 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
            </a>
            <a href="#">
              <LinkedinIcon class="h-10 w-10 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
            </a>
          </nav>
          <p class="text-slate-600 font-normal text-sm pt-2">Or use your email for registration</p>
          <form action="" method="post" class="text-center flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              class="bg-slate-200 px-4 py-1 border-lg rounded-lg"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="bg-slate-200 px-4 py-1 border-lg rounded-lg"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              class="bg-slate-200 px-4 py-1 border-lg rounded-lg"
            />
          </form>
          <button
            type="submit"
            class="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 font-normal text-sm"
          >
            SIGN UP
          </button>
        </div>

        <!-- Sign In page -->
        <div
          v-if="!isSignup"
          class="flex flex-col items-center justify-center gap-4 w-1/2 absolute left-0 my-4"
        >
          <h1 class="text-2xl font-bold text-center">Sign In</h1>
          <nav class="flex gap-2">
            <a href="#"
              ><GoogleIcon class="h-10 w-10 border-2 border-slate-200 p-2 rounded-lg shadow-lg"
            /></a>
            <a href="#">
              <FaceBookIcon class="h-10 w-10 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
            </a>
            <a href="#">
              <GitHubIcon class="h-10 w-10 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
            </a>
            <a href="#">
              <LinkedinIcon class="h-10 w-10 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
            </a>
          </nav>
          <p class="text-slate-600 font-normal text-sm pt-2">Or use your email and password</p>
          <form action="" method="post" class="text-center flex flex-col space-y-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="bg-slate-200 px-4 py-1 border-lg rounded-lg"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              class="bg-slate-200 px-4 py-1 border-lg rounded-lg"
            />
          </form>
          <a href="#">Forget Your Password?</a>
          <button
            type="submit"
            class="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 font-normal text-sm"
          >
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GoogleIcon from '@/components/icons/Google.vue'
import FaceBookIcon from '@/components/icons/FaceBook.vue'
import GitHubIcon from '@/components/icons/GitHub.vue'
import LinkedinIcon from '@/components/icons/Linkedin.vue'
import { ref } from 'vue'

let isSignup = ref(true)

const toggle = () => {
  isSignup.value = !isSignup.value
}
</script>
