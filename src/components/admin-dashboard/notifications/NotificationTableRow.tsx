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
} from "lucide-react";

import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import type {
  AdminNotification,
} from "@/types/admin-notification";

interface NotificationTableRowProps {
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

export default function NotificationTableRow({
  notification,
  onView,
  onSend,
  onDelete,
}: NotificationTableRowProps) {
  const typeIcon = () => {
    switch (notification.type) {
      case "push":
        return <Bell className="h-4 w-4 text-blue-600" />;

      case "email":
        return <Mail className="h-4 w-4 text-emerald-600" />;

      case "sms":
        return <Smartphone className="h-4 w-4 text-violet-600" />;

      case "in-app":
        return (
          <MessageSquare className="h-4 w-4 text-orange-600" />
        );
    }
  };

  const statusBadge = () => {
    switch (notification.status) {
      case "sent":
        return (
          <Badge className="bg-emerald-500 hover:bg-emerald-500">
            <CheckCheck className="mr-1 h-3 w-3" />
            Sent
          </Badge>
        );

      case "scheduled":
        return (
          <Badge className="bg-amber-500 text-white hover:bg-amber-500">
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
    <TableRow className="hover:bg-muted/40">
              <TableCell>

        <div className="flex items-center gap-3">

          <Avatar className="h-11 w-11">

            <AvatarImage
              src={notification.createdBy.avatar}
            />

            <AvatarFallback>
              {notification.createdBy.name.slice(0, 2)}
            </AvatarFallback>

          </Avatar>

          <div>

            <p className="font-medium">
              {notification.createdBy.name}
            </p>

            <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">

              {typeIcon()}

              <span className="capitalize">
                {notification.type}
              </span>

            </div>

          </div>

        </div>

      </TableCell>

      <TableCell>

        <div className="space-y-1">

          <p className="font-medium line-clamp-1">
            {notification.title}
          </p>

          <p className="text-xs text-muted-foreground line-clamp-1">
            {notification.message}
          </p>

        </div>

      </TableCell>

      <TableCell>

        <Badge className="capitalize">
          {notification.audience.replace("-", " ")}
        </Badge>

      </TableCell>

      <TableCell>

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

      </TableCell>

      <TableCell>

        {statusBadge()}

      </TableCell>

      <TableCell>

        <div className="space-y-1">

          <p className="font-medium">
            {notification.deliveredCount.toLocaleString()}
          </p>

          <p className="text-xs text-muted-foreground">
            Delivered
          </p>

        </div>

      </TableCell>

      <TableCell>

        <div className="flex items-center gap-2">

          <Button
            size="icon"
            variant="outline"
            onClick={() => onView(notification)}
          >
            <Eye className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={() => onSend(notification)}
          >
            <Send className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="destructive"
            onClick={() => onDelete(notification)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>

        </div>

      </TableCell>
          </TableRow>
  );
}