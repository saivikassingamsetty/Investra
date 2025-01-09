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

router.beforeEach((to, from, next) => {
  const auth = useAuthStore(pinia)
  const { isAuthenticated } = storeToRefs(auth)

  if (!isAuthenticated.value && to.name != 'login') {
    next({ name: 'login' })
  }
})

export default router
