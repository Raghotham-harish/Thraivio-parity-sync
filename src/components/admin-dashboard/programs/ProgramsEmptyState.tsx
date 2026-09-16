
import {
  BookOpen,
  Plus,
  RefreshCw,
  SearchX,
} from "lucide-react";

interface ProgramsEmptyStateProps {
  title?: string;
  description?: string;
  hasFilters?: boolean;
  onClearFilters?: () => void;
  onAddProgram?: () => void;
  onRefresh?: () => void;
}

export default function ProgramsEmptyState({
  title = "No Programs Found",
  description = "There are no programs available to display right now.",
  hasFilters = false,
  onClearFilters,
  onAddProgram,
  onRefresh,
}: ProgramsEmptyStateProps) {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
        {hasFilters ? (
          <SearchX className="h-8 w-8 text-indigo-600" />
        ) : (
          <BookOpen className="h-8 w-8 text-indigo-600" />
        )}
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        {hasFilters && onClearFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Clear Filters
          </button>
        )}

        {onRefresh && (
          <button
            type="button"
            onClick={onRefresh}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        )}

        {!hasFilters && onAddProgram && (
          <button
            type="button"
            onClick={onAddProgram}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <Plus className="h-4 w-4" />
            Add Program
          </button>
        )}
      </div>
    </div>
  );
}