import { Archive, BookOpen, FilePen, Star, UploadCloud } from "lucide-react";

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

interface ProgramsStatsProps {
  totalPrograms: number;
  published: number;
  drafts: number;
  featured: number;
  archived: number;
}

export default function ProgramsStats({
  totalPrograms,
  published,
  drafts,
  featured,
  archived,
}: ProgramsStatsProps) {
  const stats: {
    title: string;
    value: string;
    icon: typeof BookOpen;
    accent: StatCardAccent;
  }[] = [
    { title: "Total Programs", value: totalPrograms.toLocaleString(), icon: BookOpen, accent: "default" },
    { title: "Published", value: published.toLocaleString(), icon: UploadCloud, accent: "success" },
    { title: "Drafts", value: drafts.toLocaleString(), icon: FilePen, accent: "default" },
    { title: "Featured", value: featured.toLocaleString(), icon: Star, accent: "default" },
    { title: "Archived", value: archived.toLocaleString(), icon: Archive, accent: "default" },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
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
