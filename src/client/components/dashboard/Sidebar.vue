<template>
  <section
    class="h-full flex flex-col bg-blue-200 transition-all duration-500 ease-in-out"
    :class="isSidebarOpen ? 'w-56' : 'w-20'"
  >
    <!-- Logo Section -->
    <div class="flex items-center p-5">
      <a href="/" class="flex items-center gap-2">
        <Investra class="w-10 h-10" />
        <Transition name="fade">
          <h1 v-show="isSidebarOpen" class="text-2xl font-bold">Investra</h1>
        </Transition>
      </a>
    </div>

    <!-- Navigation Section -->
    <div class="flex-1 flex flex-col gap-4 p-4 overflow-hidden justify-center">
      <RouterLink
        v-for="item in sidebarItemSource"
        :key="item.label"
        :to="item.link"
        class="flex items-center gap-2 p-2 hover:bg-blue-300 rounded-md transition duration-300"
      >
        <FontAwesomeIcon :icon="item.icon" class="w-6 h-6 min-w-[24px]" />
        <span v-show="isSidebarOpen" class="ml-2 whitespace-nowrap transition-all duration-500">{{ item.label }}</span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {onMounted, onBeforeUnmount} from 'vue'
import Investra from '@/assets/icons/Investra.vue'
import {storeToRefs} from 'pinia'
import {useDashboardStore} from '@/stores/dashboard/dashboardStore'

const dashboardStore = useDashboardStore()
const {isSidebarOpen} = storeToRefs(dashboardStore)

const sidebarItemSource = [
  {icon: 'fa-chart-line', label: 'Dashboard', link: '/dashboard'},
  {icon: 'fa-briefcase', label: 'Portfolio', link: '/portfolio'},
  {icon: 'fa-chart-pie', label: 'Portfolio Analysis', link: '/portfolio-analysis'},
  {icon: 'fa-globe', label: 'Market', link: '/market'},
]

const handleResize = () => {
  if (window.innerWidth <= 768) {
    isSidebarOpen.value = false
  } else {
    // isSidebarOpen.value = true
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
