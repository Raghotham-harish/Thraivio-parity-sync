import type {
  DashboardHero,
  DashboardStat,
  RevenueData,
  UserGrowthData,
  RecentUser,
  RecentMentor,
  RecentPayment,
  RecentBooking,
  PlatformHealth,
  ActivityItem,
  QuickAction,
  Announcement,
  TopProgram,
  UpcomingSession,
} from "@/types/admin-dashboard";

/* =========================================================
   Dashboard Hero
========================================================= */

export const dashboardHero: DashboardHero = {
  totalRevenue: "$184,250",

  totalUsers: "12,845",

  activeMentors: "486",

  todaySessions: "325",

  monthlyGrowth: 18.6,
};

/* =========================================================
   Dashboard Stats
========================================================= */

export const dashboardStats: DashboardStat[] = [
  {
    id: "users",

    title: "Total Users",

    value: "12,845",

    change: 18.4,

    trend: "up",

    icon: "Users",

    color: "blue",

    description: "Registered platform users",
  },

  {
    id: "mentors",

    title: "Active Mentors",

    value: "486",

    change: 9.8,

    trend: "up",

    icon: "GraduationCap",

    color: "emerald",

    description: "Approved mentors",
  },

  {
    id: "sessions",

    title: "Today's Sessions",

    value: "325",

    change: 12.5,

    trend: "up",

    icon: "CalendarCheck",

    color: "violet",

    description: "Today's live mentoring sessions",
  },

  {
    id: "programs",

    title: "Programs",

    value: "84",

    change: 8.1,

    trend: "up",

    icon: "BookOpen",

    color: "orange",

    description: "Published learning programs",
  },

  {
    id: "events",

    title: "Events",

    value: "42",

    change: 6.8,

    trend: "up",

    icon: "CalendarDays",

    color: "cyan",

    description: "Upcoming online & offline events",
  },

  {
    id: "revenue",

    title: "Revenue",

    value: "$184,250",

    change: 21.7,

    trend: "up",

    icon: "DollarSign",

    color: "amber",

    description: "Platform revenue generated",
  },

  {
    id: "certificates",

    title: "Certificates",

    value: "1,248",

    change: 14.8,

    trend: "up",

    icon: "Award",

    color: "green",

    description: "Certificates successfully issued",
  },

  {
    id: "reviews",

    title: "Reviews",

    value: "9,642",

    change: 11.2,

    trend: "up",

    icon: "Star",

    color: "pink",

    description: "Ratings & reviews submitted",
  },
];

/* =========================================================
   Revenue Analytics
========================================================= */

export const revenueAnalytics: RevenueData[] = [
  {
    month: "Jan",
    revenue: 12000,
    bookings: 210,
  },

  {
    month: "Feb",
    revenue: 17000,
    bookings: 295,
  },

  {
    month: "Mar",
    revenue: 21000,
    bookings: 348,
  },

  {
    month: "Apr",
    revenue: 26000,
    bookings: 415,
  },

  {
    month: "May",
    revenue: 31000,
    bookings: 520,
  },

  {
    month: "Jun",
    revenue: 38500,
    bookings: 640,
  },

  {
    month: "Jul",
    revenue: 46500,
    bookings: 760,
  },

  {
    month: "Aug",
    revenue: 54000,
    bookings: 845,
  },

  {
    month: "Sep",
    revenue: 61200,
    bookings: 920,
  },

  {
    month: "Oct",
    revenue: 72800,
    bookings: 1045,
  },

  {
    month: "Nov",
    revenue: 84500,
    bookings: 1188,
  },

  {
    month: "Dec",
    revenue: 96200,
    bookings: 1325,
  },
];

/* =========================================================
   User Growth
========================================================= */

