import EmptyState from "@/components/shared/EmptyState";
import notificationIllustration from "@/assets/illustrations/notification.svg";

interface EmptyNotificationsProps {
  onResetFilters: () => void;
}

export default function EmptyNotifications({
  onResetFilters,
}: EmptyNotificationsProps) {
  return (
    <EmptyState
      illustration={notificationIllustration}
      title="No Notifications Found"
      description="No notifications match your current search or filters."
      action={{
        label: "Reset Filters",
        onClick: onResetFilters,
      }}
    />
  );
}
