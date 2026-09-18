import { UserPlus } from "lucide-react";

import EmptyState from "@/components/shared/EmptyState";
import searchIllustration from "@/assets/illustrations/search.svg";

interface MentorsEmptyStateProps {
  onAddMentor: () => void;

  onResetFilters: () => void;
}

export default function MentorsEmptyState({
  onAddMentor,
  onResetFilters,
}: MentorsEmptyStateProps) {
  return (
    <EmptyState
      illustration={searchIllustration}
      title="No Mentors Found"
      description="We couldn't find any mentors matching your current search or filters."
      action={{
        label: "Add Mentor",
        onClick: onAddMentor,
        icon: UserPlus,
      }}
      secondaryAction={{
        label: "Reset Filters",
        onClick: onResetFilters,
      }}
    />
  );
}
