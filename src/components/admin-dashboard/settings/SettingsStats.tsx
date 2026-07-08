import {
  Settings2,
  CheckCircle2,
  Link2,
  ShieldCheck,
  Activity,
  Database,
  CalendarClock,
  Server,
} from "lucide-react";

interface SettingsStatsProps {
  totalSettings: number;

  configuredModules: number;

  activeIntegrations: number;

  securityScore: number;

  uptime: string;

  lastBackup: string;

  lastUpdated: string;

  environment: string;
}

export default function SettingsStats({
  totalSettings,
  configuredModules,
  activeIntegrations,
  securityScore,
  uptime,
  lastBackup,
  lastUpdated,
  environment,
}: SettingsStatsProps) {
  const stats = [
    {
      title: "Total Settings",
      value: totalSettings.toString(),
      subtitle: "Configuration sections",
      icon: Settings2,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      title: "Configured Modules",
      value: configuredModules.toString(),
      subtitle: "Ready to use",
      icon: CheckCircle2,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
    },
    {
      title: "Active Integrations",
      value: activeIntegrations.toString(),
      subtitle: "Connected services",
      icon: Link2,
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-600",
    },
    {
      title: "Security Score",
      value: `${securityScore}%`,
      subtitle: "Platform security",
      icon: ShieldCheck,
      iconBg: "bg-red-500/10",
      iconColor: "text-red-600",
    },
    {
      title: "Platform Uptime",
      value: uptime,
      subtitle: "Current availability",
      icon: Activity,
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-600",
    },
    {
      title: "Last Backup",
      value: lastBackup,
      subtitle: "Latest backup",
      icon: Database,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-600",
    },
    {
      title: "Last Updated",
      value: lastUpdated,
      subtitle: "Configuration update",
      icon: CalendarClock,
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-600",
    },
    {
      title: "Environment",
      value: environment,
      subtitle: "Deployment mode",
      icon: Server,
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