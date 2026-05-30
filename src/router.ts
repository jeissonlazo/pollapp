import { createWebHistory, createRouter } from 'vue-router'

import login from './pages/login.vue'
import matches from './pages/maches.vue'
import positions from './pages/positions.vue'
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  { path: '/matches', component: matches },
  { path: '/positions', component: positions }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})