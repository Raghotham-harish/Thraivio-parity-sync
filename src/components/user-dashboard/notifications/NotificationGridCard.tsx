import {
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  CreditCard,
  GraduationCap,
  Trash2,
  User,
  Users,
} from "lucide-react";

import type { UserNotification } from "@/types/notification";

interface NotificationGridCardProps {
  notification: UserNotification;

  onView: (notification: UserNotification) => void;

  onDelete: (notification: UserNotification) => void;

  onMarkRead: (notificationId: string) => void;
}

const typeIcons: Record<UserNotification["type"], typeof Bell> = {
  session: CalendarDays,
  payment: CreditCard,
  program: BookOpen,
  certificate: GraduationCap,
  event: Users,
  mentor: User,
  system: Bell,
};

const NotificationGridCard = ({
  notification,
  onView,
  onDelete,
  onMarkRead,
}: NotificationGridCardProps) => {
  const Icon = typeIcons[notification.type] ?? Bell;
  const isUnread = notification.status === "unread";

  return (
    <div
      className={`rounded-2xl border border-border p-4 shadow-sm transition-all hover:shadow-md ${
        isUnread ? "bg-secondary/40" : "bg-card"
      }`}
    >
      <div className="flex items-start gap-3">
        {notification.image ? (
          <img
            src={notification.image}
            alt=""
            className="h-9 w-9 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="icon-bg flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
            <Icon className="h-4 w-4 text-primary" />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            {isUnread && <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />}
            <h3 className="truncate text-sm font-semibold text-foreground">
              {notification.title}
            </h3>
          </div>
          <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
            {notification.message}
          </p>
          <div className="mt-1.5 flex items-center gap-1 text-[11px] text-muted-foreground">
            <Clock3 className="h-3 w-3" />
            {notification.createdAt}
            {notification.mentorName && <span>· {notification.mentorName}</span>}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {isUnread && (
            <button
              type="button"
              onClick={() => onMarkRead(notification.id)}
              aria-label="Mark as read"
              title="Mark as read"
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-[#065F46]"
            >
              <Check className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => onDelete(notification)}
            aria-label="Delete notification"
            title="Delete"
            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {notification.actionLabel && (
        <button
          type="button"
          onClick={() => onView(notification)}
          className="mt-2 text-xs font-semibold text-primary hover:underline"
        >
          {notification.actionLabel}
        </button>
      )}
    </div>
  );
};

export default NotificationGridCard;
