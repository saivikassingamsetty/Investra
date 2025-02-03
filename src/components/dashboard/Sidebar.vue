<template>
  <section
    class="p-5 flex flex-col justify-between bg-blue-200 transition-all duration-500"
    :class="isOpen ? 'w-56' : 'w-20'"
  >
    <div class="flex items-center">
      <a href="/" class="flex items-center gap-2">
        <Investra class="w-10 h-10" />
        <Transition name="fade">
          <h1 v-show="isOpen" class="text-2xl font-bold">Investra</h1>
        </Transition>
      </a>
    </div>

    <div class="flex flex-col gap-4">
      <RouterLink
        v-for="item in sidebarItemSource.slice(0, -2)"
        :key="item.label"
        :to="item.link"
        class="flex items-center gap-2 p-2 hover:bg-blue-300 rounded-md transition-all duration-500"
      >
        <FontAwesomeIcon :icon="item.icon" class="w-5 h-5" />
        <Transition name="fade">
          <p v-show="isOpen">{{ item.label }}</p>
        </Transition>
      </RouterLink>
    </div>

    <div class="flex flex-col gap-4">
      <RouterLink
        v-for="item in sidebarItemSource.slice(-2)"
        :key="item.label"
        :to="item.link"
        class="flex items-center gap-2 p-2 hover:bg-blue-300 rounded-md"
      >
        <FontAwesomeIcon :icon="item.icon" />
        <Transition name="fade">
          <p v-show="isOpen">{{ item.label }}</p>
        </Transition>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { toRefs } from 'vue'
import Investra from '@/assets/icons/Investra.vue'

interface IProps {
  isOpen: boolean
}

const props = defineProps<IProps>()
const { isOpen } = toRefs(props)

const sidebarItemSource = [
  { icon: 'fa-chart-line', label: 'Dashboard', link: '/dashboard' },
  { icon: 'fa-briefcase', label: 'Portfolio', link: '/portfolio' },
  { icon: 'fa-chart-pie', label: 'Portfolio Analysis', link: '/portfolio-analysis' },
  { icon: 'fa-globe', label: 'Market', link: '/market' },
  { icon: 'fa-bell', label: 'Notifications', link: '/notifications' },
  { icon: 'fa-user', label: 'Profile', link: '/profile' },
  { icon: 'fa-cog', label: 'Settings', link: '/settings' },
  { icon: 'fa-arrow-right-from-bracket', label: 'Logout', link: '/logout' },
]
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
