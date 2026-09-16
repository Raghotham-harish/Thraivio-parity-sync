import {
  AlertTriangle,
  Lock,
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
  AdminSupportTicket,
} from "@/types/admin-support";

interface CloseTicketDialogProps {
  open: boolean;

  ticket: AdminSupportTicket | null;

  onClose: () => void;

  onOpenChange: (
    open: boolean
  ) => void;
}

export default function CloseTicketDialog({
  open,
  ticket,
  onClose,
  onOpenChange,
}: CloseTicketDialogProps) {
  if (!ticket) return null;

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

            Close Support Ticket?

          </AlertDialogTitle>

          <AlertDialogDescription className="text-center">

            This action will mark the selected
            support ticket as closed. The
            customer can no longer reply unless
            the ticket is reopened.

          </AlertDialogDescription>

        </AlertDialogHeader>

        <div className="rounded-2xl border bg-muted/40 p-5">

          <p className="font-semibold">
            {ticket.subject}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">

            {ticket.ticketId}
            {" • "}
            {ticket.customer.name}

          </p>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">

            {ticket.message}

          </p>

        </div>
                <AlertDialogFooter>

          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/90"
            onClick={onClose}
          >
            <Lock className="mr-2 h-4 w-4" />
            Close Ticket
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>

    </AlertDialog>
  );
}