import { memo } from "react";

import {
  BadgeCheck,
  Check,
  Eye,
  Pencil,
  Star,
  Trash2,
  XCircle,
} from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { AdminEvent } from "@/types/admin-events";

interface EventListRowProps {
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

const EventListRow = ({
  event,
  onView,
  onEdit,
  onPublish,
  onCancel,
  onDelete,
}: EventListRowProps) => {
  const registrationPct = event.capacity
    ? Math.round((event.registered / event.capacity) * 100)
    : 0;

  return (
    <tr className="border-b border-border transition-colors hover:bg-secondary/40">
      {/* Event */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={event.banner}
            alt={event.title}
            className="h-10 w-14 shrink-0 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="max-w-[220px] truncate text-sm font-semibold text-foreground">
                {event.title}
              </h3>
              {event.featured && (
                <Star className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400" />
              )}
            </div>
            <div className="mt-0.5 flex items-center gap-1.5">
              <StatusBadge variant={statusVariant[event.status]}>
                {event.status}
              </StatusBadge>
              <span className="text-xs text-muted-foreground">
                {event.type} · {event.mode}
              </span>
            </div>
          </div>
        </div>
      </td>

      {/* Mentor */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src={event.mentorAvatar}
            alt={event.mentorName}
            className="h-8 w-8 shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="max-w-[9rem] truncate text-sm font-medium text-foreground">
              {event.mentorName}
            </p>
            <p className="max-w-[9rem] truncate text-xs text-muted-foreground">
              {event.mentorCompany}
            </p>
          </div>
        </div>
      </td>

      {/* Schedule */}
      <td className="px-4 py-3 text-sm">
        <p className="font-semibold text-foreground">{event.date}</p>
        <p className="text-xs text-muted-foreground">{event.time}</p>
      </td>

      {/* Rating */}
      <td className="px-4 py-3 text-sm">
        <p className="flex items-center gap-1 font-semibold text-foreground">
          <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
          {event.feedback.averageRating}
        </p>
        <p className="text-xs text-muted-foreground">
          {event.feedback.totalReviews} reviews
        </p>
      </td>

      {/* Registration */}
      <td className="px-4 py-3 text-sm">
        <p className="font-semibold text-foreground">
          {event.registered}/{event.capacity}
        </p>
        <div className="mt-1 h-1.5 w-20 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${Math.min(registrationPct, 100)}%` }}
          />
        </div>
      </td>

      {/* Revenue */}
      <td className="px-4 py-3 text-sm">
        <p className="font-semibold text-foreground">
          ₹{event.revenue.grossRevenue.toLocaleString()}
        </p>
        <p className="text-xs text-muted-foreground">gross</p>
      </td>

      {/* Analytics */}
      <td className="px-4 py-3 text-sm">
        <p className="text-foreground">{event.analytics.attendanceRate}% attend</p>
        {event.certificate.issued > 0 && (
          <p className="flex items-center gap-1 text-xs text-[#065F46]">
            <BadgeCheck className="h-3.5 w-3.5" />
            {event.certificate.issued} certified
          </p>
        )}
      </td>

      {/* Actions */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onView(event)}
            aria-label="View event"
            title="View"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onEdit(event)}
            aria-label="Edit event"
            title="Edit"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
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
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFFBEB] hover:text-[#B45309] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <XCircle className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onPublish(event)}
              aria-label="Publish event"
              title="Publish"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#ECFDF5] hover:text-[#065F46]"
            >
              <Check className="h-4 w-4" />
            </button>
          )}
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
      </td>
    </tr>
  );
};

export default memo(EventListRow);
