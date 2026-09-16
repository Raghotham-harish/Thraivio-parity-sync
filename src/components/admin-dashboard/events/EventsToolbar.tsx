import { memo } from "react";

import {
  Search,
  RefreshCw,
  LayoutGrid,
  List,
  CalendarDays,
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

import type { EventView } from "@/types/admin-events";

interface Option {
  label: string;
  value: string;
}

interface EventsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  category: string;
  onCategoryChange: (value: string) => void;

  mentor: string;
  onMentorChange: (value: string) => void;

  eventType: string;
  onEventTypeChange: (value: string) => void;

  date: string;
  onDateChange: (value: string) => void;

  statusOptions: Option[];
  categoryOptions: Option[];
  mentorOptions: Option[];
  eventTypeOptions: Option[];

  view: EventView;
  onViewChange: (view: EventView) => void;

  onRefresh: () => void;
}

const SelectFilter = ({
  value,
  placeholder,
  options,
  onChange,
}: {
  value: string;
  placeholder: string;
  options: Option[];
  onChange: (value: string) => void;
}) => (
  <Select value={value} onValueChange={onChange}>
    <SelectTrigger className="h-11 rounded-xl">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>

    <SelectContent>
      {options.map((item) => (
        <SelectItem
          key={item.value}
          value={item.value}
        >
          {item.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

const EventsToolbar = ({
  search,
  onSearchChange,

  status,
  onStatusChange,

  category,
  onCategoryChange,

  mentor,
  onMentorChange,

  eventType,
  onEventTypeChange,

  date,
  onDateChange,

  statusOptions,
  categoryOptions,
  mentorOptions,
  eventTypeOptions,

  view,
  onViewChange,

  onRefresh,
}: EventsToolbarProps) => {
  return (
    <section
      className="
        rounded-2xl
        border
        bg-card
        p-6
        shadow-sm
      "
    >
      <div className="grid gap-4 xl:grid-cols-6">
        {/* Search */}

        <div className="relative xl:col-span-2">
          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-muted-foreground
            "
          />

          <Input
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            placeholder="Search events..."
            className="h-11 rounded-xl pl-11"
          />
        </div>

        <SelectFilter
          value={status}
          placeholder="Status"
          options={statusOptions}
          onChange={onStatusChange}
        />

        <SelectFilter
          value={category}
          placeholder="Category"
          options={categoryOptions}
          onChange={onCategoryChange}
        />

        <SelectFilter
          value={mentor}
          placeholder="Mentor"
          options={mentorOptions}
          onChange={onMentorChange}
        />

        <SelectFilter
          value={eventType}
          placeholder="Event Type"
          options={eventTypeOptions}
          onChange={onEventTypeChange}
        />
      </div>

      <div
        className="
          mt-5
          flex
          flex-wrap
          items-center
          justify-between
          gap-4
        "
      >
        {/* Date */}

        <div className="relative">
          <CalendarDays
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-muted-foreground
            "
          />

          <Input
            type="date"
            value={date}
            onChange={(e) =>
              onDateChange(e.target.value)
            }
            className="h-11 rounded-xl pl-11"
          />
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="rounded-xl"
            onClick={onRefresh}
          >
            <RefreshCw className="mr-2 h-4 w-4" />

            Refresh
          </Button>

          <div
            className="
              flex
              overflow-hidden
              rounded-xl
              border
            "
          >
            <Button
              type="button"
              variant={
                view === "grid"
                  ? "default"
                  : "ghost"
              }
              className="rounded-none"
              onClick={() =>
                onViewChange("grid")
              }
            >
              <LayoutGrid
                className="h-4 w-4"
              />
            </Button>

            <Button
              type="button"
              variant={
                view === "list"
                  ? "default"
                  : "ghost"
              }
              className="rounded-none"
              onClick={() =>
                onViewChange("list")
              }
            >
              <List
                className="h-4 w-4"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(EventsToolbar);