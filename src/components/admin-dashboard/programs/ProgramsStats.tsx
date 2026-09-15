import {
  BookOpen,
  Users,
  Star,
  IndianRupee,
} from "lucide-react";

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

interface ProgramsStatsProps {
  totalPrograms: number;
  publishedPrograms: number;
  totalStudents: number;
  averageRating: number;
  estimatedRevenue: number;
}

export default function ProgramsStats({
  totalPrograms,
  publishedPrograms,
  averageRating,
  estimatedRevenue,
}: ProgramsStatsProps) {
  const stats: {
    title: string;
    value: string;
    icon: typeof BookOpen;
    accent: StatCardAccent;
  }[] = [
    { title: "Total Programs", value: totalPrograms.toLocaleString(), icon: BookOpen, accent: "default" },
    { title: "Published", value: publishedPrograms.toLocaleString(), icon: Users, accent: "success" },
    { title: "Average Rating", value: averageRating.toFixed(1), icon: Star, accent: "default" },
    { title: "Estimated Revenue", value: `₹${estimatedRevenue.toLocaleString()}`, icon: IndianRupee, accent: "success" },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          accent={stat.accent}
        />
      ))}
    </section>
  );
}
