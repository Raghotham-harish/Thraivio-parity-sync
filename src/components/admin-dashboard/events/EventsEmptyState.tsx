import { memo } from "react";

import { Plus, RotateCcw } from "lucide-react";

import EmptyState from "@/components/shared/EmptyState";
import calendarIllustration from "@/assets/illustrations/calendar.svg";

interface EventsEmptyStateProps {
  search: string;

  activeFilters: number;

  loading?: boolean;

  onCreate: () => void;

  onRefresh: () => void;

  onResetFilters: () => void;

  onImport: () => void;

  onDocumentation?: () => void;
}

const EventsEmptyState = ({
  onCreate,
  onResetFilters,
}: EventsEmptyStateProps) => {
  return (
    <EmptyState
      illustration={calendarIllustration}
      title="No Events Found"
      description="No events match your current search and filter criteria."
      action={{
        label: "Create Event",
        onClick: onCreate,
        icon: Plus,
      }}
      secondaryAction={{
        label: "Reset Filters",
        onClick: onResetFilters,
        icon: RotateCcw,
      }}
    />
  );
};

export default memo(EventsEmptyState);
