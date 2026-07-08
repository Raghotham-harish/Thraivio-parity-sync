export type ReportPeriod =
  | "today"
  | "7days"
  | "30days"
  | "90days"
  | "6months"
  | "1year"
  | "custom";

export type RevenueSource =
  | "program"
  | "session"
  | "event"
  | "certificate";

export interface RevenueAnalytics {
  totalRevenue: number;
  monthlyRevenue: number;
  weeklyRevenue: number;
  dailyRevenue: number;

  totalTransactions: number;
  successfulTransactions: number;
  pendingTransactions: number;
  failedTransactions: number;
  refundedTransactions: number;

  refundedAmount: number;

  averageOrderValue: number;

  revenueGrowth: number;
}

export interface UserAnalytics {
  totalUsers: number;

  newUsers: number;

  activeUsers: number;

  inactiveUsers: number;

  premiumUsers: number;

  growth: number;
}

export interface MentorAnalytics {
  totalMentors: number;

  verifiedMentors: number;

  activeMentors: number;

  inactiveMentors: number;

  averageRating: number;

  growth: number;
}

export interface ProgramAnalytics {
  totalPrograms: number;

  activePrograms: number;

  completedPrograms: number;

  enrolledStudents: number;

  revenue: number;
}

export interface SessionAnalytics {
  totalSessions: number;

  completedSessions: number;

  cancelledSessions: number;

  upcomingSessions: number;

  revenue: number;
}

export interface EventAnalytics {
  totalEvents: number;

  completedEvents: number;

  upcomingEvents: number;

  registrations: number;

  revenue: number;
}

export interface RevenueChartItem {
  month: string;

  revenue: number;
}

export interface TransactionChartItem {
  day: string;

  successful: number;

  failed: number;

  pending: number;
}

export interface UserGrowthChartItem {
  month: string;

  users: number;
}

export interface MentorGrowthChartItem {
  month: string;

  mentors: number;
}
export interface TopMentorReport {
  id: string;

  name: string;

  avatar: string;

  company: string;

  totalStudents: number;

  totalRevenue: number;

  rating: number;

  completedSessions: number;
}

export interface TopProgramReport {
  id: string;

  title: string;

  category: RevenueSource;

  mentor: string;

  enrollments: number;

  revenue: number;

  rating: number;
}

export interface TopCategoryReport {
  category: RevenueSource;

  totalSales: number;

  revenue: number;

  percentage: number;
}

export interface RevenueSourceReport {
  source: RevenueSource;

  amount: number;

  percentage: number;
}

export interface RecentTransactionReport {
  id: string;

  invoice: string;

  student: string;

  mentor: string;

  category: RevenueSource;

  amount: number;

  status:
    | "paid"
    | "pending"
    | "failed"
    | "refunded";

  paymentMethod: string;

  createdAt: string;
}

export interface AdminReportData {
  revenue: RevenueAnalytics;

  users: UserAnalytics;

  mentors: MentorAnalytics;

  programs: ProgramAnalytics;

  sessions: SessionAnalytics;

  events: EventAnalytics;

  revenueChart: RevenueChartItem[];

  transactionChart: TransactionChartItem[];

  userGrowthChart: UserGrowthChartItem[];

  mentorGrowthChart: MentorGrowthChartItem[];

  topMentors: TopMentorReport[];

  topPrograms: TopProgramReport[];

  topCategories: TopCategoryReport[];

  revenueSources: RevenueSourceReport[];

  recentTransactions: RecentTransactionReport[];
}