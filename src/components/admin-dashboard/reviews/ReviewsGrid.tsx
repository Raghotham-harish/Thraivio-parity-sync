import type { AdminReview } from "@/types/admin-review";

import ReviewGridCard from "./ReviewGridCard";

interface ReviewsGridProps {
  reviews: AdminReview[];

  onView: (review: AdminReview) => void;

  onStatus: (review: AdminReview) => void;

  onDelete: (review: AdminReview) => void;
}

export default function ReviewsGrid({
  reviews,
  onView,
  onStatus,
  onDelete,
}: ReviewsGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">

      {reviews.map((review) => (

        <ReviewGridCard
          key={review.id}
          review={review}
          onView={onView}
          onStatus={onStatus}
          onDelete={onDelete}
        />

      ))}

    </section>
  );
}
