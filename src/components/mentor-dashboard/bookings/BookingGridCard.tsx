import { Pencil, Trash2, User } from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { Booking } from "@/types/booking";

interface BookingGridCardProps {
  booking: Booking;

  onEdit: (booking: Booking) => void;

  onDelete: (booking: Booking) => void;
}

const statusVariant: Record<Booking["status"], StatusBadgeVariant> = {
  pending: "warning",
  confirmed: "info",
  completed: "success",
  cancelled: "error",
};

const BookingGridCard = ({ booking, onEdit, onDelete }: BookingGridCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      {/* Student + status */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <div className="icon-bg flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
            <User className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">
              {booking.studentName}
            </p>
            <p className="truncate text-xs text-muted-foreground">{booking.studentEmail}</p>
          </div>
        </div>
        <StatusBadge variant={statusVariant[booking.status]} className="shrink-0">
          {booking.status}
        </StatusBadge>
      </div>

      {/* Session type */}
      <p className="mt-3 truncate text-sm font-semibold text-foreground">
        {booking.sessionType}
      </p>

      {/* Stat strip */}
      <div className="mt-2 grid grid-cols-4 divide-x divide-border rounded-xl bg-secondary py-2 text-center">
        <div>
          <p className="text-xs font-bold text-foreground">{booking.date}</p>
          <p className="text-[10px] text-muted-foreground">Date</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{booking.time}</p>
          <p className="text-[10px] text-muted-foreground">Time</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{booking.duration}</p>
          <p className="text-[10px] text-muted-foreground">Duration</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">${booking.amount}</p>
          <p className="text-[10px] text-muted-foreground">Amount</p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onEdit(booking)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(booking)}
          aria-label="Delete booking"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default BookingGridCard;
