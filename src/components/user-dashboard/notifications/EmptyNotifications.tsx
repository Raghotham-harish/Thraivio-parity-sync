import { Search } from "lucide-react";

import { EmptyState } from "@/components/shared/EmptyState";
import notificationIllustration from "@/assets/illustrations/notification.svg";

interface EmptyNotificationsProps {
  onBrowseMentors?: () => void;
}

const EmptyNotifications = ({
  onBrowseMentors,
}: EmptyNotificationsProps) => {
  return (
    <EmptyState
      illustration={notificationIllustration}
      title="No Notifications Found"
      description="You're all caught up — mentorship updates, payments, and certificates will appear here automatically."
      action={
        onBrowseMentors
          ? {
              label: "Explore Mentors",
              onClick: onBrowseMentors,
              icon: Search,
            }
          : undefined
      }
    />
  );
};

export default EmptyNotifications;
