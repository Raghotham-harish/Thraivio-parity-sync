import {
  CheckCircle2,
  Clock3,
  Eye,
  Flag,
  Star,
  Trash2,
  XCircle,
} from "lucide-react";

import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import type {
  AdminReview,
} from "@/types/admin-review";

interface ReviewTableRowProps {
  review: AdminReview;

  onView: (review: AdminReview) => void;

  onStatus: (review: AdminReview) => void;

  onDelete: (review: AdminReview) => void;
}

export default function ReviewTableRow({
  review,
  onView,
  onStatus,
  onDelete,
}: ReviewTableRowProps) {
  const statusBadge = () => {
    switch (review.status) {
      case "approved":
        return (
          <Badge className="bg-emerald-500 hover:bg-emerald-500">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Approved
          </Badge>
        );

      case "pending":
        return (
          <Badge className="bg-amber-500 text-white hover:bg-amber-500">
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
    <TableRow className="hover:bg-muted/40">
              <TableCell>

        <div className="flex items-center gap-3">

          <Avatar className="h-11 w-11">

            <AvatarImage src={review.user.avatar} />

            <AvatarFallback>
              {review.user.name.slice(0, 2)}
            </AvatarFallback>

          </Avatar>

          <div>

            <p className="font-medium">
              {review.user.name}
            </p>

            <p className="text-xs text-muted-foreground">
              {review.user.email}
            </p>

          </div>

        </div>

      </TableCell>

      <TableCell>

        <div className="space-y-1">

          <p className="font-medium line-clamp-1">
            {review.title}
          </p>

          <p className="text-xs text-muted-foreground capitalize">
            {review.type}
          </p>

        </div>

      </TableCell>

      <TableCell>

        <div className="flex items-center gap-1">

          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

          <span className="font-medium">
            {review.rating.toFixed(1)}
          </span>

        </div>

      </TableCell>

      <TableCell>

        {statusBadge()}

      </TableCell>

      <TableCell>

        <div className="space-y-1">

          <p className="font-medium">
            {review.mentor.name}
          </p>

          <p className="text-xs text-muted-foreground">
            {review.target.title}
          </p>

        </div>

      </TableCell>

      <TableCell>

        <div className="flex items-center gap-2">

          <Button
            size="icon"
            variant="outline"
            onClick={() => onView(review)}
          >
            <Eye className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={() => onStatus(review)}
          >
            <CheckCircle2 className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="destructive"
            onClick={() => onDelete(review)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>

        </div>

      </TableCell>
          </TableRow>
  );
}