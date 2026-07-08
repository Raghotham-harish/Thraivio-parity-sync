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
  const stats = [
    {
      title: "Total Revenue",
      value: `₹${totalRevenue.toLocaleString("en-IN")}`,
      subtitle: "Platform Earnings",
      icon: BadgeDollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
    },

    {
      title: "Transactions",
      value: totalTransactions.toLocaleString(),
      subtitle: "Total Payments",
      icon: CreditCard,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },

    {
      title: "Users",
      value: totalUsers.toLocaleString(),
      subtitle: "Registered Users",
      icon: Users,
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-600",
    },

    {
      title: "Mentors",
      value: totalMentors.toLocaleString(),
      subtitle: "Verified Mentors",
      icon: GraduationCap,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-600",
    },

    {
      title: "Programs",
      value: totalPrograms.toLocaleString(),
      subtitle: "Published Programs",
      icon: TrendingUp,
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-600",
    },

    {
      title: "Sessions",
      value: totalSessions.toLocaleString(),
      subtitle: "Completed Sessions",
      icon: CalendarCheck,
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-600",
    },

    {
      title: "Events",
      value: totalEvents.toLocaleString(),
      subtitle: "Platform Events",
      icon: CalendarDays,
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-600",
    },

    {
      title: "Average Order",
      value: `₹${averageOrderValue.toLocaleString("en-IN")}`,
      subtitle: "Average Transaction",
      icon: Wallet,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-600",
    },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="group overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.iconBg}`}
              >
                <Icon
                  className={`h-7 w-7 ${stat.iconColor}`}
                />
              </div>

              <div className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                Live
              </div>

            </div>

            <div className="mt-6 space-y-2">

              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>

              <h3 className="text-3xl font-bold tracking-tight">
                {stat.value}
              </h3>

              <p className="text-xs text-muted-foreground">
                {stat.subtitle}
              </p>

            </div>

            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-muted">

              <div className="h-full w-2/3 rounded-full bg-primary transition-all duration-500 group-hover:w-full" />

            </div>

          </div>
        );
      })}
          </section>
  );
}