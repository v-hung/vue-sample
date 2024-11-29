import type { MenuItem } from '@/types/app'
import { h } from 'vue'
import GroupIcon from '@/assets/GroupIcon.vue'
import HomeIcon from '@/assets/HomeIcon.vue'
import TimeIcon from '@/assets/TimeIcon.vue'
import InboxIcon from '@/assets/InboxIcon.vue'
import ChalkboardIcon from '@/assets/ChalkboardIcon.vue'
import UserCircleIcon from '@/assets/UserCircleIcon.vue'
import PieChartIcon from '@/assets/PieChartIcon.vue'
import SelectionIcon from '@/assets/SelectionIcon.vue'
import LockIcon from '@/assets/LockIcon.vue'
import PackageIcon from '@/assets/PackageIcon.vue'
import CogIcon from '@/assets/CogIcon.vue'
import MailSendIcon from '@/assets/MailSendIcon.vue'

export const MENUS_DEFAULT: MenuItem[] = [
  {
    type: 'group',
    title: 'menus.menu',
  },
  {
    path: '/',
    icon: () => h(HomeIcon),
    title: 'menus.home',
  },
  {
    path: '/inbox',
    icon: () => h(InboxIcon),
    title: 'menus.inbox',
    badge: 4,
  },
  {
    path: '/timesheet',
    icon: () => h(TimeIcon),
    title: 'Timesheet',
  },
  {
    path: '/metting',
    icon: () => h(ChalkboardIcon),
    title: 'Metting',
  },
  {
    type: 'group',
    title: 'Manager',
  },
  {
    path: '/project',
    icon: () => h(SelectionIcon),
    title: 'Project',
  },
  {
    path: '/team',
    icon: () => h(GroupIcon),
    title: 'Team',
  },
  {
    path: '/employee',
    icon: () => h(UserCircleIcon),
    title: 'Employee',
  },
  {
    path: '/permisstion',
    icon: () => h(LockIcon),
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
    icon: () => h(PackageIcon),
    title: 'Inventory',
  },
  {
    type: 'group',
    title: 'System',
  },
  {
    path: '/setting',
    icon: () => h(CogIcon),
    title: 'Setting',
  },
  {
    path: '/send-mail',
    icon: () => h(MailSendIcon),
    title: 'Send Mail',
  },
  {
    path: '/report',
    icon: () => h(PieChartIcon),
    title: 'Report',
  },
]
