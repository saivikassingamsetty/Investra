<template>
  <div
    class="absolute top-0 right-0 z-10 h-full w-full md:w-1/3 p-5 bg-white text-black border border-slate-200 shadow-xl overflow-y-auto"
  >
    <!-- Header -->
    <div class="flex justify-between items-center border-b-2 border-gray-300 py-4">
      <h1 class="text-2xl font-semibold text-gray-800">Notifications</h1>
      <button
        @click="closeNotificationsPanel"
        class="focus:outline-none hover:text-red-500 transition duration-300"
      >
        <font-awesome-icon :icon="['fas', 'times']" class="w-6 h-6" />
      </button>
    </div>

    <!-- Notifications -->
    <section class="flex flex-col gap-4 mt-4">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="flex items-start space-x-3 p-4 border border-blue-100 rounded-lg hover:shadow-lg transition ease-in-out duration-200 justify-center"
      >
        <font-awesome-icon
          :icon="['fas', getIcon(notification.type)]"
          class="w-5 h-5 text-blue-500 flex-shrink-0"
        />
        <div class="flex-1">
          <h2 class="text-lg font-medium text-gray-700">{{ notification.title }}</h2>
          <p class="text-sm text-gray-600">{{ notification.message }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useDashboardStore } from '@/stores/dashboard/dashboardStore'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { storeToRefs } from 'pinia'

const dashboardStore = useDashboardStore()

const { notifications } = storeToRefs(dashboardStore)

const closeNotificationsPanel = () => {
  dashboardStore.toggleNotificationsPanel()
}

const getIcon = (type: string) => {
  const icons: Record<string, string> = {
    market: 'fa-chart-line', // Market alerts (e.g., stock up/down)
    transaction: 'fa-wallet', // Transactions (e.g., dividends, purchases)
    achievement: 'fa-trophy', // Portfolio milestones
    update: 'fa-info-circle', // Feature updates
    message: 'fa-envelope', // Direct messages or support
    warning: 'fa-exclamation-triangle', // Warnings or risks
    default: 'fa-bell', // Default notification icon
  }

  return icons[type] || icons.default
}
</script>
