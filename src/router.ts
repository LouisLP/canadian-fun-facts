import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hub',
      component: () => import('./pages/HubPage.vue'),
    },
    {
      path: '/sets/:slug',
      name: 'set',
      component: () => import('./pages/SetPage.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('./pages/NotFoundPage.vue'),
    },
  ],
})
