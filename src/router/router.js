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
        path: '/create-product',
        name: 'create-product',
        component: () => import('@/pages/TheCreateProduct.vue')
      },
      {
        path: '/product/:id-:price',
        name: 'product',
        props: true,
        component: () => import('@/pages/AppProduct.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/pages/TheError.vue')
      },
    ]
  })