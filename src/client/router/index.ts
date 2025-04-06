import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginSignup from '@/views/LoginSignup.vue'
import Dashboard from '@/views/Dashboard.vue'
import PortfolioOverview from '@/components/portfolio-overview/PortfolioOverview.vue'
import Portfolio from '@/components/portfolio/Portfolio.vue'
import PortfolioAnalysis from '@/components/portfolio-analysis/PortfolioAnalysis.vue'
import Markets from '@/components/markets/Markets.vue'
import PortfolioPlanning from '@/components/portfolio-planning/PortfolioPlanning.vue'
import {useAuthStore} from '@/stores/auth/authStore'
import {pinia} from '@/main'
import {storeToRefs} from 'pinia'

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
      children: [
        {path: '', name: 'portfolio-overview', component: PortfolioOverview},
        {path: '/portfolio', name: 'portfolio', component: Portfolio},
        {path: '/portfolio-analysis', name: 'Portfolio Analysis', component: PortfolioAnalysis},
        {path: '/market', name: 'market', component: Markets},
        {path: '/portfolio-planning', name: 'portfolio-planning', component: PortfolioPlanning},
      ],
    },
  ],
})

router.beforeEach((to) => {
  const auth = useAuthStore(pinia)
  const {isAuthenticated} = storeToRefs(auth)

  // Redirect authenticated users away from login or signup pages
  if (to.name === 'login' && isAuthenticated.value) {
    return {name: 'portfolio-overview'}
  }

  // Allow access to the home page even if not authenticated
  if (to.name === 'home') {
    return true
  }

  // Redirect unauthenticated users to login page for protected routes
  if (!isAuthenticated.value && to.name !== 'login') {
    return {name: 'login'}
  }
})

export default router
