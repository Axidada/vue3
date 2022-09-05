import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ElTable from '../views/Table/ElTable.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Home/index.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: ElTable,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
