import {
  Search,
  RefreshCw,
  Download,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ReportsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  period: string;
  onPeriodChange: (value: string) => void;

  reportType: string;
  onReportTypeChange: (value: string) => void;

  category: string;
  onCategoryChange: (value: string) => void;

  mentor: string;
  onMentorChange: (value: string) => void;

  onRefresh: () => void;

  onExport: () => void;
}

export default function ReportsToolbar({
  search,
  onSearchChange,

  period,
  onPeriodChange,

  reportType,
  onReportTypeChange,

  category,
  onCategoryChange,

  mentor,
  onMentorChange,

  onRefresh,
  onExport,
}: ReportsToolbarProps) {
  return (
    <div className="space-y-5 rounded-2xl border bg-background p-5 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div className="relative w-full lg:max-w-md">

          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            placeholder="Search reports..."
            className="h-11 rounded-xl pl-10"
          />

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
            Export
          </Button>

        </div>

      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <Select
          value={period}
          onValueChange={onPeriodChange}
        >
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Select Period" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="today">
              Today
            </SelectItem>

            <SelectItem value="7days">
              Last 7 Days
            </SelectItem>

            <SelectItem value="30days">
              Last 30 Days
            </SelectItem>

            <SelectItem value="90days">
              Last 90 Days
            </SelectItem>

            <SelectItem value="6months">
              Last 6 Months
            </SelectItem>

            <SelectItem value="1year">
              Last 1 Year
            </SelectItem>
          </SelectContent>

        </Select>

        <Select
          value={reportType}
          onValueChange={onReportTypeChange}
        >
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Report Type" />
          </SelectTrigger>

          <SelectContent>

            <SelectItem value="all">
              All Reports
            </SelectItem>

            <SelectItem value="revenue">
              Revenue
            </SelectItem>

            <SelectItem value="payments">
              Payments
            </SelectItem>

            <SelectItem value="users">
              Users
            </SelectItem>

            <SelectItem value="mentors">
              Mentors
            </SelectItem>

            <SelectItem value="programs">
              Programs
            </SelectItem>

            <SelectItem value="sessions">
              Sessions
            </SelectItem>

            <SelectItem value="events">
              Events
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

        <Input
          value={mentor}
          onChange={(e) =>
            onMentorChange(e.target.value)
          }
          placeholder="Search mentor..."
          className="h-11 rounded-xl"
        />
              </div>

      <div className="flex flex-col gap-4 border-t pt-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="text-sm text-muted-foreground">
          Filter analytics by report type, category,
          mentor and time period to generate
          detailed business insights.
        </div>

        <div className="flex flex-wrap gap-3">

          <Button
            variant="outline"
            onClick={() => {
              onSearchChange("");
              onPeriodChange("30days");
              onReportTypeChange("all");
              onCategoryChange("all");
              onMentorChange("");
            }}
          >
            Clear Filters
          </Button>

          <Button onClick={onRefresh}>
            Apply Filters
          </Button>

        </div>

      </div>

    </div>
  );
}