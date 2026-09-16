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
    <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Cover */}

      <div className="relative h-36 overflow-hidden">

        {mentor.coverImage ? (
  <img
    src={mentor.coverImage}
    alt={mentor.name}
    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
  />
) : (
  <div className="h-full w-full bg-slate-200" />
)}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Featured */}

        {mentor.featured && (
          <div className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white shadow">

            Featured

          </div>
        )}

        {/* Verification */}

        <div className="absolute right-4 top-4">

          {mentor.verification === "verified" && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">

              <ShieldCheck className="h-5 w-5" />

            </div>
          )}

          {mentor.verification === "pending" && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg">

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

        {mentor.avatar ? (
  <img
    src={mentor.avatar}
    alt={mentor.name}
    className="-mt-12 h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
  />
) : (
  <div className="-mt-12 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-slate-200 shadow-lg">
    <span className="text-xl font-bold text-slate-500">
      {mentor.name?.charAt(0).toUpperCase() || "M"}
    </span>
  </div>
)}

        <div className="mt-4">

          <div className="flex items-start justify-between">

            <div>

              <h3 className="text-xl font-bold text-slate-900">

                {mentor.name}

              </h3>

              <p className="mt-1 text-sm text-slate-500">

                @{mentor.username}

              </p>

            </div>

            <button className="rounded-xl p-2 transition hover:bg-slate-100">

              <MoreVertical className="h-5 w-5 text-slate-500" />

            </button>

          </div>

          <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">

            {mentor.headline}

          </p>
                    {/* Rating */}

          <div className="mt-5 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />

              <span className="font-semibold text-slate-900">
                {mentor.rating}
              </span>

              <span className="text-sm text-slate-500">
                ({mentor.totalReviews} Reviews)
              </span>

            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                mentor.available
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {mentor.available
                ? "Available"
                : "Unavailable"}
            </span>

          </div>

          {/* Stats */}

          <div className="mt-6 grid grid-cols-2 gap-4">

            <div className="rounded-2xl bg-slate-50 p-4">

              <div className="flex items-center gap-2">

                <Award className="h-5 w-5 text-blue-600" />

                <span className="text-xs text-slate-500">
                  Experience
                </span>

              </div>

              <p className="mt-2 text-lg font-bold text-slate-900">

                {mentor.experience} Years

              </p>

            </div>

            <div className="rounded-2xl bg-slate-50 p-4">

              <div className="flex items-center gap-2">

                <Calendar className="h-5 w-5 text-emerald-600" />

                <span className="text-xs text-slate-500">
                  Sessions
                </span>

              </div>

              <p className="mt-2 text-lg font-bold text-slate-900">

                {mentor.completedSessions}

              </p>

            </div>

            <div className="rounded-2xl bg-slate-50 p-4">

              <div className="flex items-center gap-2">

                <BookOpen className="h-5 w-5 text-violet-600" />

                <span className="text-xs text-slate-500">
                  Programs
                </span>

              </div>

              <p className="mt-2 text-lg font-bold text-slate-900">

                {mentor.activePrograms}

              </p>

            </div>

            <div className="rounded-2xl bg-slate-50 p-4">

              <div className="flex items-center gap-2">

                <Wallet className="h-5 w-5 text-amber-600" />

                <span className="text-xs text-slate-500">
                  Earnings
                </span>

              </div>

              <p className="mt-2 text-lg font-bold text-slate-900">

                ${mentor.earnings.toLocaleString()}

              </p>

            </div>

          </div>

          {/* Skills */}

          <div className="mt-6 flex flex-wrap gap-2">

            {mentor.skills.slice(0, 4).map((skill) => (

              <span
                key={skill.id}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
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
                  ? "bg-violet-100 text-violet-700"
                  : mentor.membership === "pro"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {mentor.membership}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                mentor.status === "active"
                  ? "bg-emerald-100 text-emerald-700"
                  : mentor.status === "pending"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-red-100 text-red-700"
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
              className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <Eye className="h-4 w-4" />

              View

            </button>

            <button
              type="button"
              onClick={() => onVerify(mentor)}
              className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-blue-600 font-medium text-white transition hover:bg-blue-700"
            >
              <ShieldCheck className="h-4 w-4" />

              Verify

            </button>

            <button
              type="button"
              onClick={() => onApprove(mentor)}
              className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-emerald-600 font-medium text-white transition hover:bg-emerald-700"
            >
              <CheckCircle2 className="h-4 w-4" />

              Approve

            </button>

            <button
              type="button"
              onClick={() => onReject(mentor)}
              className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-red-600 font-medium text-white transition hover:bg-red-700"
            >
              <XCircle className="h-4 w-4" />

              Reject

            </button>

            {mentor.featured ? (
  <button
    type="button"
    onClick={() => onUnfeature(mentor)}
    className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 font-medium text-amber-700 transition hover:bg-amber-100"
  >
    <Star className="h-4 w-4 fill-current" />

    Unfeature
  </button>
) : (
  <button
    type="button"
    onClick={() => onFeature(mentor)}
    className="flex h-11 items-center justify-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 font-medium text-amber-700 transition hover:bg-amber-100"
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