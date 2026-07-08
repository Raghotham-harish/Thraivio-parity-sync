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
    <section className="flex flex-col gap-5 rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}

      <div className="text-sm text-slate-500">

        Showing

        <span className="mx-1 font-semibold text-slate-900">

          {start}

        </span>

        -

        <span className="mx-1 font-semibold text-slate-900">

          {end}

        </span>

        of

        <span className="mx-1 font-semibold text-slate-900">

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
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
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
                  ? "bg-blue-600 text-white shadow-md"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
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
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

      </div>

    </section>
  );
}