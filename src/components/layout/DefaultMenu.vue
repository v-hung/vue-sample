<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useAppStore } from '@/stores/app'
import { UserOutlined } from '@ant-design/icons-vue'
import MenuItemBadge from '../UI/MenuItemBadge.vue'
import Simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'
import { useRouter } from 'vue-router'
import IonMenu from '~icons/ion/menu'
import IonClose from '~icons/ion/close'
import { useAccountStore } from '@/stores/account'
import type { Key } from 'ant-design-vue/es/_util/type'

// account
const accountStore = useAccountStore()

const router = useRouter()
const appStore = useAppStore()

const getSelectedKeys = (path: string) => {
  let parts = path
    .split('/')
    .filter((_, index) => index !== 0)
    .map((_, index, array) => `/${array.slice(0, index + 1).join('/')}`)

  return parts
}

const getOpenKeys = (path: string) => {
  for (let parent of appStore.accessibleMenus) {
    if (!parent.path) {
      continue
    }

    const child = parent.children?.find(c => c.path === path)
    if (child) {
      return [parent.path]
    }
  }
  return ['']
}

const selectedKeys = ref(getSelectedKeys(router.currentRoute.value.path))
const openKeys = ref<Key[]>(getOpenKeys(router.currentRoute.value.path))

console.log(selectedKeys.value)

watch(
  () => router.currentRoute.value.path,
  path => {
    selectedKeys.value = getSelectedKeys(path)
    openKeys.value = getOpenKeys(path)
  },
)

// menu mobile
const isShowMenu = ref(false)

const handelToggleMenu = (show?: boolean) => {
  isShowMenu.value = show != undefined ? show : !isShowMenu.value
}

const handelMenuClick = (route: string) => {
  handelToggleMenu(false)
  router.push(route)
}
</script>

<template>
  <div
    class="invisible fixed left-0 top-0 z-10 h-full w-full bg-black/50 opacity-0 transition-all duration-300 lg:!invisible lg:!opacity-0"
    :class="{ '!visible !opacity-100': isShowMenu }"
    @click.self="handelToggleMenu(false)"
  ></div>
  <div
    class="fixed z-10 h-screen w-64 flex-none -translate-x-full bg-white transition-transform duration-300 lg:static lg:translate-x-0 lg:bg-transparent"
    :class="{ '!translate-x-0': isShowMenu }"
  >
    <Simplebar class="fixed h-full w-full px-3 py-2">
      <a-dropdown
        :trigger="['click']"
        placement="bottomLeft"
        :arrow="{ pointAtCenter: false }"
      >
        <div
          class="sticky top-2 z-10 flex cursor-pointer gap-4 rounded border border-solid border-gray-200 bg-white p-2 shadow-sm"
        >
          <a-avatar shape="square" :size="40">
            <template #icon><UserOutlined /></template>
          </a-avatar>
          <div class="h-10 whitespace-nowrap">
            <h1 class="mb-0 text-base font-semibold capitalize">
              {{ accountStore.user?.name }}
            </h1>
            <p class="mb-0 text-xs text-gray-600">
              {{ accountStore.user?.email }}
            </p>
          </div>
        </div>
        <template #overlay>
          <DropdownUser />
        </template>
      </a-dropdown>
      <a-menu
        :selectedKeys="selectedKeys"
        :openKeys="openKeys"
        mode="inline"
        @click="e => handelMenuClick(e.key.toString())"
      >
        <template
          v-for="(menu, index) in appStore.accessibleMenus"
          :key="index"
        >
          <template v-if="menu.type == 'group'">
            <a-menu-item-group :title="$t(menu.title)" :key="menu.path" />
          </template>
          <template v-else-if="menu.children && menu.children.length > 0">
            <a-sub-menu
              :icon="menu.icon"
              :title="$t(menu.title)"
              :key="menu.path"
            >
              <template
                v-for="(child, childIndex) in menu.children"
                :key="'child-' + childIndex"
              >
                <MenuItemBadge :menu="child" />
              </template>
            </a-sub-menu>
          </template>
          <template v-else>
            <MenuItemBadge :menu="menu" />
          </template>
        </template>
      </a-menu>
    </Simplebar>

    <div class="absolute left-full top-1/2 -translate-x-1 lg:hidden">
      <a-button type="primary" @click.prevent="handelToggleMenu()" class="px-1">
        <component :is="!isShowMenu ? IonMenu : IonClose"></component>
      </a-button>
    </div>
  </div>
</template>

<style>
.ant-menu-light {
  background-color: transparent;
}

.ant-menu-light.ant-menu-root.ant-menu-inline {
  border: none;
}

.ant-menu-light.ant-menu-inline .ant-menu-item,
.ant-menu-light.ant-menu-inline .ant-menu-submenu-title {
  padding-left: 16px !important;
  padding-right: 16px !important;
  margin-left: 0px;
  margin-right: 0px;
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
  width: 100%;
}

/* .ant-menu-light.ant-menu-inline .ant-menu-sub.ant-menu-inline {
  background-color: theme('colors.blue.50');
} */

.ant-menu-light.ant-menu-inline .ant-menu-submenu .ant-menu-item {
  padding-left: 48px !important;
}

.ant-menu-light.ant-menu-inline .ant-menu-item-selected,
.ant-menu-light.ant-menu-inline
  .ant-menu-submenu-selected
  .ant-menu-submenu-title {
  color: theme('colors.primary.600');
}

.ant-menu-light .ant-menu-item-selected {
  border: 1px solid theme('colors.primary.100');
  background-color: theme('colors.primary.100');
}

.ant-menu-light .ant-menu-item-group-title {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
}

.ant-menu-item-icon {
  opacity: 0.6;
}

.ant-menu-light .ant-menu-item-group {
  margin-top: 16px;
}

.simplebar-scrollbar:before {
  background-color: theme('colors.gray.600');
}
</style>
