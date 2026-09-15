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

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

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
  const stats: {
    title: string;
    value: string;
    description: string;
    icon: typeof ShieldCheck;
    accent: StatCardAccent;
  }[] = [
    { title: "Total Roles", value: totalRoles.toLocaleString(), description: "Platform roles", icon: ShieldCheck, accent: "default" },
    { title: "Active Roles", value: activeRoles.toLocaleString(), description: "Currently active", icon: CheckCircle2, accent: "success" },
    { title: "Inactive Roles", value: inactiveRoles.toLocaleString(), description: "Disabled roles", icon: ShieldOff, accent: "default" },
    { title: "System Roles", value: systemRoles.toLocaleString(), description: "Default roles", icon: Cpu, accent: "default" },
    { title: "Custom Roles", value: customRoles.toLocaleString(), description: "User defined", icon: KeyRound, accent: "default" },
    { title: "Assigned Users", value: totalUsersAssigned.toLocaleString(), description: "Users with roles", icon: Users, accent: "success" },
    { title: "Avg Permissions", value: averagePermissions.toString(), description: "Per role", icon: Activity, accent: "default" },
    { title: "Recently Updated", value: recentlyUpdated.toString(), description: "Last 30 days", icon: Clock3, accent: "default" },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} title={stat.title} value={stat.value} description={stat.description} icon={stat.icon} accent={stat.accent} />
      ))}
    </section>
  );
}
