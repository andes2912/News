import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  {
    name: '/detail/',
    path: '/detail/:url',
    component: () => import('../views/Detail.vue')
  },

  {
    name: '/technology/',
    path: '/technology/',
    component: () => import('../views/Technology.vue')
  },

  {
    name: '/science/',
    path: '/science/',
    component: () => import('../views/Science.vue')
  },

  {
    name: '/health/',
    path: '/health/',
    component: () => import('../views/Health.vue')
  },

  {
    name: '/sports/',
    path: '/sports/',
    component: () => import('../views/Sports.vue')
  },

  {
    name: '/business/',
    path: '/business/',
    component: () => import('../views/Business.vue')
  },

  {
    name: '/entertainment/',
    path: '/entertainment/',
    component: () => import('../views/Entertainment.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
