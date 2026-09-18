import { Search } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import calendarIllustration from "@/assets/illustrations/calendar.svg";

interface EmptyEventsProps {
  onBrowseEvents: () => void;
}

const EmptyEvents = ({
  onBrowseEvents,
}: EmptyEventsProps) => {
  return (
    <EmptyState
      illustration={calendarIllustration}
      title="No Events Found"
      description="You haven't registered for any workshops, webinars, or mentoring events yet."
      action={{
        label: "Browse Events",
        onClick: onBrowseEvents,
        icon: Search,
      }}
    />
  );
};

export default EmptyEvents;