export const userGrowth: UserGrowthData[] = [
  {
    month: "Jan",
    users: 950,
    mentors: 22,
  },

  {
    month: "Feb",
    users: 1450,
    mentors: 31,
  },

  {
    month: "Mar",
    users: 2300,
    mentors: 54,
  },

  {
    month: "Apr",
    users: 4100,
    mentors: 96,
  },

  {
    month: "May",
    users: 7200,
    mentors: 215,
  },

  {
    month: "Jun",
    users: 12845,
    mentors: 486,
  },

  {
    month: "Jul",
    users: 14580,
    mentors: 542,
  },

  {
    month: "Aug",
    users: 16210,
    mentors: 598,
  },

  {
    month: "Sep",
    users: 18150,
    mentors: 655,
  },

  {
    month: "Oct",
    users: 20380,
    mentors: 724,
  },

  {
    month: "Nov",
    users: 22840,
    mentors: 801,
  },

  {
    month: "Dec",
    users: 25490,
    mentors: 886,
  },
];

/* =========================================================
   Recent Users
========================================================= */

export const recentUsers: RecentUser[] = [
  {
    id: "USR001",
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=11",
    joinedAt: "2 Hours Ago",
    status: "active",
  },

  {
    id: "USR002",
    name: "Priya Singh",
    email: "priya@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=32",
    joinedAt: "5 Hours Ago",
    status: "active",
  },

  {
    id: "USR003",
    name: "Ankit Verma",
    email: "ankit@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=45",
    joinedAt: "Yesterday",
    status: "pending",
  },

  {
    id: "USR004",
    name: "Neha Patel",
    email: "neha@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=21",
    joinedAt: "Yesterday",
    status: "active",
  },

  {
    id: "USR005",
    name: "Rohan Gupta",
    email: "rohan@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=60",
    joinedAt: "2 Days Ago",
    status: "blocked",
  },
];

/* =========================================================
   Recent Mentors
========================================================= */

export const recentMentors: RecentMentor[] = [
  {
    id: "MEN001",
    name: "Sarah Johnson",
    profession: "Product Mentor",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 4.9,
    status: "approved",
  },

  {
    id: "MEN002",
    name: "Michael Lee",
    profession: "Engineering Mentor",
    avatar: "https://i.pravatar.cc/150?img=52",
    rating: 4.8,
    status: "pending",
  },

  {
    id: "MEN003",
    name: "Emily Carter",
    profession: "Career Coach",
    avatar: "https://i.pravatar.cc/150?img=55",
    rating: 4.7,
    status: "approved",
  },

  {
    id: "MEN004",
    name: "David Wilson",
    profession: "UI UX Mentor",
    avatar: "https://i.pravatar.cc/150?img=61",
    rating: 4.9,
    status: "approved",
  },

  {
    id: "MEN005",
    name: "Olivia Brown",
    profession: "Marketing Mentor",
    avatar: "https://i.pravatar.cc/150?img=25",
    rating: 4.8,
    status: "pending",
  },
];

/* =========================================================
   Recent Payments
========================================================= */

export const recentPayments: RecentPayment[] = [
  {
    id: "PAY001",
    user: "Rahul Sharma",
    mentor: "Sarah Johnson",
    amount: 199,
    paymentMethod: "Stripe",
    status: "completed",
    date: "Today",
  },

  {
    id: "PAY002",
    user: "Aman Patel",
    mentor: "Emily Carter",
    amount: 149,
    paymentMethod: "Razorpay",
    status: "completed",
    date: "Today",
  },

  {
    id: "PAY003",
    user: "Priya Singh",
    mentor: "Michael Lee",
    amount: 249,
    paymentMethod: "Stripe",
    status: "pending",
    date: "Yesterday",
  },

  {
    id: "PAY004",
    user: "Rohan Gupta",
    mentor: "David Wilson",
    amount: 179,
    paymentMethod: "PayPal",
    status: "completed",
    date: "Yesterday",
  },

  {
    id: "PAY005",
    user: "Neha Patel",
    mentor: "Olivia Brown",
    amount: 129,
    paymentMethod: "Stripe",
    status: "failed",
    date: "2 Days Ago",
  },
];

/* =========================================================
   Recent Bookings
========================================================= */

