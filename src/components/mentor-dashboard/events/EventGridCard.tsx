import { CalendarDays, Pencil, Trash2, Users } from "lucide-react";

import type { Event } from "@/types/event";

interface EventGridCardProps {
  event: Event;

  onEdit: (event: Event) => void;

  onDelete: (event: Event) => void;
}

const EventGridCard = ({ event, onEdit, onDelete }: EventGridCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Date + title */}
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-secondary">
          <span className="text-[10px] font-semibold uppercase text-muted-foreground">
            {event.month}
          </span>
          <span className="text-sm font-bold text-foreground">{event.day}</span>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-foreground">{event.title}</h3>
          <p className="truncate text-xs text-muted-foreground">
            {event.type} · {event.mode}
          </p>
        </div>
      </div>

      {/* Stat strip */}
      <div className="mt-3 grid grid-cols-3 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="text-xs font-bold text-foreground">{event.weekday}</p>
          <p className="text-[10px] text-muted-foreground">Day</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{event.time}</p>
          <p className="text-[10px] text-muted-foreground">Time</p>
        </div>
        <div>
          <p className="flex items-center justify-center gap-1 text-xs font-bold text-foreground">
            <Users className="h-3 w-3" />
            {event.registered}
          </p>
          <p className="text-[10px] text-muted-foreground">Registered</p>
        </div>
      </div>

      {/* Seats left */}
      <div className="mt-2.5 flex items-center gap-1.5 text-xs text-muted-foreground">
        <CalendarDays className="h-3.5 w-3.5" />
        {event.seatsLeft} seats left
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onEdit(event)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(event)}
          aria-label="Delete event"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default EventGridCard;
