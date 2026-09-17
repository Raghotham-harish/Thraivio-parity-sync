import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Eye,
  FolderOpen,
  MessageSquare,
  MessageSquareReply,
  XCircle,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

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
          <Badge className="bg-[#EFF6FF] text-primary hover:bg-[#EFF6FF]">
            <FolderOpen className="mr-1 h-3 w-3" />
            Open
          </Badge>
        );

      case "in-progress":
        return (
          <Badge className="bg-[#FFFBEB] text-[#B45309] hover:bg-[#FFFBEB]">
            <Clock3 className="mr-1 h-3 w-3" />
            In Progress
          </Badge>
        );

      case "resolved":
        return (
          <Badge className="bg-[#ECFDF5] text-[#065F46] hover:bg-[#ECFDF5]">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Resolved
          </Badge>
        );

      case "closed":
        return <Badge variant="secondary">Closed</Badge>;
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
        return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">High</Badge>;

      case "medium":
        return <Badge className="bg-[#FFFBEB] text-[#B45309] hover:bg-[#FFFBEB]">Medium</Badge>;

      default:
        return <Badge variant="outline">Low</Badge>;
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar className="h-10 w-10 shrink-0">
            <AvatarImage src={ticket.customer.avatar} />
            <AvatarFallback>{ticket.customer.name.slice(0, 2)}</AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-foreground">
              {ticket.customer.name}
            </h3>
            <p className="truncate text-xs text-muted-foreground">{ticket.ticketId}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          {priorityBadge()}
          {statusBadge()}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <h4 className="truncate font-semibold text-foreground">{ticket.subject}</h4>
        <Badge variant="outline" className="shrink-0 capitalize">
          {ticket.category}
        </Badge>
      </div>
      <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">
        {ticket.message}
      </p>

      {/* Meta row */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        <span>
          Assigned to <span className="font-medium text-foreground">{ticket.assignedTo.name}</span>
        </span>
        <span className="flex items-center gap-1">
          <MessageSquare className="h-3.5 w-3.5" />
          <span className="font-semibold text-foreground">{ticket.replies}</span> replies
        </span>
        <span>Updated {ticket.updatedAt}</span>
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(ticket)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          View
        </button>

        <button
          type="button"
          onClick={() => onReply(ticket)}
          aria-label="Reply to ticket"
          title="Reply"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <MessageSquareReply className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onClose(ticket)}
          aria-label="Close ticket"
          title="Close"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <XCircle className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
