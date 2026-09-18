import type { AdminReview } from "@/types/admin-review";

import ReviewGridCard from "./ReviewGridCard";
import ReviewTableRow from "./ReviewTableRow";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ReviewsTableProps {
  reviews: AdminReview[];

  onView: (review: AdminReview) => void;

  onStatus: (review: AdminReview) => void;

  onDelete: (review: AdminReview) => void;
}

export default function ReviewsTable({
  reviews,
  onView,
  onStatus,
  onDelete,
}: ReviewsTableProps) {
  return (
    <Card className="rounded-2xl shadow-sm">

      <CardContent className="p-0">

        <div className="grid gap-3 p-4 lg:hidden">
          {reviews.map((review) => (
            <ReviewGridCard
              key={review.id}
              review={review}
              onView={onView}
              onStatus={onStatus}
              onDelete={onDelete}
            />
          ))}
        </div>

        <div className="hidden overflow-x-auto lg:block">

          <Table>

            <TableHeader>

              <TableRow>

                <TableHead>
                  User
                </TableHead>

                <TableHead>
                  Review
                </TableHead>

                <TableHead>
                  Rating
                </TableHead>

                <TableHead>
                  Status
                </TableHead>

                <TableHead>
                  Mentor
                </TableHead>

                <TableHead className="text-right">
                  Actions
                </TableHead>

              </TableRow>

            </TableHeader>

            <TableBody>
                            {reviews.map((review) => (

              <ReviewTableRow
                key={review.id}
                review={review}
                onView={onView}
                onStatus={onStatus}
                onDelete={onDelete}
              />

            ))}

          </TableBody>

        </Table>

      </div>
            </CardContent>

    </Card>
  );
}