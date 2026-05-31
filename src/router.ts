import { createWebHistory, createRouter } from 'vue-router'

import login from './pages/login.vue'
import matches from './pages/maches.vue'
import positions from './pages/positions.vue'
import singup from './pages/singup.vue'
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  { path: '/matches', component: matches },
  { path: '/positions', component: positions },
  { path: '/signup', component: singup }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})