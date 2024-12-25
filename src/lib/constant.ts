import type { MenuItem } from '@/types/app'
import { h } from 'vue'
import IonHomeOutline from '~icons/ion/home-outline'
import IonMailNotificationOutline from '~icons/ion/mail-notification-outline'
import IonClock from '~icons/ion/clock'
import IonPeopleCircleOutline from '~icons/ion/people-circle-outline'
import IonDocumentsOutline from '~icons/ion/documents-outline'
import IonPeopleOutline from '~icons/ion/people-outline'
import IonPersonOutline from '~icons/ion/person-outline'
import IonLockClosedOutline from '~icons/ion/lock-closed-outline'
import IonCogOutline from '~icons/ion/cog-outline'
import IonSendOutline from '~icons/ion/send-outline'
import IonPieChartOutline from '~icons/ion/pie-chart-outline'
import IonCubeOutline from '~icons/ion/cube-outline'

export const MENUS_DEFAULT: MenuItem[] = [
  {
    type: 'group',
    title: 'menus.menu',
  },
  {
    path: '/',
    icon: () => h(IonHomeOutline),
    title: 'menus.home',
  },
  {
    path: '/inbox',
    icon: () => h(IonMailNotificationOutline),
    title: 'menus.inbox',
    badge: 4,
  },
  {
    path: '/timesheet',
    icon: () => h(IonClock),
    title: 'Timesheet',
  },
  {
    path: '/metting',
    icon: () => h(IonPeopleCircleOutline),
    title: 'Metting',
  },
  {
    type: 'group',
    title: 'Manager',
  },
  {
    path: '/project',
    icon: () => h(IonDocumentsOutline),
    title: 'Project',
  },
  {
    path: '/team',
    icon: () => h(IonPeopleOutline),
    title: 'Team',
  },
  {
    path: '/employee',
    icon: () => h(IonPersonOutline),
    title: 'Employee',
  },
  {
    path: '/permisstion',
    icon: () => h(IonLockClosedOutline),
    title: 'Permisstion',
    children: [
      {
        path: '/permisstion/role',
        title: 'Members',
      },
      {
        path: '/permisstion/permisstion',
        title: 'Members',
      },
    ],
  },
  {
    path: '/inventory',
    icon: () => h(IonCubeOutline),
    title: 'Inventory',
  },
  {
    type: 'group',
    title: 'System',
  },
  {
    path: '/setting',
    icon: () => h(IonCogOutline),
    title: 'Setting',
  },
  {
    path: '/send-mail',
    icon: () => h(IonSendOutline),
    title: 'Send Mail',
  },
  {
    path: '/report',
    icon: () => h(IonPieChartOutline),
    title: 'Report',
  },
]
