import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Eye,
  Flag,
  RefreshCw,
  Star,
  Trash2,
  User,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import type { AdminReview } from "@/types/admin-review";

interface ReviewGridCardProps {
  review: AdminReview;

  onView: (review: AdminReview) => void;

  onStatus: (review: AdminReview) => void;

  onDelete: (review: AdminReview) => void;
}

export default function ReviewGridCard({
  review,
  onView,
  onStatus,
  onDelete,
}: ReviewGridCardProps) {
  const statusBadge = () => {
    switch (review.status) {
      case "approved":
        return (
          <Badge className="bg-[#ECFDF5] text-[#065F46] hover:bg-[#ECFDF5]">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Approved
          </Badge>
        );

      case "pending":
        return (
          <Badge className="bg-[#FFFBEB] text-[#B45309] hover:bg-[#FFFBEB]">
            <Clock3 className="mr-1 h-3 w-3" />
            Pending
          </Badge>
        );

      case "reported":
        return (
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
            <Flag className="mr-1 h-3 w-3" />
            Reported
          </Badge>
        );

      case "rejected":
        return (
          <Badge variant="destructive">
            <XCircle className="mr-1 h-3 w-3" />
            Rejected
          </Badge>
        );
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar className="h-10 w-10 shrink-0">
            <AvatarImage src={review.user.avatar} />
            <AvatarFallback>{review.user.name.slice(0, 2)}</AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-foreground">
              {review.user.name}
            </h3>
            <p className="truncate text-sm text-muted-foreground">
              {review.user.email}
            </p>
          </div>
        </div>

        <div className="shrink-0">{statusBadge()}</div>
      </div>

      <h4 className="mt-3 truncate font-semibold text-foreground">
        {review.title}
      </h4>
      <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">
        {review.review}
      </p>

      {/* Meta row */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
          <span className="font-semibold text-foreground">
            {review.rating.toFixed(1)}
          </span>
        </span>
        <span className="capitalize">{review.type}</span>
        <span className="flex items-center gap-1">
          <User className="h-3.5 w-3.5" />
          {review.mentor.name}
        </span>
        <span className="flex items-center gap-1">
          <CalendarDays className="h-3.5 w-3.5" />
          {review.createdAt}
        </span>
      </div>

      <p className="mt-2 truncate text-xs text-muted-foreground">
        On <span className="font-medium text-foreground">{review.target.title}</span>
      </p>

      {/* Actions */}
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onView(review)}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          <Eye className="h-4 w-4" />
          View
        </button>

        <button
          type="button"
          onClick={() => onStatus(review)}
          aria-label="Update review status"
          title="Update status"
          className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <RefreshCw className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => onDelete(review)}
          aria-label="Delete review"
          title="Delete"
          className="rounded-lg border border-border p-2 text-red-600 transition-colors hover:bg-[#FFDAD6]"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