export const recentBookings: RecentBooking[] = [
  {
    id: "BOOK001",
    user: "Rahul Sharma",
    mentor: "Sarah Johnson",
    session: "Career Mentorship",
    amount: 99,
    date: "Tomorrow",
    status: "approved",
  },

  {
    id: "BOOK002",
    user: "Priya Singh",
    mentor: "Michael Lee",
    session: "System Design",
    amount: 149,
    date: "Tomorrow",
    status: "approved",
  },

  {
    id: "BOOK003",
    user: "Ankit Verma",
    mentor: "Emily Carter",
    session: "Interview Preparation",
    amount: 129,
    date: "Friday",
    status: "pending",
  },

  {
    id: "BOOK004",
    user: "Neha Patel",
    mentor: "David Wilson",
    session: "UI UX Review",
    amount: 159,
    date: "Saturday",
    status: "approved",
  },

  {
    id: "BOOK005",
    user: "Aman Patel",
    mentor: "Olivia Brown",
    session: "Digital Marketing Strategy",
    amount: 189,
    date: "Sunday",
    status: "approved",
  },
];
/* =========================================================
   Platform Health
========================================================= */

export const platformHealth: PlatformHealth[] = [
  {
    id: "server",
    title: "Application Server",
    status: "healthy",
    value: "99.99%",
  },

  {
    id: "database",
    title: "Database",
    status: "healthy",
    value: "Healthy",
  },

  {
    id: "payments",
    title: "Payment Gateway",
    status: "healthy",
    value: "Operational",
  },

  {
    id: "storage",
    title: "Cloud Storage",
    status: "healthy",
    value: "98.9%",
  },

  {
    id: "email",
    title: "Email Service",
    status: "warning",
    value: "Minor Delay",
  },
];

/* =========================================================
   Activity Timeline
========================================================= */

export const activityTimeline: ActivityItem[] = [
  {
    id: "ACT001",
    title: "New Mentor Application",
    description: "Emily Carter applied as a mentor.",
    createdAt: "15 Minutes Ago",
    type: "mentor",
  },

  {
    id: "ACT002",
    title: "Session Booked",
    description: "Rahul Sharma booked Career Mentorship.",
    createdAt: "32 Minutes Ago",
    type: "booking",
  },

  {
    id: "ACT003",
    title: "Payment Received",
    description: "$199 payment received successfully.",
    createdAt: "1 Hour Ago",
    type: "payment",
  },

  {
    id: "ACT004",
    title: "Certificate Generated",
    description:
      "Certificate issued for Product Management Mastery.",
    createdAt: "2 Hours Ago",
    type: "certificate",
  },

  {
    id: "ACT005",
    title: "New User Registered",
    description: "Priya Singh joined the platform.",
    createdAt: "3 Hours Ago",
    type: "user",
  },

  {
    id: "ACT006",
    title: "Mentor Approved",
    description:
      "Sarah Johnson approved successfully.",
    createdAt: "Yesterday",
    type: "mentor",
  },
];

/* =========================================================
   Quick Actions
========================================================= */

export const quickActions: QuickAction[] = [
  {
    id: "approve-mentor",

    title: "Approve Mentors",

    description:
      "Review pending mentor applications.",

    icon: "BadgeCheck",

    path: "/admin/mentors",

    color: "emerald",
  },

  {
    id: "manage-users",

    title: "Manage Users",

    description:
      "View, edit and manage all users.",

    icon: "Users",

    path: "/admin/users",

    color: "blue",
  },

  {
    id: "programs",

    title: "Programs",

    description:
      "Manage all coaching programs.",

    icon: "BookOpen",

    path: "/admin/programs",

    color: "orange",
  },

  {
    id: "events",

    title: "Events",

    description:
      "Create and manage upcoming events.",

    icon: "CalendarDays",

    path: "/admin/events",

    color: "violet",
  },

  {
    id: "notifications",

    title: "Notifications",

    description:
      "Broadcast messages to all users.",

    icon: "Bell",

    path: "/admin/notifications",

    color: "pink",
  },

  {
    id: "cms",

    title: "Content Management",

    description:
      "Manage blogs, FAQs and pages.",

    icon: "FileText",

    path: "/admin/content",

    color: "cyan",
  },

  {
    id: "settings",

    title: "Platform Settings",

    description:
      "Configure platform settings.",

    icon: "Settings",

    path: "/admin/settings",

    color: "indigo",
  },

  {
    id: "security",

    title: "Security Center",

    description:
      "Manage security & access controls.",

    icon: "Shield",

    path: "/admin/security",

    color: "slate",
  },
];
/* =========================================================
   Announcements
========================================================= */

