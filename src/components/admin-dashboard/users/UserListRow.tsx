import { memo } from "react";
import {
  Calendar,
  Clock,
  Eye,
  MapPin,
  ShieldCheck,
  Crown,
  Ban,
  Trash2,
  Pencil,
} from "lucide-react";

import type { AdminUser } from "@/types/admin-users";

interface UserListRowProps {
  user: AdminUser;

  onView?: (user: AdminUser) => void;

  onEdit?: (user: AdminUser) => void;

  onBlock?: (user: AdminUser) => void;

  onDelete?: (user: AdminUser) => void;
}

function UserListRow({
  user,
  onView,
  onEdit,
  onBlock,
  onDelete,
}: UserListRowProps) {
  return (
    <div className="group rounded-[28px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="grid grid-cols-12 items-center gap-6">

        {/* User */}

        <div className="col-span-12 flex items-center gap-4 xl:col-span-4">

          <div className="relative">

            <img
              src={user.avatar}
              alt={user.name}
              className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-lg"
            />

            <span
              className={`absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white ${
                user.status === "active"
                  ? "bg-[#ECFDF5]"
                  : user.status === "inactive"
                  ? "bg-slate-400"
                  : user.status === "blocked"
                  ? "bg-red-500"
                  : "bg-[#F59E0B]"
              }`}
            />

          </div>

          <div className="min-w-0 flex-1">

            <div className="flex items-center gap-2">

              <h3 className="truncate text-lg font-bold text-foreground">
                {user.name}
              </h3>

              {user.verification === "verified" && (
                <ShieldCheck className="h-5 w-5 text-primary" />
              )}

            </div>

            <p className="truncate text-sm text-muted-foreground">
              @{user.username}
            </p>

            <p className="truncate text-sm text-muted-foreground">
              {user.email}
            </p>

          </div>

        </div>

        {/* Membership */}

        <div className="col-span-6 xl:col-span-2">

          <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
              user.membership === "pro"
                ? "bg-secondary text-muted-foreground"
                : user.membership === "premium"
                ? "bg-[#FFFBEB] text-[#B45309]"
                : user.membership === "basic"
                ? "bg-[#EFF6FF] text-[#2563EB]"
                : "bg-secondary text-foreground"
            }`}
          >
            <Crown className="h-4 w-4" />
            {user.membership}
          </span>

        </div>

        {/* Location */}

        <div className="col-span-6 xl:col-span-2">

          <div className="flex items-center gap-2 text-sm text-muted-foreground">

            <MapPin className="h-4 w-4 text-muted-foreground" />

            <span>
              {user.city}, {user.country}
            </span>

          </div>

        </div>

        {/* Joined */}

        <div className="col-span-6 xl:col-span-2">

          <div className="flex items-center gap-2 text-sm text-muted-foreground">

            <Calendar className="h-4 w-4 text-muted-foreground" />

            <span>{user.joinedAt}</span>

          </div>

        </div>

        {/* Last Active */}

        <div className="col-span-6 xl:col-span-2">

          <div className="flex items-center gap-2 text-sm text-muted-foreground">

            <Clock className="h-4 w-4 text-muted-foreground" />

            <span>{user.lastActive}</span>

          </div>

        </div>
                {/* Statistics */}

        <div className="col-span-12 mt-2 grid grid-cols-2 gap-4 border-t border-border pt-5 md:grid-cols-4 xl:col-span-8 xl:mt-0 xl:border-0 xl:pt-0">

          <div className="rounded-2xl bg-secondary p-4 text-center">

            <p className="text-xs text-muted-foreground">
              Sessions
            </p>

            <h4 className="mt-2 text-lg font-bold text-foreground">
              {user.sessions}
            </h4>

          </div>

          <div className="rounded-2xl bg-secondary p-4 text-center">

            <p className="text-xs text-muted-foreground">
              Programs
            </p>

            <h4 className="mt-2 text-lg font-bold text-foreground">
              {user.programs}
            </h4>

          </div>

          <div className="rounded-2xl bg-secondary p-4 text-center">

            <p className="text-xs text-muted-foreground">
              Certificates
            </p>

            <h4 className="mt-2 text-lg font-bold text-foreground">
              {user.certificates}
            </h4>

          </div>

          <div className="rounded-2xl bg-secondary p-4 text-center">

            <p className="text-xs text-muted-foreground">
              Total Spent
            </p>

            <h4 className="mt-2 text-lg font-bold text-[#2563EB]">
              ₹{user.totalSpent.toLocaleString()}
            </h4>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex flex-wrap items-center gap-3">

          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              user.status === "active"
                ? "bg-[#ECFDF5] text-[#065F46]"
                : user.status === "inactive"
                ? "bg-secondary text-foreground"
                : user.status === "blocked"
                ? "bg-[#FFDAD6] text-[#BA1A1A]"
                : "bg-[#FFFBEB] text-[#B45309]"
            }`}
          >
            {user.status.toUpperCase()}
          </span>

          <span className="text-sm text-muted-foreground">
            Profile Completion
          </span>

          <span className="font-semibold text-primary">
            {user.completion}%
          </span>

        </div>

        <div className="flex flex-wrap gap-3">

          <button
            type="button"
            onClick={() => onView?.(user)}
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            <Eye className="h-4 w-4" />
            View
          </button>

          <button
            type="button"
            onClick={() => onEdit?.(user)}
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-secondary"
          >
            <Pencil className="h-4 w-4" />
            Edit
          </button>

          <button
            type="button"
            onClick={() => onBlock?.(user)}
            className="inline-flex items-center gap-2 rounded-2xl bg-[#FFFBEB] px-4 py-2.5 text-sm font-semibold text-[#B45309] transition hover:bg-amber-200"
          >
            <Ban className="h-4 w-4" />
            Block
          </button>

          <button
            type="button"
            onClick={() => onDelete?.(user)}
            className="inline-flex items-center gap-2 rounded-2xl bg-[#FFDAD6] px-4 py-2.5 text-sm font-semibold text-[#BA1A1A] transition hover:bg-red-200"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}
export default memo(UserListRow);