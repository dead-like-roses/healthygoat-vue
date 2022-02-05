import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes = [
  {
    component: () => import('@/pages/HomePage.vue'),
    name: 'home',
    path: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
