import {
  Ban,
  Crown,
  ShieldCheck,
  UserCheck,
  UserPlus,
  Users,
} from "lucide-react";

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

interface UsersStatsProps {
  stats: {
    totalUsers: number;
    activeUsers: number;
    premiumUsers: number;
    verifiedUsers: number;
    blockedUsers: number;
    newUsersThisMonth: number;
  };
}

const statsConfig: {
  title: string;
  key: keyof UsersStatsProps["stats"];
  icon: typeof Users;
  accent: StatCardAccent;
  trend: string;
}[] = [
  { title: "Total Users", key: "totalUsers", icon: Users, accent: "default", trend: "+18%" },
  { title: "Active Users", key: "activeUsers", icon: UserCheck, accent: "success", trend: "+12%" },
  { title: "Premium Members", key: "premiumUsers", icon: Crown, accent: "default", trend: "+24%" },
  { title: "Verified Users", key: "verifiedUsers", icon: ShieldCheck, accent: "success", trend: "+8%" },
  { title: "Blocked Users", key: "blockedUsers", icon: Ban, accent: "default", trend: "-4%" },
  { title: "New This Month", key: "newUsersThisMonth", icon: UserPlus, accent: "default", trend: "+32%" },
];

export default function UsersStats({ stats }: UsersStatsProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
      {statsConfig.map((item) => (
        <StatCard
          key={item.key}
          title={item.title}
          value={stats[item.key].toLocaleString()}
          icon={item.icon}
          accent={item.accent}
          change={item.trend}
          trend={item.trend.startsWith("-") ? "down" : "up"}
        />
      ))}
    </section>
  );
}
