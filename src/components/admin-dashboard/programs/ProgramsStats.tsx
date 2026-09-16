
import {
  Archive,
  CheckCircle2,
  FileText,
  Layers3,
  Star,
} from "lucide-react";

interface ProgramsStatsProps {
  totalPrograms: number;
  published: number;
  drafts: number;
  featured: number;
  archived: number;
}

const statCards = [
  {
    key: "total",
    label: "Total Programs",
    icon: Layers3,
    iconClass: "bg-indigo-100 text-indigo-600",
    valueClass: "text-indigo-600",
  },
  {
    key: "published",
    label: "Published",
    icon: CheckCircle2,
    iconClass: "bg-emerald-100 text-emerald-600",
    valueClass: "text-emerald-600",
  },
  {
    key: "drafts",
    label: "Draft Programs",
    icon: FileText,
    iconClass: "bg-amber-100 text-amber-600",
    valueClass: "text-amber-600",
  },
  {
    key: "featured",
    label: "Featured Programs",
    icon: Star,
    iconClass: "bg-violet-100 text-violet-600",
    valueClass: "text-violet-600",
  },
  {
    key: "archived",
    label: "Archived Programs",
    icon: Archive,
    iconClass: "bg-slate-100 text-slate-600",
    valueClass: "text-slate-600",
  },
] as const;

export default function ProgramsStats({
  totalPrograms,
  published,
  drafts,
  featured,
  archived,
}: ProgramsStatsProps) {
  const values = {
    total: totalPrograms,
    published,
    drafts,
    featured,
    archived,
  };

  return (
    <section
      aria-label="Program statistics"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    >
      {statCards.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.key}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:rounded-3xl sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconClass}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <span className="text-xs font-medium text-slate-400">
                Programs
              </span>
            </div>

            <div className="mt-5">
              <p className="text-sm font-medium text-slate-500">
                {stat.label}
              </p>

              <p
                className={`mt-2 text-3xl font-bold tracking-tight tabular-nums ${stat.valueClass}`}
              >
                {values[stat.key]}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
}