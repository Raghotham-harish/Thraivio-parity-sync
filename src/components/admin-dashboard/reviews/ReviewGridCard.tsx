import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Flag,
  MessageSquare,
  Star,
  User,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
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
          <Badge className="bg-[#ECFDF5] hover:bg-[#ECFDF5]">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Approved
          </Badge>
        );

      case "pending":
        return (
          <Badge className="bg-[#F59E0B] text-white hover:bg-[#F59E0B]">
            <Clock3 className="mr-1 h-3 w-3" />
            Pending
          </Badge>
        );

      case "reported":
        return (
          <Badge className="bg-orange-500 hover:bg-orange-500">
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
    <Card className="rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <CardContent className="space-y-6 p-6">

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <Avatar className="h-14 w-14">

              <AvatarImage src={review.user.avatar} />

              <AvatarFallback>
                {review.user.name.slice(0, 2)}
              </AvatarFallback>

            </Avatar>

            <div>

              <h3 className="font-semibold">
                {review.user.name}
              </h3>

              <p className="text-sm text-muted-foreground">
                {review.user.email}
              </p>

            </div>

          </div>

          {statusBadge()}

        </div>
                <div className="space-y-3">

          <div className="flex items-center gap-2">

            <MessageSquare className="h-4 w-4 text-primary" />

            <h4 className="font-semibold">
              {review.title}
            </h4>

          </div>

          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
            {review.review}
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4 rounded-2xl border bg-muted/30 p-4">

          <div>

            <p className="text-xs text-muted-foreground">
              Review Type
            </p>

            <p className="mt-1 font-medium capitalize">
              {review.type}
            </p>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Rating
            </p>

            <div className="mt-1 flex items-center gap-1">

              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

              <span className="font-medium">
                {review.rating.toFixed(1)}
              </span>

            </div>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Mentor
            </p>

            <div className="mt-1 flex items-center gap-2">

              <User className="h-4 w-4 text-muted-foreground" />

              <span className="text-sm">
                {review.mentor.name}
              </span>

            </div>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">
              Date
            </p>

            <div className="mt-1 flex items-center gap-2">

              <CalendarDays className="h-4 w-4 text-muted-foreground" />

              <span className="text-sm">
                {review.createdAt}
              </span>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border p-4">

          <p className="text-xs text-muted-foreground">
            Review Target
          </p>

          <p className="mt-1 font-medium">
            {review.target.title}
          </p>

        </div>
                <div className="flex flex-wrap gap-3">

          <Button
            variant="outline"
            className="flex-1 rounded-xl"
            onClick={() => onView(review)}
          >
            View Details
          </Button>

          <Button
            variant="outline"
            className="flex-1 rounded-xl"
            onClick={() => onStatus(review)}
          >
            Update Status
          </Button>

          <Button
            variant="destructive"
            className="rounded-xl"
            onClick={() => onDelete(review)}
          >
            Delete
          </Button>

        </div>

      </CardContent>

    </Card>
  );
}