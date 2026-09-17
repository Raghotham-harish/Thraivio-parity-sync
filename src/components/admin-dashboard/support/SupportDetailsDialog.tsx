import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FolderOpen,
  MessageSquare,
  User,
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
  AdminSupportTicket,
} from "@/types/admin-support";

interface SupportDetailsDialogProps {
  open: boolean;

  ticket: AdminSupportTicket | null;

  onOpenChange: (
    open: boolean
  ) => void;
}

export default function SupportDetailsDialog({
  open,
  ticket,
  onOpenChange,
}: SupportDetailsDialogProps) {
  if (!ticket) return null;

  const statusBadge = () => {
    switch (ticket.status) {
      case "open":
        return (
          <Badge className="bg-blue-500 hover:bg-blue-500">
            <FolderOpen className="mr-1 h-3 w-3" />
            Open
          </Badge>
        );

      case "in-progress":
        return (
          <Badge className="bg-[#F59E0B] hover:bg-[#F59E0B]">
            <Clock3 className="mr-1 h-3 w-3" />
            In Progress
          </Badge>
        );

      case "resolved":
        return (
          <Badge className="bg-[#ECFDF5] hover:bg-[#ECFDF5]">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Resolved
          </Badge>
        );

      default:
        return (
          <Badge variant="secondary">
            Closed
          </Badge>
        );
    }
  };

  const priorityBadge = () => {
    switch (ticket.priority) {
      case "urgent":
        return (
          <Badge variant="destructive">
            <AlertTriangle className="mr-1 h-3 w-3" />
            Urgent
          </Badge>
        );

      case "high":
        return (
          <Badge className="bg-orange-500 hover:bg-orange-500">
            High
          </Badge>
        );

      case "medium":
        return (
          <Badge className="bg-yellow-500 hover:bg-yellow-500">
            Medium
          </Badge>
        );

      default:
        return (
          <Badge variant="outline">
            Low
          </Badge>
        );
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-4xl rounded-2xl">

        <DialogHeader>

          <DialogTitle>
            Support Ticket Details
          </DialogTitle>

          <DialogDescription>
            Review complete ticket information,
            customer details, assigned agent
            and conversation summary.
          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="flex items-start justify-between">

            <div className="flex items-center gap-4">

              <Avatar className="h-16 w-16">

                <AvatarImage
                  src={ticket.customer.avatar}
                />

                <AvatarFallback>
                  {ticket.customer.name.slice(0, 2)}
                </AvatarFallback>

              </Avatar>

              <div>

                <h3 className="text-lg font-semibold">
                  {ticket.customer.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">

                  <User className="h-4 w-4" />

                  <span>
                    {ticket.customer.email}
                  </span>

                </div>

              </div>

            </div>

            <div className="flex flex-col items-end gap-2">

              {statusBadge()}

              {priorityBadge()}

            </div>

          </div>
                    <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border p-5">

              <div className="mb-4 flex items-center gap-2">

                <MessageSquare className="h-5 w-5 text-primary" />

                <h4 className="font-semibold">
                  Ticket Information
                </h4>

              </div>

              <div className="space-y-3 text-sm">

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Ticket ID
                  </span>

                  <span className="font-medium">
                    {ticket.ticketId}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Category
                  </span>

                  <Badge
                    variant="outline"
                    className="capitalize"
                  >
                    {ticket.category}
                  </Badge>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Assigned To
                  </span>

                  <span className="font-medium">
                    {ticket.assignedTo.name}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Replies
                  </span>

                  <span className="font-medium">
                    {ticket.replies}
                  </span>

                </div>

              </div>

            </div>

            <div className="rounded-2xl border p-5">

              <div className="mb-4 flex items-center gap-2">

                <CalendarDays className="h-5 w-5 text-primary" />

                <h4 className="font-semibold">
                  Timeline
                </h4>

              </div>

              <div className="space-y-3 text-sm">

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Created
                  </span>

                  <span className="font-medium">
                    {ticket.createdAt}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Updated
                  </span>

                  <span className="font-medium">
                    {ticket.updatedAt}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Resolved
                  </span>

                  <span className="font-medium">
                    {ticket.resolvedAt || "--"}
                  </span>

                </div>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border p-5">

            <h3 className="text-lg font-semibold">
              {ticket.subject}
            </h3>

            <p className="mt-4 leading-7 text-muted-foreground">
              {ticket.message}
            </p>

          </div>

          <div className="rounded-2xl border p-5">

            <h4 className="font-semibold">
              Assigned Support Agent
            </h4>

            <div className="mt-5 flex items-center gap-4">

              <Avatar className="h-14 w-14">

                <AvatarImage
                  src={ticket.assignedTo.avatar}
                />

                <AvatarFallback>
                  {ticket.assignedTo.name.slice(0, 2)}
                </AvatarFallback>

              </Avatar>

              <div>

                <p className="font-semibold">
                  {ticket.assignedTo.name}
                </p>

                <p className="text-sm text-muted-foreground">
                  Support Representative
                </p>

              </div>

            </div>

          </div>
                  </div>

      </DialogContent>

    </Dialog>
  );
}