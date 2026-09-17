import {
  BadgeCheck,
  Eye,
  Video,
  XCircle,
} from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { UserEvent } from "@/types/user-event";

interface EventGridCardProps {
  event: UserEvent;

  onView: (event: UserEvent) => void;

  onJoin: (event: UserEvent) => void;

  onCancel: (event: UserEvent) => void;
}

const statusVariant: Record<UserEvent["eventStatus"], StatusBadgeVariant> = {
  upcoming: "info",
  attended: "success",
  cancelled: "error",
};

const EventGridCard = ({ event, onView, onJoin, onCancel }: EventGridCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Title + status */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-foreground">{event.title}</h3>
          <p className="truncate text-xs text-muted-foreground">
            {event.type} · {event.mode}
          </p>
        </div>
        <StatusBadge variant={statusVariant[event.eventStatus]} className="shrink-0">
          {event.eventStatus}
        </StatusBadge>
      </div>

      {/* Mentor */}
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-secondary px-3 py-2">
        <img
          src={event.mentorImage}
          alt={event.mentorName}
          className="h-6 w-6 shrink-0 rounded-full object-cover"
        />
        <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
          {event.mentorName}
        </span>
        <span className="shrink-0 text-xs text-muted-foreground">{event.mentorCompany}</span>
      </div>

      {/* Stat strip */}
      <div className="mt-3 grid grid-cols-3 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="text-xs font-bold text-foreground">{event.date}</p>
          <p className="text-[10px] text-muted-foreground">Date</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{event.time}</p>
          <p className="text-[10px] text-muted-foreground">Time</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{event.seatsLeft}</p>
          <p className="text-[10px] text-muted-foreground">Seats left</p>
        </div>
      </div>

      {/* Certificate */}
      {event.certificateAvailable && (
        <div className="mt-2.5 flex items-center gap-1 text-xs text-[#065F46]">
          <BadgeCheck className="h-3.5 w-3.5" />
          Certificate available
        </div>
      )}

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(event)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          Details
        </button>

        <button
          type="button"
          onClick={() => onJoin(event)}
          disabled={event.eventStatus !== "upcoming"}
          aria-label="Join event"
          title="Join"
          className="rounded-lg border border-border p-2 text-primary transition-colors hover:bg-[#EFF6FF] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Video className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onCancel(event)}
          disabled={event.eventStatus !== "upcoming"}
          aria-label="Cancel registration"
          title="Cancel"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <XCircle className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default EventGridCard;