export const announcements: Announcement[] = [
  {
    id: "ANN001",
    title: "Scheduled Platform Maintenance",
    description:
      "Platform maintenance is scheduled this Sunday from 2:00 AM to 4:00 AM.",
    createdAt: "Today",
    priority: "high",
  },

  {
    id: "ANN002",
    title: "New Mentor Verification Process",
    description:
      "All new mentor applications now require profile verification before approval.",
    createdAt: "Yesterday",
    priority: "medium",
  },

  {
    id: "ANN003",
    title: "Payment Gateway Updated",
    description:
      "Stripe and Razorpay have been upgraded successfully.",
    createdAt: "2 Days Ago",
    priority: "low",
  },

  {
    id: "ANN004",
    title: "New Dashboard Released",
    description:
      "Production Admin Dashboard UI has been deployed successfully.",
    createdAt: "3 Days Ago",
    priority: "medium",
  },

  {
    id: "ANN005",
    title: "Security Improvements",
    description:
      "Additional authentication and platform security enhancements are now enabled.",
    createdAt: "Last Week",
    priority: "high",
  },
];

/* =========================================================
   Top Programs
========================================================= */

export const topPrograms: TopProgram[] = [
  {
    id: "PRO001",
    title: "Product Management Mastery",
    mentor: "Sarah Johnson",
    students: 320,
    revenue: 95800,
  },

  {
    id: "PRO002",
    title: "System Design Bootcamp",
    mentor: "Michael Lee",
    students: 285,
    revenue: 74200,
  },

  {
    id: "PRO003",
    title: "Frontend React Complete Guide",
    mentor: "Emily Carter",
    students: 258,
    revenue: 68400,
  },

  {
    id: "PRO004",
    title: "UI UX Design Professional",
    mentor: "David Wilson",
    students: 210,
    revenue: 59300,
  },

  {
    id: "PRO005",
    title: "Digital Marketing Essentials",
    mentor: "Olivia Brown",
    students: 185,
    revenue: 48200,
  },

  {
    id: "PRO006",
    title: "Career Growth Accelerator",
    mentor: "Daniel Brooks",
    students: 174,
    revenue: 43800,
  },
];

/* =========================================================
   Upcoming Sessions
========================================================= */

export const upcomingSessions: UpcomingSession[] = [
  {
    id: "SES001",
    mentor: "Sarah Johnson",
    user: "Rahul Sharma",
    date: "Tomorrow",
    time: "10:00 AM",
    status: "approved",
  },

  {
    id: "SES002",
    mentor: "Emily Carter",
    user: "Priya Singh",
    date: "Tomorrow",
    time: "04:00 PM",
    status: "approved",
  },

  {
    id: "SES003",
    mentor: "Michael Lee",
    user: "Ankit Verma",
    date: "Friday",
    time: "11:30 AM",
    status: "pending",
  },

  {
    id: "SES004",
    mentor: "David Wilson",
    user: "Neha Patel",
    date: "Saturday",
    time: "02:00 PM",
    status: "approved",
  },

  {
    id: "SES005",
    mentor: "Olivia Brown",
    user: "Aman Patel",
    date: "Sunday",
    time: "06:00 PM",
    status: "approved",
  },

  {
    id: "SES006",
    mentor: "Daniel Brooks",
    user: "Rohan Gupta",
    date: "Monday",
    time: "09:30 AM",
    status: "pending",
  },
];