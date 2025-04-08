import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isSignup = ref(true)
  const isAuthenticated = ref(true)

  const toggleSigninSignup = () => {
    isSignup.value = !isSignup.value
  }

  const loginUser = () => {
    isAuthenticated.value = true
  }

  const logoutUser = () => {
    isAuthenticated.value = false
  }

  return {isSignup, isAuthenticated, toggleSigninSignup, loginUser, logoutUser}
})
