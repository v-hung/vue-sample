import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAppStore } from '@/stores/app'
import { useAccountStore } from '@/stores/account'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import { defineComponent } from 'vue'

const EmptyComponent = defineComponent({})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: LayoutDefault,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: '/inbox',
          meta: {
            requiresAuth: true,
          },
          children: [
            {
              path: '',
              name: 'inbox',
              component: () => import('../views/InboxView.vue'),
            },
            {
              path: ':id',
              name: 'inbox-detail',
              component: () => import('../views/InboxDetailView.vue'),
            },
          ],
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
        {
          path: 'metting',
          name: 'metting',
          component: () => import('../views/MettingView.vue'),
          meta: {
            requiresAuth: true,
            roles: ['metting_read'],
          },
        },
        {
          path: 'project',
          name: 'project',
          component: () => import('../views/ProjectView.vue'),
          meta: {
            requiresAuth: true,
            roles: ['project_read'],
          },
        },
        {
          path: 'team',
          name: 'team',
          component: () => import('../views/TeamView.vue'),
          meta: {
            requiresAuth: true,
            roles: ['team_read'],
          },
        },
        {
          path: '/employee',
          meta: {
            requiresAuth: true,
            roles: ['employee_read'],
          },
          children: [
            {
              path: '',
              name: 'employee',
              component: () => import('../views/EmployeeView.vue'),
              meta: {
                requiresAuth: true,
                roles: ['employee_read'],
              },
            },
            {
              path: 'create',
              name: 'employee-create',
              component: () => import('../views/EmployeeCreateEditView.vue'),
              meta: {
                requiresAuth: true,
                roles: ['employee_create'],
              },
            },
            {
              path: ':id',
              name: 'employee-edit',
              component: () => import('../views/EmployeeCreateEditView.vue'),
              meta: {
                requiresAuth: true,
                roles: ['employee_edit'],
              },
            },
          ],
        },
        {
          path: '/work-times',
          component: () => import('../views/WorkTimeView.vue'),
          meta: {
            requiresAuth: true,
          },
          children: [
            {
              path: 'create',
              name: 'work-times-create',
              component: EmptyComponent,
              meta: {
                requiresAuth: true,
              },
            },
            {
              path: ':id',
              name: 'work-times-edit',
              component: EmptyComponent,
              meta: {
                requiresAuth: true,
              },
            },
          ],
        },
        {
          path: 'inventory',
          name: 'inventory',
          component: () => import('../views/InventoryView.vue'),
          meta: {
            requiresAuth: true,
            roles: ['inventory_read'],
          },
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('../views/SettingView.vue'),
          meta: {
            requiresAuth: true,
            roles: ['setting_read'],
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

  if (accountStore.isLogged) {
    await accountStore.logged()

    accountStore.isLogged = false
  }

  if (to.meta.requiresAuth && !accountStore.user && from.name != 'login') {
    return next('login')
  }

  useAppStore().setRouterLoading(true)

  next()
})

router.afterEach(() => {
  useAppStore().setRouterLoading(false)
})

export default router
