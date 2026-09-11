import {
  Grid2X2,
  List,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import type { SurveyStatus } from "@/types/survey";

export type SurveySortOption =
  | "updated_desc"
  | "updated_asc"
  | "title_asc"
  | "title_desc"
  | "responses_desc"
  | "responses_asc";

interface SurveyToolbarProps {
  search: string;
  setSearch: (value: string) => void;

  statusFilter: "all" | SurveyStatus;
  setStatusFilter: (
    value: "all" | SurveyStatus
  ) => void;

  sortBy: SurveySortOption;
  setSortBy: (value: SurveySortOption) => void;

  view: "grid" | "list";
  setView: (value: "grid" | "list") => void;
}

const SurveyToolbar = ({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
  view,
  setView,
}: SurveyToolbarProps) => {
  const hasFilters =
    search.trim().length > 0 ||
    statusFilter !== "all";

  const handleClearFilters = () => {
    setSearch("");
    setStatusFilter("all");
    setSortBy("updated_desc");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

        {/* Search */}
        <div className="relative w-full xl:max-w-md">
          <Search
            size={18}
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search surveys..."
            aria-label="Search surveys"
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              py-3
              pl-10
              pr-10
              text-sm
              text-slate-700
              outline-none
              transition
              placeholder:text-slate-400
              hover:border-slate-300
              focus:border-blue-500
              focus:bg-white
              focus:ring-2
              focus:ring-blue-100
            "
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="
                absolute
                right-3
                top-1/2
                flex
                h-6
                w-6
                -translate-y-1/2
                items-center
                justify-center
                rounded-md
                text-slate-400
                transition
                hover:bg-slate-100
                hover:text-slate-600
              "
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3">

          {/* Status Filter */}
          <div className="relative">
            <SlidersHorizontal
              size={16}
              className="
                pointer-events-none
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(
                  event.target.value as
                    | "all"
                    | SurveyStatus
                )
              }
              aria-label="Filter surveys by status"
              className="
                min-w-[150px]
                appearance-none
                rounded-xl
                border
                border-slate-200
                bg-white
                py-3
                pl-9
                pr-9
                text-sm
                text-slate-700
                outline-none
                transition
                hover:border-slate-300
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            >
              <option value="all">
                All Status
              </option>

              <option value="published">
                Published
              </option>

              <option value="draft">
                Draft
              </option>

              <option value="closed">
                Closed
              </option>

              <option value="archived">
                Archived
              </option>
            </select>

            <span
              className="
                pointer-events-none
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-xs
                text-slate-400
              "
            >
              ▼
            </span>
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(
                event.target.value as SurveySortOption
              )
            }
            aria-label="Sort surveys"
            className="
              min-w-[175px]
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              text-sm
              text-slate-700
              outline-none
              transition
              hover:border-slate-300
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          >
            <option value="updated_desc">
              Recently Updated
            </option>

            <option value="updated_asc">
              Oldest Updated
            </option>

            <option value="title_asc">
              Title A–Z
            </option>

            <option value="title_desc">
              Title Z–A
            </option>

            <option value="responses_desc">
              Most Responses
            </option>

            <option value="responses_asc">
              Least Responses
            </option>
          </select>

          {/* Clear Filters */}
          {hasFilters && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-200
                px-4
                py-3
                text-sm
                font-medium
                text-slate-600
                transition
                hover:bg-slate-50
                hover:text-slate-900
              "
            >
              <X size={16} />

              Clear
            </button>
          )}

          {/* View Switcher */}
          <div
            className="
              flex
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              p-1
            "
            role="group"
            aria-label="Survey view"
          >
            <button
              type="button"
              onClick={() => setView("grid")}
              aria-label="Grid view"
              aria-pressed={view === "grid"}
              className={`
                flex
                h-9
                w-10
                items-center
                justify-center
                rounded-lg
                transition
                ${
                  view === "grid"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }
              `}
            >
              <Grid2X2 size={17} />
            </button>

            <button
              type="button"
              onClick={() => setView("list")}
              aria-label="List view"
              aria-pressed={view === "list"}
              className={`
                flex
                h-9
                w-10
                items-center
                justify-center
                rounded-lg
                transition
                ${
                  view === "list"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }
              `}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Active Filter Summary */}
      {hasFilters && (
        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
          <span className="text-xs font-medium text-slate-500">
            Active filters:
          </span>

          {search && (
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              Search: "{search}"
            </span>
          )}

          {statusFilter !== "all" && (
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-700">
              Status: {statusFilter}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default SurveyToolbar;