import {
  ArrowRight,
  BadgeCheck,
  Check,
  Eye,
  Pencil,
  Trash2,
  XCircle,
} from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/admin-dashboard/shared/StatusBadge";
import type { AdminSession } from "@/types/admin-session";

interface SessionListRowProps {
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

const paymentVariant: Record<AdminSession["paymentStatus"], StatusBadgeVariant> = {
  paid: "success",
  pending: "warning",
  refunded: "error",
};

const SessionListRow = ({
  session,
  onView,
  onEdit,
  onComplete,
  onCancel,
  onDelete,
}: SessionListRowProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      {/* Program */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-foreground">
          {session.programTitle}
        </h3>
        <p className="truncate text-xs text-muted-foreground">
          {session.sessionType}
        </p>
      </div>

      {/* Mentor -> Student */}
      <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
        <img
          src={session.mentorImage}
          alt={session.mentorName}
          className="h-7 w-7 rounded-full object-cover"
        />
        <span className="max-w-[8rem] truncate text-xs font-medium text-foreground">
          {session.mentorName}
        </span>
        <ArrowRight className="h-3 w-3 text-muted-foreground" />
        <img
          src={session.studentImage}
          alt={session.studentName}
          className="h-7 w-7 rounded-full object-cover"
        />
        <span className="max-w-[8rem] truncate text-xs font-medium text-foreground">
          {session.studentName}
        </span>
      </div>

      {/* Schedule */}
      <div className="hidden shrink-0 text-center text-xs text-muted-foreground lg:block">
        <p className="font-semibold text-foreground">{session.date}</p>
        {session.time}
      </div>

      {/* Amount */}
      <div className="hidden w-16 shrink-0 text-right text-xs xl:block">
        <span className="font-semibold text-foreground">
          ₹{session.amount.toLocaleString()}
        </span>
        <p className="text-muted-foreground">{session.duration}</p>
      </div>

      {/* Payment + certificate */}
      <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
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

      {/* Status */}
      <StatusBadge variant={statusVariant[session.status]} className="hidden shrink-0 sm:inline-flex">
        {session.status}
      </StatusBadge>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onView(session)}
          aria-label="View session"
          title="View"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
        >
          <Eye className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onEdit(session)}
          aria-label="Edit session"
          title="Edit"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onComplete(session)}
          disabled={session.status === "completed"}
          aria-label="Mark session complete"
          title="Complete"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#ECFDF5] hover:text-[#065F46] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Check className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onCancel(session)}
          disabled={session.status === "cancelled"}
          aria-label="Cancel session"
          title="Cancel"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFFBEB] hover:text-[#B45309] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <XCircle className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(session)}
          aria-label="Delete session"
          title="Delete"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SessionListRow;
