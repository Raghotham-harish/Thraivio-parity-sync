import { Bell, Download, Plus } from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

interface NotificationsHeaderProps {
  totalNotifications: number;
  totalDelivered: number;
  onCreate: () => void;
  onExport: () => void;
}

export default function NotificationsHeader({
  totalNotifications,
  totalDelivered,
  onCreate,
  onExport,
}: NotificationsHeaderProps) {
  return (
    <FeatureHeader
      icon={Bell}
      eyebrow="Notifications Management"
      title="Notifications Dashboard"
      description="Create, schedule and manage push, email, SMS and in-app notifications for mentors, students and platform users from one centralized dashboard."
      meta={[
        { icon: Bell, label: `${totalNotifications.toLocaleString()} Notifications` },
        { label: `${totalDelivered.toLocaleString()} Delivered` },
      ]}
      primaryAction={{ label: "New Notification", icon: Plus, onClick: onCreate }}
      secondaryAction={{ label: "Export", icon: Download, onClick: onExport }}
    />
  );
}
