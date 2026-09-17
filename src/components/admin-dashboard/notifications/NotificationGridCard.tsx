import {
  Bell,
  CalendarClock,
  CheckCheck,
  CircleX,
  Clock3,
  Eye,
  Mail,
  MessageSquare,
  Smartphone,
  Users,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

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
        return (
          <Bell className="h-4 w-4 text-primary" />
        );

      case "email":
        return (
          <Mail className="h-4 w-4 text-[#0F8F65]" />
        );

      case "sms":
        return (
          <Smartphone className="h-4 w-4 text-violet-600" />
        );

      case "in-app":
        return (
          <MessageSquare className="h-4 w-4 text-[#B45309]" />
        );
    }
  };

  const statusBadge = () => {
    switch (notification.status) {
      case "sent":
        return (
          <Badge className="bg-[#ECFDF5] hover:bg-[#ECFDF5]">
            <CheckCheck className="mr-1 h-3 w-3" />
            Sent
          </Badge>
        );

      case "scheduled":
        return (
          <Badge className="bg-[#F59E0B] text-white hover:bg-[#F59E0B]">
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
    <Card className="rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <CardContent className="space-y-6 p-6">

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <Avatar className="h-14 w-14">

              <AvatarImage
                src={notification.createdBy.avatar}
              />

              <AvatarFallback>
                {notification.createdBy.name.slice(0, 2)}
              </AvatarFallback>

            </Avatar>

            <div>

              <h3 className="font-semibold">
                {notification.createdBy.name}
              </h3>

              <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">

                {typeIcon()}

                <span className="capitalize">
                  {notification.type}
                </span>

              </div>

            </div>

          </div>

          {statusBadge()}

        </div>
                <div className="space-y-3">

          <h4 className="line-clamp-1 text-lg font-semibold">
            {notification.title}
          </h4>

          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
            {notification.message}
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4 rounded-2xl border bg-muted/30 p-4">

          <div>

            <p className="text-xs text-muted-foreground">
              Audience
            </p>

            <div className="mt-1 flex items-center gap-2">

              <Users className="h-4 w-4 text-muted-foreground" />

              <span className="text-sm capitalize">
                {notification.audience.replace("-", " ")}
              </span>

            </div>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Priority
            </p>

            <Badge
              variant={
                notification.priority === "high"
                  ? "destructive"
                  : notification.priority === "medium"
                    ? "secondary"
                    : "outline"
              }
              className="mt-1 capitalize"
            >
              {notification.priority}
            </Badge>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Delivered
            </p>

            <p className="mt-1 font-semibold">
              {notification.deliveredCount.toLocaleString()}
            </p>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Opened
            </p>

            <div className="mt-1 flex items-center gap-2">

              <Eye className="h-4 w-4 text-muted-foreground" />

              <span className="font-semibold">
                {notification.openedCount.toLocaleString()}
              </span>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border p-4">

          <p className="text-xs text-muted-foreground">
            Scheduled Time
          </p>

          <p className="mt-1 font-medium">
            {notification.scheduledAt}
          </p>

        </div>
                <div className="flex flex-wrap gap-3">

          <Button
            variant="outline"
            className="flex-1 rounded-xl"
            onClick={() => onView(notification)}
          >
            View Details
          </Button>

          <Button
            variant="outline"
            className="flex-1 rounded-xl"
            onClick={() => onSend(notification)}
          >
            Send Now
          </Button>

          <Button
            variant="destructive"
            className="rounded-xl"
            onClick={() => onDelete(notification)}
          >
            Delete
          </Button>

        </div>

      </CardContent>

    </Card>
  );
}