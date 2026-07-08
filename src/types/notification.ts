export type NotificationType =
  | "session"
  | "program"
  | "event"
  | "payment"
  | "certificate"
  | "mentor"
  | "system";

export type NotificationStatus =
  | "read"
  | "unread";

export interface UserNotification {
  id: string;

  title: string;

  message: string;

  type: NotificationType;

  status: NotificationStatus;

  createdAt: string;

  actionLabel?: string;

  actionLink?: string;

  image?: string;

  mentorName?: string;
}