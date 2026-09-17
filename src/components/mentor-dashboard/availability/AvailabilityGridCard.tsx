import { Clock3, Pencil, Trash2 } from "lucide-react";

import { StatusBadge } from "@/components/shared/StatusBadge";
import type { Availability } from "@/types/availability";

interface AvailabilityGridCardProps {
  availability: Availability;

  onEdit: (availability: Availability) => void;

  onDelete: (availability: Availability) => void;
}

const AvailabilityGridCard = ({ availability, onEdit, onDelete }: AvailabilityGridCardProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-foreground">{availability.day}</h3>
        <StatusBadge variant={availability.enabled ? "success" : "neutral"} className="shrink-0">
          {availability.enabled ? "Available" : "Off"}
        </StatusBadge>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
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

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onEdit(availability)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(availability)}
          aria-label="Delete availability"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AvailabilityGridCard;
