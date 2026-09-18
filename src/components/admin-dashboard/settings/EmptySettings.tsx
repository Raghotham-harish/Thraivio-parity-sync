import EmptyState from "@/components/shared/EmptyState";
import taskIllustration from "@/assets/illustrations/task.svg";

interface EmptySettingsProps {
  onReset: () => void;
}

export default function EmptySettings({ onReset }: EmptySettingsProps) {
  return (
    <EmptyState
      illustration={taskIllustration}
      title="No Settings Available"
      description="No configuration section is currently available. Try refreshing or resetting the current view."
      action={{
        label: "Reset View",
        onClick: onReset,
      }}
    />
  );
}
