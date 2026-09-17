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
    <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Cover */}

      <div className="relative h-20 overflow-hidden">

        <img
          src={user.coverImage}
          alt={user.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0  from-black/40 via-transparent to-transparent" />

        <div className="absolute right-5 top-5">

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold shadow-lg ${
              user.membership === "pro"
                ? "bg-violet-600 text-white"
                : user.membership === "premium"
                ? "bg-[#F59E0B] text-white"
                : user.membership === "basic"
                ? "bg-primary text-white"
                : "bg-slate-700 text-white"
            }`}
          >
            {user.membership.toUpperCase()}
          </span>

        </div>

      </div>

      {/* Avatar */}

      <div className="relative px-6">

        <div className="-mt-8 flex justify-center">

          <div className="relative">

            <img
              src={user.avatar}
              alt={user.name}
              className="h-16 w-16 rounded-full border-4 border-white object-cover shadow-xl"
            />

            <span
              className={`absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white ${
                user.status === "active"
                  ? "bg-[#10B981]"
                  : user.status === "inactive"
                  ? "bg-slate-400"
                  : user.status === "blocked"
                  ? "bg-red-500"
                  : "bg-[#F59E0B]"
              }`}
            />

          </div>

        </div>

        <div className="mt-3 text-center">

          <div className="flex items-center justify-center gap-2">

            <h3 className="text-lg font-bold text-foreground">
              {user.name}
            </h3>

            {user.verification === "verified" && (
              <ShieldCheck className="h-4 w-4 text-primary" />
            )}

          </div>

          <p className="text-sm text-muted-foreground">
            @{user.username}
          </p>

          <p className="mt-1 line-clamp-2 text-sm leading-5 text-muted-foreground">
            {user.bio}
          </p>

        </div>

        <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm text-muted-foreground">

          <div className="flex items-center gap-2 truncate">

            <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />

            <span className="truncate">
              {user.email}
            </span>

          </div>

          <div className="flex items-center gap-2">

            <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />

            <span>{user.phone}</span>

          </div>

          <div className="flex items-center gap-2">

            <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />

            <span>
              {user.city}, {user.country}
            </span>

          </div>

          <div className="flex items-center gap-2">

            <Calendar className="h-4 w-4 shrink-0 text-muted-foreground" />

            <span>{user.joinedAt}</span>

          </div>

          <div className="flex items-center gap-2">

            <Clock className="h-4 w-4 shrink-0 text-muted-foreground" />

            <span>{user.lastActive}</span>

          </div>

        </div>
        {/* Statistics */}

        <div className="mt-4 grid grid-cols-2 gap-2">

          <div className="rounded-xl bg-secondary p-2.5 text-center">
            <UserCircle2 className="mx-auto mb-1 h-4 w-4 text-primary" />
            <p className="text-xs text-muted-foreground">
              Sessions
            </p>
            <h4 className="text-base font-bold text-foreground">
              {user.sessions}
            </h4>
          </div>

          <div className="rounded-xl bg-secondary p-2.5 text-center">
            <Crown className="mx-auto mb-1 h-4 w-4 text-amber-500" />
            <p className="text-xs text-muted-foreground">
              Programs
            </p>
            <h4 className="text-base font-bold text-foreground">
              {user.programs}
            </h4>
          </div>

          <div className="rounded-xl bg-secondary p-2.5 text-center">
            <FileBadge className="mx-auto mb-1 h-4 w-4 text-[#0F8F65]" />
            <p className="text-xs text-muted-foreground">
              Certificates
            </p>
            <h4 className="text-base font-bold text-foreground">
              {user.certificates}
            </h4>
          </div>

          <div className="rounded-xl bg-secondary p-2.5 text-center">
            <Heart className="mx-auto mb-1 h-4 w-4 text-pink-500" />
            <p className="text-xs text-muted-foreground">
              Mentors
            </p>
            <h4 className="text-base font-bold text-foreground">
              {user.favoriteMentors}
            </h4>
          </div>

        </div>

        {/* Rating */}

        <div className="mt-4 flex items-center justify-between">

          <span className="text-sm text-muted-foreground">
            Reviews
          </span>

          <span className="flex items-center gap-1 font-semibold text-amber-500">

            <Star className="h-4 w-4 fill-current" />

            {user.reviews}

          </span>

        </div>

        {/* Profile Completion */}

        <div className="mt-3">

          <div className="mb-1.5 flex items-center justify-between">

            <span className="text-sm font-medium text-muted-foreground">
              Profile Completion
            </span>

            <span className="font-semibold text-primary">
              {user.completion}%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-secondary">

            <div
              className="h-full rounded-full bg-primary transition-all duration-700"
              style={{
                width: `${user.completion}%`,
              }}
            />

          </div>

        </div>

        {/* Spending */}

        <div className="mt-4 rounded-xl bg-secondary p-3">

          <p className="text-sm text-muted-foreground">

            Lifetime Spending

          </p>

          <h3 className="mt-0.5 text-xl font-bold text-foreground">

            ₹{user.totalSpent.toLocaleString()}

          </h3>

        </div>

        {/* Actions */}

        <div className="mt-4 grid grid-cols-2 gap-2 pb-5">

          <button
            type="button"
            onClick={() => onView?.(user)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 font-semibold text-white transition-all hover:bg-primary/90"
          >
            <Eye className="h-4 w-4" />

            View

          </button>

          <button
            type="button"
            onClick={() => onEdit?.(user)}
            className="rounded-xl border border-border bg-card px-4 py-2 font-semibold text-foreground transition-all hover:bg-secondary"
          >
            Edit
          </button>

          <button
            type="button"
            onClick={() => onBlock?.(user)}
            className="rounded-xl bg-[#FFFBEB] px-4 py-2 font-semibold text-[#B45309] transition-all hover:bg-amber-200"
          >
            Block
          </button>

          <button
            type="button"
            onClick={() => onDelete?.(user)}
            className="rounded-xl bg-[#FFDAD6] px-4 py-2 font-semibold text-red-600 transition-all hover:bg-red-200"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}
export default memo(UserGridCard);