import { memo } from "react";

import {
  BadgeCheck,
  CalendarDays,
  Check,
  Eye,
  Pencil,
  Star,
  Trash2,
  XCircle,
} from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/admin-dashboard/shared/StatusBadge";
import type { AdminEvent } from "@/types/admin-events";

interface EventGridCardProps {
  event: AdminEvent;

  onView: (event: AdminEvent) => void;

  onEdit: (event: AdminEvent) => void;

  onPublish: (event: AdminEvent) => void;

  onCancel: (event: AdminEvent) => void;

  onDelete: (event: AdminEvent) => void;
}

const statusVariant: Record<AdminEvent["status"], StatusBadgeVariant> = {
  draft: "neutral",
  published: "info",
  live: "error",
  upcoming: "warning",
  completed: "success",
  cancelled: "error",
};

const EventGridCard = ({
  event,
  onView,
  onEdit,
  onPublish,
  onCancel,
  onDelete,
}: EventGridCardProps) => {
  const registrationPct = event.capacity
    ? Math.round((event.registered / event.capacity) * 100)
    : 0;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md">
      {/* Banner */}
      <div className="relative h-28 overflow-hidden">
        <img
          src={event.banner}
          alt={event.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute left-2 top-2 flex flex-wrap gap-1.5">
          <StatusBadge variant={statusVariant[event.status]}>
            {event.status}
          </StatusBadge>
          {event.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 text-[11px] font-bold text-foreground">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </span>
          )}
        </div>
        <span className="absolute bottom-2 left-2 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {event.category}
        </span>
      </div>

      <div className="p-4">
        {/* Title + mentor */}
        <h3 className="truncate font-semibold text-foreground">{event.title}</h3>
        <div className="mt-1.5 flex items-center gap-1.5">
          <img
            src={event.mentorAvatar}
            alt={event.mentorName}
            className="h-5 w-5 shrink-0 rounded-full object-cover"
          />
          <span className="truncate text-xs text-muted-foreground">
            {event.mentorName} · {event.mentorCompany}
          </span>
        </div>

        {/* Meta line */}
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">
            {event.date} · {event.time} · {event.type} · {event.mode}
          </span>
        </div>

        {/* Stat strip */}
        <div className="mt-3 grid grid-cols-3 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
          <div>
            <p className="text-xs font-bold text-foreground">{event.registered}</p>
            <p className="text-[10px] text-muted-foreground">Registered</p>
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">{event.capacity}</p>
            <p className="text-[10px] text-muted-foreground">Capacity</p>
          </div>
          <div>
            <p className="flex items-center justify-center gap-0.5 text-xs font-bold text-foreground">
              <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
              {event.feedback.averageRating}
            </p>
            <p className="text-[10px] text-muted-foreground">Rating</p>
          </div>
        </div>

        {/* Registration progress */}
        <div className="mt-2.5 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${Math.min(registrationPct, 100)}%` }}
            />
          </div>
          <span className="shrink-0 text-[11px] font-semibold text-muted-foreground">
            {registrationPct}%
          </span>
        </div>

        {/* Revenue + certificate */}
        <div className="mt-2.5 flex items-center justify-between text-xs">
          <span className="font-semibold text-foreground">
            ₹{event.revenue.grossRevenue.toLocaleString()} gross
          </span>
          {event.certificate.issued > 0 && (
            <span className="inline-flex items-center gap-1 text-[#065F46]">
              <BadgeCheck className="h-3.5 w-3.5" />
              {event.certificate.issued} certified
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onView(event)}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            <Eye className="h-4 w-4" />
            View
          </button>

          <button
            type="button"
            onClick={() => onEdit(event)}
            aria-label="Edit event"
            title="Edit"
            className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Pencil className="h-4 w-4" />
          </button>

          {event.published ? (
            <button
              type="button"
              onClick={() => onCancel(event)}
              disabled={event.status === "cancelled"}
              aria-label="Cancel event"
              title="Cancel"
              className="rounded-lg border border-border p-2 text-[#B45309] transition-colors hover:bg-[#FFFBEB] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <XCircle className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onPublish(event)}
              aria-label="Publish event"
              title="Publish"
              className="rounded-lg border border-border p-2 text-[#065F46] transition-colors hover:bg-[#ECFDF5]"
            >
              <Check className="h-4 w-4" />
            </button>
          )}

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
    </div>
  );
};

export default memo(EventGridCard);
