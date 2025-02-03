import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDashboardStore = defineStore('dashboard', () => {
  const isSidebarOpen = ref(true)

  const toggleSidebar = (sidebarOpen: boolean = false) => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  return { isSidebarOpen, toggleSidebar }
})
