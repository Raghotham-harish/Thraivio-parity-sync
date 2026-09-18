import { CalendarPlus, RefreshCcw } from "lucide-react";

import EmptyState from "@/components/shared/EmptyState";
import calendarIllustration from "@/assets/illustrations/calendar.svg";

interface SessionsEmptyStateProps {
  hasFilters?: boolean;

  onCreate?: () => void;

  onReset?: () => void;
}

const SessionsEmptyState = ({
  hasFilters = false,
  onCreate,
  onReset,
}: SessionsEmptyStateProps) => {
  return (
    <EmptyState
      illustration={calendarIllustration}
      title={hasFilters ? "No Matching Sessions" : "No Sessions Found"}
      description={
        hasFilters
          ? "No sessions match your current filters. Try resetting filters to view all mentoring sessions."
          : "You haven't created any mentoring sessions yet. Start by scheduling your first mentor session."
      }
      action={
        hasFilters
          ? { label: "Reset Filters", onClick: onReset ?? (() => {}), icon: RefreshCcw }
          : { label: "Create First Session", onClick: onCreate ?? (() => {}), icon: CalendarPlus }
      }
    />
  );
};

export default SessionsEmptyState;
