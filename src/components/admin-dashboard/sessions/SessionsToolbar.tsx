import { CalendarDays, Download, LayoutGrid, List, Plus, Search } from "lucide-react";

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

interface SessionsToolbarProps {
  search: string;
  setSearch: (value: string) => void;
  view: "grid" | "list";
  setView: (value: "grid" | "list") => void;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
  selectedPlatform: string;
  setSelectedPlatform: (value: string) => void;
  onCreateSession: () => void;
  onExport: () => void;
}

const statusFilters = ["All", "Scheduled", "Live", "Completed", "Cancelled", "Missed"];
const platforms = ["All Platforms", "Google Meet", "Zoom", "Microsoft Teams"];

const SessionsToolbar = ({
  search,
  setSearch,
  view,
  setView,
  selectedStatus,
  setSelectedStatus,
  selectedPlatform,
  setSelectedPlatform,
  onCreateSession,
  onExport,
}: SessionsToolbarProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-col gap-5 2xl:flex-row 2xl:items-center 2xl:justify-between">
        <div className="relative w-full 2xl:max-w-xl">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search mentor, student, session..."
            className="h-11 rounded-xl pl-11"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <ViewToggle
            value={view}
            onChange={setView}
            options={[
              { value: "grid", icon: LayoutGrid, label: "Grid" },
              { value: "list", icon: List, label: "List" },
            ]}
          />

          <Button variant="outline" className="rounded-xl" onClick={onExport}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>

          <Button className="rounded-xl" onClick={onCreateSession}>
            <Plus className="mr-2 h-4 w-4" />
            Create Session
          </Button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="h-11 w-[160px] rounded-xl">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            {statusFilters.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
          <SelectTrigger className="h-11 w-[180px] rounded-xl">
            <SelectValue placeholder="Platform" />
          </SelectTrigger>
          <SelectContent>
            {platforms.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="ml-auto hidden items-center gap-2 text-sm text-muted-foreground lg:flex">
          <CalendarDays className="h-4 w-4" />
          Manage all mentoring sessions from one place.
        </div>
      </div>
    </div>
  );
};

export default SessionsToolbar;
