import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import { rssFeed } from './plugins/rss-feed'

// https://vite.dev/config/
export default defineConfig({
  base: '/canadian-fun-facts/',
  plugins: [
    vue(),
    vueDevTools(),
    rssFeed(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
