import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface MentorsPaginationProps {
  currentPage: number;

  totalPages: number;

  totalItems: number;

  pageSize: number;

  onPageChange: (page: number) => void;
}

export default function MentorsPagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: MentorsPaginationProps) {
  const start =
    totalItems === 0
      ? 0
      : (currentPage - 1) * pageSize + 1;

  const end = Math.min(
    currentPage * pageSize,
    totalItems
  );

  return (
    <section className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}

      <div className="text-sm text-muted-foreground">

        Showing

        <span className="mx-1 font-semibold text-foreground">

          {start}

        </span>

        -

        <span className="mx-1 font-semibold text-foreground">

          {end}

        </span>

        of

        <span className="mx-1 font-semibold text-foreground">

          {totalItems}

        </span>

        mentors

      </div>

      {/* Right */}

      <div className="flex items-center gap-2">

        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() =>
                onPageChange(index + 1)
              }
              className={`flex h-11 w-11 items-center justify-center rounded-2xl font-semibold transition ${
                currentPage === index + 1
                  ? "bg-primary text-white shadow-md"
                  : "border border-border bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {index + 1}
            </button>
          )
        )}

        <button
          type="button"
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            onPageChange(currentPage + 1)
          }
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

      </div>

    </section>
  );
}