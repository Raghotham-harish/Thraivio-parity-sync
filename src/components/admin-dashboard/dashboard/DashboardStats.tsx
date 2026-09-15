import {
  Award,
  BookOpen,
  CalendarCheck,
  CalendarDays,
  DollarSign,
  GraduationCap,
  Star,
  Users,
} from "lucide-react";

import type { DashboardStat } from "@/types/admin-dashboard";
import { PageHeader } from "@/components/admin-dashboard/shared/PageHeader";
import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

interface DashboardStatsProps {
  stats: DashboardStat[];
  onCardClick?: (id: string) => void;
}

const iconMap = {
  Users,
  GraduationCap,
  CalendarCheck,
  BookOpen,
  CalendarDays,
  DollarSign,
  Award,
  Star,
};

// Legacy per-card color labels (from the data layer) mapped onto the
// Thraivio semantic chart tokens, so this stays a display-only concern.
const accentMap: Record<string, StatCardAccent> = {
  blue: "primary",
  emerald: "chart-3",
  green: "chart-3",
  violet: "chart-5",
  pink: "chart-5",
  orange: "chart-4",
  amber: "chart-4",
  cyan: "chart-2",
};

const DashboardStats = ({ stats, onCardClick }: DashboardStatsProps) => {
  return (
    <section className="mt-10">
      <PageHeader
        eyebrow="Platform Analytics"
        title="Key Performance Indicators"
        description="Monitor users, mentors, sessions, revenue, certificates and platform performance in real time."
        action={
          <button className="rounded-2xl border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:bg-secondary">
            View Complete Analytics
          </button>
        }
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const accent = accentMap[item.color] ?? "primary";

          return (
            <StatCard
              key={item.id}
              title={item.title}
              value={item.value}
              icon={Icon}
              accent={accent}
              change={`${item.change}%`}
              trend={item.trend}
              description={item.description}
              onClick={() => onCardClick?.(item.id)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default DashboardStats;
