import {
  Search,
  Grid2X2,
  List,
  RotateCcw,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CMSToolbarProps {
  search: string;

  onSearchChange: (value: string) => void;

  status: string;

  onStatusChange: (value: string) => void;

  category: string;

  onCategoryChange: (value: string) => void;

  author: string;

  onAuthorChange: (value: string) => void;

  view: "grid" | "list";

  onViewChange: (
    view: "grid" | "list"
  ) => void;

  onRefresh: () => void;
}

export default function CMSToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  category,
  onCategoryChange,
  author,
  onAuthorChange,
  view,
  onViewChange,
  onRefresh,
}: CMSToolbarProps) {
  return (
    <section className="rounded-2xl border bg-background p-6 shadow-sm">

      <div className="grid gap-4 xl:grid-cols-5">

        <div className="xl:col-span-2">

          <div className="relative">

            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={search}
              onChange={(e) =>
                onSearchChange(e.target.value)
              }
              placeholder="Search pages..."
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

            <SelectItem value="published">
              Published
            </SelectItem>

            <SelectItem value="draft">
              Draft
            </SelectItem>

            <SelectItem value="archived">
              Archived
            </SelectItem>

          </SelectContent>

        </Select>

        <Select
          value={category}
          onValueChange={onCategoryChange}
        >
          <SelectTrigger className="h-11 rounded-xl">

            <SelectValue placeholder="Category" />

          </SelectTrigger>

          <SelectContent>

            <SelectItem value="all">
              All Categories
            </SelectItem>

            <SelectItem value="home">
              Home
            </SelectItem>

            <SelectItem value="about">
              About
            </SelectItem>

            <SelectItem value="blog">
              Blog
            </SelectItem>

            <SelectItem value="faq">
              FAQ
            </SelectItem>

            <SelectItem value="privacy">
              Privacy
            </SelectItem>

            <SelectItem value="terms">
              Terms
            </SelectItem>

            <SelectItem value="contact">
              Contact
            </SelectItem>

          </SelectContent>

        </Select>
                <Select
          value={author}
          onValueChange={onAuthorChange}
        >
          <SelectTrigger className="h-11 rounded-xl">

            <SelectValue placeholder="Author" />

          </SelectTrigger>

          <SelectContent>

            <SelectItem value="all">
              All Authors
            </SelectItem>

            <SelectItem value="Content Team">
              Content Team
            </SelectItem>

            <SelectItem value="Marketing Team">
              Marketing Team
            </SelectItem>

            <SelectItem value="Editorial Team">
              Editorial Team
            </SelectItem>

            <SelectItem value="Support Team">
              Support Team
            </SelectItem>

            <SelectItem value="Legal Team">
              Legal Team
            </SelectItem>

            <SelectItem value="Compliance Team">
              Compliance Team
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