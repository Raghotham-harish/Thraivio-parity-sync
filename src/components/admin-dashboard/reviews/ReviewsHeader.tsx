import { Download, MessageSquare, RefreshCw, Star } from "lucide-react";

import { FeatureHeader } from "@/components/admin-dashboard/shared/FeatureHeader";

interface ReviewsHeaderProps {
  totalReviews: number;
  averageRating: number;
  onRefresh: () => void;
  onExport: () => void;
}

export default function ReviewsHeader({
  totalReviews,
  averageRating,
  onRefresh,
  onExport,
}: ReviewsHeaderProps) {
  return (
    <FeatureHeader
      icon={MessageSquare}
      eyebrow="Reviews Management"
      title="Reviews Dashboard"
      description="Manage mentor, program, session, event and certificate reviews. Approve, reject or moderate platform feedback from one place."
      meta={[
        { icon: MessageSquare, label: `${totalReviews.toLocaleString()} Reviews` },
        { icon: Star, label: `${averageRating.toFixed(1)} Average Rating` },
      ]}
      primaryAction={{ label: "Export Reviews", icon: Download, onClick: onExport }}
      secondaryAction={{ label: "Refresh", icon: RefreshCw, onClick: onRefresh }}
    />
  );
}
