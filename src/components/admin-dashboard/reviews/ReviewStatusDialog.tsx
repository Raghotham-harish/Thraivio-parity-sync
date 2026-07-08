import {
  CheckCircle2,
  Clock3,
  Flag,
  XCircle,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import type {
  AdminReview,
  ReviewStatus,
} from "@/types/admin-review";

interface ReviewStatusDialogProps {
  open: boolean;

  review: AdminReview | null;

  onStatusChange: (
    status: ReviewStatus
  ) => void;

  onOpenChange: (open: boolean) => void;
}

export default function ReviewStatusDialog({
  open,
  review,
  onStatusChange,
  onOpenChange,
}: ReviewStatusDialogProps) {
  if (!review) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-xl rounded-3xl">

        <DialogHeader>

          <DialogTitle>
            Update Review Status
          </DialogTitle>

          <DialogDescription>
            Approve, reject or report
            this review. Changes can
            be synced with backend later.
          </DialogDescription>

        </DialogHeader>

        <div className="space-y-5">

          <div className="rounded-2xl border bg-muted/40 p-5">

            <h3 className="font-semibold">
              {review.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {review.review}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">

              <span className="rounded-full border px-3 py-1 text-xs">
                {review.user.name}
              </span>

              <span className="rounded-full border px-3 py-1 text-xs capitalize">
                {review.type}
              </span>

              <span className="rounded-full border px-3 py-1 text-xs">
                ⭐ {review.rating.toFixed(1)}
              </span>

            </div>

          </div>

          <div className="grid gap-3 sm:grid-cols-2">
                        <Button
              variant="outline"
              className="h-14 justify-start rounded-2xl border-emerald-200 hover:bg-emerald-50"
              onClick={() => onStatusChange("approved")}
            >
              <CheckCircle2 className="mr-3 h-5 w-5 text-emerald-600" />

              <div className="text-left">

                <p className="font-semibold">
                  Approve
                </p>

                <p className="text-xs text-muted-foreground">
                  Publish this review
                </p>

              </div>

            </Button>

            <Button
              variant="outline"
              className="h-14 justify-start rounded-2xl border-amber-200 hover:bg-amber-50"
              onClick={() => onStatusChange("pending")}
            >
              <Clock3 className="mr-3 h-5 w-5 text-amber-600" />

              <div className="text-left">

                <p className="font-semibold">
                  Pending
                </p>

                <p className="text-xs text-muted-foreground">
                  Move to moderation queue
                </p>

              </div>

            </Button>

            <Button
              variant="outline"
              className="h-14 justify-start rounded-2xl border-red-200 hover:bg-red-50"
              onClick={() => onStatusChange("rejected")}
            >
              <XCircle className="mr-3 h-5 w-5 text-red-600" />

              <div className="text-left">

                <p className="font-semibold">
                  Reject
                </p>

                <p className="text-xs text-muted-foreground">
                  Hide this review
                </p>

              </div>

            </Button>

            <Button
              variant="outline"
              className="h-14 justify-start rounded-2xl border-orange-200 hover:bg-orange-50"
              onClick={() => onStatusChange("reported")}
            >
              <Flag className="mr-3 h-5 w-5 text-orange-600" />

              <div className="text-left">

                <p className="font-semibold">
                  Report
                </p>

                <p className="text-xs text-muted-foreground">
                  Flag for investigation
                </p>

              </div>

            </Button>

          </div>
                    <DialogFooter>

            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

          </DialogFooter>

        </div>

      </DialogContent>

    </Dialog>
  );
}