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

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

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
  const stats: {
    title: string;
    value: string;
    description: string;
    icon: typeof Settings2;
    accent: StatCardAccent;
  }[] = [
    { title: "Total Settings", value: totalSettings.toString(), description: "Configuration sections", icon: Settings2, accent: "default" },
    { title: "Configured Modules", value: configuredModules.toString(), description: "Ready to use", icon: CheckCircle2, accent: "success" },
    { title: "Active Integrations", value: activeIntegrations.toString(), description: "Connected services", icon: Link2, accent: "default" },
    { title: "Security Score", value: `${securityScore}%`, description: "Platform security", icon: ShieldCheck, accent: "success" },
    { title: "Platform Uptime", value: uptime, description: "Current availability", icon: Activity, accent: "success" },
    { title: "Last Backup", value: lastBackup, description: "Latest backup", icon: Database, accent: "default" },
    { title: "Last Updated", value: lastUpdated, description: "Configuration update", icon: CalendarClock, accent: "default" },
    { title: "Environment", value: environment, description: "Deployment mode", icon: Server, accent: "default" },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} title={stat.title} value={stat.value} description={stat.description} icon={stat.icon} accent={stat.accent} />
      ))}
    </section>
  );
}
