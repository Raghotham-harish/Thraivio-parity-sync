import {
  ShieldCheck,
  Users,
  KeyRound,
  Eye,
  Pencil,
  Trash2,
  BadgeCheck,
  ShieldOff,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import type {
  AdminRole,
} from "@/types/admin-role";

interface RoleGridCardProps {
  role: AdminRole;

  onView: (
    role: AdminRole
  ) => void;

  onEdit: (
    role: AdminRole
  ) => void;

  onDelete: (
    role: AdminRole
  ) => void;
}

export default function RoleGridCard({
  role,
  onView,
  onEdit,
  onDelete,
}: RoleGridCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${role.color}20` }}
          >
            <ShieldCheck className="h-5 w-5" style={{ color: role.color }} />
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-foreground">
              {role.name}
            </h3>
            <p className="truncate text-sm text-muted-foreground">
              {role.roleId}
            </p>
          </div>
        </div>

        {role.status === "active" ? (
          <Badge className="shrink-0 bg-[#ECFDF5] text-[#065F46] hover:bg-[#ECFDF5]">
            <BadgeCheck className="mr-1 h-3 w-3" />
            Active
          </Badge>
        ) : (
          <Badge variant="secondary" className="shrink-0">
            <ShieldOff className="mr-1 h-3 w-3" />
            Inactive
          </Badge>
        )}
      </div>

      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
        {role.description}
      </p>

      {/* Meta row */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Users className="h-3.5 w-3.5 text-primary" />
          <span className="font-semibold text-foreground">{role.usersCount}</span> users
        </span>
        <span className="flex items-center gap-1">
          <KeyRound className="h-3.5 w-3.5 text-primary" />
          <span className="font-semibold text-foreground">{role.permissionsCount}</span> permissions
        </span>
        <Badge variant="outline" className="capitalize">
          {role.type}
        </Badge>
      </div>

      <p className="mt-2 truncate text-xs text-muted-foreground">
        Created by <span className="font-medium text-foreground">{role.createdBy}</span> &middot; updated {role.updatedAt}
      </p>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(role)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          View
        </button>

        <button
          type="button"
          onClick={() => onEdit(role)}
          aria-label="Edit role"
          title="Edit"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onDelete(role)}
          aria-label="Delete role"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
