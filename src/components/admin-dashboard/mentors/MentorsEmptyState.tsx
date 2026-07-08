import { SearchX, UserPlus } from "lucide-react";

interface MentorsEmptyStateProps {
  onAddMentor: () => void;

  onResetFilters: () => void;
}

export default function MentorsEmptyState({
  onAddMentor,
  onResetFilters,
}: MentorsEmptyStateProps) {
  return (
    <section className="rounded-[32px] border border-dashed border-slate-300 bg-white py-20">

      <div className="mx-auto flex max-w-xl flex-col items-center px-6 text-center">

        {/* Icon */}

        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-50">

          <SearchX className="h-14 w-14 text-blue-600" />

        </div>

        {/* Heading */}

        <h2 className="mt-8 text-3xl font-bold text-slate-900">

          No Mentors Found

        </h2>

        <p className="mt-4 max-w-md text-base leading-7 text-slate-500">

          We couldn't find any mentors matching your
          current search or filters. Try resetting the
          filters or add a new mentor.

        </p>

        {/* Actions */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button
            type="button"
            onClick={onResetFilters}
            className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Reset Filters
          </button>

          <button
            type="button"
            onClick={onAddMentor}
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <UserPlus className="h-5 w-5" />

            Add Mentor

          </button>

        </div>

      </div>

    </section>
  );
}