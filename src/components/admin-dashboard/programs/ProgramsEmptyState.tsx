import { FolderPlus, RefreshCcw, RotateCcw } from "lucide-react";

import EmptyState from "@/components/shared/EmptyState";
import folderIllustration from "@/assets/illustrations/folder.svg";

interface ProgramsEmptyStateProps {
  title?: string;
  description?: string;
  hasFilters?: boolean;
  onClearFilters?: () => void;
  onAddProgram?: () => void;
  onRefresh?: () => void;
}

export default function ProgramsEmptyState({
  title,
  description,
  hasFilters = false,
  onClearFilters,
  onAddProgram,
  onRefresh,
}: ProgramsEmptyStateProps) {
  // Filtered-empty: offer a reset. Genuinely empty: offer create (+ refresh).
  const action = hasFilters
    ? onClearFilters && { label: "Reset Filters", onClick: onClearFilters, icon: RotateCcw }
    : onAddProgram && { label: "Create Program", onClick: onAddProgram, icon: FolderPlus };
  const secondaryAction = !hasFilters && onRefresh
    ? { label: "Refresh", onClick: onRefresh, icon: RefreshCcw }
    : undefined;

  return (
    <EmptyState
      illustration={folderIllustration}
      title={title ?? (hasFilters ? "No Matching Programs" : "No Programs Yet")}
      description={
        description ??
        (hasFilters
          ? "We couldn't find any programs matching your current search or filters."
          : "Programs created by mentors will appear here.")
      }
      action={action || undefined}
      secondaryAction={secondaryAction}
    />
  );
}
