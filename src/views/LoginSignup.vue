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
      <div
        :class="{ active: !isSignup }"
        class="h-3/5 w-full bg-white m-6 max-w-4xl mx-auto rounded-3xl shadow-xl flex absolute overflow-hidden"
      >
        <!-- Sign In blue container -->
        <div
          id="signin-blue"
          class="h-full w-1/2 bg-indigo-500 rounded-r-[120px] text-white flex flex-col items-center justify-center gap-4 absolute left-0 z-10"
        >
          <h1 class="text-3xl font-extrabold text-center">Welcome Back!</h1>
          <p class="text-gray-100 font-normal text-center text-lg">
            Enter your personal details to use all of site features.
          </p>
          <button
            @click="toggle"
            class="py-2 px-8 border rounded-lg text-lg hover:bg-white hover:text-indigo-500"
          >
            SIGN IN
          </button>
        </div>

        <!-- Sign up blue container -->
        <div
          id="signup-blue"
          class="h-full w-1/2 bg-indigo-500 rounded-l-[120px] text-white flex flex-col items-center justify-center gap-4 absolute right-0 z-0 translate-x-[100%]"
        >
          <h1 class="text-3xl font-bold text-center">Hello, Friend!</h1>
          <p class="text-gray-100 font-normal text-center text-lg">
            Register with your personal details to use all of site features.
          </p>
          <button
            @click="toggle"
            class="py-2 px-8 border rounded-lg text-lg hover:bg-white hover:text-indigo-500"
          >
            SIGN UP
          </button>
        </div>

        <!-- Sign up page -->
        <div
          id="signup"
          class="flex flex-col mx-auto justify-center gap-4 w-1/2 absolute right-0 z-10 top-5 md:top-[10%]"
        >
          <h1 class="text-3xl font-extrabold text-center">Create Account</h1>
          <nav class="flex items-center justify-center gap-4 text-center">
            <a href="#"
              ><GoogleIcon class="h-12 w-12 border-2 border-slate-200 p-2 rounded-lg shadow-lg"
            /></a>
            <a href="#">
              <FaceBookIcon class="h-12 w-12 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
            </a>
            <a href="#">
              <GitHubIcon class="h-12 w-12 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
            </a>
            <a href="#">
              <LinkedinIcon class="h-12 w-12 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
            </a>
          </nav>
          <p class="text-slate-600 font-normal text-lg pt-2 text-center">
            Or use your email for registration
          </p>
          <form action="" method="post" class="text-center flex flex-col space-y-4 px-12">
            <input
              type="text"
              placeholder="Name"
              class="bg-slate-200 px-4 py-3 border-lg rounded-lg"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="bg-slate-200 px-4 py-3 border-lg rounded-lg"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              class="bg-slate-200 px-4 py-3 border-lg rounded-lg"
            />
          </form>
          <button
            type="submit"
            class="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 font-normal text-lg mx-auto mt-2"
          >
            SIGN UP
          </button>
        </div>

        <!-- Sign In page -->
        <div
          id="signin"
          class="flex flex-col justify-center gap-6 w-1/2 absolute left-0 z-0 translate-x-[-100%] top-5 md:top-[10%]"
        >
          <h1 class="text-3xl font-extrabold text-center">Sign In</h1>
          <nav class="flex gap-4 text-center mx-auto">
            <a href="#"
              ><GoogleIcon class="h-12 w-12 border-2 border-slate-200 p-2 rounded-lg shadow-lg"
            /></a>
            <a href="#">
              <FaceBookIcon class="h-12 w-12 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
            </a>
            <a href="#">
              <GitHubIcon class="h-12 w-12 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
            </a>
            <a href="#">
              <LinkedinIcon class="h-12 w-12 border-2 border-slate-200 p-2 rounded-lg shadow-lg" />
            </a>
          </nav>
          <p class="text-slate-600 font-normal text-lg pt-2 text-center">
            Or use your email and password
          </p>
          <form action="" method="post" class="text-center flex flex-col space-y-4 px-12">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="bg-slate-200 px-4 py-3 border-lg rounded-lg"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              class="bg-slate-200 px-4 py-3 border-lg rounded-lg"
            />
          </form>
          <a href="#" class="text-center text-lg">Forget Your Password?</a>
          <button
            type="submit"
            class="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 font-normal text-lg mx-auto"
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

const isSignup = ref(true)

const toggle = () => {
  isSignup.value = !isSignup.value
}
</script>

<!-- <style scoped>
#signin,
#signup,
#signin-blue,
#signup-blue {
  transition:
    transform 0.6s ease-in-out,
    z-index 0.6s;
}

.active {
  #signin {
    z-index: 10;
    transform: translateX(0%);
  }
  #signup {
    z-index: 0;
    transform: translateX(100%);
  }
  #signin-blue {
    z-index: 0;
    transform: translateX(-100%);
  }
  #signup-blue {
    z-index: 10;
    transform: translateX(0%);
  }
}
</style> -->

<style scoped>
#signin,
#signup,
#signin-blue,
#signup-blue {
  transition:
    transform 0.6s ease-in-out,
    opacity 0.6s ease-in-out,
    z-index 0.6s;
}

#signin-blue {
  transform: translateX(0%);
  opacity: 1;
}

#signup-blue {
  transform: translateX(100%);
  opacity: 0;
}

#signup {
  transform: translateX(0%);
  opacity: 1;
}

#signin {
  transform: translateX(-100%);
  opacity: 0;
}

.active {
  #signin {
    z-index: 10;
    transform: translateX(0%);
    opacity: 1;
  }
  #signup {
    z-index: 0;
    transform: translateX(100%);
    opacity: 0;
  }
  #signin-blue {
    z-index: 0;
    transform: translateX(100%);
    opacity: 0;
  }
  #signup-blue {
    z-index: 10;
    transform: translateX(0%);
    opacity: 1;
  }
}
</style>
