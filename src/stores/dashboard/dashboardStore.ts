import {defineStore} from 'pinia'
import {reactive, ref} from 'vue'
import mockNotifications from '@/features/auth/mocks/mockNotifications.json'

export const useDashboardStore = defineStore('dashboard', () => {
  const isSidebarOpen = ref(true)
  const isNotificationsPanelOpen = ref(false)
  const notifications = reactive(mockNotifications)

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  const toggleNotificationsPanel = () => {
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
