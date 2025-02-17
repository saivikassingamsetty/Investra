import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import mockNotifications from '@/features/auth/mocks/mockNotifications.json'

export const useDashboardStore = defineStore('dashboard', () => {
  const isSidebarOpen = ref(true)
  const isNotificationsPanelOpen = ref(false)
  const notifications = reactive(mockNotifications)

  const toggleSidebar = (sidebarOpen: boolean = false) => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  const toggleNotificationsPanel = (panelOpen: boolean = false) => {
    isNotificationsPanelOpen.value = !isNotificationsPanelOpen.value
  }

  return {
    isSidebarOpen,
    notifications,
    isNotificationsPanelOpen,
    toggleSidebar,
    toggleNotificationsPanel,
  }
})
