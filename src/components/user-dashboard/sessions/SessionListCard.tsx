import {
  AlertTriangle,
  Eye,
  RefreshCcw,
  Video,
} from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { Session } from "@/types/session";

interface SessionListCardProps {
  session: Session;

  onView: (session: Session) => void;

  onReschedule: (session: Session) => void;

  onCancel: (session: Session) => void;

  onJoin: (session: Session) => void;
}

const statusVariant: Record<Session["status"], StatusBadgeVariant> = {
  upcoming: "info",
  completed: "success",
  cancelled: "error",
};

const paymentVariant: Record<Session["paymentStatus"], StatusBadgeVariant> = {
  paid: "success",
  pending: "warning",
  refunded: "error",
};

const SessionListCard = ({
  session,
  onView,
  onReschedule,
  onCancel,
  onJoin,
}: SessionListCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      {/* Mentor */}
      <img
        src={session.mentorImage}
        alt={session.mentorName}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground">
          {session.sessionType}
        </p>
        <p className="truncate text-xs text-muted-foreground">
          {session.mentorName} · {session.mentorCompany}
        </p>
      </div>

      {/* Schedule */}
      <div className="hidden shrink-0 text-center text-xs text-muted-foreground sm:block">
        <p className="font-semibold text-foreground">{session.date}</p>
        {session.time} · {session.duration}
      </div>

      {/* Amount */}
      <div className="hidden w-16 shrink-0 text-right text-xs lg:block">
        <span className="font-semibold text-foreground">${session.amount}</span>
        <p className="text-muted-foreground">{session.bookingReference}</p>
      </div>

      {/* Payment */}
      <StatusBadge variant={paymentVariant[session.paymentStatus]} className="hidden shrink-0 sm:inline-flex">
        {session.paymentStatus}
      </StatusBadge>

      {/* Status */}
      <StatusBadge variant={statusVariant[session.status]} className="shrink-0">
        {session.status}
      </StatusBadge>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onView(session)}
          aria-label="View session details"
          title="Details"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
        >
          <Eye className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onJoin(session)}
          disabled={!session.canJoin}
          aria-label="Join session"
          title={session.canJoin ? "Join" : "Session closed"}
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#EFF6FF] hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Video className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onReschedule(session)}
          disabled={!session.canReschedule}
          aria-label="Reschedule session"
          title={session.canReschedule ? "Reschedule" : "Locked"}
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFFBEB] hover:text-[#B45309] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <RefreshCcw className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onCancel(session)}
          disabled={!session.canCancel}
          aria-label="Cancel session"
          title={session.canCancel ? "Cancel" : "Not allowed"}
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <AlertTriangle className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SessionListCard;
