export type ReviewType =
  | "mentor"
  | "program"
  | "session"
  | "event"
  | "certificate";

export type ReviewStatus =
  | "approved"
  | "pending"
  | "rejected"
  | "reported";

export interface AdminReview {
  id: string;

  reviewId: string;

  type: ReviewType;

  status: ReviewStatus;

  rating: number;

  title: string;

  review: string;

  helpfulCount: number;

  verifiedPurchase: boolean;

  createdAt: string;

  updatedAt: string;

  user: {
    id: string;

    name: string;

    email: string;

    avatar: string;
  };

  mentor: {
    id: string;

    name: string;

    avatar: string;

    company: string;
  };

  target: {
    id: string;

    title: string;
  };
}

export interface ReviewStats {
  totalReviews: number;

  approvedReviews: number;

  pendingReviews: number;

  rejectedReviews: number;

  reportedReviews: number;

  averageRating: number;

  verifiedReviews: number;

  flaggedReviews: number;
}
export interface ReviewFilters {
  search: string;

  status: ReviewStatus | "all";

  type: ReviewType | "all";

  rating: number | "all";

  verified: "all" | "verified" | "unverified";

  sortBy:
    | "newest"
    | "oldest"
    | "highest-rating"
    | "lowest-rating"
    | "most-helpful";
}

export interface ReviewTableColumn {
  id:
    | "review"
    | "user"
    | "mentor"
    | "rating"
    | "status"
    | "type"
    | "verified"
    | "date"
    | "actions";

  label: string;

  sortable: boolean;
}