import {
  AlertTriangle,
  Eye,
  RefreshCcw,
  Video,
} from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { Session } from "@/types/session";

interface SessionGridCardProps {
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

const SessionGridCard = ({
  session,
  onView,
  onReschedule,
  onCancel,
  onJoin,
}: SessionGridCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Mentor + status */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <img
            src={session.mentorImage}
            alt={session.mentorName}
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">
              {session.mentorName}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {session.mentorCompany}
            </p>
          </div>
        </div>
        <StatusBadge variant={statusVariant[session.status]} className="shrink-0">
          {session.status}
        </StatusBadge>
      </div>

      {/* Session type */}
      <p className="mt-3 truncate text-sm font-semibold text-foreground">
        {session.sessionType}
      </p>

      {/* Stat strip */}
      <div className="mt-2 grid grid-cols-4 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
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
          <p className="text-xs font-bold text-foreground">${session.amount}</p>
          <p className="text-[10px] text-muted-foreground">Amount</p>
        </div>
      </div>

      {/* Payment + reference */}
      <div className="mt-2.5 flex items-center justify-between text-xs">
        <StatusBadge variant={paymentVariant[session.paymentStatus]}>
          {session.paymentStatus}
        </StatusBadge>
        <span className="text-muted-foreground">{session.bookingReference}</span>
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(session)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          Details
        </button>

        <button
          type="button"
          onClick={() => onJoin(session)}
          disabled={!session.canJoin}
          aria-label="Join session"
          title={session.canJoin ? "Join" : "Session closed"}
          className="rounded-lg border border-border p-2 text-primary transition-colors hover:bg-[#EFF6FF] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Video className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onReschedule(session)}
          disabled={!session.canReschedule}
          aria-label="Reschedule session"
          title={session.canReschedule ? "Reschedule" : "Locked"}
          className="rounded-lg border border-border p-2 text-[#B45309] transition-colors hover:bg-[#FFFBEB] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <RefreshCcw className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onCancel(session)}
          disabled={!session.canCancel}
          aria-label="Cancel session"
          title={session.canCancel ? "Cancel" : "Not allowed"}
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <AlertTriangle className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SessionGridCard;
