export type NotificationType =
  | "push"
  | "email"
  | "sms"
  | "in-app";

export type NotificationStatus =
  | "draft"
  | "scheduled"
  | "sent"
  | "failed";

export type NotificationAudience =
  | "all-users"
  | "mentors"
  | "students"
  | "admins";

export type NotificationPriority =
  | "low"
  | "medium"
  | "high";

export interface AdminNotification {
  id: string;

  notificationId: string;

  title: string;

  message: string;

  type: NotificationType;

  status: NotificationStatus;

  audience: NotificationAudience;

  priority: NotificationPriority;

  scheduledAt: string;

  sentAt: string;

  createdAt: string;

  deliveredCount: number;

  failedCount: number;

  openedCount: number;

  createdBy: {
    id: string;

    name: string;

    avatar: string;
  };
}

export interface NotificationStats {
  totalNotifications: number;

  sentNotifications: number;

  scheduledNotifications: number;

  draftNotifications: number;

  failedNotifications: number;

  totalDelivered: number;

  totalOpened: number;

  openRate: number;
}
export interface NotificationFilters {
  search: string;

  status: NotificationStatus | "all";

  type: NotificationType | "all";

  audience: NotificationAudience | "all";

  priority: NotificationPriority | "all";

  sortBy:
    | "newest"
    | "oldest"
    | "scheduled"
    | "sent"
    | "priority";
}

export interface NotificationTableColumn {
  id:
    | "title"
    | "type"
    | "audience"
    | "priority"
    | "status"
    | "delivered"
    | "opened"
    | "createdAt"
    | "actions";

  label: string;

  sortable: boolean;
}