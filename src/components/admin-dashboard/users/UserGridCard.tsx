import { memo } from "react";
import {
  Calendar,
  Clock,
  Eye,
  FileBadge,
  Heart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Crown,
  UserCircle2,
} from "lucide-react";

import type { AdminUser } from "@/types/admin-users";

interface UserGridCardProps {
  user: AdminUser;

  onView?: (user: AdminUser) => void;

  onEdit?: (user: AdminUser) => void;

  onBlock?: (user: AdminUser) => void;

  onDelete?: (user: AdminUser) => void;
}

function UserGridCard({
  user,
  onView,
  onEdit,
  onBlock,
  onDelete,
}: UserGridCardProps) {
  return (
    <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Cover */}

      <div className="relative h-32 overflow-hidden">

        <img
          src={user.coverImage}
          alt={user.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute right-5 top-5">

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold shadow-lg ${
              user.membership === "pro"
                ? "bg-violet-600 text-white"
                : user.membership === "premium"
                ? "bg-amber-500 text-white"
                : user.membership === "basic"
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-white"
            }`}
          >
            {user.membership.toUpperCase()}
          </span>

        </div>

      </div>

      {/* Avatar */}

      <div className="relative px-6">

        <div className="-mt-12 flex justify-center">

          <div className="relative">

            <img
              src={user.avatar}
              alt={user.name}
              className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-xl"
            />

            <span
              className={`absolute bottom-2 right-2 h-5 w-5 rounded-full border-2 border-white ${
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

        </div>

        <div className="mt-5 text-center">

          <div className="flex items-center justify-center gap-2">

            <h3 className="text-xl font-bold text-slate-900">
              {user.name}
            </h3>

            {user.verification === "verified" && (
              <ShieldCheck className="h-5 w-5 text-blue-600" />
            )}

          </div>

          <p className="mt-1 text-sm text-slate-500">
            @{user.username}
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {user.bio}
          </p>

        </div>

        <div className="mt-6 space-y-3">

          <div className="flex items-center gap-3 text-sm text-slate-600">

            <Mail className="h-4 w-4 text-slate-400" />

            <span className="truncate">
              {user.email}
            </span>

          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600">

            <Phone className="h-4 w-4 text-slate-400" />

            <span>{user.phone}</span>

          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600">

            <MapPin className="h-4 w-4 text-slate-400" />

            <span>
              {user.city}, {user.country}
            </span>

          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600">

            <Calendar className="h-4 w-4 text-slate-400" />

            <span>{user.joinedAt}</span>

          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600">

            <Clock className="h-4 w-4 text-slate-400" />

            <span>{user.lastActive}</span>

          </div>

        </div>
                {/* Statistics */}

        <div className="mt-8 grid grid-cols-2 gap-3">

          <div className="rounded-2xl bg-slate-50 p-4 text-center">
            <UserCircle2 className="mx-auto mb-2 h-5 w-5 text-blue-600" />
            <p className="text-xs text-slate-500">
              Sessions
            </p>
            <h4 className="mt-1 text-lg font-bold text-slate-900">
              {user.sessions}
            </h4>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 text-center">
            <Crown className="mx-auto mb-2 h-5 w-5 text-amber-500" />
            <p className="text-xs text-slate-500">
              Programs
            </p>
            <h4 className="mt-1 text-lg font-bold text-slate-900">
              {user.programs}
            </h4>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 text-center">
            <FileBadge className="mx-auto mb-2 h-5 w-5 text-emerald-600" />
            <p className="text-xs text-slate-500">
              Certificates
            </p>
            <h4 className="mt-1 text-lg font-bold text-slate-900">
              {user.certificates}
            </h4>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 text-center">
            <Heart className="mx-auto mb-2 h-5 w-5 text-pink-500" />
            <p className="text-xs text-slate-500">
              Mentors
            </p>
            <h4 className="mt-1 text-lg font-bold text-slate-900">
              {user.favoriteMentors}
            </h4>
          </div>

        </div>

        {/* Rating */}

        <div className="mt-7">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-sm text-slate-500">
              Reviews
            </span>

            <span className="flex items-center gap-1 font-semibold text-amber-500">

              <Star className="h-4 w-4 fill-current" />

              {user.reviews}

            </span>

          </div>

        </div>

        {/* Profile Completion */}

        <div className="mt-6">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-sm font-medium text-slate-500">
              Profile Completion
            </span>

            <span className="font-semibold text-blue-600">
              {user.completion}%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-all duration-700"
              style={{
                width: `${user.completion}%`,
              }}
            />

          </div>

        </div>

        {/* Spending */}

        <div className="mt-7 rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 p-5">

          <p className="text-sm text-slate-500">

            Lifetime Spending

          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">

            ₹{user.totalSpent.toLocaleString()}

          </h3>

        </div>

        {/* Actions */}

        <div className="mt-7 grid grid-cols-2 gap-3 pb-6">

          <button
            type="button"
            onClick={() => onView?.(user)}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white transition-all hover:bg-blue-700"
          >
            <Eye className="h-4 w-4" />

            View

          </button>

          <button
            type="button"
            onClick={() => onEdit?.(user)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-50"
          >
            Edit
          </button>

          <button
            type="button"
            onClick={() => onBlock?.(user)}
            className="rounded-2xl bg-amber-100 px-4 py-3 font-semibold text-amber-700 transition-all hover:bg-amber-200"
          >
            Block
          </button>

          <button
            type="button"
            onClick={() => onDelete?.(user)}
            className="rounded-2xl bg-red-100 px-4 py-3 font-semibold text-red-600 transition-all hover:bg-red-200"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}
export default memo(UserGridCard);