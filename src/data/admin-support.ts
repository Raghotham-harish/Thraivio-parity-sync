import type {
  AdminSupportTicket,
  SupportStats,
} from "@/types/admin-support";

export const supportStats: SupportStats = {
  totalTickets: 428,

  openTickets: 76,

  inProgressTickets: 48,

  resolvedTickets: 256,

  closedTickets: 48,

  urgentTickets: 13,

  averageResponseTime: "2h 18m",

  customerSatisfaction: "96.8%",
};

export const supportTickets: AdminSupportTicket[] = [
  {
    id: "1",

    ticketId: "SUP-100001",

    subject: "Payment Failed but Amount Debited",

    message:
      "The payment was deducted from my account but the booked mentoring session is still showing as unpaid.",

    category: "payment",

    priority: "urgent",

    status: "open",

    customer: {
      id: "USR-001",

      name: "Rahul Sharma",

      email: "rahul@example.com",

      avatar: "https://i.pravatar.cc/150?img=11",
    },

    assignedTo: {
      id: "ADM-001",

      name: "Support Team",

      avatar: "https://i.pravatar.cc/150?img=32",
    },

    createdAt: "08 Jul 2026",

    updatedAt: "09 Jul 2026",

    resolvedAt: "",

    replies: 4,
  },

  {
    id: "2",

    ticketId: "SUP-100002",

    subject: "Unable to Join Live Session",

    message:
      "The Join Session button is disabled even though the session has already started.",

    category: "session",

    priority: "high",

    status: "in-progress",

    customer: {
      id: "USR-002",

      name: "Anjali Verma",

      email: "anjali@example.com",

      avatar: "https://i.pravatar.cc/150?img=22",
    },

    assignedTo: {
      id: "ADM-002",

      name: "Technical Team",

      avatar: "https://i.pravatar.cc/150?img=45",
    },

    createdAt: "07 Jul 2026",

    updatedAt: "09 Jul 2026",

    resolvedAt: "",

    replies: 6,
  },
    {
    id: "3",

    ticketId: "SUP-100003",

    subject: "Certificate Not Generated",

    message:
      "I completed the mentorship program but my completion certificate is still unavailable.",

    category: "certificate",

    priority: "medium",

    status: "resolved",

    customer: {
      id: "USR-003",

      name: "Priya Patel",

      email: "priya@example.com",

      avatar: "https://i.pravatar.cc/150?img=31",
    },

    assignedTo: {
      id: "ADM-003",

      name: "Certification Team",

      avatar: "https://i.pravatar.cc/150?img=15",
    },

    createdAt: "04 Jul 2026",

    updatedAt: "06 Jul 2026",

    resolvedAt: "06 Jul 2026",

    replies: 3,
  },

  {
    id: "4",

    ticketId: "SUP-100004",

    subject: "Unable to Update Mentor Profile",

    message:
      "The mentor profile changes are not being saved after clicking the update button.",

    category: "mentor",

    priority: "high",

    status: "open",

    customer: {
      id: "USR-004",

      name: "Amit Singh",

      email: "amit@example.com",

      avatar: "https://i.pravatar.cc/150?img=47",
    },

    assignedTo: {
      id: "ADM-004",

      name: "Mentor Support",

      avatar: "https://i.pravatar.cc/150?img=51",
    },

    createdAt: "08 Jul 2026",

    updatedAt: "09 Jul 2026",

    resolvedAt: "",

    replies: 2,
  },
    {
    id: "5",

    ticketId: "SUP-100005",

    subject: "Account Verification Pending",

    message:
      "My account verification has been pending for more than three days. Please review my submitted documents.",

    category: "account",

    priority: "medium",

    status: "closed",

    customer: {
      id: "USR-005",

      name: "Sneha Gupta",

      email: "sneha@example.com",

      avatar: "https://i.pravatar.cc/150?img=58",
    },

    assignedTo: {
      id: "ADM-005",

      name: "Account Team",

      avatar: "https://i.pravatar.cc/150?img=24",
    },

    createdAt: "02 Jul 2026",

    updatedAt: "05 Jul 2026",

    resolvedAt: "05 Jul 2026",

    replies: 5,
  },

  {
    id: "6",

    ticketId: "SUP-100006",

    subject: "Application Loading Issue",

    message:
      "The dashboard keeps loading indefinitely after logging into my account.",

    category: "technical",

    priority: "urgent",

    status: "in-progress",

    customer: {
      id: "USR-006",

      name: "Rohit Kumar",

      email: "rohit@example.com",

      avatar: "https://i.pravatar.cc/150?img=36",
    },

    assignedTo: {
      id: "ADM-006",

      name: "Engineering Team",

      avatar: "https://i.pravatar.cc/150?img=63",
    },

    createdAt: "09 Jul 2026",

    updatedAt: "09 Jul 2026",

    resolvedAt: "",

    replies: 8,
  },
];

export const supportStatuses = [
  {
    label: "All Status",
    value: "all",
  },
  {
    label: "Open",
    value: "open",
  },
  {
    label: "In Progress",
    value: "in-progress",
  },
  {
    label: "Resolved",
    value: "resolved",
  },
  {
    label: "Closed",
    value: "closed",
  },
] as const;

export const supportPriorities = [
  {
    label: "All Priorities",
    value: "all",
  },
  {
    label: "Low",
    value: "low",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "High",
    value: "high",
  },
  {
    label: "Urgent",
    value: "urgent",
  },
] as const;

export const supportCategories = [
  {
    label: "All Categories",
    value: "all",
  },
  {
    label: "Payment",
    value: "payment",
  },
  {
    label: "Technical",
    value: "technical",
  },
  {
    label: "Account",
    value: "account",
  },
  {
    label: "Mentor",
    value: "mentor",
  },
  {
    label: "Session",
    value: "session",
  },
  {
    label: "Certificate",
    value: "certificate",
  },
] as const;