
import {
  Grid2X2,
  List,
  RefreshCw,
  Search,
  SlidersHorizontal,
} from "lucide-react";

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
  onViewChange: (value: "grid" | "list") => void;

  onRefresh: () => void;
  isLoading?: boolean;
}

const selectClassName =
  "h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

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
  isLoading = false,
}: ProgramsToolbarProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-5">
      <div className="flex flex-col gap-4">
        {/* Top Row */}
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="relative w-full xl:max-w-md">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search programs..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onRefresh}
                disabled={isLoading}
                aria-label="Refresh programs"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <RefreshCw
                  className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
                />
              </button>

              <div className="flex items-center rounded-xl border border-slate-200 p-1">
                <button
                  type="button"
                  aria-label="Grid view"
                  aria-pressed={view === "grid"}
                  onClick={() => onViewChange("grid")}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-lg transition ${
                    view === "grid"
                      ? "bg-indigo-600 text-white"
                      : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  <Grid2X2 className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  aria-label="List view"
                  aria-pressed={view === "list"}
                  onClick={() => onViewChange("list")}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-lg transition ${
                    view === "list"
                      ? "bg-indigo-600 text-white"
                      : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className={selectClassName}
            aria-label="Filter by category"
          >
            <option value="all">All Categories</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="business">Business</option>
            <option value="marketing">Marketing</option>
            <option value="career">Career</option>
          </select>

          <select
            value={level}
            onChange={(event) => onLevelChange(event.target.value)}
            className={selectClassName}
            aria-label="Filter by level"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <select
            value={price}
            onChange={(event) => onPriceChange(event.target.value)}
            className={selectClassName}
            aria-label="Filter by price"
          >
            <option value="all">All Prices</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>

          <select
            value={status}
            onChange={(event) => onStatusChange(event.target.value)}
            className={selectClassName}
            aria-label="Filter by status"
          >
            <option value="all">All Statuses</option>
            <option value="draft">Draft</option>
            <option value="pending">Pending</option>
            <option value="published">Published</option>
            <option value="rejected">Rejected</option>
            <option value="inactive">Inactive</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>
    </section>
  );
}