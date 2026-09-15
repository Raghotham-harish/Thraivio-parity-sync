import {
  BadgeDollarSign,
  CreditCard,
  Users,
  GraduationCap,
  TrendingUp,
  Wallet,
  CalendarCheck,
  CalendarDays,
} from "lucide-react";

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

interface ReportsStatsProps {
  totalRevenue: number;
  totalTransactions: number;
  totalUsers: number;
  totalMentors: number;
  totalPrograms: number;
  totalSessions: number;
  totalEvents: number;
  averageOrderValue: number;
}

export default function ReportsStats({
  totalRevenue,
  totalTransactions,
  totalUsers,
  totalMentors,
  totalPrograms,
  totalSessions,
  totalEvents,
  averageOrderValue,
}: ReportsStatsProps) {
  const stats: {
    title: string;
    value: string;
    description: string;
    icon: typeof BadgeDollarSign;
    accent: StatCardAccent;
  }[] = [
    { title: "Total Revenue", value: `₹${totalRevenue.toLocaleString("en-IN")}`, description: "Platform Earnings", icon: BadgeDollarSign, accent: "success" },
    { title: "Transactions", value: totalTransactions.toLocaleString(), description: "Total Payments", icon: CreditCard, accent: "default" },
    { title: "Users", value: totalUsers.toLocaleString(), description: "Registered Users", icon: Users, accent: "default" },
    { title: "Mentors", value: totalMentors.toLocaleString(), description: "Verified Mentors", icon: GraduationCap, accent: "success" },
    { title: "Programs", value: totalPrograms.toLocaleString(), description: "Published Programs", icon: TrendingUp, accent: "default" },
    { title: "Sessions", value: totalSessions.toLocaleString(), description: "Completed Sessions", icon: CalendarCheck, accent: "default" },
    { title: "Events", value: totalEvents.toLocaleString(), description: "Platform Events", icon: CalendarDays, accent: "default" },
    { title: "Average Order", value: `₹${averageOrderValue.toLocaleString("en-IN")}`, description: "Average Transaction", icon: Wallet, accent: "default" },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} title={stat.title} value={stat.value} description={stat.description} icon={stat.icon} accent={stat.accent} />
      ))}
    </section>
  );
}
