import {
  MessageSquare,
  Download,
  RefreshCw,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ReviewsHeaderProps {
  totalReviews: number;

  averageRating: number;

  onRefresh: () => void;

  onExport: () => void;
}

export default function ReviewsHeader({
  totalReviews,
  averageRating,
  onRefresh,
  onExport,
}: ReviewsHeaderProps) {
  return (
    <section className="rounded-3xl border bg-background p-6 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="space-y-4">

          <Badge
            variant="secondary"
            className="w-fit rounded-full px-4 py-1"
          >
            Reviews Management
          </Badge>

          <div>

            <h1 className="text-3xl font-bold tracking-tight">
              Reviews Dashboard
            </h1>

            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Manage mentor, program, session,
              event and certificate reviews.
              Approve, reject or moderate
              platform feedback from one place.
            </p>

          </div>

          <div className="flex flex-wrap items-center gap-3">

            <div className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm">

              <MessageSquare className="h-4 w-4 text-primary" />

              <span>
                {totalReviews.toLocaleString()}
                {" "}
                Reviews
              </span>

            </div>

            <div className="rounded-full border px-4 py-2 text-sm font-semibold">

              ⭐
              {" "}
              {averageRating.toFixed(1)}
              {" "}
              Average Rating

            </div>

          </div>

        </div>

        <div className="flex flex-wrap gap-3">

          <Button
            variant="outline"
            className="rounded-xl"
            onClick={onRefresh}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>

          <Button
            className="rounded-xl"
            onClick={onExport}
          >
            <Download className="mr-2 h-4 w-4" />
            Export Reviews
          </Button>

        </div>

      </div>
          </section>
  );
}