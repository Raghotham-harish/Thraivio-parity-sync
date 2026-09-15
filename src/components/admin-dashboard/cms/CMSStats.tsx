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

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

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
  const stats: {
    title: string;
    value: string;
    description: string;
    icon: typeof FileText;
    accent: StatCardAccent;
  }[] = [
    { title: "Total Pages", value: totalPages.toLocaleString(), description: "Website pages", icon: FileText, accent: "default" },
    { title: "Published", value: publishedPages.toLocaleString(), description: "Live pages", icon: Globe, accent: "success" },
    { title: "Drafts", value: draftPages.toLocaleString(), description: "Work in progress", icon: FileEdit, accent: "default" },
    { title: "Archived", value: archivedPages.toLocaleString(), description: "Archived content", icon: Archive, accent: "default" },
    { title: "Total Views", value: totalViews.toLocaleString(), description: "Overall traffic", icon: Eye, accent: "default" },
    { title: "Monthly Views", value: monthlyViews.toLocaleString(), description: "Last 30 days", icon: TrendingUp, accent: "default" },
    { title: "SEO Optimized", value: seoOptimizedPages.toLocaleString(), description: "Optimized pages", icon: Search, accent: "success" },
    { title: "Recently Updated", value: recentlyUpdated.toLocaleString(), description: "Updated pages", icon: Clock3, accent: "default" },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} title={stat.title} value={stat.value} description={stat.description} icon={stat.icon} accent={stat.accent} />
      ))}
    </section>
  );
}
