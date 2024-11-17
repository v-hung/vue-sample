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
          path: 'timesheet',
          name: 'timesheet',
          component: () => import('../views/TimesheetView.vue'),
          meta: {
            requiresAuth: true,
            roles: ['timesheet_read'],
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

    // {
    //   path: '/:pathMatch(.*)*', // Đây là cách để khớp tất cả các route không xác định
    //   name: '404',
    //   component: PageNotFound,
    // },
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

router.afterEach(() => {
  useAppStore().setRouterLoading(false)
})

export default router
