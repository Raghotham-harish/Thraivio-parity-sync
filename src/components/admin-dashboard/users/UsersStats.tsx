import {
  Users,
  UserCheck,
  Crown,
  ShieldCheck,
  Ban,
  UserPlus,
  TrendingUp,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

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

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  trend: string;
  progress: number;
}

function StatCard({
  title,
  value,
  icon: Icon,
  iconBg,
  iconColor,
  trend,
  progress,
}: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[30px] border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Background Blur */}

      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-slate-100 blur-3xl opacity-60" />

      <div className="relative">

        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm font-medium text-slate-500">

              {title}

            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-900">

              {value}

            </h3>

          </div>

          <div
            className={`rounded-3xl p-4 ${iconBg}`}
          >
            <Icon
              className={`h-7 w-7 ${iconColor}`}
            />
          </div>

        </div>

        <div className="mt-7">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-sm text-slate-500">

              Performance

            </span>

            <span className="flex items-center gap-1 text-sm font-semibold text-emerald-600">

              <TrendingUp className="h-4 w-4" />

              {trend}

            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

const statsConfig = [
  {
    title: "Total Users",
    key: "totalUsers",
    icon: Users,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    trend: "+18%",
    progress: 92,
  },

  {
    title: "Active Users",
    key: "activeUsers",
    icon: UserCheck,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    trend: "+12%",
    progress: 84,
  },

  {
    title: "Premium Members",
    key: "premiumUsers",
    icon: Crown,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    trend: "+24%",
    progress: 88,
  },

  {
    title: "Verified Users",
    key: "verifiedUsers",
    icon: ShieldCheck,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    trend: "+8%",
    progress: 95,
  },

  {
    title: "Blocked Users",
    key: "blockedUsers",
    icon: Ban,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    trend: "-4%",
    progress: 18,
  },

  {
    title: "New This Month",
    key: "newUsersThisMonth",
    icon: UserPlus,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    trend: "+32%",
    progress: 97,
  },
];
export default function UsersStats({
  stats,
}: UsersStatsProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">

      {statsConfig.map((item) => (
        <StatCard
          key={item.key}
          title={item.title}
          value={stats[
            item.key as keyof typeof stats
          ].toLocaleString()}
          icon={item.icon}
          iconBg={item.iconBg}
          iconColor={item.iconColor}
          trend={item.trend}
          progress={item.progress}
        />
      ))}

    </section>
  );
}