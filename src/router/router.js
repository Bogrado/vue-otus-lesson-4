import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter(
  {
    history: createWebHistory(), routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/pages/TheHome.vue')
      },
      {
        path: '/favorites',
        name: 'favorites',
        component: () => import('@/pages/TheFavorites.vue')
      },
      {
        path: '/form',
        name: 'form',
        component: () => import('@/components/AppForm.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/pages/TheError.vue')
      }
    ]
  })