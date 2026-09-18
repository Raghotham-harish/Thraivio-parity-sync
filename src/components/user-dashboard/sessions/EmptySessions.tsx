import { Search } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import calendarIllustration from "@/assets/illustrations/calendar.svg";

interface EmptySessionsProps {
  onBrowseMentors?: () => void;
}

const EmptySessions = ({
  onBrowseMentors,
}: EmptySessionsProps) => {
  return (
    <EmptyState
      illustration={calendarIllustration}
      title="No Sessions Found"
      description="You haven't booked any mentorship sessions yet."
      action={
        onBrowseMentors
          ? {
              label: "Explore Mentors",
              onClick: onBrowseMentors,
              icon: Search,
            }
          : undefined
      }
    />
  );
};

export default EmptySessions;
