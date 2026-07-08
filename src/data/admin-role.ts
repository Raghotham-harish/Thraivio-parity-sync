import type {
  AdminRole,
  RoleStats,
} from "@/types/admin-role";

export const roleStats: RoleStats = {
  totalRoles: 12,

  activeRoles: 9,

  inactiveRoles: 3,

  systemRoles: 5,

  customRoles: 7,

  totalUsersAssigned: 148,

  averagePermissions: 34,

  recentlyUpdated: 5,
};

export const roles: AdminRole[] = [
  {
    id: "1",

    roleId: "ROLE-001",

    name: "Super Admin",

    description:
      "Full access to every module and platform configuration.",

    type: "system",

    status: "active",

    color: "#ef4444",

    usersCount: 2,

    permissionsCount: 48,

    createdAt: "10 Jan 2026",

    updatedAt: "08 Jul 2026",

    createdBy: "System",

    permissions: [
      {
        module: "Dashboard",
        view: true,
        create: true,
        update: true,
        delete: true,
        export: true,
      },
      {
        module: "Users",
        view: true,
        create: true,
        update: true,
        delete: true,
        export: true,
      },
      {
        module: "Payments",
        view: true,
        create: true,
        update: true,
        delete: true,
        export: true,
      },
    ],
  },

  {
    id: "2",

    roleId: "ROLE-002",

    name: "Support Manager",

    description:
      "Manage customer support tickets and monitor issue resolution.",

    type: "system",

    status: "active",

    color: "#3b82f6",

    usersCount: 8,

    permissionsCount: 26,

    createdAt: "15 Jan 2026",

    updatedAt: "06 Jul 2026",

    createdBy: "System",

    permissions: [
      {
        module: "Dashboard",
        view: true,
        create: false,
        update: false,
        delete: false,
        export: true,
      },
      {
        module: "Support",
        view: true,
        create: true,
        update: true,
        delete: false,
        export: true,
      },
      {
        module: "Users",
        view: true,
        create: false,
        update: false,
        delete: false,
        export: false,
      },
    ],
  },
    {
    id: "3",

    roleId: "ROLE-003",

    name: "Content Manager",

    description:
      "Manage CMS pages, blogs, banners and platform content.",

    type: "custom",

    status: "active",

    color: "#10b981",

    usersCount: 5,

    permissionsCount: 22,

    createdAt: "22 Jan 2026",

    updatedAt: "07 Jul 2026",

    createdBy: "Super Admin",

    permissions: [
      {
        module: "Dashboard",
        view: true,
        create: false,
        update: false,
        delete: false,
        export: false,
      },
      {
        module: "CMS",
        view: true,
        create: true,
        update: true,
        delete: true,
        export: true,
      },
      {
        module: "Reports",
        view: true,
        create: false,
        update: false,
        delete: false,
        export: true,
      },
    ],
  },

  {
    id: "4",

    roleId: "ROLE-004",

    name: "Finance Manager",

    description:
      "Manage payments, invoices, refunds and financial reports.",

    type: "custom",

    status: "active",

    color: "#f59e0b",

    usersCount: 4,

    permissionsCount: 24,

    createdAt: "28 Jan 2026",

    updatedAt: "05 Jul 2026",

    createdBy: "Super Admin",

    permissions: [
      {
        module: "Dashboard",
        view: true,
        create: false,
        update: false,
        delete: false,
        export: true,
      },
      {
        module: "Payments",
        view: true,
        create: true,
        update: true,
        delete: false,
        export: true,
      },
      {
        module: "Reports",
        view: true,
        create: false,
        update: false,
        delete: false,
        export: true,
      },
    ],
  },
    {
    id: "5",

    roleId: "ROLE-005",

    name: "Mentor Manager",

    description:
      "Manage mentors, programs, sessions and mentor approvals.",

    type: "custom",

    status: "active",

    color: "#8b5cf6",

    usersCount: 12,

    permissionsCount: 30,

    createdAt: "05 Feb 2026",

    updatedAt: "08 Jul 2026",

    createdBy: "Super Admin",

    permissions: [
      {
        module: "Mentors",
        view: true,
        create: true,
        update: true,
        delete: true,
        export: true,
      },
      {
        module: "Programs",
        view: true,
        create: true,
        update: true,
        delete: true,
        export: true,
      },
      {
        module: "Sessions",
        view: true,
        create: true,
        update: true,
        delete: false,
        export: true,
      },
    ],
  },

  {
    id: "6",

    roleId: "ROLE-006",

    name: "Read Only Auditor",

    description:
      "View platform analytics, reports and operational data without modification access.",

    type: "system",

    status: "inactive",

    color: "#64748b",

    usersCount: 3,

    permissionsCount: 14,

    createdAt: "12 Feb 2026",

    updatedAt: "02 Jul 2026",

    createdBy: "System",

    permissions: [
      {
        module: "Dashboard",
        view: true,
        create: false,
        update: false,
        delete: false,
        export: true,
      },
      {
        module: "Reports",
        view: true,
        create: false,
        update: false,
        delete: false,
        export: true,
      },
      {
        module: "Payments",
        view: true,
        create: false,
        update: false,
        delete: false,
        export: true,
      },
    ],
  },
];

export const roleStatuses = [
  {
    label: "All Status",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
] as const;

export const roleTypes = [
  {
    label: "All Types",
    value: "all",
  },
  {
    label: "System",
    value: "system",
  },
  {
    label: "Custom",
    value: "custom",
  },
] as const;

export const permissionModules = [
  "Dashboard",
  "Mentors",
  "Users",
  "Sessions",
  "Programs",
  "Events",
  "Certificates",
  "Payments",
  "Reports",
  "Reviews",
  "Notifications",
  "CMS",
  "Support",
  "Settings",
] as const;