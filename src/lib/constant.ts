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
    title: 'Menu',
  },
  {
    path: '/',
    icon: () => h(HomeIcon),
    title: 'Home',
  },
  {
    path: '/inbox',
    icon: () => h(InboxIcon),
    title: 'Inbox',
    badge: 4,
  },
  {
    path: '/timesheet',
    icon: () => h(TimeIcon),
    title: 'Timesheet',
  },
  {
    path: '/mettings',
    icon: () => h(ChalkboardIcon),
    title: 'Mettings',
  },
  {
    type: 'group',
    title: 'Manager',
  },
  {
    path: '/projects',
    icon: () => h(SelectionIcon),
    title: 'Projects',
  },
  {
    path: '/teams',
    icon: () => h(GroupIcon),
    title: 'Teams',
  },
  {
    path: '/members',
    icon: () => h(UserCircleIcon),
    title: 'Members',
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
    path: '/settings',
    icon: () => h(CogIcon),
    title: 'Settings',
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
