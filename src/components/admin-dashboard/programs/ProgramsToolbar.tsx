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

interface ProgramsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  category: string;
  onCategoryChange: (value: string) => void;

  level: string;
  onLevelChange: (value: string) => void;

  price: string;
  onPriceChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;

  onRefresh: () => void;
}

export default function ProgramsToolbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  level,
  onLevelChange,
  price,
  onPriceChange,
  status,
  onStatusChange,
  view,
  onViewChange,
  onRefresh,
}: ProgramsToolbarProps) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="grid gap-4 xl:grid-cols-6">
        <div className="relative xl:col-span-2">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search program..."
            className="h-11 rounded-xl pl-11"
          />
        </div>

        <Select value={category} onValueChange={onCategoryChange}>
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Career">Career</SelectItem>
            <SelectItem value="Business">Business</SelectItem>
            <SelectItem value="Technology">Technology</SelectItem>
            <SelectItem value="Leadership">Leadership</SelectItem>
            <SelectItem value="Personal Development">Personal Development</SelectItem>
          </SelectContent>
        </Select>

        <Select value={level} onValueChange={onLevelChange}>
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>

        <Select value={price} onValueChange={onPriceChange}>
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
          </SelectContent>
        </Select>

        <Select value={status} onValueChange={onStatusChange}>
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Button variant="outline" className="rounded-xl" onClick={onRefresh}>
          <RefreshCcw className="mr-2 h-4 w-4" />
          Refresh
        </Button>

        <ViewToggle
          value={view}
          onChange={onViewChange}
          options={[
            { value: "grid", icon: Grid2X2, label: "Grid" },
            { value: "list", icon: List, label: "List" },
          ]}
        />
      </div>
    </section>
  );
}
