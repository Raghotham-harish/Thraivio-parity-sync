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
    <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

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
                  ? "bg-emerald-500"
                  : user.status === "inactive"
                  ? "bg-slate-400"
                  : user.status === "blocked"
                  ? "bg-red-500"
                  : "bg-amber-500"
              }`}
            />

          </div>

          <div className="min-w-0 flex-1">

            <div className="flex items-center gap-2">

              <h3 className="truncate text-lg font-bold text-slate-900">
                {user.name}
              </h3>

              {user.verification === "verified" && (
                <ShieldCheck className="h-5 w-5 text-blue-600" />
              )}

            </div>

            <p className="truncate text-sm text-slate-500">
              @{user.username}
            </p>

            <p className="truncate text-sm text-slate-500">
              {user.email}
            </p>

          </div>

        </div>

        {/* Membership */}

        <div className="col-span-6 xl:col-span-2">

          <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
              user.membership === "pro"
                ? "bg-violet-100 text-violet-700"
                : user.membership === "premium"
                ? "bg-amber-100 text-amber-700"
                : user.membership === "basic"
                ? "bg-blue-100 text-blue-700"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            <Crown className="h-4 w-4" />
            {user.membership}
          </span>

        </div>

        {/* Location */}

        <div className="col-span-6 xl:col-span-2">

          <div className="flex items-center gap-2 text-sm text-slate-600">

            <MapPin className="h-4 w-4 text-slate-400" />

            <span>
              {user.city}, {user.country}
            </span>

          </div>

        </div>

        {/* Joined */}

        <div className="col-span-6 xl:col-span-2">

          <div className="flex items-center gap-2 text-sm text-slate-600">

            <Calendar className="h-4 w-4 text-slate-400" />

            <span>{user.joinedAt}</span>

          </div>

        </div>

        {/* Last Active */}

        <div className="col-span-6 xl:col-span-2">

          <div className="flex items-center gap-2 text-sm text-slate-600">

            <Clock className="h-4 w-4 text-slate-400" />

            <span>{user.lastActive}</span>

          </div>

        </div>
                {/* Statistics */}

        <div className="col-span-12 mt-2 grid grid-cols-2 gap-4 border-t border-slate-200 pt-5 md:grid-cols-4 xl:col-span-8 xl:mt-0 xl:border-0 xl:pt-0">

          <div className="rounded-2xl bg-slate-50 p-4 text-center">

            <p className="text-xs text-slate-500">
              Sessions
            </p>

            <h4 className="mt-2 text-lg font-bold text-slate-900">
              {user.sessions}
            </h4>

          </div>

          <div className="rounded-2xl bg-slate-50 p-4 text-center">

            <p className="text-xs text-slate-500">
              Programs
            </p>

            <h4 className="mt-2 text-lg font-bold text-slate-900">
              {user.programs}
            </h4>

          </div>

          <div className="rounded-2xl bg-slate-50 p-4 text-center">

            <p className="text-xs text-slate-500">
              Certificates
            </p>

            <h4 className="mt-2 text-lg font-bold text-slate-900">
              {user.certificates}
            </h4>

          </div>

          <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center">

            <p className="text-xs text-slate-500">
              Total Spent
            </p>

            <h4 className="mt-2 text-lg font-bold text-blue-700">
              ₹{user.totalSpent.toLocaleString()}
            </h4>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex flex-wrap items-center gap-3">

          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              user.status === "active"
                ? "bg-emerald-100 text-emerald-700"
                : user.status === "inactive"
                ? "bg-slate-100 text-slate-700"
                : user.status === "blocked"
                ? "bg-red-100 text-red-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {user.status.toUpperCase()}
          </span>

          <span className="text-sm text-slate-500">
            Profile Completion
          </span>

          <span className="font-semibold text-blue-600">
            {user.completion}%
          </span>

        </div>

        <div className="flex flex-wrap gap-3">

          <button
            type="button"
            onClick={() => onView?.(user)}
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Eye className="h-4 w-4" />
            View
          </button>

          <button
            type="button"
            onClick={() => onEdit?.(user)}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Pencil className="h-4 w-4" />
            Edit
          </button>

          <button
            type="button"
            onClick={() => onBlock?.(user)}
            className="inline-flex items-center gap-2 rounded-2xl bg-amber-100 px-4 py-2.5 text-sm font-semibold text-amber-700 transition hover:bg-amber-200"
          >
            <Ban className="h-4 w-4" />
            Block
          </button>

          <button
            type="button"
            onClick={() => onDelete?.(user)}
            className="inline-flex items-center gap-2 rounded-2xl bg-red-100 px-4 py-2.5 text-sm font-semibold text-red-700 transition hover:bg-red-200"
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