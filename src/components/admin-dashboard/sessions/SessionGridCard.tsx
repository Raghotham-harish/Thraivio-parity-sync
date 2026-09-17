import {
  ArrowRight,
  BadgeCheck,
  Check,
  Eye,
  MonitorPlay,
  Pencil,
  Trash2,
  XCircle,
} from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { AdminSession } from "@/types/admin-session";

interface SessionGridCardProps {
  session: AdminSession;

  onView: (session: AdminSession) => void;

  onEdit: (session: AdminSession) => void;

  onComplete: (session: AdminSession) => void;

  onCancel: (session: AdminSession) => void;

  onDelete: (session: AdminSession) => void;
}

const statusVariant: Record<AdminSession["status"], StatusBadgeVariant> = {
  scheduled: "info",
  live: "success",
  completed: "neutral",
  cancelled: "error",
  missed: "neutral",
};

const attendanceVariant: Record<AdminSession["attendance"], StatusBadgeVariant> = {
  waiting: "warning",
  joined: "info",
  completed: "success",
  absent: "error",
};

const paymentVariant: Record<AdminSession["paymentStatus"], StatusBadgeVariant> = {
  paid: "success",
  pending: "warning",
  refunded: "error",
};

const SessionGridCard = ({
  session,
  onView,
  onEdit,
  onComplete,
  onCancel,
  onDelete,
}: SessionGridCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Program + status */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-foreground">
            {session.programTitle}
          </h3>
          <p className="truncate text-xs text-muted-foreground">
            {session.sessionType}
          </p>
        </div>
        <StatusBadge variant={statusVariant[session.status]} className="shrink-0">
          {session.status}
        </StatusBadge>
      </div>

      {/* Mentor -> Student */}
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-secondary px-3 py-2">
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          <img
            src={session.mentorImage}
            alt={session.mentorName}
            className="h-6 w-6 shrink-0 rounded-full object-cover"
          />
          <span className="truncate text-sm font-medium text-foreground">
            {session.mentorName}
          </span>
        </div>
        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          <img
            src={session.studentImage}
            alt={session.studentName}
            className="h-6 w-6 shrink-0 rounded-full object-cover"
          />
          <span className="truncate text-sm font-medium text-foreground">
            {session.studentName}
          </span>
        </div>
      </div>

      {/* Stat strip */}
      <div className="mt-3 grid grid-cols-4 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="text-xs font-bold text-foreground">{session.date}</p>
          <p className="text-[10px] text-muted-foreground">Date</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{session.time}</p>
          <p className="text-[10px] text-muted-foreground">Time</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{session.duration}</p>
          <p className="text-[10px] text-muted-foreground">Duration</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">
            ₹{session.amount.toLocaleString()}
          </p>
          <p className="text-[10px] text-muted-foreground">Amount</p>
        </div>
      </div>

      {/* Meta: meeting platform, attendance, payment, certificate */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
        <span className="inline-flex items-center gap-1 text-muted-foreground">
          <MonitorPlay className="h-3.5 w-3.5" />
          {session.meetingPlatform}
        </span>
        <StatusBadge variant={attendanceVariant[session.attendance]}>
          {session.attendance}
        </StatusBadge>
        <StatusBadge variant={paymentVariant[session.paymentStatus]}>
          {session.paymentStatus}
        </StatusBadge>
        {session.certificateIssued && (
          <BadgeCheck
            className="h-4 w-4 text-[#065F46]"
            aria-label="Certificate issued"
          />
        )}
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(session)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          View
        </button>

        <button
          type="button"
          onClick={() => onEdit(session)}
          aria-label="Edit session"
          title="Edit"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onComplete(session)}
          disabled={session.status === "completed"}
          aria-label="Mark session complete"
          title="Complete"
          className="rounded-lg border border-border p-2 text-[#065F46] transition-colors hover:bg-[#ECFDF5] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Check className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onCancel(session)}
          disabled={session.status === "cancelled"}
          aria-label="Cancel session"
          title="Cancel"
          className="rounded-lg border border-border p-2 text-[#B45309] transition-colors hover:bg-[#FFFBEB] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <XCircle className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onDelete(session)}
          aria-label="Delete session"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SessionGridCard;
