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

interface NotificationsToolbarProps {
  search: string;

  onSearchChange: (value: string) => void;

  status: string;

  onStatusChange: (value: string) => void;

  type: string;

  onTypeChange: (value: string) => void;

  audience: string;

  onAudienceChange: (value: string) => void;

  priority: string;

  onPriorityChange: (value: string) => void;

  view: "grid" | "list";

  onViewChange: (view: "grid" | "list") => void;

  onRefresh: () => void;
}

export default function NotificationsToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  type,
  onTypeChange,
  audience,
  onAudienceChange,
  priority,
  onPriorityChange,
  view,
  onViewChange,
  onRefresh,
}: NotificationsToolbarProps) {
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
              placeholder="Search notifications..."
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

            <SelectItem value="draft">
              Draft
            </SelectItem>

            <SelectItem value="scheduled">
              Scheduled
            </SelectItem>

            <SelectItem value="sent">
              Sent
            </SelectItem>

            <SelectItem value="failed">
              Failed
            </SelectItem>

          </SelectContent>

        </Select>

        <Select
          value={type}
          onValueChange={onTypeChange}
        >
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Notification Type" />
          </SelectTrigger>

          <SelectContent>

            <SelectItem value="all">
              All Types
            </SelectItem>

            <SelectItem value="push">
              Push
            </SelectItem>

            <SelectItem value="email">
              Email
            </SelectItem>

            <SelectItem value="sms">
              SMS
            </SelectItem>

            <SelectItem value="in-app">
              In-App
            </SelectItem>

          </SelectContent>

        </Select>
                <Select
          value={audience}
          onValueChange={onAudienceChange}
        >
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Audience" />
          </SelectTrigger>

          <SelectContent>

            <SelectItem value="all">
              All Audience
            </SelectItem>

            <SelectItem value="all-users">
              All Users
            </SelectItem>

            <SelectItem value="mentors">
              Mentors
            </SelectItem>

            <SelectItem value="students">
              Students
            </SelectItem>

            <SelectItem value="admins">
              Admins
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
              All Priority
            </SelectItem>

            <SelectItem value="high">
              High
            </SelectItem>

            <SelectItem value="medium">
              Medium
            </SelectItem>

            <SelectItem value="low">
              Low
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