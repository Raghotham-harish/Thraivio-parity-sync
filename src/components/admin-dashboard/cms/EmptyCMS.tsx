import EmptyState from "@/components/shared/EmptyState";
import folderIllustration from "@/assets/illustrations/folder.svg";

interface EmptyCMSProps {
  onResetFilters: () => void;
}

export default function EmptyCMS({ onResetFilters }: EmptyCMSProps) {
  return (
    <EmptyState
      illustration={folderIllustration}
      title="No Pages Found"
      description="No CMS pages match your current search or filters."
      action={{
        label: "Reset Filters",
        onClick: onResetFilters,
      }}
    />
  );
}
