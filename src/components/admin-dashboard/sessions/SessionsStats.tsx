import {
  CalendarClock,
  Radio,
  CheckCircle2,
  XCircle,
  IndianRupee,
} from "lucide-react";

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

interface SessionsStatsProps {
  scheduledSessions: number;
  liveSessions: number;
  completedSessions: number;
  cancelledSessions: number;
  totalRevenue: number;
}

const SessionsStats = ({
  scheduledSessions,
  liveSessions,
  completedSessions,
  cancelledSessions,
  totalRevenue,
}: SessionsStatsProps) => {
  const stats: {
    title: string;
    value: string | number;
    description: string;
    icon: typeof CalendarClock;
    accent: StatCardAccent;
  }[] = [
    { title: "Scheduled Sessions", value: scheduledSessions, description: "Upcoming mentorship sessions", icon: CalendarClock, accent: "default" },
    { title: "Live Sessions", value: liveSessions, description: "Currently running sessions", icon: Radio, accent: "default" },
    { title: "Completed", value: completedSessions, description: "Successfully finished", icon: CheckCircle2, accent: "success" },
    { title: "Cancelled", value: cancelledSessions, description: "Cancelled or missed", icon: XCircle, accent: "default" },
    { title: "Revenue", value: `₹${totalRevenue.toLocaleString()}`, description: "Total session earnings", icon: IndianRupee, accent: "success" },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          description={stat.description}
          icon={stat.icon}
          accent={stat.accent}
        />
      ))}
    </div>
  );
};

export default SessionsStats;
