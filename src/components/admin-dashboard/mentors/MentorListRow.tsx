import {
  CheckCircle2,
  Eye,
  ShieldCheck,
  Star,
  XCircle,
} from "lucide-react";

import type { AdminMentor } from "@/types/admin-mentors";

interface MentorListRowProps {
  mentor: AdminMentor;

  onView: (mentor: AdminMentor) => void;

  onApprove: (mentor: AdminMentor) => void;

  onReject: (mentor: AdminMentor) => void;

  onVerify: (mentor: AdminMentor) => void;
}

export default function MentorListRow({
  mentor,
  onView,
  onApprove,
  onReject,
  onVerify,
}: MentorListRowProps) {
  return (
    <div className="grid grid-cols-[2.5fr_0.8fr_0.9fr_0.9fr_0.9fr_1fr_1.3fr] items-center gap-6 border-b border-slate-200 px-6 py-5 transition hover:bg-slate-50">

      {/* Mentor */}

      <div className="flex items-center gap-4">

        <img
          src={mentor.avatar}
          alt={mentor.name}
          className="h-14 w-14 rounded-2xl object-cover"
        />

        <div>

          <h3 className="font-semibold text-slate-900">
            {mentor.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {mentor.headline}
          </p>

          <div className="mt-2 flex items-center gap-2">

            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

            <span className="text-sm font-medium">
              {mentor.rating}
            </span>

            <span className="text-xs text-slate-400">
              ({mentor.totalReviews})
            </span>

          </div>

        </div>

      </div>

      {/* Experience */}

      <div>

        <p className="font-semibold text-slate-900">
          {mentor.experience} yrs
        </p>

      </div>

      {/* Sessions */}

      <div>

        <p className="font-semibold text-slate-900">
          {mentor.completedSessions}
        </p>

      </div>

      {/* Programs */}

      <div>

        <p className="font-semibold text-slate-900">
          {mentor.activePrograms}
        </p>

      </div>

      {/* Earnings */}

      <div>

        <p className="font-semibold text-slate-900">
          ${mentor.earnings.toLocaleString()}
        </p>

      </div>

      {/* Status */}

      <div>

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

      <div className="flex items-center justify-end gap-2">

        <button
          onClick={() => onView(mentor)}
          className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100"
        >
          <Eye className="h-4 w-4 text-slate-600" />
        </button>

        <button
          onClick={() => onVerify(mentor)}
          className="rounded-xl bg-blue-100 p-2 transition hover:bg-blue-200"
        >
          <ShieldCheck className="h-4 w-4 text-blue-700" />
        </button>

        <button
          onClick={() => onApprove(mentor)}
          className="rounded-xl bg-emerald-100 p-2 transition hover:bg-emerald-200"
        >
          <CheckCircle2 className="h-4 w-4 text-emerald-700" />
        </button>

        <button
          onClick={() => onReject(mentor)}
          className="rounded-xl bg-red-100 p-2 transition hover:bg-red-200"
        >
          <XCircle className="h-4 w-4 text-red-700" />
        </button>

      </div>

    </div>
  );
}