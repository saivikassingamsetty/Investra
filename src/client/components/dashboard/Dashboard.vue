<template>
  <div class="relative">
    <div class="flex flex-row h-screen">
      <!-- Sidebar -->
      <Sidebar class="transition-all duration-500" />

      <!-- Main Content Area -->
      <section class="flex flex-1 flex-col overflow-hidden">
        <Toolbar />
        <div class="flex-1 overflow-y-auto">
          <!-- Router View for Dynamic Content -->
          <router-view />
        </div>
      </section>
    </div>

    <!-- Overlay when notifications panel is open -->
    <div v-if="isNotificationsPanelOpen" class="w-full h-full bg-slate-300 opacity-30 absolute z-10 top-0 left-0"></div>

    <!-- Notifications Side Panel -->
    <transition name="slide">
      <NotificationsPanel v-if="isNotificationsPanelOpen" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {useDashboardStore} from '@/stores/dashboard/dashboardStore'
import Sidebar from './Sidebar.vue'
import Toolbar from './Toolbar.vue'
import NotificationsPanel from './NotificationsPanel.vue'

const dashboardStore = useDashboardStore()

const {isNotificationsPanelOpen} = storeToRefs(dashboardStore)
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-enter-to {
  transform: translateX(0%);
}

.slide-leave-from {
  transform: translateX(0%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
