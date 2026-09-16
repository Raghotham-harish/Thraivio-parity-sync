import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Eye,
  FolderOpen,
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
  TableCell,
  TableRow,
} from "@/components/ui/table";

import type {
  AdminSupportTicket,
} from "@/types/admin-support";

interface SupportTableRowProps {
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

export default function SupportTableRow({
  ticket,
  onView,
  onReply,
  onClose,
}: SupportTableRowProps) {
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
          <Badge className="bg-[#ECFDF5]0 hover:bg-[#ECFDF5]0">
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
    <TableRow className="hover:bg-muted/40">
              <TableCell>

        <div className="flex items-center gap-3">

          <Avatar className="h-11 w-11">

            <AvatarImage
              src={ticket.customer.avatar}
            />

            <AvatarFallback>
              {ticket.customer.name.slice(0, 2)}
            </AvatarFallback>

          </Avatar>

          <div>

            <p className="font-medium">
              {ticket.customer.name}
            </p>

            <p className="text-xs text-muted-foreground">
              {ticket.ticketId}
            </p>

          </div>

        </div>

      </TableCell>

      <TableCell>

        <div className="space-y-1">

          <p className="font-medium line-clamp-1">
            {ticket.subject}
          </p>

          <p className="text-xs text-muted-foreground capitalize">
            {ticket.category}
          </p>

        </div>

      </TableCell>

      <TableCell>

        {priorityBadge()}

      </TableCell>

      <TableCell>

        {statusBadge()}

      </TableCell>

      <TableCell>

        <div className="space-y-1">

          <p className="font-medium">
            {ticket.assignedTo.name}
          </p>

          <p className="text-xs text-muted-foreground">
            Assigned Agent
          </p>

        </div>

      </TableCell>

      <TableCell>

        <p className="text-sm font-medium">
          {ticket.updatedAt}
        </p>

      </TableCell>

      <TableCell>

        <div className="flex items-center justify-end gap-2">

          <Button
            size="icon"
            variant="outline"
            onClick={() => onView(ticket)}
          >
            <Eye className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={() => onReply(ticket)}
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="destructive"
            onClick={() => onClose(ticket)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>

        </div>

      </TableCell>
          </TableRow>
  );
}