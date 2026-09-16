import {
  AlertTriangle,
  Trash2,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import type {
  AdminReview,
} from "@/types/admin-review";

interface DeleteReviewDialogProps {
  open: boolean;

  review: AdminReview | null;

  onDelete: () => void;

  onOpenChange: (open: boolean) => void;
}

export default function DeleteReviewDialog({
  open,
  review,
  onDelete,
  onOpenChange,
}: DeleteReviewDialogProps) {
  if (!review) return null;

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent className="max-w-lg rounded-2xl">

        <AlertDialogHeader>

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFDAD6]">

            <AlertTriangle className="h-8 w-8 text-red-600" />

          </div>

          <AlertDialogTitle className="text-center text-2xl">

            Delete Review?

          </AlertDialogTitle>

          <AlertDialogDescription className="text-center">

            This action cannot be undone.
            The selected review will be
            permanently removed from
            the platform.

          </AlertDialogDescription>

        </AlertDialogHeader>

        <div className="rounded-2xl border bg-muted/40 p-5">

          <p className="font-semibold">
            {review.title}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">

            {review.user.name}

          </p>

          <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">

            {review.review}

          </p>

        </div>
                <AlertDialogFooter>

          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/90"
            onClick={onDelete}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Review
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>

    </AlertDialog>
  );
}