import {
  CheckCircle2,
  Eye,
  ShieldCheck,
  Star,
  XCircle,
} from "lucide-react";

import { StatusBadge } from "@/components/admin-dashboard/shared/StatusBadge";
import type { AdminMentor } from "@/types/admin-mentors";

interface MentorListRowProps {
  mentor: AdminMentor;
  onView: (mentor: AdminMentor) => void;
  onApprove: (mentor: AdminMentor) => void;
  onReject: (mentor: AdminMentor) => void;
  onVerify: (mentor: AdminMentor) => void;
  onFeature: (mentor: AdminMentor) => void;
  onUnfeature: (mentor: AdminMentor) => void;
}

const statusVariant = {
  active: "success",
  pending: "warning",
} as const;

export default function MentorListRow({
  mentor,
  onView,
  onApprove,
  onReject,
  onVerify,
  onFeature,
  onUnfeature,
}: MentorListRowProps) {
  return (
    <div className="grid grid-cols-[2.5fr_0.8fr_0.9fr_0.9fr_0.9fr_1fr_1.3fr] items-center gap-6 border-b border-border px-6 py-3 transition hover:bg-secondary">
      {/* Mentor */}
      <div className="flex items-center gap-3">
        <img
          src={mentor.avatar}
          alt={mentor.name}
          className="h-11 w-11 rounded-xl object-cover"
        />
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-foreground">{mentor.name}</h3>
          <p className="truncate text-sm text-muted-foreground">{mentor.headline}</p>
          <div className="mt-1 flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
            <span className="text-sm font-medium text-foreground">{mentor.rating}</span>
            <span className="text-xs text-muted-foreground">({mentor.totalReviews})</span>
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-foreground">{mentor.experience} yrs</p>
      </div>

      <div>
        <p className="font-semibold text-foreground">{mentor.completedSessions}</p>
      </div>

      <div>
        <p className="font-semibold text-foreground">{mentor.activePrograms}</p>
      </div>

      <div>
        <p className="font-semibold text-foreground">${mentor.earnings.toLocaleString()}</p>
      </div>

      <div>
        <StatusBadge variant={statusVariant[mentor.status as keyof typeof statusVariant] ?? "error"}>
          {mentor.status}
        </StatusBadge>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => onView(mentor)}
          aria-label="View mentor"
          title="View"
          className="rounded-xl border border-border p-2 transition hover:bg-secondary"
        >
          <Eye className="h-4 w-4 text-muted-foreground" />
        </button>

        <button
          onClick={() => onVerify(mentor)}
          aria-label="Verify mentor"
          title="Verify"
          className="icon-bg rounded-xl p-2 transition hover:brightness-95"
        >
          <ShieldCheck className="h-4 w-4 text-primary" />
        </button>

        <button
          onClick={() => onApprove(mentor)}
          aria-label="Approve mentor"
          title="Approve"
          className="icon-bg-mint rounded-xl p-2 transition hover:brightness-95"
        >
          <CheckCircle2 className="h-4 w-4" style={{ color: "#0F8F65" }} />
        </button>

        <button
          onClick={() => onReject(mentor)}
          aria-label="Reject mentor"
          title="Reject"
          className="rounded-xl p-2 transition hover:brightness-95"
          style={{ background: "#FFDAD6" }}
        >
          <XCircle className="h-4 w-4 text-destructive" />
        </button>

        {mentor.featured ? (
          <button
            type="button"
            onClick={() => onUnfeature(mentor)}
            title="Unfeature mentor"
            className="rounded-xl p-2 transition hover:brightness-95"
            style={{ background: "#FFFBEB" }}
          >
            <Star className="h-4 w-4 fill-[#B45309] text-[#B45309]" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onFeature(mentor)}
            title="Feature mentor"
            className="rounded-xl bg-secondary p-2 transition hover:brightness-95"
          >
            <Star className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>
    </div>
  );
}
