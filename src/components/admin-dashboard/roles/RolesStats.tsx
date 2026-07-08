import {
  ShieldCheck,
  CheckCircle2,
  ShieldOff,
  Cpu,
  Users,
  KeyRound,
  Activity,
  Clock3,
} from "lucide-react";

interface RolesStatsProps {
  totalRoles: number;

  activeRoles: number;

  inactiveRoles: number;

  systemRoles: number;

  customRoles: number;

  totalUsersAssigned: number;

  averagePermissions: number;

  recentlyUpdated: number;
}

export default function RolesStats({
  totalRoles,
  activeRoles,
  inactiveRoles,
  systemRoles,
  customRoles,
  totalUsersAssigned,
  averagePermissions,
  recentlyUpdated,
}: RolesStatsProps) {
  const stats = [
    {
      title: "Total Roles",
      value: totalRoles.toLocaleString(),
      subtitle: "Platform roles",
      icon: ShieldCheck,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      title: "Active Roles",
      value: activeRoles.toLocaleString(),
      subtitle: "Currently active",
      icon: CheckCircle2,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
    },
    {
      title: "Inactive Roles",
      value: inactiveRoles.toLocaleString(),
      subtitle: "Disabled roles",
      icon: ShieldOff,
      iconBg: "bg-red-500/10",
      iconColor: "text-red-600",
    },
    {
      title: "System Roles",
      value: systemRoles.toLocaleString(),
      subtitle: "Default roles",
      icon: Cpu,
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-600",
    },
    {
      title: "Custom Roles",
      value: customRoles.toLocaleString(),
      subtitle: "User defined",
      icon: KeyRound,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-600",
    },
    {
      title: "Assigned Users",
      value: totalUsersAssigned.toLocaleString(),
      subtitle: "Users with roles",
      icon: Users,
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-600",
    },
    {
      title: "Avg Permissions",
      value: averagePermissions.toString(),
      subtitle: "Per role",
      icon: Activity,
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-600",
    },
    {
      title: "Recently Updated",
      value: recentlyUpdated.toString(),
      subtitle: "Last 30 days",
      icon: Clock3,
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-600",
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