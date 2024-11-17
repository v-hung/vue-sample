export type MenuItem = {
  path?: string
  type?: 'divider' | 'group'
  roles?: string[]
  title: string
  icon?: () => VNode
  children?: MenuItem[]
  badge?: number
}
