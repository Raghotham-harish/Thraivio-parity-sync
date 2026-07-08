import {
  Bell,
  CalendarClock,
  Send,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import type {
  AdminNotification,
} from "@/types/admin-notification";

interface SendNotificationDialogProps {
  open: boolean;

  notification: AdminNotification | null;

  onSend: () => void;

  onOpenChange: (open: boolean) => void;
}

export default function SendNotificationDialog({
  open,
  notification,
  onSend,
  onOpenChange,
}: SendNotificationDialogProps) {
  if (!notification) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl rounded-3xl">

        <DialogHeader>

          <DialogTitle>
            Send Notification
          </DialogTitle>

          <DialogDescription>
            Review notification details before
            sending it to the selected audience.
          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="rounded-2xl border bg-muted/40 p-5">

            <div className="flex items-center gap-2">

              <Bell className="h-5 w-5 text-primary" />

              <h3 className="font-semibold">
                {notification.title}
              </h3>

            </div>

            <p className="mt-4 leading-7 text-muted-foreground">

              {notification.message}

            </p>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border p-5">

              <h4 className="mb-4 font-semibold">
                Audience
              </h4>

              <p className="capitalize">

                {notification.audience.replace("-", " ")}

              </p>

            </div>

            <div className="rounded-2xl border p-5">

              <div className="flex items-center gap-2">

                <CalendarClock className="h-4 w-4 text-primary" />

                <h4 className="font-semibold">
                  Scheduled Time
                </h4>

              </div>

              <p className="mt-4">

                {notification.scheduledAt}

              </p>

            </div>

          </div>
                    <div className="rounded-2xl border p-5">

            <h4 className="mb-4 font-semibold">
              Delivery Summary
            </h4>

            <div className="grid gap-4 sm:grid-cols-3">

              <div className="rounded-xl border p-4">

                <p className="text-xs text-muted-foreground">
                  Type
                </p>

                <p className="mt-2 font-semibold capitalize">
                  {notification.type}
                </p>

              </div>

              <div className="rounded-xl border p-4">

                <p className="text-xs text-muted-foreground">
                  Priority
                </p>

                <p className="mt-2 font-semibold capitalize">
                  {notification.priority}
                </p>

              </div>

              <div className="rounded-xl border p-4">

                <p className="text-xs text-muted-foreground">
                  Status
                </p>

                <p className="mt-2 font-semibold capitalize">
                  {notification.status}
                </p>

              </div>

            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">

              <p className="text-sm text-amber-700">

                This notification will be sent to the selected
                audience immediately after confirmation.
                Backend/API integration will replace this
                placeholder action.

              </p>

            </div>

          </div>

          <DialogFooter>

            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              onClick={onSend}
            >
              <Send className="mr-2 h-4 w-4" />
              Send Notification
            </Button>
                      </DialogFooter>

        </div>

      </DialogContent>

    </Dialog>
  );
}