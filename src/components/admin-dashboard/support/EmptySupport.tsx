import EmptyState from "@/components/shared/EmptyState";
import folderIllustration from "@/assets/illustrations/folder.svg";

interface EmptySupportProps {
  onResetFilters: () => void;
}

export default function EmptySupport({ onResetFilters }: EmptySupportProps) {
  return (
    <EmptyState
      illustration={folderIllustration}
      title="No Support Tickets Found"
      description="No support tickets match your current search or selected filters."
      action={{
        label: "Reset Filters",
        onClick: onResetFilters,
      }}
    />
  );
}
