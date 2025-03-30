import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
