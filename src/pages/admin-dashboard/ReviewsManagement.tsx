import { useMemo, useState } from "react";

import ReviewsHeader from "@/components/admin-dashboard/reviews/ReviewsHeader";
import ReviewsStats from "@/components/admin-dashboard/reviews/ReviewsStats";
import ReviewsToolbar from "@/components/admin-dashboard/reviews/ReviewsToolbar";
import ReviewsGrid from "@/components/admin-dashboard/reviews/ReviewsGrid";
import ReviewsTable from "@/components/admin-dashboard/reviews/ReviewsTable";
import ReviewDetailsDialog from "@/components/admin-dashboard/reviews/ReviewDetailsDialog";
import DeleteReviewDialog from "@/components/admin-dashboard/reviews/DeleteReviewDialog";
import ReviewStatusDialog from "@/components/admin-dashboard/reviews/ReviewStatusDialog";
import EmptyReviews from "@/components/admin-dashboard/reviews/EmptyReviews";

import {
  reviews,
  reviewStats,
} from "@/data/admin-reviews";

import type {
  AdminReview,
  ReviewStatus,
} from "@/types/admin-review";

export default function ReviewsManagement() {
  const [search, setSearch] = useState("");

  const [status, setStatus] =
    useState("all");

  const [type, setType] =
    useState("all");

  const [rating, setRating] =
    useState("all");

  const [verified, setVerified] =
    useState("all");

  const [view, setView] =
    useState<"grid" | "list">("grid");

  const [selectedReview, setSelectedReview] =
    useState<AdminReview | null>(null);

  const [detailsOpen, setDetailsOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [statusOpen, setStatusOpen] =
    useState(false);
      const filteredReviews = useMemo(() => {
    return reviews.filter((review) => {
      const matchesSearch =
        review.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        review.review
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        review.user.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        review.mentor.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        review.status === status;

      const matchesType =
        type === "all" ||
        review.type === type;

      const matchesRating =
        rating === "all" ||
        review.rating === Number(rating);

      const matchesVerified =
        verified === "all" ||
        (verified === "verified"
          ? review.verifiedPurchase
          : !review.verifiedPurchase);

      return (
        matchesSearch &&
        matchesStatus &&
        matchesType &&
        matchesRating &&
        matchesVerified
      );
    });
  }, [
    search,
    status,
    type,
    rating,
    verified,
  ]);

  const handleView = (
    review: AdminReview
  ) => {
    setSelectedReview(review);
    setDetailsOpen(true);
  };

  const handleStatus = (
    review: AdminReview
  ) => {
    setSelectedReview(review);
    setStatusOpen(true);
  };

  const handleDelete = (
    review: AdminReview
  ) => {
    setSelectedReview(review);
    setDeleteOpen(true);
  };
    const handleRefresh = () => {
    console.log("Refresh Reviews");
  };

  const handleExport = () => {
    console.log("Export Reviews");
  };

  const handleDeleteConfirm = () => {
    console.log("Delete Review");
    setDeleteOpen(false);
    setSelectedReview(null);
  };

  const handleStatusChange = (
    status: ReviewStatus
  ) => {
    console.log(
      "Update Status:",
      selectedReview?.id,
      status
    );

    setStatusOpen(false);
    setSelectedReview(null);
  };

  const handleResetFilters = () => {
    setSearch("");

    setStatus("all");

    setType("all");

    setRating("all");

    setVerified("all");

    setView("grid");
  };

  return (
    <div className="space-y-8">

      <ReviewsHeader
        totalReviews={reviewStats.totalReviews}
        averageRating={reviewStats.averageRating}
        onRefresh={handleRefresh}
        onExport={handleExport}
      />

      <ReviewsStats
        totalReviews={reviewStats.totalReviews}
        approvedReviews={reviewStats.approvedReviews}
        pendingReviews={reviewStats.pendingReviews}
        rejectedReviews={reviewStats.rejectedReviews}
        reportedReviews={reviewStats.reportedReviews}
        averageRating={reviewStats.averageRating}
        verifiedReviews={reviewStats.verifiedReviews}
        flaggedReviews={reviewStats.flaggedReviews}
      />
            <ReviewsToolbar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        type={type}
        onTypeChange={setType}
        rating={rating}
        onRatingChange={setRating}
        verified={verified}
        onVerifiedChange={setVerified}
        view={view}
        onViewChange={setView}
        onRefresh={handleRefresh}
      />

      {filteredReviews.length === 0 ? (

        <EmptyReviews
          onResetFilters={handleResetFilters}
        />

      ) : view === "grid" ? (

        <ReviewsGrid
          reviews={filteredReviews}
          onView={handleView}
          onStatus={handleStatus}
          onDelete={handleDelete}
        />

      ) : (

        <ReviewsTable
          reviews={filteredReviews}
          onView={handleView}
          onStatus={handleStatus}
          onDelete={handleDelete}
        />

      )}
            <ReviewDetailsDialog
        open={detailsOpen}
        review={selectedReview}
        onOpenChange={setDetailsOpen}
      />

      <ReviewStatusDialog
        open={statusOpen}
        review={selectedReview}
        onStatusChange={handleStatusChange}
        onOpenChange={setStatusOpen}
      />

      <DeleteReviewDialog
        open={deleteOpen}
        review={selectedReview}
        onDelete={handleDeleteConfirm}
        onOpenChange={setDeleteOpen}
      />
          </div>
  );
}