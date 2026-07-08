export type RoleStatus =
  | "active"
  | "inactive";

export type RoleType =
  | "system"
  | "custom";

export interface RolePermission {
  module: string;

  view: boolean;

  create: boolean;

  update: boolean;

  delete: boolean;

  export: boolean;
}

export interface AdminRole {
  id: string;

  roleId: string;

  name: string;

  description: string;

  type: RoleType;

  status: RoleStatus;

  color: string;

  usersCount: number;

  permissionsCount: number;

  createdAt: string;

  updatedAt: string;

  createdBy: string;

  permissions: RolePermission[];
}

export interface RoleStats {
  totalRoles: number;

  activeRoles: number;

  inactiveRoles: number;

  systemRoles: number;

  customRoles: number;

  totalUsersAssigned: number;

  averagePermissions: number;

  recentlyUpdated: number;
}
export interface RoleFilters {
  search: string;

  status: RoleStatus | "all";

  type: RoleType | "all";

  sortBy:
    | "newest"
    | "oldest"
    | "name"
    | "users"
    | "permissions";
}

export interface RoleTableColumn {
  id:
    | "role"
    | "type"
    | "status"
    | "users"
    | "permissions"
    | "updatedAt"
    | "actions";

  label: string;

  sortable: boolean;
}