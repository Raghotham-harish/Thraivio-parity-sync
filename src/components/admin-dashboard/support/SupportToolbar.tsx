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

interface SupportToolbarProps {
  search: string;

  onSearchChange: (value: string) => void;

  status: string;

  onStatusChange: (value: string) => void;

  priority: string;

  onPriorityChange: (value: string) => void;

  category: string;

  onCategoryChange: (value: string) => void;

  assignedTo: string;

  onAssignedToChange: (value: string) => void;

  view: "grid" | "list";

  onViewChange: (
    view: "grid" | "list"
  ) => void;

  onRefresh: () => void;
}

export default function SupportToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  priority,
  onPriorityChange,
  category,
  onCategoryChange,
  assignedTo,
  onAssignedToChange,
  view,
  onViewChange,
  onRefresh,
}: SupportToolbarProps) {
  return (
    <section className="rounded-3xl border bg-background p-6 shadow-sm">

      <div className="grid gap-4 xl:grid-cols-5">

        <div className="xl:col-span-2">

          <div className="relative">

            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={search}
              onChange={(e) =>
                onSearchChange(e.target.value)
              }
              placeholder="Search tickets..."
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

            <SelectItem value="open">
              Open
            </SelectItem>

            <SelectItem value="in-progress">
              In Progress
            </SelectItem>

            <SelectItem value="resolved">
              Resolved
            </SelectItem>

            <SelectItem value="closed">
              Closed
            </SelectItem>

          </SelectContent>

        </Select>

        <Select
          value={priority}
          onValueChange={onPriorityChange}
        >
          <SelectTrigger className="h-11 rounded-xl">

            <SelectValue placeholder="Priority" />

          </SelectTrigger>

          <SelectContent>

            <SelectItem value="all">
              All Priorities
            </SelectItem>

            <SelectItem value="low">
              Low
            </SelectItem>

            <SelectItem value="medium">
              Medium
            </SelectItem>

            <SelectItem value="high">
              High
            </SelectItem>

            <SelectItem value="urgent">
              Urgent
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

            <SelectItem value="payment">
              Payment
            </SelectItem>

            <SelectItem value="technical">
              Technical
            </SelectItem>

            <SelectItem value="account">
              Account
            </SelectItem>

            <SelectItem value="mentor">
              Mentor
            </SelectItem>

            <SelectItem value="session">
              Session
            </SelectItem>

            <SelectItem value="certificate">
              Certificate
            </SelectItem>

          </SelectContent>

        </Select>

        <Select
          value={assignedTo}
          onValueChange={onAssignedToChange}
        >
          <SelectTrigger className="h-11 rounded-xl">

            <SelectValue placeholder="Assigned To" />

          </SelectTrigger>

          <SelectContent>

            <SelectItem value="all">
              All Agents
            </SelectItem>

            <SelectItem value="Support Team">
              Support Team
            </SelectItem>

            <SelectItem value="Technical Team">
              Technical Team
            </SelectItem>

            <SelectItem value="Certification Team">
              Certification Team
            </SelectItem>

            <SelectItem value="Mentor Support">
              Mentor Support
            </SelectItem>

            <SelectItem value="Account Team">
              Account Team
            </SelectItem>

            <SelectItem value="Engineering Team">
              Engineering Team
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