import { Plus } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import calendarIllustration from "@/assets/illustrations/calendar.svg";

interface EmptyEventsProps {
  onAddEvent: () => void;
}

const EmptyEvents = ({ onAddEvent }: EmptyEventsProps) => {
  return (
    <EmptyState
      illustration={calendarIllustration}
      title="No Events Found"
      description="Create your first workshop, webinar, or live session to start engaging with your audience."
      action={{
        label: "Create First Event",
        onClick: onAddEvent,
        icon: Plus,
      }}
    />
  );
};

export default EmptyEvents;
