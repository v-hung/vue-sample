import type { PermissionNameEnum, UserWithPermissionDto } from '@/generate-api'

export const checkPermission = (
  user: UserWithPermissionDto,
  permission: PermissionNameEnum,
) => {
  return user.roles.some(role =>
    role.permissions.some(p => p.name === permission),
  )
}
