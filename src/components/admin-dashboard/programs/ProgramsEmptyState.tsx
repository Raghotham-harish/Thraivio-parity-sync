import { FolderPlus, RotateCcw } from "lucide-react";

import EmptyState from "@/components/shared/EmptyState";
import folderIllustration from "@/assets/illustrations/folder.svg";

interface ProgramsEmptyStateProps {
  onAddProgram: () => void;

  onResetFilters: () => void;
}

export default function ProgramsEmptyState({
  onAddProgram,
  onResetFilters,
}: ProgramsEmptyStateProps) {
  return (
    <EmptyState
      illustration={folderIllustration}
      title="No Programs Found"
      description="We couldn't find any programs matching your current search or filters."
      action={{
        label: "Create Program",
        onClick: onAddProgram,
        icon: FolderPlus,
      }}
      secondaryAction={{
        label: "Reset Filters",
        onClick: onResetFilters,
        icon: RotateCcw,
      }}
    />
  );
}
