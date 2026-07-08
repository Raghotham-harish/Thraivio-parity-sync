/* =========================================================
   Admin Dashboard Types
   Production Ready
========================================================= */

/* ---------- Common Status ---------- */

export type Status =
  | "active"
  | "inactive"
  | "pending"
  | "approved"
  | "rejected"
  | "blocked"
  | "completed"
  | "cancelled"
  | "failed"
  | "live";

/* =========================================================
   Dashboard Hero
========================================================= */

export interface DashboardHero {
  totalRevenue: string;

  totalUsers: string;

  activeMentors: string;

  todaySessions: string;

  monthlyGrowth: number;
}

/* =========================================================
   Dashboard Stats
========================================================= */

export interface DashboardStat {
  id: string;

  title: string;

  value: string | number;

  change: number;

  trend: "up" | "down";

  icon: string;

  color:
    | "blue"
    | "emerald"
    | "violet"
    | "orange"
    | "cyan"
    | "amber"
    | "green"
    | "pink";

  description: string;
}

/* =========================================================
   Revenue Analytics
========================================================= */

export interface RevenueData {
  month: string;

  revenue: number;

  bookings: number;
}

/* =========================================================
   User Growth
========================================================= */

export interface UserGrowthData {
  month: string;

  users: number;

  mentors: number;
}

/* =========================================================
   Recent Users
========================================================= */

export interface RecentUser {
  id: string;

  name: string;

  email: string;

  avatar: string;

  joinedAt: string;

  status: Status;
}

/* =========================================================
   Recent Mentors
========================================================= */

export interface RecentMentor {
  id: string;

  name: string;

  profession: string;

  avatar: string;

  rating: number;

  status: Status;
}

/* =========================================================
   Recent Payments
========================================================= */

export interface RecentPayment {
  id: string;

  user: string;

  mentor: string;

  amount: number;

  paymentMethod: string;

  status: Status;

  date: string;
}

/* =========================================================
   Recent Bookings
========================================================= */

export interface RecentBooking {
  id: string;

  user: string;

  mentor: string;

  session: string;

  amount: number;

  date: string;

  status: Status;
}

/* =========================================================
   Platform Health
========================================================= */

export interface PlatformHealth {
  id:
    | "server"
    | "database"
    | "payments"
    | "storage"
    | "email";

  title: string;

  status:
    | "healthy"
    | "warning"
    | "critical";

  value: string;
}

/* =========================================================
   Activity Timeline
========================================================= */

export interface ActivityItem {
  id: string;

  title: string;

  description: string;

  createdAt: string;

  type:
    | "user"
    | "mentor"
    | "payment"
    | "booking"
    | "certificate"
    | "review";
}

/* =========================================================
   Quick Actions
========================================================= */

export interface QuickAction {
  id: string;

  title: string;

  description: string;

  icon: string;

  path: string;

  color?:
    | "blue"
    | "emerald"
    | "violet"
    | "orange"
    | "pink"
    | "cyan"
    | "indigo"
    | "slate";
}

/* =========================================================
   Announcement
========================================================= */

export interface Announcement {
  id: string;

  title: string;

  description: string;

  createdAt: string;

  priority:
    | "low"
    | "medium"
    | "high";
}

/* =========================================================
   Top Programs
========================================================= */

export interface TopProgram {
  id: string;

  title: string;

  mentor: string;

  students: number;

  revenue: number;
}

/* =========================================================
   Upcoming Sessions
========================================================= */

export interface UpcomingSession {
  id: string;

  mentor: string;

  user: string;

  date: string;

  time: string;

  status: Status;
}