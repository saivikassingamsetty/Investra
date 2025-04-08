<template>
  <div class="m-5 mt-2 border-gray-300 flex justify-between items-center bg-white p-2 rounded-lg shadow-md">
    <!-- Sidebar Toggle Button -->
    <button class="focus:outline-none" @click="toggleSidebar">
      <font-awesome-icon :icon="['fas', 'bars']" class="w-5 h-5" />
    </button>

    <!-- Styled Search Bar -->
    <div class="w-1/2 mx-4 flex gap-2 border border-slate-300 rounded-full">
      <input
        type="search"
        v-model="searchText"
        class="w-full px-4 py-2 rounded-full focus:outline-none"
        placeholder="Search..."
      />
      <button @click="initiateSearch" class="focus:outline-none mr-4 mt-1">
        <font-awesome-icon :icon="['fas', 'search']" class="w-5 h-5" />
      </button>
    </div>

    <!-- User Icon with Dropdown -->
    <div class="relative flex items-center gap-3">
      <!-- Notification Bell -->
      <button @click="openNotificationsPanel" class="focus:outline-none relative flex items-center">
        <span class="fa-layers fa-fw">
          <font-awesome-icon :icon="['fas', 'bell']" class="w-5 h-5" />
          <span
            v-if="unreadNotificationsCount > 0"
            class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            {{ Math.min(unreadNotificationsCount, 99) }}
          </span>
        </span>
      </button>

      <!-- User Icon -->
      <div class="relative">
        <button @click="toggleUserDropdown" class="focus:outline-none">
          <font-awesome-icon :icon="['fas', 'user-circle']" class="w-6 h-6" />
        </button>
        <!-- Dropdown Menu -->
        <transition name="fade">
          <div
            v-if="isUserDropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20"
          >
            <ul class="py-2">
              <li
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                v-for="item in sidebarItemSource"
                :key="item.label"
              >
                <font-awesome-icon :icon="item.icon"></font-awesome-icon>
                {{ item.label }}
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useDashboardStore} from '@/stores/dashboard/dashboardStore'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {storeToRefs} from 'pinia'
import {ref} from 'vue'

const dashboardStore = useDashboardStore()
const {notifications} = storeToRefs(dashboardStore)

const unreadNotificationsCount = ref(notifications.value.length)
const isUserDropdownOpen = ref(false)

const toggleSidebar = () => {
  dashboardStore.toggleSidebar()
}

const sidebarItemSource = [
  {icon: 'fa-user', label: 'Profile'},
  {icon: 'fa-cog', label: 'Settings'},
  {icon: 'fa-arrow-right-from-bracket', label: 'Logout'},
]

const searchText = ref('')

const initiateSearch = () => {
  alert(`You are searching ${searchText.value}. Good Luck!`)
}

const openNotificationsPanel = () => {
  dashboardStore.toggleNotificationsPanel()
}

const toggleUserDropdown = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
