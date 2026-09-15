import {
  MessageSquare,
  CheckCircle2,
  Clock3,
  XCircle,
  Flag,
  Star,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

import { StatCard, type StatCardAccent } from "@/components/admin-dashboard/shared/StatCard";

interface ReviewsStatsProps {
  totalReviews: number;
  approvedReviews: number;
  pendingReviews: number;
  rejectedReviews: number;
  reportedReviews: number;
  averageRating: number;
  verifiedReviews: number;
  flaggedReviews: number;
}

export default function ReviewsStats({
  totalReviews,
  approvedReviews,
  pendingReviews,
  rejectedReviews,
  reportedReviews,
  averageRating,
  verifiedReviews,
  flaggedReviews,
}: ReviewsStatsProps) {
  const stats: {
    title: string;
    value: string;
    description: string;
    icon: typeof MessageSquare;
    accent: StatCardAccent;
  }[] = [
    { title: "Total Reviews", value: totalReviews.toLocaleString(), description: "Platform reviews", icon: MessageSquare, accent: "default" },
    { title: "Approved", value: approvedReviews.toLocaleString(), description: "Published reviews", icon: CheckCircle2, accent: "success" },
    { title: "Pending", value: pendingReviews.toLocaleString(), description: "Awaiting moderation", icon: Clock3, accent: "default" },
    { title: "Rejected", value: rejectedReviews.toLocaleString(), description: "Rejected reviews", icon: XCircle, accent: "default" },
    { title: "Reported", value: reportedReviews.toLocaleString(), description: "Reported content", icon: Flag, accent: "default" },
    { title: "Average Rating", value: averageRating.toFixed(1), description: "Overall rating", icon: Star, accent: "default" },
    { title: "Verified", value: verifiedReviews.toLocaleString(), description: "Verified purchases", icon: ShieldCheck, accent: "success" },
    { title: "Flagged", value: flaggedReviews.toLocaleString(), description: "Need attention", icon: TriangleAlert, accent: "default" },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} title={stat.title} value={stat.value} description={stat.description} icon={stat.icon} accent={stat.accent} />
      ))}
    </section>
  );
}
