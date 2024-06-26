import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/vueBasic',
      name: 'vueBasic',
      component: () => import('../views/VueBasicView.vue')
    },
    {
      path: '/vueBasic2',
      name: 'vueBasic2',
      component: () => import('../views/VueBasic2View.vue')
    },
    {
      path: '/terminal',
      name: 'terminal',
      component: () => import('../views/TerminalView.vue')
    },
    {
      path: '/xterm',
      name: 'xterm',
      component: () => import('../views/XtermView.vue')
    }
  ]
})

export default router
