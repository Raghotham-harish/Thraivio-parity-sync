import type {
  AdminNotification,
} from "@/types/admin-notification";

import NotificationGridCard from "./NotificationGridCard";

interface NotificationsGridProps {
  notifications: AdminNotification[];

  onView: (
    notification: AdminNotification
  ) => void;

  onSend: (
    notification: AdminNotification
  ) => void;

  onDelete: (
    notification: AdminNotification
  ) => void;
}

export default function NotificationsGrid({
  notifications,
  onView,
  onSend,
  onDelete,
}: NotificationsGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">

      {notifications.map((notification) => (

        <NotificationGridCard
          key={notification.id}
          notification={notification}
          onView={onView}
          onSend={onSend}
          onDelete={onDelete}
        />

      ))}

    </section>
  );
}