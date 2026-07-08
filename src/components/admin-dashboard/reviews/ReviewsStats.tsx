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
  const stats = [
    {
      title: "Total Reviews",
      value: totalReviews.toLocaleString(),
      subtitle: "Platform reviews",
      icon: MessageSquare,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      title: "Approved",
      value: approvedReviews.toLocaleString(),
      subtitle: "Published reviews",
      icon: CheckCircle2,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
    },
    {
      title: "Pending",
      value: pendingReviews.toLocaleString(),
      subtitle: "Awaiting moderation",
      icon: Clock3,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-600",
    },
    {
      title: "Rejected",
      value: rejectedReviews.toLocaleString(),
      subtitle: "Rejected reviews",
      icon: XCircle,
      iconBg: "bg-red-500/10",
      iconColor: "text-red-600",
    },
    {
      title: "Reported",
      value: reportedReviews.toLocaleString(),
      subtitle: "Reported content",
      icon: Flag,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-600",
    },
    {
      title: "Average Rating",
      value: averageRating.toFixed(1),
      subtitle: "Overall rating",
      icon: Star,
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-600",
    },
    {
      title: "Verified",
      value: verifiedReviews.toLocaleString(),
      subtitle: "Verified purchases",
      icon: ShieldCheck,
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-600",
    },
    {
      title: "Flagged",
      value: flaggedReviews.toLocaleString(),
      subtitle: "Need attention",
      icon: TriangleAlert,
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-600",
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