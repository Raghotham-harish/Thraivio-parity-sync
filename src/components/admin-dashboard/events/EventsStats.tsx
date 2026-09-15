import { memo } from "react";

import {
  CalendarDays,
  Radio,
  Clock3,
  CheckCircle2,
  XCircle,
  Users,
} from "lucide-react";

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

interface EventsStatsProps {
  total: number;
  upcoming: number;
  live: number;
  completed: number;
  cancelled: number;
  registrations: number;
}

const buildStats = (props: EventsStatsProps): {
  title: string;
  value: number;
  icon: typeof CalendarDays;
  accent: StatCardAccent;
  description: string;
}[] => [
  { title: "Total Events", value: props.total, icon: CalendarDays, accent: "default", description: "All created events" },
  { title: "Upcoming", value: props.upcoming, icon: Clock3, accent: "default", description: "Scheduled sessions" },
  { title: "Live Events", value: props.live, icon: Radio, accent: "default", description: "Running now" },
  { title: "Completed", value: props.completed, icon: CheckCircle2, accent: "success", description: "Successfully finished" },
  { title: "Cancelled", value: props.cancelled, icon: XCircle, accent: "default", description: "Cancelled events" },
  { title: "Registrations", value: props.registrations, icon: Users, accent: "success", description: "Total participants" },
];

const EventsStats = (props: EventsStatsProps) => {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
      {buildStats(props).map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value.toLocaleString()}
          description={stat.description}
          icon={stat.icon}
          accent={stat.accent}
        />
      ))}
    </section>
  );
};

export default memo(EventsStats);
