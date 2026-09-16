import {
  MessageSquareReply,
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

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import type {
  AdminSupportTicket,
} from "@/types/admin-support";

interface ReplyTicketDialogProps {
  open: boolean;

  ticket: AdminSupportTicket | null;

  onReply: () => void;

  onOpenChange: (
    open: boolean
  ) => void;
}

export default function ReplyTicketDialog({
  open,
  ticket,
  onReply,
  onOpenChange,
}: ReplyTicketDialogProps) {
  if (!ticket) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl rounded-2xl">

        <DialogHeader>

          <DialogTitle>
            Reply to Support Ticket
          </DialogTitle>

          <DialogDescription>
            Respond to the customer and
            keep them informed about the
            progress of their request.
          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="rounded-2xl border bg-muted/40 p-5">

            <p className="text-xs text-muted-foreground">
              Ticket ID
            </p>

            <p className="mt-1 font-semibold">
              {ticket.ticketId}
            </p>

            <h3 className="mt-4 text-lg font-semibold">
              {ticket.subject}
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {ticket.message}
            </p>

          </div>

          <div className="space-y-2">

            <Label>
              Reply Message
            </Label>

            <Textarea
              rows={8}
              placeholder="Write your response to the customer..."
            />

          </div>
                    <DialogFooter>

            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              onClick={onReply}
            >
              <MessageSquareReply className="mr-2 h-4 w-4" />
              <Send className="mr-2 h-4 w-4" />
              Send Reply
            </Button>

          </DialogFooter>

        </div>
              </DialogContent>

    </Dialog>
  );
}