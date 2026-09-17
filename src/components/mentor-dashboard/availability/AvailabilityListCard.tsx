import { Clock3, Pencil, Trash2 } from "lucide-react";

import { StatusBadge } from "@/components/shared/StatusBadge";
import type { Availability } from "@/types/availability";

interface AvailabilityListCardProps {
  availability: Availability;

  onEdit: (availability: Availability) => void;

  onDelete: (availability: Availability) => void;
}

const AvailabilityListCard = ({ availability, onEdit, onDelete }: AvailabilityListCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      <h3 className="w-24 shrink-0 text-sm font-semibold text-foreground">{availability.day}</h3>

      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
        {availability.slots.length > 0 ? (
          availability.slots.map((slot, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
            >
              <Clock3 className="h-3 w-3" />
              {slot.start} – {slot.end}
            </span>
          ))
        ) : (
          <span className="text-xs text-muted-foreground">No time slots set</span>
        )}
      </div>

      <StatusBadge variant={availability.enabled ? "success" : "neutral"} className="shrink-0">
        {availability.enabled ? "Available" : "Off"}
      </StatusBadge>

      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={() => onEdit(availability)}
          aria-label="Edit availability"
          title="Edit"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(availability)}
          aria-label="Delete availability"
          title="Delete"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AvailabilityListCard;
