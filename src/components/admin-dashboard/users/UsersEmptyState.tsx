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
    <section className="rounded-2xl border border-border bg-card px-8 py-20 shadow-sm">

      <div className="mx-auto flex max-w-xl flex-col items-center text-center">

        {/* Icon */}

        <div className="flex h-24 w-24 items-center justify-center rounded-full icon-bg">

          <SearchX className="h-12 w-12 text-primary" />

        </div>

        {/* Title */}

        <h2 className="mt-8 text-3xl font-bold text-foreground">
          {title}
        </h2>

        {/* Description */}

        <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
          {description}
        </p>

        {/* Actions */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button
            type="button"
            onClick={onResetFilters}
            className="rounded-2xl border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:bg-secondary"
          >
            Reset Filters
          </button>

          <button
            type="button"
            onClick={onAddUser}
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
          >
            <UserPlus className="h-5 w-5" />

            Add New User

          </button>

        </div>

      </div>

    </section>
  );
}