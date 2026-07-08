import type { AdminReportData } from "@/types/admin-report";

export const adminReports: AdminReportData = {
  revenue: {
    totalRevenue: 12894560,

    monthlyRevenue: 2945600,

    weeklyRevenue: 756420,

    dailyRevenue: 124800,

    totalTransactions: 4821,

    successfulTransactions: 4512,

    pendingTransactions: 156,

    failedTransactions: 89,

    refundedTransactions: 64,

    refundedAmount: 184250,

    averageOrderValue: 2674,

    revenueGrowth: 18.4,
  },

  users: {
    totalUsers: 18452,

    newUsers: 812,

    activeUsers: 14632,

    inactiveUsers: 3820,

    premiumUsers: 6248,

    growth: 15.2,
  },

  mentors: {
    totalMentors: 426,

    verifiedMentors: 388,

    activeMentors: 361,

    inactiveMentors: 65,

    averageRating: 4.8,

    growth: 11.6,
  },

  programs: {
    totalPrograms: 186,

    activePrograms: 142,

    completedPrograms: 44,

    enrolledStudents: 6934,

    revenue: 6845200,
  },

  sessions: {
    totalSessions: 12486,

    completedSessions: 11752,

    cancelledSessions: 214,

    upcomingSessions: 520,

    revenue: 3456120,
  },

  events: {
    totalEvents: 82,

    completedEvents: 67,

    upcomingEvents: 15,

    registrations: 2865,

    revenue: 2593240,
  },
    revenueChart: [
    { month: "Jan", revenue: 1450000 },
    { month: "Feb", revenue: 1680000 },
    { month: "Mar", revenue: 1825000 },
    { month: "Apr", revenue: 2050000 },
    { month: "May", revenue: 2285000 },
    { month: "Jun", revenue: 2490000 },
    { month: "Jul", revenue: 2945600 },
  ],

  transactionChart: [
    {
      day: "Mon",
      successful: 124,
      failed: 4,
      pending: 8,
    },
    {
      day: "Tue",
      successful: 136,
      failed: 5,
      pending: 7,
    },
    {
      day: "Wed",
      successful: 152,
      failed: 3,
      pending: 5,
    },
    {
      day: "Thu",
      successful: 168,
      failed: 6,
      pending: 9,
    },
    {
      day: "Fri",
      successful: 181,
      failed: 2,
      pending: 6,
    },
    {
      day: "Sat",
      successful: 204,
      failed: 5,
      pending: 10,
    },
    {
      day: "Sun",
      successful: 176,
      failed: 4,
      pending: 8,
    },
  ],

  userGrowthChart: [
    { month: "Jan", users: 11240 },
    { month: "Feb", users: 12480 },
    { month: "Mar", users: 13620 },
    { month: "Apr", users: 14910 },
    { month: "May", users: 16180 },
    { month: "Jun", users: 17340 },
    { month: "Jul", users: 18452 },
  ],

  mentorGrowthChart: [
    { month: "Jan", mentors: 241 },
    { month: "Feb", mentors: 269 },
    { month: "Mar", mentors: 294 },
    { month: "Apr", mentors: 327 },
    { month: "May", mentors: 358 },
    { month: "Jun", mentors: 392 },
    { month: "Jul", mentors: 426 },
  ],
    topMentors: [
    {
      id: "MEN-001",
      name: "Aman Verma",
      avatar: "https://i.pravatar.cc/300?img=21",
      company: "Google",
      totalStudents: 284,
      totalRevenue: 1485200,
      rating: 4.9,
      completedSessions: 962,
    },
    {
      id: "MEN-002",
      name: "Neha Kapoor",
      avatar: "https://i.pravatar.cc/300?img=41",
      company: "Microsoft",
      totalStudents: 251,
      totalRevenue: 1364800,
      rating: 4.9,
      completedSessions: 881,
    },
    {
      id: "MEN-003",
      name: "Ritika Malhotra",
      avatar: "https://i.pravatar.cc/300?img=54",
      company: "Amazon",
      totalStudents: 228,
      totalRevenue: 1194300,
      rating: 4.8,
      completedSessions: 804,
    },
    {
      id: "MEN-004",
      name: "Rohit Mehra",
      avatar: "https://i.pravatar.cc/300?img=55",
      company: "Adobe",
      totalStudents: 206,
      totalRevenue: 1087200,
      rating: 4.8,
      completedSessions: 742,
    },
  ],

  topPrograms: [
    {
      id: "PRO-001",
      title: "Full Stack Interview Bootcamp",
      category: "program",
      mentor: "Aman Verma",
      enrollments: 486,
      revenue: 2485200,
      rating: 4.9,
    },
    {
      id: "PRO-002",
      title: "Advanced React Mentorship",
      category: "program",
      mentor: "Rohit Mehra",
      enrollments: 391,
      revenue: 2128400,
      rating: 4.8,
    },
    {
      id: "PRO-003",
      title: "DSA Placement Program",
      category: "program",
      mentor: "Pooja Sharma",
      enrollments: 352,
      revenue: 1967500,
      rating: 4.9,
    },
    {
      id: "PRO-004",
      title: "Backend Engineering Mentorship",
      category: "program",
      mentor: "Harshit Jain",
      enrollments: 318,
      revenue: 1829600,
      rating: 4.8,
    },
  ],

  topCategories: [
    {
      category: "program",
      totalSales: 2642,
      revenue: 6845200,
      percentage: 53,
    },
    {
      category: "session",
      totalSales: 1486,
      revenue: 3456120,
      percentage: 27,
    },
    {
      category: "event",
      totalSales: 512,
      revenue: 1928740,
      percentage: 15,
    },
    {
      category: "certificate",
      totalSales: 181,
      revenue: 664500,
      percentage: 5,
    },
  ],
    revenueSources: [
    {
      source: "program",
      amount: 6845200,
      percentage: 53,
    },
    {
      source: "session",
      amount: 3456120,
      percentage: 27,
    },
    {
      source: "event",
      amount: 1928740,
      percentage: 15,
    },
    {
      source: "certificate",
      amount: 664500,
      percentage: 5,
    },
  ],

  recentTransactions: [
    {
      id: "TXN-000001",
      invoice: "INV-2026-000001",
      student: "Rahul Sharma",
      mentor: "Aman Verma",
      category: "program",
      amount: 21240,
      status: "paid",
      paymentMethod: "UPI",
      createdAt: "2026-07-04 10:30 AM",
    },
    {
      id: "TXN-000002",
      invoice: "INV-2026-000002",
      student: "Priya Patel",
      mentor: "Neha Kapoor",
      category: "session",
      amount: 4130,
      status: "pending",
      paymentMethod: "Credit Card",
      createdAt: "2026-07-04 11:10 AM",
    },
    {
      id: "TXN-000003",
      invoice: "INV-2026-000003",
      student: "Arjun Singh",
      mentor: "Ritika Malhotra",
      category: "event",
      amount: 5015,
      status: "failed",
      paymentMethod: "Debit Card",
      createdAt: "2026-07-04 12:45 PM",
    },
    {
      id: "TXN-000004",
      invoice: "INV-2026-000004",
      student: "Sneha Joshi",
      mentor: "Rohit Mehra",
      category: "program",
      amount: 14160,
      status: "refunded",
      paymentMethod: "PayPal",
      createdAt: "2026-07-04 02:20 PM",
    },
    {
      id: "TXN-000005",
      invoice: "INV-2026-000005",
      student: "Vikas Yadav",
      mentor: "Pooja Sharma",
      category: "program",
      amount: 28910,
      status: "paid",
      paymentMethod: "Net Banking",
      createdAt: "2026-07-04 05:15 PM",
    },
    {
      id: "TXN-000006",
      invoice: "INV-2026-000006",
      student: "Meera Nair",
      mentor: "Harshit Jain",
      category: "session",
      amount: 20650,
      status: "pending",
      paymentMethod: "PhonePe",
      createdAt: "2026-07-04 07:30 PM",
    },
  ],
};