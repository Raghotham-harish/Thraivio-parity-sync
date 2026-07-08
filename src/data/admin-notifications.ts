import type {
  AdminNotification,
  NotificationStats,
} from "@/types/admin-notification";

export const notificationStats: NotificationStats = {
  totalNotifications: 1482,

  sentNotifications: 1216,

  scheduledNotifications: 124,

  draftNotifications: 96,

  failedNotifications: 46,

  totalDelivered: 254320,

  totalOpened: 187645,

  openRate: 73.8,
};

export const notifications: AdminNotification[] = [
  {
    id: "1",

    notificationId: "NTF-100001",

    title: "React Masterclass Starts Tomorrow",

    message:
      "Reminder! Your enrolled React Masterclass starts tomorrow at 10:00 AM. Don't forget to join on time.",

    type: "push",

    status: "sent",

    audience: "students",

    priority: "high",

    scheduledAt: "08 Jul 2026 09:00 AM",

    sentAt: "08 Jul 2026 09:00 AM",

    createdAt: "07 Jul 2026",

    deliveredCount: 12842,

    failedCount: 61,

    openedCount: 10234,

    createdBy: {
      id: "ADM-001",

      name: "Admin Team",

      avatar: "https://i.pravatar.cc/150?img=12",
    },
  },

  {
    id: "2",

    notificationId: "NTF-100002",

    title: "New Mentor Joined Platform",

    message:
      "Welcome our newest mentor specializing in Full Stack Development. Book your session today.",

    type: "email",

    status: "scheduled",

    audience: "all-users",

    priority: "medium",

    scheduledAt: "10 Jul 2026 08:00 AM",

    sentAt: "",

    createdAt: "08 Jul 2026",

    deliveredCount: 0,

    failedCount: 0,

    openedCount: 0,

    createdBy: {
      id: "ADM-002",

      name: "Content Team",

      avatar: "https://i.pravatar.cc/150?img=32",
    },
  },
    {
    id: "3",

    notificationId: "NTF-100003",

    title: "Platform Maintenance Notice",

    message:
      "Scheduled platform maintenance will take place this Sunday from 1:00 AM to 3:00 AM IST. Services may be temporarily unavailable.",

    type: "in-app",

    status: "draft",

    audience: "all-users",

    priority: "high",

    scheduledAt: "12 Jul 2026 01:00 AM",

    sentAt: "",

    createdAt: "09 Jul 2026",

    deliveredCount: 0,

    failedCount: 0,

    openedCount: 0,

    createdBy: {
      id: "ADM-003",

      name: "System Admin",

      avatar: "https://i.pravatar.cc/150?img=18",
    },
  },

  {
    id: "4",

    notificationId: "NTF-100004",

    title: "Payment Failed Reminder",

    message:
      "Your recent payment could not be processed. Please update your payment method and try again.",

    type: "sms",

    status: "failed",

    audience: "students",

    priority: "medium",

    scheduledAt: "09 Jul 2026 11:00 AM",

    sentAt: "09 Jul 2026 11:00 AM",

    createdAt: "09 Jul 2026",

    deliveredCount: 184,

    failedCount: 42,

    openedCount: 0,

    createdBy: {
      id: "ADM-004",

      name: "Finance Team",

      avatar: "https://i.pravatar.cc/150?img=45",
    },
  },
    {
    id: "5",

    notificationId: "NTF-100005",

    title: "Weekly Learning Progress",

    message:
      "Your weekly learning report is now available. Check completed sessions, certificates and upcoming recommendations.",

    type: "email",

    status: "sent",

    audience: "students",

    priority: "low",

    scheduledAt: "07 Jul 2026 08:00 AM",

    sentAt: "07 Jul 2026 08:00 AM",

    createdAt: "06 Jul 2026",

    deliveredCount: 23146,

    failedCount: 113,

    openedCount: 17682,

    createdBy: {
      id: "ADM-005",

      name: "Learning Team",

      avatar: "https://i.pravatar.cc/150?img=24",
    },
  },

  {
    id: "6",

    notificationId: "NTF-100006",

    title: "Mentor Earnings Released",

    message:
      "Your monthly mentor payout has been processed successfully. Check the Payments dashboard for complete payout details.",

    type: "push",

    status: "sent",

    audience: "mentors",

    priority: "high",

    scheduledAt: "05 Jul 2026 10:00 AM",

    sentAt: "05 Jul 2026 10:00 AM",

    createdAt: "05 Jul 2026",

    deliveredCount: 1248,

    failedCount: 6,

    openedCount: 1135,

    createdBy: {
      id: "ADM-006",

      name: "Finance Team",

      avatar: "https://i.pravatar.cc/150?img=56",
    },
  },
  ];

export const notificationTypes = [
  {
    label: "All Types",
    value: "all",
  },
  {
    label: "Push",
    value: "push",
  },
  {
    label: "Email",
    value: "email",
  },
  {
    label: "SMS",
    value: "sms",
  },
  {
    label: "In-App",
    value: "in-app",
  },
] as const;

export const notificationStatuses = [
  {
    label: "All Status",
    value: "all",
  },
  {
    label: "Draft",
    value: "draft",
  },
  {
    label: "Scheduled",
    value: "scheduled",
  },
  {
    label: "Sent",
    value: "sent",
  },
  {
    label: "Failed",
    value: "failed",
  },
] as const;

export const notificationAudiences = [
  {
    label: "All Audience",
    value: "all",
  },
  {
    label: "All Users",
    value: "all-users",
  },
  {
    label: "Mentors",
    value: "mentors",
  },
  {
    label: "Students",
    value: "students",
  },
  {
    label: "Admins",
    value: "admins",
  },
] as const;

export const notificationPriorities = [
  {
    label: "All Priority",
    value: "all",
  },
  {
    label: "High",
    value: "high",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "Low",
    value: "low",
  },
] as const;