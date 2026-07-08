import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ProgramsPaginationProps {
  currentPage: number;

  totalPages: number;

  totalItems: number;

  pageSize: number;

  onPageChange: (page: number) => void;
}

export default function ProgramsPagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: ProgramsPaginationProps) {
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

      <div>

        <p className="text-sm text-slate-500">

          Showing

          <span className="mx-2 font-semibold text-slate-900">

            {start}

          </span>

          -

          <span className="mx-2 font-semibold text-slate-900">

            {end}

          </span>

          of

          <span className="mx-2 font-semibold text-slate-900">

            {totalItems}

          </span>

          programs

        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        ).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() =>
              onPageChange(page)
            }
            className={`flex h-11 w-11 items-center justify-center rounded-2xl font-semibold transition ${
              currentPage === page
                ? "bg-indigo-600 text-white"
                : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            onPageChange(currentPage + 1)
          }
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

      </div>

    </section>
  );
}