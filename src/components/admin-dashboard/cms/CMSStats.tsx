import {
  FileText,
  Globe,
  FileEdit,
  Archive,
  Eye,
  TrendingUp,
  Search,
  Clock3,
} from "lucide-react";

interface CMSStatsProps {
  totalPages: number;

  publishedPages: number;

  draftPages: number;

  archivedPages: number;

  totalViews: number;

  monthlyViews: number;

  seoOptimizedPages: number;

  recentlyUpdated: number;
}

export default function CMSStats({
  totalPages,
  publishedPages,
  draftPages,
  archivedPages,
  totalViews,
  monthlyViews,
  seoOptimizedPages,
  recentlyUpdated,
}: CMSStatsProps) {
  const stats = [
    {
      title: "Total Pages",
      value: totalPages.toLocaleString(),
      subtitle: "Website pages",
      icon: FileText,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      title: "Published",
      value: publishedPages.toLocaleString(),
      subtitle: "Live pages",
      icon: Globe,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
    },
    {
      title: "Drafts",
      value: draftPages.toLocaleString(),
      subtitle: "Work in progress",
      icon: FileEdit,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-600",
    },
    {
      title: "Archived",
      value: archivedPages.toLocaleString(),
      subtitle: "Archived content",
      icon: Archive,
      iconBg: "bg-slate-500/10",
      iconColor: "text-slate-600",
    },
    {
      title: "Total Views",
      value: totalViews.toLocaleString(),
      subtitle: "Overall traffic",
      icon: Eye,
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-600",
    },
    {
      title: "Monthly Views",
      value: monthlyViews.toLocaleString(),
      subtitle: "Last 30 days",
      icon: TrendingUp,
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-600",
    },
    {
      title: "SEO Optimized",
      value: seoOptimizedPages.toLocaleString(),
      subtitle: "Optimized pages",
      icon: Search,
      iconBg: "bg-green-500/10",
      iconColor: "text-green-600",
    },
    {
      title: "Recently Updated",
      value: recentlyUpdated.toLocaleString(),
      subtitle: "Updated pages",
      icon: Clock3,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-600",
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