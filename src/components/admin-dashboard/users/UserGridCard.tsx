import { memo } from "react";
import {
  Crown,
  Eye,
  Pencil,
  ShieldBan,
  ShieldCheck,
  Star,
  Trash2,
} from "lucide-react";

import type { AdminUser } from "@/types/admin-users";

interface UserGridCardProps {
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

const statusDot: Record<string, string> = {
  active: "bg-[#10B981]",
  inactive: "bg-slate-400",
  blocked: "bg-red-500",
  suspended: "bg-[#F59E0B]",
};

function UserGridCard({
  user,
  onView,
  onEdit,
  onBlock,
  onDelete,
}: UserGridCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="relative shrink-0">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span
            className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card ${
              statusDot[user.status] ?? "bg-slate-400"
            }`}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate font-semibold text-foreground">
              {user.name}
            </h3>
            {user.verification === "verified" && (
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-primary" />
            )}
          </div>
          <p className="truncate text-sm text-muted-foreground">
            {user.email}
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            membershipStyles[user.membership] ?? "bg-secondary text-muted-foreground"
          }`}
        >
          {user.membership}
        </span>
      </div>

      {/* Stat strip */}
      <div className="mt-3 grid grid-cols-4 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="text-sm font-bold text-foreground">{user.sessions}</p>
          <p className="text-[11px] text-muted-foreground">Sessions</p>
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{user.programs}</p>
          <p className="text-[11px] text-muted-foreground">Programs</p>
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{user.certificates}</p>
          <p className="text-[11px] text-muted-foreground">Certs</p>
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{user.favoriteMentors}</p>
          <p className="text-[11px] text-muted-foreground">Mentors</p>
        </div>
      </div>

      {/* Meta row: reviews, completion, spend */}
      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
          {user.reviews} reviews
        </span>
        <span>{user.completion}% complete</span>
        <span className="flex items-center gap-1 font-semibold text-foreground">
          <Crown className="h-3.5 w-3.5 text-amber-500" />
          ₹{user.totalSpent.toLocaleString()}
        </span>
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView?.(user)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          View
        </button>

        <button
          type="button"
          onClick={() => onEdit?.(user)}
          aria-label="Edit user"
          title="Edit"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onBlock?.(user)}
          aria-label="Block user"
          title="Block"
          className="rounded-lg border border-border p-2 text-[#B45309] transition-colors hover:bg-[#FFFBEB]"
        >
          <ShieldBan className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onDelete?.(user)}
          aria-label="Delete user"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
export default memo(UserGridCard);
