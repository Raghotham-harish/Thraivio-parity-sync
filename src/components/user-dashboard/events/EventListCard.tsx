import {
  BadgeCheck,
  Eye,
  Video,
  XCircle,
} from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { UserEvent } from "@/types/user-event";

interface EventListCardProps {
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

const EventListCard = ({ event, onView, onJoin, onCancel }: EventListCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      <img
        src={event.mentorImage}
        alt={event.mentorName}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate text-sm font-semibold text-foreground">{event.title}</h3>
          {event.certificateAvailable && (
            <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-[#065F46]" />
          )}
        </div>
        <p className="truncate text-xs text-muted-foreground">
          {event.mentorName} · {event.type} · {event.mode}
        </p>
      </div>

      <div className="hidden shrink-0 text-center text-xs text-muted-foreground sm:block">
        <p className="font-semibold text-foreground">{event.date}</p>
        {event.time}
      </div>

      <div className="hidden w-20 shrink-0 text-right text-xs lg:block">
        <span className="font-semibold text-foreground">{event.seatsLeft}</span>
        <p className="text-muted-foreground">seats left</p>
      </div>

      <StatusBadge variant={statusVariant[event.eventStatus]} className="shrink-0">
        {event.eventStatus}
      </StatusBadge>

      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onView(event)}
          aria-label="View event details"
          title="Details"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
        >
          <Eye className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onJoin(event)}
          disabled={event.eventStatus !== "upcoming"}
          aria-label="Join event"
          title="Join"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#EFF6FF] hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Video className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onCancel(event)}
          disabled={event.eventStatus !== "upcoming"}
          aria-label="Cancel registration"
          title="Cancel"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <XCircle className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default EventListCard;
