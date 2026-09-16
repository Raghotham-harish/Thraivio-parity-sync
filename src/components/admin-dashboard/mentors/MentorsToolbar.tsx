import { Grid2X2, List, RefreshCcw, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ViewToggle } from "@/components/admin-dashboard/shared/ViewToggle";

interface MentorsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  verification: string;
  onVerificationChange: (value: string) => void;

  expertise: string;
  onExpertiseChange: (value: string) => void;

  rating: string;
  onRatingChange: (value: string) => void;

  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;

  onRefresh?: () => void;
}

export default function MentorsToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  verification,
  onVerificationChange,
  expertise,
  onExpertiseChange,
  rating,
  onRatingChange,
  view,
  onViewChange,
  onRefresh,
}: MentorsToolbarProps) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-5">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search mentors..."
            className="h-11 rounded-xl pl-11"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <Select value={status} onValueChange={onStatusChange}>
            <SelectTrigger className="h-11 rounded-xl">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>

          <Select value={verification} onValueChange={onVerificationChange}>
            <SelectTrigger className="h-11 rounded-xl">
              <SelectValue placeholder="Verification" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Verification</SelectItem>
              <SelectItem value="verified">Verified</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>

          <Select value={expertise} onValueChange={onExpertiseChange}>
            <SelectTrigger className="h-11 rounded-xl">
              <SelectValue placeholder="Expertise" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Expertise</SelectItem>
              <SelectItem value="leadership">Leadership</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="career">Career</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>

          <Select value={rating} onValueChange={onRatingChange}>
            <SelectTrigger className="h-11 rounded-xl">
              <SelectValue placeholder="Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ratings</SelectItem>
              <SelectItem value="5">5 stars</SelectItem>
              <SelectItem value="4">4 stars & above</SelectItem>
              <SelectItem value="3">3 stars & above</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center justify-between gap-3 md:col-span-2 xl:col-span-1">
            <ViewToggle
              value={view}
              onChange={onViewChange}
              options={[
                { value: "grid", icon: Grid2X2 },
                { value: "list", icon: List },
              ]}
            />

            <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl" onClick={onRefresh}>
              <RefreshCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
