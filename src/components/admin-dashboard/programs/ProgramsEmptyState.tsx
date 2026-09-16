import {
  BookOpen,
  FolderPlus,
  RotateCcw,
} from "lucide-react";

interface ProgramsEmptyStateProps {
  onAddProgram: () => void;

  onResetFilters: () => void;
}

export default function ProgramsEmptyState({
  onAddProgram,
  onResetFilters,
}: ProgramsEmptyStateProps) {
  return (
    <section className="rounded-2xl border border-dashed border-border bg-card p-12">

      <div className="mx-auto flex max-w-xl flex-col items-center text-center">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100">

          <BookOpen className="h-12 w-12 text-primary" />

        </div>

        <h2 className="mt-8 text-3xl font-bold text-foreground">

          No Programs Found

        </h2>

        <p className="mt-4 leading-7 text-muted-foreground">

          We couldn't find any programs matching your
          current search or filters. Try resetting the
          filters or create a new coaching program.

        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 font-semibold text-foreground transition hover:bg-secondary"
          >
            <RotateCcw className="h-5 w-5" />

            Reset Filters

          </button>

          <button
            type="button"
            onClick={onAddProgram}
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            <FolderPlus className="h-5 w-5" />

            Create Program

          </button>

        </div>

      </div>

    </section>
  );
}