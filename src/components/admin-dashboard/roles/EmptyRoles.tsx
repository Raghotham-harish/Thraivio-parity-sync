import EmptyState from "@/components/shared/EmptyState";
import folderIllustration from "@/assets/illustrations/folder.svg";

interface EmptyRolesProps {
  onResetFilters: () => void;
}

export default function EmptyRoles({ onResetFilters }: EmptyRolesProps) {
  return (
    <EmptyState
      illustration={folderIllustration}
      title="No Roles Found"
      description="No administrator roles match your current search or applied filters."
      action={{
        label: "Reset Filters",
        onClick: onResetFilters,
      }}
    />
  );
}
