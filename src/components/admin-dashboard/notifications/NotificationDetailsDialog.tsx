import {
  Bell,
  CalendarClock,
  CheckCheck,
  Clock3,
  Eye,
  Mail,
  MessageSquare,
  Smartphone,
  User,
  Users,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import type {
  AdminNotification,
} from "@/types/admin-notification";

interface NotificationDetailsDialogProps {
  open: boolean;

  notification: AdminNotification | null;

  onOpenChange: (open: boolean) => void;
}

export default function NotificationDetailsDialog({
  open,
  notification,
  onOpenChange,
}: NotificationDetailsDialogProps) {
  if (!notification) return null;

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

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-3xl rounded-3xl">

        <DialogHeader>

          <DialogTitle>
            Notification Details
          </DialogTitle>

          <DialogDescription>
            Complete notification information,
            delivery statistics and audience
            details.
          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="flex items-start justify-between">

            <div className="flex items-center gap-4">

              <Avatar className="h-16 w-16">

                <AvatarImage
                  src={notification.createdBy.avatar}
                />

                <AvatarFallback>
                  {notification.createdBy.name.slice(0, 2)}
                </AvatarFallback>

              </Avatar>

              <div>

                <h3 className="text-lg font-semibold">
                  {notification.createdBy.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">

                  <User className="h-4 w-4" />

                  <span>
                    Created By
                  </span>

                </div>

              </div>

            </div>

            <Badge className="capitalize">

              {notification.status}

            </Badge>

          </div>
                    <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border p-5">

              <div className="mb-4 flex items-center gap-2">

                {typeIcon()}

                <h4 className="font-semibold">
                  Notification Information
                </h4>

              </div>

              <div className="space-y-3 text-sm">

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Notification ID
                  </span>

                  <span className="font-medium">
                    {notification.notificationId}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Type
                  </span>

                  <Badge className="capitalize">
                    {notification.type}
                  </Badge>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Audience
                  </span>

                  <div className="flex items-center gap-2">

                    <Users className="h-4 w-4" />

                    <span className="capitalize">
                      {notification.audience.replace("-", " ")}
                    </span>

                  </div>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Priority
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

              </div>

            </div>

            <div className="rounded-2xl border p-5">

              <div className="mb-4 flex items-center gap-2">

                <CheckCheck className="h-5 w-5 text-primary" />

                <h4 className="font-semibold">
                  Delivery Statistics
                </h4>

              </div>

              <div className="space-y-3 text-sm">

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Delivered
                  </span>

                  <span className="font-medium">
                    {notification.deliveredCount.toLocaleString()}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Opened
                  </span>

                  <div className="flex items-center gap-2">

                    <Eye className="h-4 w-4" />

                    <span className="font-medium">
                      {notification.openedCount.toLocaleString()}
                    </span>

                  </div>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Failed
                  </span>

                  <span className="font-medium">
                    {notification.failedCount.toLocaleString()}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Scheduled
                  </span>

                  <div className="flex items-center gap-2">

                    <CalendarClock className="h-4 w-4" />

                    <span>
                      {notification.scheduledAt}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border p-5">

            <h3 className="text-lg font-semibold">
              {notification.title}
            </h3>

            <p className="mt-4 leading-7 text-muted-foreground">
              {notification.message}
            </p>

          </div>
                    <div className="rounded-2xl border p-5">

            <div className="mb-4 flex items-center gap-2">

              <Clock3 className="h-5 w-5 text-primary" />

              <h4 className="font-semibold">
                Timeline
              </h4>

            </div>

            <div className="space-y-3 text-sm">

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Created At
                </span>

                <span className="font-medium">
                  {notification.createdAt}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Scheduled At
                </span>

                <span className="font-medium">
                  {notification.scheduledAt}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Sent At
                </span>

                <span className="font-medium">
                  {notification.sentAt || "--"}
                </span>

              </div>

            </div>

          </div>

        </div>

      </DialogContent>

    </Dialog>
  );
}