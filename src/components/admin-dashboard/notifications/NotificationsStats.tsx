import {
  Bell,
  Send,
  CalendarClock,
  FileEdit,
  CircleX,
  CheckCheck,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";

interface NotificationsStatsProps {
  totalNotifications: number;

  sentNotifications: number;

  scheduledNotifications: number;

  draftNotifications: number;

  failedNotifications: number;

  totalDelivered: number;

  totalOpened: number;

  openRate: number;
}

export default function NotificationsStats({
  totalNotifications,
  sentNotifications,
  scheduledNotifications,
  draftNotifications,
  failedNotifications,
  totalDelivered,
  totalOpened,
  openRate,
}: NotificationsStatsProps) {
  const stats = [
    {
      title: "Total Notifications",
      value: totalNotifications.toLocaleString(),
      subtitle: "All notifications",
      icon: Bell,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      title: "Sent",
      value: sentNotifications.toLocaleString(),
      subtitle: "Successfully sent",
      icon: Send,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
    },
    {
      title: "Scheduled",
      value: scheduledNotifications.toLocaleString(),
      subtitle: "Upcoming notifications",
      icon: CalendarClock,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-600",
    },
    {
      title: "Drafts",
      value: draftNotifications.toLocaleString(),
      subtitle: "Saved drafts",
      icon: FileEdit,
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-600",
    },
    {
      title: "Failed",
      value: failedNotifications.toLocaleString(),
      subtitle: "Delivery failures",
      icon: CircleX,
      iconBg: "bg-red-500/10",
      iconColor: "text-red-600",
    },
    {
      title: "Delivered",
      value: totalDelivered.toLocaleString(),
      subtitle: "Successfully delivered",
      icon: CheckCheck,
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-600",
    },
    {
      title: "Opened",
      value: totalOpened.toLocaleString(),
      subtitle: "Users opened",
      icon: MousePointerClick,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-600",
    },
    {
      title: "Open Rate",
      value: `${openRate}%`,
      subtitle: "Overall engagement",
      icon: TrendingUp,
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-600",
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