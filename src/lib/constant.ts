import type { MenuItem } from '@/types/app'
import { h } from 'vue'
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue'

export const MENUS_DEFAULT: MenuItem[] = [
  {
    type: 'group',
    label: 'Dashboard',
  },
  {
    key: '/',
    icon: () => h(MailOutlined),
    label: 'Dashboard',
  },
  {
    key: '2',
    icon: () => h(CalendarOutlined),
    label: 'Navigation Two',
  },
  {
    type: 'divider',
  },
  {
    key: 'sub1',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Three',
    children: [
      {
        key: '3',
        label: 'Option 3',
        title: 'Option 3',
      },
      {
        key: '4',
        label: 'Option 4',
        title: 'Option 4',
      },
      {
        key: 'sub1-2',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '5',
            label: 'Option 5',
            title: 'Option 5',
          },
          {
            key: '6',
            label: 'Option 6',
            title: 'Option 6',
          },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    icon: () => h(SettingOutlined),
    label: 'Navigation Four',
    title: 'Navigation Four',
    children: [
      {
        key: '7',
        label: 'Option 7',
        title: 'Option 7',
      },
      {
        key: '8',
        label: 'Option 8',
        title: 'Option 8',
      },
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10',
      },
    ],
  },
]
