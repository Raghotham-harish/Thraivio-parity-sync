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

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

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
  const stats: {
    title: string;
    value: string;
    description: string;
    icon: typeof Headset;
    accent: StatCardAccent;
  }[] = [
    { title: "Total Tickets", value: totalTickets.toLocaleString(), description: "All support requests", icon: Headset, accent: "default" },
    { title: "Open Tickets", value: openTickets.toLocaleString(), description: "Awaiting action", icon: FolderOpen, accent: "default" },
    { title: "In Progress", value: inProgressTickets.toLocaleString(), description: "Currently handled", icon: LoaderCircle, accent: "default" },
    { title: "Resolved", value: resolvedTickets.toLocaleString(), description: "Successfully solved", icon: CheckCircle2, accent: "success" },
    { title: "Closed", value: closedTickets.toLocaleString(), description: "Completed tickets", icon: Archive, accent: "default" },
    { title: "Urgent", value: urgentTickets.toLocaleString(), description: "High priority", icon: AlertTriangle, accent: "default" },
    { title: "Avg Response", value: averageResponseTime, description: "Response time", icon: Clock3, accent: "default" },
    { title: "Satisfaction", value: customerSatisfaction, description: "Customer rating", icon: Star, accent: "success" },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} title={stat.title} value={stat.value} description={stat.description} icon={stat.icon} accent={stat.accent} />
      ))}
    </section>
  );
}
