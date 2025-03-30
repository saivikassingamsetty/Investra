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
    <div class="container flex items-center justify-center h-full relative overflow-hidden mx-auto">
      <div
        :class="{active: !isSignup}"
        class="h-4/5 w-full bg-white m-6 max-w-4xl mx-auto rounded-3xl shadow-xl flex absolute overflow-hidden"
      >
        <SignInToggleContainer id="signin-blue" />
        <SignupToggleContainer id="signup-blue" />
        <SignIn id="signin" @submit="onSubmit" />
        <Signup id="signup" @submit="onSubmit" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {useRouter} from 'vue-router'
import {useAuthStore} from '@/stores/auth/authStore'
import SignInToggleContainer from '@/features/auth/components/SignInToggleContainer.vue'
import SignupToggleContainer from '@/features/auth/components/SignupToggleContainer.vue'
import SignIn from '@/features/auth/components/SignIn.vue'
import Signup from '@/features/auth/components/Signup.vue'
import {loginMockAPI, type IUserData} from '@/features/auth/mocks/mockAuthAPI'
import {signupMockAPI} from '@/features/auth/mocks/mockAuthAPI'

const auth = useAuthStore()
const {isSignup, isAuthenticated} = storeToRefs(auth)

const router = useRouter()

const onSubmit = (values: IUserData) => {
  if (isSignup.value) {
    handleSignup(values)
  } else {
    handleLogin(values)
  }
}

const handleSignup = async (values: IUserData) => {
  try {
    const response = await signupMockAPI(values)
    alert(response)
    //redirect the user to /dashboard view
    auth.loginUser()
    router.push('/dashboard')
  } catch (error: any) {
    alert(error)
  }
}

const handleLogin = async (values: IUserData) => {
  try {
    const response = await loginMockAPI(values)
    alert(response)
    //redirect the user to /dashboard view
    auth.loginUser()
    router.push('/dashboard')
  } catch (error: any) {
    alert(error)
  }
}
</script>

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
