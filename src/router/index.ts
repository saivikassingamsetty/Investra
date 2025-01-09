import { createRouter, createWebHistory } from 'vue-router'
import { storeToRefs } from 'pinia'
import { pinia } from '@/main'
import HomeView from '@/views/HomeView.vue'
import LoginSignup from '@/views/LoginSignup.vue'
import Dashboard from '@/views/Dashboard.vue'
import { useAuthStore } from '@/stores/auth/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginSignup,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
  ],
})

router.beforeEach((to, from) => {
  const auth = useAuthStore(pinia)
  const { isAuthenticated } = storeToRefs(auth)

  // Redirect authenticated users away from login or signup pages
  if (to.name === 'login' && isAuthenticated.value) {
    return { name: 'dashboard' }
  }

  // Allow access to the home page even if not authenticated
  if (to.name === 'home') {
    return true
  }

  // Redirect unauthenticated users to login page for protected routes
  if (!isAuthenticated.value && to.name !== 'login') {
    return { name: 'login' }
  }
})

export default router
