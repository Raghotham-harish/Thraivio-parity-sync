import { UserPlus } from "lucide-react";

import EmptyState from "@/components/shared/EmptyState";
import searchIllustration from "@/assets/illustrations/search.svg";

interface UsersEmptyStateProps {
  title?: string;
  description?: string;
  onAddUser?: () => void;
  onResetFilters?: () => void;
}

export default function UsersEmptyState({
  title = "No Users Found",
  description = "No users match your current search or filters. Try adjusting your filters or add a new user.",
  onAddUser,
  onResetFilters,
}: UsersEmptyStateProps) {
  return (
    <EmptyState
      illustration={searchIllustration}
      title={title}
      description={description}
      action={{
        label: "Add New User",
        onClick: onAddUser ?? (() => {}),
        icon: UserPlus,
      }}
      secondaryAction={{
        label: "Reset Filters",
        onClick: onResetFilters ?? (() => {}),
      }}
    />
  );
}
