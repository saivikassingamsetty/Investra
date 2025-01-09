import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isSignup = ref(true)

  const toggleSigninSignup = () => {
    isSignup.value = !isSignup.value
  }

  return { isSignup, toggleSigninSignup }
})
