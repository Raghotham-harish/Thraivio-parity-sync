import { SearchX, UserPlus } from "lucide-react";

interface UsersEmptyStateProps {
  title?: string;
  description?: string;
  onAddUser?: () => void;
  onResetFilters?: () => void;
}

export default function UsersEmptyState({
  title = "No Users Found",
  description = "No users match your current search or filters. Try adjusting your filters or add a new user.",
  onAddUser,
  onResetFilters,
}: UsersEmptyStateProps) {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white px-8 py-20 shadow-sm">

      <div className="mx-auto flex max-w-xl flex-col items-center text-center">

        {/* Icon */}

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100">

          <SearchX className="h-12 w-12 text-blue-600" />

        </div>

        {/* Title */}

        <h2 className="mt-8 text-3xl font-bold text-slate-900">
          {title}
        </h2>

        {/* Description */}

        <p className="mt-4 max-w-md text-base leading-7 text-slate-500">
          {description}
        </p>

        {/* Actions */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button
            type="button"
            onClick={onResetFilters}
            className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50"
          >
            Reset Filters
          </button>

          <button
            type="button"
            onClick={onAddUser}
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            <UserPlus className="h-5 w-5" />

            Add New User

          </button>

        </div>

      </div>

    </section>
  );
}