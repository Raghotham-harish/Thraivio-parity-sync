import { Pencil, Trash2, User } from "lucide-react";

import { StatusBadge, type StatusBadgeVariant } from "@/components/shared/StatusBadge";
import type { Booking } from "@/types/booking";

interface BookingListCardProps {
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

const BookingListCard = ({ booking, onEdit, onDelete }: BookingListCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      <div className="icon-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
        <User className="h-4 w-4 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground">{booking.studentName}</p>
        <p className="truncate text-xs text-muted-foreground">{booking.sessionType}</p>
      </div>

      <div className="hidden shrink-0 text-center text-xs text-muted-foreground sm:block">
        <p className="font-semibold text-foreground">{booking.date}</p>
        {booking.time} · {booking.duration}
      </div>

      <div className="hidden w-14 shrink-0 text-right text-xs lg:block">
        <span className="font-semibold text-foreground">${booking.amount}</span>
      </div>

      <StatusBadge variant={statusVariant[booking.status]} className="shrink-0">
        {booking.status}
      </StatusBadge>

      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onEdit(booking)}
          aria-label="Edit booking"
          title="Edit"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(booking)}
          aria-label="Delete booking"
          title="Delete"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default BookingListCard;
