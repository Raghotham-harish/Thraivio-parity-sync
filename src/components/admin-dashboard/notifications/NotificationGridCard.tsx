import {
  Bell,
  CalendarClock,
  CheckCheck,
  CircleX,
  Clock3,
  Eye,
  Mail,
  MessageSquare,
  Send,
  Smartphone,
  Trash2,
  Users,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import type {
  AdminNotification,
} from "@/types/admin-notification";

interface NotificationGridCardProps {
  notification: AdminNotification;

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

export default function NotificationGridCard({
  notification,
  onView,
  onSend,
  onDelete,
}: NotificationGridCardProps) {
  const typeIcon = () => {
    switch (notification.type) {
      case "push":
        return <Bell className="h-3.5 w-3.5 text-primary" />;
      case "email":
        return <Mail className="h-3.5 w-3.5 text-[#0F8F65]" />;
      case "sms":
        return <Smartphone className="h-3.5 w-3.5 text-violet-600" />;
      case "in-app":
        return <MessageSquare className="h-3.5 w-3.5 text-[#B45309]" />;
    }
  };

  const statusBadge = () => {
    switch (notification.status) {
      case "sent":
        return (
          <Badge className="bg-[#ECFDF5] text-[#065F46] hover:bg-[#ECFDF5]">
            <CheckCheck className="mr-1 h-3 w-3" />
            Sent
          </Badge>
        );

      case "scheduled":
        return (
          <Badge className="bg-[#FFFBEB] text-[#B45309] hover:bg-[#FFFBEB]">
            <CalendarClock className="mr-1 h-3 w-3" />
            Scheduled
          </Badge>
        );

      case "draft":
        return (
          <Badge variant="secondary">
            <Clock3 className="mr-1 h-3 w-3" />
            Draft
          </Badge>
        );

      case "failed":
        return (
          <Badge variant="destructive">
            <CircleX className="mr-1 h-3 w-3" />
            Failed
          </Badge>
        );
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar className="h-10 w-10 shrink-0">
            <AvatarImage src={notification.createdBy.avatar} />
            <AvatarFallback>
              {notification.createdBy.name.slice(0, 2)}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-foreground">
              {notification.createdBy.name}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              {typeIcon()}
              <span className="capitalize">{notification.type}</span>
            </div>
          </div>
        </div>

        <div className="shrink-0">{statusBadge()}</div>
      </div>

      <h4 className="mt-3 truncate font-semibold text-foreground">
        {notification.title}
      </h4>
      <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">
        {notification.message}
      </p>

      {/* Meta row */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        <span className="flex items-center gap-1 capitalize">
          <Users className="h-3.5 w-3.5" />
          {notification.audience.replace("-", " ")}
        </span>
        <span>
          <span className="font-semibold text-foreground">
            {notification.deliveredCount.toLocaleString()}
          </span>{" "}
          delivered
        </span>
        <span className="flex items-center gap-1">
          <Eye className="h-3.5 w-3.5" />
          <span className="font-semibold text-foreground">
            {notification.openedCount.toLocaleString()}
          </span>{" "}
          opened
        </span>
        <Badge
          variant={
            notification.priority === "high"
              ? "destructive"
              : notification.priority === "medium"
                ? "secondary"
                : "outline"
          }
          className="capitalize"
        >
          {notification.priority}
        </Badge>
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(notification)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          View
        </button>

        <button
          type="button"
          onClick={() => onSend(notification)}
          aria-label="Send notification now"
          title="Send now"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-[#ECFDF5] hover:text-[#065F46]"
        >
          <Send className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onDelete(notification)}
          aria-label="Delete notification"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
