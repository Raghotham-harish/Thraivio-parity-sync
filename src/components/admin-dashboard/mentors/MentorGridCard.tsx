import {
  CheckCircle2,
  Eye,
  ShieldCheck,
  Star,
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

const membershipStyles: Record<string, string> = {
  enterprise: "bg-secondary text-muted-foreground",
  pro: "bg-[#EFF6FF] text-primary",
  free: "bg-secondary text-foreground",
};

const statusStyles: Record<string, string> = {
  active: "bg-[#ECFDF5] text-[#065F46]",
  pending: "bg-[#FFFBEB] text-[#B45309]",
  suspended: "bg-[#FFDAD6] text-[#BA1A1A]",
};

export default function MentorGridCard({
  mentor,
  onView,
  onApprove,
  onReject,
  onVerify,
  onFeature,
  onUnfeature,
}: MentorGridCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="relative shrink-0">
          <img
            src={mentor.avatar}
            alt={mentor.name}
            className="h-11 w-11 rounded-full object-cover"
          />
          {mentor.verification === "verified" && (
            <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-card bg-[#10B981]">
              <ShieldCheck className="h-2.5 w-2.5 text-white" />
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-foreground">
            {mentor.name}
          </h3>
          <p className="truncate text-sm text-muted-foreground">
            @{mentor.username}
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1">
          {mentor.featured && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
              Featured
            </span>
          )}
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold capitalize ${
              membershipStyles[mentor.membership] ?? "bg-secondary text-foreground"
            }`}
          >
            {mentor.membership}
          </span>
        </div>
      </div>

      <p className="mt-2 line-clamp-1 text-sm text-muted-foreground">
        {mentor.headline}
      </p>

      {/* Rating + status */}
      <div className="mt-2 flex items-center justify-between text-sm">
        <span className="flex items-center gap-1 text-foreground">
          <Star className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
          <span className="font-semibold">{mentor.rating}</span>
          <span className="text-xs text-muted-foreground">
            ({mentor.totalReviews})
          </span>
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold capitalize ${
            statusStyles[mentor.status] ?? "bg-secondary text-foreground"
          }`}
        >
          {mentor.status}
        </span>
      </div>

      {/* Stat strip */}
      <div className="mt-3 grid grid-cols-4 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="text-sm font-bold text-foreground">{mentor.experience}y</p>
          <p className="text-[11px] text-muted-foreground">Exp</p>
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{mentor.completedSessions}</p>
          <p className="text-[11px] text-muted-foreground">Sessions</p>
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{mentor.activePrograms}</p>
          <p className="text-[11px] text-muted-foreground">Programs</p>
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">
            ${mentor.earnings.toLocaleString()}
          </p>
          <p className="text-[11px] text-muted-foreground">Earned</p>
        </div>
      </div>

      {/* Skills */}
      {mentor.skills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {mentor.skills.slice(0, 3).map((skill) => (
            <span
              key={skill.id}
              className="rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[11px] font-semibold text-primary"
            >
              {skill.name}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(mentor)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          View
        </button>

        <button
          type="button"
          onClick={() => onVerify(mentor)}
          aria-label="Verify mentor"
          title="Verify"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
        >
          <ShieldCheck className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onApprove(mentor)}
          aria-label="Approve mentor"
          title="Approve"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-[#ECFDF5] hover:text-[#065F46]"
        >
          <CheckCircle2 className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onReject(mentor)}
          aria-label="Reject mentor"
          title="Reject"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
        >
          <XCircle className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => (mentor.featured ? onUnfeature(mentor) : onFeature(mentor))}
          aria-label={mentor.featured ? "Unfeature mentor" : "Feature mentor"}
          title={mentor.featured ? "Unfeature" : "Feature"}
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-amber-50 hover:text-amber-600"
        >
          <Star className={`h-4 w-4 ${mentor.featured ? "fill-current text-amber-500" : ""}`} />
        </button>
      </div>
    </div>
  );
}
