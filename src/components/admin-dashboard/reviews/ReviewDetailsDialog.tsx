import {
  CalendarDays,
  Mail,
  MessageSquare,
  Star,
  User,
  Building2,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import type { AdminReview } from "@/types/admin-review";

interface ReviewDetailsDialogProps {
  open: boolean;

  review: AdminReview | null;

  onOpenChange: (open: boolean) => void;
}

export default function ReviewDetailsDialog({
  open,
  review,
  onOpenChange,
}: ReviewDetailsDialogProps) {
  if (!review) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-3xl rounded-3xl">

        <DialogHeader>

          <DialogTitle>
            Review Details
          </DialogTitle>

          <DialogDescription>
            Complete review information,
            reviewer details and mentor
            information.
          </DialogDescription>

        </DialogHeader>

        <div className="space-y-6">

          <div className="flex items-start justify-between">

            <div className="flex items-center gap-4">

              <Avatar className="h-16 w-16">

                <AvatarImage src={review.user.avatar} />

                <AvatarFallback>
                  {review.user.name.slice(0, 2)}
                </AvatarFallback>

              </Avatar>

              <div>

                <h3 className="text-lg font-semibold">
                  {review.user.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">

                  <Mail className="h-4 w-4" />

                  {review.user.email}

                </div>

              </div>

            </div>

            <Badge className="capitalize">
              {review.status}
            </Badge>

          </div>
                    <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border p-5">

              <div className="mb-4 flex items-center gap-2">

                <User className="h-5 w-5 text-primary" />

                <h4 className="font-semibold">
                  Reviewer Information
                </h4>

              </div>

              <div className="space-y-3 text-sm">

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Review ID
                  </span>

                  <span className="font-medium">
                    {review.reviewId}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Review Type
                  </span>

                  <span className="capitalize font-medium">
                    {review.type}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Verified
                  </span>

                  <Badge
                    variant={
                      review.verifiedPurchase
                        ? "default"
                        : "secondary"
                    }
                  >
                    {review.verifiedPurchase
                      ? "Verified"
                      : "Unverified"}
                  </Badge>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Helpful Votes
                  </span>

                  <span className="font-medium">
                    {review.helpfulCount}
                  </span>

                </div>

              </div>

            </div>

            <div className="rounded-2xl border p-5">

              <div className="mb-4 flex items-center gap-2">

                <Building2 className="h-5 w-5 text-primary" />

                <h4 className="font-semibold">
                  Mentor Information
                </h4>

              </div>

              <div className="space-y-3 text-sm">

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Mentor
                  </span>

                  <span className="font-medium">
                    {review.mentor.name}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Company
                  </span>

                  <span className="font-medium">
                    {review.mentor.company}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Rating
                  </span>

                  <div className="flex items-center gap-1">

                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                    <span className="font-medium">
                      {review.rating.toFixed(1)}
                    </span>

                  </div>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">
                    Date
                  </span>

                  <div className="flex items-center gap-2">

                    <CalendarDays className="h-4 w-4" />

                    <span>
                      {review.createdAt}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border p-5">

            <div className="mb-4 flex items-center gap-2">

              <MessageSquare className="h-5 w-5 text-primary" />

              <h4 className="font-semibold">
                Review Content
              </h4>

            </div>

            <h3 className="text-lg font-semibold">
              {review.title}
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              {review.review}
            </p>

          </div>
                    <div className="rounded-2xl border p-5">

            <h4 className="mb-4 font-semibold">
              Review Target
            </h4>

            <div className="space-y-3 text-sm">

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Target ID
                </span>

                <span className="font-medium">
                  {review.target.id}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">
                  Target Title
                </span>

                <span className="font-medium">
                  {review.target.title}
                </span>

              </div>

            </div>

          </div>

        </div>

      </DialogContent>

    </Dialog>
  );
}