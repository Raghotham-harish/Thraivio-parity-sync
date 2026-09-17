import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Eye,
  FolderOpen,
  MessageSquare,
  MoreHorizontal,
  Trash2,
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
  AdminSupportTicket,
} from "@/types/admin-support";

interface SupportGridCardProps {
  ticket: AdminSupportTicket;

  onView: (
    ticket: AdminSupportTicket
  ) => void;

  onReply: (
    ticket: AdminSupportTicket
  ) => void;

  onClose: (
    ticket: AdminSupportTicket
  ) => void;
}

export default function SupportGridCard({
  ticket,
  onView,
  onReply,
  onClose,
}: SupportGridCardProps) {
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

      case "closed":
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
    <Card className="rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <CardContent className="space-y-6 p-6">

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <Avatar className="h-14 w-14">

              <AvatarImage
                src={ticket.customer.avatar}
              />

              <AvatarFallback>
                {ticket.customer.name.slice(0, 2)}
              </AvatarFallback>

            </Avatar>

            <div>

              <h3 className="font-semibold">
                {ticket.customer.name}
              </h3>

              <p className="text-sm text-muted-foreground">
                {ticket.ticketId}
              </p>

            </div>

          </div>

          <div className="flex flex-col items-end gap-2">

            {statusBadge()}

            {priorityBadge()}

          </div>

        </div>
                <div className="space-y-3">

          <div className="flex items-center justify-between">

            <h4 className="line-clamp-1 text-lg font-semibold">
              {ticket.subject}
            </h4>

            <Badge
              variant="outline"
              className="capitalize"
            >
              {ticket.category}
            </Badge>

          </div>

          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
            {ticket.message}
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4 rounded-2xl border bg-muted/30 p-4">

          <div>

            <p className="text-xs text-muted-foreground">
              Assigned To
            </p>

            <p className="mt-1 font-medium">
              {ticket.assignedTo.name}
            </p>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Replies
            </p>

            <div className="mt-1 flex items-center gap-2">

              <MessageSquare className="h-4 w-4 text-muted-foreground" />

              <span className="font-semibold">
                {ticket.replies}
              </span>

            </div>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Updated
            </p>

            <p className="mt-1 font-medium">
              {ticket.updatedAt}
            </p>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Resolved
            </p>

            <p className="mt-1 font-medium">
              {ticket.resolvedAt || "--"}
            </p>

          </div>

        </div>

        <div className="rounded-2xl border p-4">

          <p className="text-xs text-muted-foreground">
            Customer Email
          </p>

          <p className="mt-2 line-clamp-1 font-medium">
            {ticket.customer.email}
          </p>

        </div>
                <div className="flex flex-wrap gap-3">

          <Button
            variant="outline"
            className="flex-1 rounded-xl"
            onClick={() => onView(ticket)}
          >
            <Eye className="mr-2 h-4 w-4" />
            View
          </Button>

          <Button
            variant="outline"
            className="flex-1 rounded-xl"
            onClick={() => onReply(ticket)}
          >
            <MoreHorizontal className="mr-2 h-4 w-4" />
            Reply
          </Button>

          <Button
            variant="destructive"
            className="rounded-xl"
            onClick={() => onClose(ticket)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Close
          </Button>

        </div>

      </CardContent>

    </Card>
  );
}