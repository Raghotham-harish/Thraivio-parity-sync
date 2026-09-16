import {
  AlertTriangle,
  Trash2,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import type {
  AdminNotification,
} from "@/types/admin-notification";

interface DeleteNotificationDialogProps {
  open: boolean;

  notification: AdminNotification | null;

  onDelete: () => void;

  onOpenChange: (open: boolean) => void;
}

export default function DeleteNotificationDialog({
  open,
  notification,
  onDelete,
  onOpenChange,
}: DeleteNotificationDialogProps) {
  if (!notification) return null;

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent className="max-w-lg rounded-2xl">

        <AlertDialogHeader>

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFDAD6]">

            <AlertTriangle className="h-8 w-8 text-red-600" />

          </div>

          <AlertDialogTitle className="text-center text-2xl">

            Delete Notification?

          </AlertDialogTitle>

          <AlertDialogDescription className="text-center">

            This action cannot be undone.
            The selected notification will
            be permanently removed from
            the platform.

          </AlertDialogDescription>

        </AlertDialogHeader>

        <div className="rounded-2xl border bg-muted/40 p-5">

          <p className="font-semibold">
            {notification.title}
          </p>

          <p className="mt-2 text-sm capitalize text-muted-foreground">

            {notification.type}
            {" • "}
            {notification.audience.replace("-", " ")}

          </p>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">

            {notification.message}

          </p>

        </div>
                <AlertDialogFooter>

          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/90"
            onClick={onDelete}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Notification
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>

    </AlertDialog>
  );
}