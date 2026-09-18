import EmptyState from "@/components/shared/EmptyState";
import chatIllustration from "@/assets/illustrations/chat.svg";

interface EmptyReviewsProps {
  onResetFilters: () => void;
}

export default function EmptyReviews({ onResetFilters }: EmptyReviewsProps) {
  return (
    <EmptyState
      illustration={chatIllustration}
      title="No Reviews Found"
      description="No reviews match your current search or filter selection."
      action={{
        label: "Reset Filters",
        onClick: onResetFilters,
      }}
    />
  );
}
