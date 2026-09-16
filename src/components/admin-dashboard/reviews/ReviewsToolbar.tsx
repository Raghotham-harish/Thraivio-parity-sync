import {
  Search,
  Grid2X2,
  List,
  RotateCcw,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ReviewsToolbarProps {
  search: string;

  onSearchChange: (value: string) => void;

  status: string;

  onStatusChange: (value: string) => void;

  type: string;

  onTypeChange: (value: string) => void;

  rating: string;

  onRatingChange: (value: string) => void;

  verified: string;

  onVerifiedChange: (value: string) => void;

  view: "grid" | "list";

  onViewChange: (view: "grid" | "list") => void;

  onRefresh: () => void;
}

export default function ReviewsToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  type,
  onTypeChange,
  rating,
  onRatingChange,
  verified,
  onVerifiedChange,
  view,
  onViewChange,
  onRefresh,
}: ReviewsToolbarProps) {
  return (
    <section className="rounded-2xl border bg-background p-6 shadow-sm">

      <div className="grid gap-4 xl:grid-cols-6">

        <div className="xl:col-span-2">

          <div className="relative">

            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={search}
              onChange={(e) =>
                onSearchChange(e.target.value)
              }
              placeholder="Search reviews..."
              className="h-11 rounded-xl pl-10"
            />

          </div>

        </div>

        <Select
          value={status}
          onValueChange={onStatusChange}
        >
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>

            <SelectItem value="all">
              All Status
            </SelectItem>

            <SelectItem value="approved">
              Approved
            </SelectItem>

            <SelectItem value="pending">
              Pending
            </SelectItem>

            <SelectItem value="rejected">
              Rejected
            </SelectItem>

            <SelectItem value="reported">
              Reported
            </SelectItem>

          </SelectContent>

        </Select>

        <Select
          value={type}
          onValueChange={onTypeChange}
        >
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Review Type" />
          </SelectTrigger>

          <SelectContent>

            <SelectItem value="all">
              All Types
            </SelectItem>

            <SelectItem value="mentor">
              Mentor
            </SelectItem>

            <SelectItem value="program">
              Program
            </SelectItem>

            <SelectItem value="session">
              Session
            </SelectItem>

            <SelectItem value="event">
              Event
            </SelectItem>

            <SelectItem value="certificate">
              Certificate
            </SelectItem>

          </SelectContent>

        </Select>
                <Select
          value={rating}
          onValueChange={onRatingChange}
        >
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>

          <SelectContent>

            <SelectItem value="all">
              All Ratings
            </SelectItem>

            <SelectItem value="5">
              ⭐ 5 Stars
            </SelectItem>

            <SelectItem value="4">
              ⭐ 4 Stars
            </SelectItem>

            <SelectItem value="3">
              ⭐ 3 Stars
            </SelectItem>

            <SelectItem value="2">
              ⭐ 2 Stars
            </SelectItem>

            <SelectItem value="1">
              ⭐ 1 Star
            </SelectItem>

          </SelectContent>

        </Select>

        <Select
          value={verified}
          onValueChange={onVerifiedChange}
        >
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Verification" />
          </SelectTrigger>

          <SelectContent>

            <SelectItem value="all">
              All Reviews
            </SelectItem>

            <SelectItem value="verified">
              Verified
            </SelectItem>

            <SelectItem value="unverified">
              Unverified
            </SelectItem>

          </SelectContent>

        </Select>

      </div>

      <div className="mt-5 flex flex-col gap-4 border-t pt-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex flex-wrap gap-2">

          <Button
            variant={
              view === "grid"
                ? "default"
                : "outline"
            }
            className="rounded-xl"
            onClick={() =>
              onViewChange("grid")
            }
          >
            <Grid2X2 className="mr-2 h-4 w-4" />
            Grid
          </Button>

          <Button
            variant={
              view === "list"
                ? "default"
                : "outline"
            }
            className="rounded-xl"
            onClick={() =>
              onViewChange("list")
            }
          >
            <List className="mr-2 h-4 w-4" />
            List
          </Button>
                  </div>

        <Button
          variant="outline"
          className="rounded-xl"
          onClick={onRefresh}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Refresh
        </Button>

      </div>

    </section>
  );
}