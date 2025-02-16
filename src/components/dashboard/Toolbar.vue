<template>
  <div class="m-5 p-5 border-gray-300 flex flex-row justify-between items-center bg-white">
    <!-- Sidebar Toggle Button -->
    <button class="focus:outline-none" @click="toggleSidebar">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>

    <!-- Styled Search Bar -->
    <div class="flex-1 mx-4">
      <input
        type="search"
        class="w-full px-4 py-2 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-blue-300"
        placeholder="Search..."
      />
    </div>

    <!-- Additional Links/Icons -->
    <div class="flex flex-row gap-3">
      <RouterLink
        v-for="item in sidebarItemSource"
        :key="item.label"
        :to="item.link"
        class="flex items-center p-2 hover:bg-blue-200 rounded-lg transition-all duration-300"
      >
        <FontAwesomeIcon :icon="item.icon" class="w-5 h-5" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDashboardStore } from '@/stores/dashboard/dashboardStore'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const dashboardStore = useDashboardStore()

const toggleSidebar = () => {
  dashboardStore.toggleSidebar()
}

const sidebarItemSource = [
  { icon: 'fa-bell', label: 'Notifications', link: '/notifications' },
  { icon: 'fa-user', label: 'Profile', link: '/profile' },
  { icon: 'fa-cog', label: 'Settings', link: '/settings' },
  { icon: 'fa-arrow-right-from-bracket', label: 'Logout', link: '/logout' },
]
</script>
