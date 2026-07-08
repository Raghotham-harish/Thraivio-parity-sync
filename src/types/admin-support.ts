export type SupportStatus =
  | "open"
  | "in-progress"
  | "resolved"
  | "closed";

export type SupportPriority =
  | "low"
  | "medium"
  | "high"
  | "urgent";

export type SupportCategory =
  | "payment"
  | "technical"
  | "account"
  | "mentor"
  | "session"
  | "certificate";

export interface AdminSupportTicket {
  id: string;

  ticketId: string;

  subject: string;

  message: string;

  category: SupportCategory;

  priority: SupportPriority;

  status: SupportStatus;

  customer: {
    id: string;

    name: string;

    email: string;

    avatar: string;
  };

  assignedTo: {
    id: string;

    name: string;

    avatar: string;
  };

  createdAt: string;

  updatedAt: string;

  resolvedAt: string;

  replies: number;
}

export interface SupportStats {
  totalTickets: number;

  openTickets: number;

  inProgressTickets: number;

  resolvedTickets: number;

  closedTickets: number;

  urgentTickets: number;

  averageResponseTime: string;

  customerSatisfaction: string;
}
export interface SupportFilters {
  search: string;

  status: SupportStatus | "all";

  priority: SupportPriority | "all";

  category: SupportCategory | "all";

  assignedTo: string | "all";

  sortBy:
    | "newest"
    | "oldest"
    | "priority"
    | "status"
    | "replies";
}

export interface SupportTableColumn {
  id:
    | "customer"
    | "subject"
    | "category"
    | "priority"
    | "status"
    | "assignedTo"
    | "updatedAt"
    | "actions";

  label: string;

  sortable: boolean;
}