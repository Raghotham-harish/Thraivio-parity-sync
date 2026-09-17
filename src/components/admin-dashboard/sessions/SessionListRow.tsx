import {
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

const SessionListRow = ({
  session,
  onView,
  onEdit,
  onComplete,
  onCancel,
  onDelete,
}: SessionListRowProps) => {
  return (
    <tr className="border-b border-border transition-colors hover:bg-secondary/40">
      {/* Session */}
      <td className="px-4 py-3">
        <p className="max-w-[10rem] truncate text-sm font-semibold text-foreground">
          {session.programTitle}
        </p>
        <p className="max-w-[10rem] truncate text-xs text-muted-foreground">
          {session.sessionType}
        </p>
      </td>

      {/* Mentor */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src={session.mentorImage}
            alt={session.mentorName}
            className="h-8 w-8 shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="max-w-[9rem] truncate text-sm font-medium text-foreground">
              {session.mentorName}
            </p>
            <p className="max-w-[9rem] truncate text-xs text-muted-foreground">
              {session.mentorCompany}
            </p>
          </div>
        </div>
      </td>

      {/* Student */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src={session.studentImage}
            alt={session.studentName}
            className="h-8 w-8 shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="max-w-[9rem] truncate text-sm font-medium text-foreground">
              {session.studentName}
            </p>
            <p className="max-w-[9rem] truncate text-xs text-muted-foreground">
              {session.studentEmail}
            </p>
          </div>
        </div>
      </td>

      {/* Schedule */}
      <td className="px-4 py-3 text-sm">
        <p className="font-semibold text-foreground">{session.date}</p>
        <p className="text-xs text-muted-foreground">
          {session.time} · {session.duration}
        </p>
      </td>

      {/* Platform */}
      <td className="px-4 py-3">
        <span className="rounded-full bg-[#EFF6FF] px-2.5 py-1 text-xs font-semibold text-primary">
          {session.meetingPlatform}
        </span>
      </td>

      {/* Payment */}
      <td className="px-4 py-3">
        <StatusBadge variant={paymentVariant[session.paymentStatus]}>
          {session.paymentStatus}
        </StatusBadge>
        <p className="mt-1 text-xs font-semibold text-foreground">
          ₹{session.amount.toLocaleString()}
        </p>
      </td>

      {/* Attendance */}
      <td className="px-4 py-3">
        <StatusBadge variant={attendanceVariant[session.attendance]}>
          {session.attendance}
        </StatusBadge>
      </td>

      {/* Status */}
      <td className="px-4 py-3">
        <StatusBadge variant={statusVariant[session.status]}>
          {session.status}
        </StatusBadge>
      </td>

      {/* Actions */}
      <td className="px-4 py-3">
        <div className="flex items-center justify-end gap-1">
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
      </td>
    </tr>
  );
};

export default SessionListRow;
