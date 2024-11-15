import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAppStore } from '@/stores/app'
import { useAccountStore } from '@/stores/account'
import LayoutDefault from '@/layouts/LayoutDefault.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutDefault,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
          meta: {
            requiresAuth: true,
            roles: ['about_read'],
          },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/access-denied',
      name: 'access-denied',
      component: () => import('../views/AccessDeniedView.vue'),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const accountStore = useAccountStore()

  if (accountStore.loading) {
    await accountStore.logged()

    accountStore.loading = false
  }

  if (to.meta.requiresAuth && !accountStore.user) {
    next('login')
  }

  useAppStore().setRouterLoading(true)

  next()
})

router.afterEach((to, from) => {
  useAppStore().setRouterLoading(false)
})

export default router
