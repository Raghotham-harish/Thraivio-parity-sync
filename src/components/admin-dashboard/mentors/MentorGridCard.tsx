import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock3,
  Eye,
  MoreVertical,
  ShieldCheck,
  Star,
  Wallet,
  XCircle,
} from "lucide-react";

import type { AdminMentor } from "@/types/admin-mentors";

interface MentorGridCardProps {
  mentor: AdminMentor;

  onView: (mentor: AdminMentor) => void;

  onApprove: (mentor: AdminMentor) => void;

  onReject: (mentor: AdminMentor) => void;

  onVerify: (mentor: AdminMentor) => void;

  onFeature: (mentor: AdminMentor) => void;

  onUnfeature: (mentor: AdminMentor) => void;
}

export default function MentorGridCard({
  mentor,
  onView,
  onApprove,
  onReject,
  onVerify,
  onFeature,
  onUnfeature
}: MentorGridCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Cover */}

      <div className="relative h-36 overflow-hidden">

        <img
          src={mentor.coverImage}
          alt={mentor.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0  from-black/60 via-black/10 to-transparent" />

        {/* Featured */}

        {mentor.featured && (
          <div className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white shadow">

            Featured

          </div>
        )}

        {/* Verification */}

        <div className="absolute right-4 top-4">

          {mentor.verification === "verified" && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ECFDF5]0 text-white shadow-lg">

              <ShieldCheck className="h-5 w-5" />

            </div>
          )}

          {mentor.verification === "pending" && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F59E0B] text-white shadow-lg">

              <Clock3 className="h-5 w-5" />

            </div>
          )}

          {mentor.verification === "rejected" && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-lg">

              <XCircle className="h-5 w-5" />

            </div>
          )}

        </div>

      </div>

      {/* Profile */}

      <div className="relative px-6 pb-6">

        <img
          src={mentor.avatar}
          alt={mentor.name}
          className="-mt-12 h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
        />

        <div className="mt-4">

          <div className="flex items-start justify-between">

            <div>

              <h3 className="text-xl font-bold text-foreground">

                {mentor.name}

              </h3>

              <p className="mt-1 text-sm text-muted-foreground">

                @{mentor.username}

              </p>

            </div>

            <button className="rounded-xl p-2 transition hover:bg-secondary">

              <MoreVertical className="h-5 w-5 text-muted-foreground" />

            </button>

          </div>

          <p className="mt-4 line-clamp-2 text-sm leading-6 text-muted-foreground">

            {mentor.headline}

          </p>
                    {/* Rating */}

          <div className="mt-5 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <Star className="h-5 w-5 fill-[#F59E0B] text-[#F59E0B]" />

              <span className="font-semibold text-foreground">
                {mentor.rating}
              </span>

              <span className="text-sm text-muted-foreground">
                ({mentor.totalReviews} Reviews)
              </span>

            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                mentor.available
                  ? "bg-[#ECFDF5] text-[#065F46]"
                  : "bg-[#FFDAD6] text-[#BA1A1A]"
              }`}
            >
              {mentor.available
                ? "Available"
                : "Unavailable"}
            </span>

          </div>

          {/* Stats */}

          <div className="mt-6 grid grid-cols-2 gap-4">

            <div className="rounded-2xl bg-secondary p-4">

              <div className="flex items-center gap-2">

                <Award className="h-5 w-5 text-primary" />

                <span className="text-xs text-muted-foreground">
                  Experience
                </span>

              </div>

              <p className="mt-2 text-lg font-bold text-foreground">

                {mentor.experience} Years

              </p>

            </div>

            <div className="rounded-2xl bg-secondary p-4">

              <div className="flex items-center gap-2">

                <Calendar className="h-5 w-5 text-[#0F8F65]" />

                <span className="text-xs text-muted-foreground">
                  Sessions
                </span>

              </div>

              <p className="mt-2 text-lg font-bold text-foreground">

                {mentor.completedSessions}

              </p>

            </div>

            <div className="rounded-2xl bg-secondary p-4">

              <div className="flex items-center gap-2">

                <BookOpen className="h-5 w-5 text-violet-600" />

                <span className="text-xs text-muted-foreground">
                  Programs
                </span>

              </div>

              <p className="mt-2 text-lg font-bold text-foreground">

                {mentor.activePrograms}

              </p>

            </div>

            <div className="rounded-2xl bg-secondary p-4">

              <div className="flex items-center gap-2">

                <Wallet className="h-5 w-5 text-amber-600" />

                <span className="text-xs text-muted-foreground">
                  Earnings
                </span>

              </div>

              <p className="mt-2 text-lg font-bold text-foreground">

                ${mentor.earnings.toLocaleString()}

              </p>

            </div>

          </div>

          {/* Skills */}

          <div className="mt-6 flex flex-wrap gap-2">

            {mentor.skills.slice(0, 4).map((skill) => (

              <span
                key={skill.id}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#2563EB]"
              >
                {skill.name}
              </span>

            ))}

          </div>

          {/* Membership & Status */}

          <div className="mt-6 flex items-center justify-between">

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                mentor.membership === "enterprise"
                  ? "bg-secondary text-muted-foreground"
                  : mentor.membership === "pro"
                  ? "bg-[#EFF6FF] text-[#2563EB]"
                  : "bg-secondary text-foreground"
              }`}
            >
              {mentor.membership}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                mentor.status === "active"
                  ? "bg-[#ECFDF5] text-[#065F46]"
                  : mentor.status === "pending"
                  ? "bg-[#FFFBEB] text-[#B45309]"
                  : "bg-[#FFDAD6] text-[#BA1A1A]"
              }`}
            >
              {mentor.status}
            </span>

          </div>

          {/* Actions */}

          <div className="mt-8 grid grid-cols-2 gap-3">

            <button
              type="button"
              onClick={() => onView(mentor)}
              className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-border bg-card font-medium text-foreground transition hover:bg-secondary"
            >
              <Eye className="h-4 w-4" />

              View

            </button>

            <button
              type="button"
              onClick={() => onVerify(mentor)}
              className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-primary font-medium text-white transition hover:bg-primary/90"
            >
              <ShieldCheck className="h-4 w-4" />

              Verify

            </button>

            <button
              type="button"
              onClick={() => onApprove(mentor)}
              className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-[#10B981] font-medium text-white transition hover:bg-[#0da271]"
            >
              <CheckCircle2 className="h-4 w-4" />

              Approve

            </button>

            <button
              type="button"
              onClick={() => onReject(mentor)}
              className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-destructive font-medium text-white transition hover:bg-destructive/90"
            >
              <XCircle className="h-4 w-4" />

              Reject

            </button>

            {mentor.featured ? (
  <button
    type="button"
    onClick={() => onUnfeature(mentor)}
    className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 font-medium text-[#B45309] transition hover:bg-[#FFFBEB]"
  >
    <Star className="h-4 w-4 fill-current" />

    Unfeature
  </button>
) : (
  <button
    type="button"
    onClick={() => onFeature(mentor)}
    className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 font-medium text-[#B45309] transition hover:bg-[#FFFBEB]"
  >
    <Star className="h-4 w-4" />

    Feature
  </button>
)}

          </div>

        </div>

      </div>

    </div>
  );
}