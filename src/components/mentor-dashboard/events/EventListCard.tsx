import { Pencil, Trash2, Users } from "lucide-react";

import type { Event } from "@/types/event";

interface EventListCardProps {
  event: Event;

  onEdit: (event: Event) => void;

  onDelete: (event: Event) => void;
}

const EventListCard = ({ event, onEdit, onDelete }: EventListCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-secondary">
        <span className="text-[10px] font-semibold uppercase text-muted-foreground">
          {event.month}
        </span>
        <span className="text-sm font-bold text-foreground">{event.day}</span>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-foreground">{event.title}</h3>
        <p className="truncate text-xs text-muted-foreground">
          {event.type} · {event.mode}
        </p>
      </div>

      <div className="hidden shrink-0 text-center text-xs text-muted-foreground sm:block">
        <p className="font-semibold text-foreground">{event.weekday}</p>
        {event.time}
      </div>

      <div className="hidden shrink-0 items-center gap-1 text-xs text-muted-foreground lg:flex">
        <Users className="h-3.5 w-3.5" />
        {event.registered} registered · {event.seatsLeft} left
      </div>

      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onEdit(event)}
          aria-label="Edit event"
          title="Edit"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(event)}
          aria-label="Delete event"
          title="Delete"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default EventListCard;
