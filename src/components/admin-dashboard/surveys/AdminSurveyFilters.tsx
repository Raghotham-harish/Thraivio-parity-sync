import { Search, X } from "lucide-react";

import type { SurveyStatus } from "@/types/survey";

export type AdminSurveyStatusFilter =
  | "all"
  | SurveyStatus;

interface AdminSurveyFiltersProps {
  searchTerm: string;
  statusFilter: AdminSurveyStatusFilter;

  onSearchChange: (value: string) => void;
  onStatusChange: (
    value: AdminSurveyStatusFilter
  ) => void;

  onClearFilters?: () => void;
}

export default function AdminSurveyFilters({
  searchTerm,
  statusFilter,
  onSearchChange,
  onStatusChange,
  onClearFilters,
}: AdminSurveyFiltersProps) {
  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    statusFilter !== "all";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Search surveys..."
            className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          {searchTerm && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
            >
              <X size={17} />
            </button>
          )}
        </div>

        {/* Status */}
        <select
          value={statusFilter}
          onChange={(event) =>
            onStatusChange(
              event.target.value as AdminSurveyStatusFilter
            )
          }
          className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="all">
            All Surveys
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

        {/* Clear */}
        {hasActiveFilters && onClearFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
}