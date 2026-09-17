import { memo } from "react";
import {
  Ban,
  Crown,
  Eye,
  Pencil,
  ShieldCheck,
  Trash2,
} from "lucide-react";

import type { AdminUser } from "@/types/admin-users";

interface UserListRowProps {
  user: AdminUser;

  onView?: (user: AdminUser) => void;

  onEdit?: (user: AdminUser) => void;

  onBlock?: (user: AdminUser) => void;

  onDelete?: (user: AdminUser) => void;
}

const membershipStyles: Record<string, string> = {
  pro: "bg-violet-100 text-violet-700",
  premium: "bg-[#FFFBEB] text-[#B45309]",
  basic: "bg-[#EFF6FF] text-primary",
  free: "bg-secondary text-muted-foreground",
};

const statusStyles: Record<string, string> = {
  active: "bg-[#ECFDF5] text-[#065F46]",
  inactive: "bg-secondary text-muted-foreground",
  blocked: "bg-[#FFDAD6] text-[#BA1A1A]",
  suspended: "bg-[#FFFBEB] text-[#B45309]",
};

const statusDot: Record<string, string> = {
  active: "bg-[#10B981]",
  inactive: "bg-slate-400",
  blocked: "bg-red-500",
  suspended: "bg-[#F59E0B]",
};

function UserListRow({
  user,
  onView,
  onEdit,
  onBlock,
  onDelete,
}: UserListRowProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      {/* Identity */}
      <div className="relative shrink-0">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <span
          className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card ${
            statusDot[user.status] ?? "bg-slate-400"
          }`}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate text-sm font-semibold text-foreground">
            {user.name}
          </h3>
          {user.verification === "verified" && (
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-primary" />
          )}
        </div>
        <p className="truncate text-xs text-muted-foreground">{user.email}</p>
      </div>

      {/* Membership */}
      <span
        className={`hidden shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold sm:inline-flex ${
          membershipStyles[user.membership] ?? "bg-secondary text-muted-foreground"
        }`}
      >
        <Crown className="h-3 w-3" />
        {user.membership}
      </span>

      {/* Stats */}
      <div className="hidden shrink-0 items-center gap-4 text-center text-xs text-muted-foreground lg:flex">
        <div>
          <p className="font-semibold text-foreground">{user.sessions}</p>
          Sessions
        </div>
        <div>
          <p className="font-semibold text-foreground">{user.certificates}</p>
          Certs
        </div>
        <div>
          <p className="font-semibold text-foreground">
            ₹{user.totalSpent.toLocaleString()}
          </p>
          Spent
        </div>
      </div>

      {/* Completion */}
      <div className="hidden w-16 shrink-0 text-right text-xs xl:block">
        <span className="font-semibold text-primary">{user.completion}%</span>
        <p className="text-muted-foreground">complete</p>
      </div>

      {/* Status */}
      <span
        className={`hidden shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold sm:inline-flex ${
          statusStyles[user.status] ?? "bg-secondary text-foreground"
        }`}
      >
        {user.status}
      </span>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onView?.(user)}
          aria-label="View user"
          title="View"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
        >
          <Eye className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onEdit?.(user)}
          aria-label="Edit user"
          title="Edit"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onBlock?.(user)}
          aria-label="Block user"
          title="Block"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFFBEB] hover:text-[#B45309]"
        >
          <Ban className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete?.(user)}
          aria-label="Delete user"
          title="Delete"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
export default memo(UserListRow);
