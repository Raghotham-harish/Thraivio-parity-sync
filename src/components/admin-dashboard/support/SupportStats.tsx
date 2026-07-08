import {
  Headset,
  FolderOpen,
  LoaderCircle,
  CheckCircle2,
  Archive,
  AlertTriangle,
  Clock3,
  Star,
} from "lucide-react";

interface SupportStatsProps {
  totalTickets: number;

  openTickets: number;

  inProgressTickets: number;

  resolvedTickets: number;

  closedTickets: number;

  urgentTickets: number;

  averageResponseTime: string;

  customerSatisfaction: string;
}

export default function SupportStats({
  totalTickets,
  openTickets,
  inProgressTickets,
  resolvedTickets,
  closedTickets,
  urgentTickets,
  averageResponseTime,
  customerSatisfaction,
}: SupportStatsProps) {
  const stats = [
    {
      title: "Total Tickets",
      value: totalTickets.toLocaleString(),
      subtitle: "All support requests",
      icon: Headset,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      title: "Open Tickets",
      value: openTickets.toLocaleString(),
      subtitle: "Awaiting action",
      icon: FolderOpen,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-600",
    },
    {
      title: "In Progress",
      value: inProgressTickets.toLocaleString(),
      subtitle: "Currently handled",
      icon: LoaderCircle,
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-600",
    },
    {
      title: "Resolved",
      value: resolvedTickets.toLocaleString(),
      subtitle: "Successfully solved",
      icon: CheckCircle2,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
    },
    {
      title: "Closed",
      value: closedTickets.toLocaleString(),
      subtitle: "Completed tickets",
      icon: Archive,
      iconBg: "bg-slate-500/10",
      iconColor: "text-slate-600",
    },
    {
      title: "Urgent",
      value: urgentTickets.toLocaleString(),
      subtitle: "High priority",
      icon: AlertTriangle,
      iconBg: "bg-red-500/10",
      iconColor: "text-red-600",
    },
    {
      title: "Avg Response",
      value: averageResponseTime,
      subtitle: "Response time",
      icon: Clock3,
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-600",
    },
    {
      title: "Satisfaction",
      value: customerSatisfaction,
      subtitle: "Customer rating",
      icon: Star,
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