import { Plus } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import calendarIllustration from "@/assets/illustrations/calendar.svg";

interface EmptyAvailabilityProps {
  onAddAvailability: () => void;
}

const EmptyAvailability = ({ onAddAvailability }: EmptyAvailabilityProps) => {
  return (
    <EmptyState
      illustration={calendarIllustration}
      title="No Availability Added"
      description="Add your available mentoring dates and time slots so mentees can book sessions directly from your profile."
      action={{
        label: "Add Availability",
        onClick: onAddAvailability,
        icon: Plus,
      }}
    />
  );
};

export default EmptyAvailability;
