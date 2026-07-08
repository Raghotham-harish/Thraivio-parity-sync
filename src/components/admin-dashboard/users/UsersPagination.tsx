import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface UsersPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;

  onPageChange: (page: number) => void;
}

export default function UsersPagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: UsersPaginationProps) {
  const start = (currentPage - 1) * pageSize + 1;

  const end = Math.min(
    currentPage * pageSize,
    totalItems
  );

  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );

  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div>

          <p className="text-sm text-slate-500">

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

            users

          </p>

        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center gap-2">

          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() =>
              onPageChange(currentPage - 1)
            }
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {pages.map((page) => (

            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`flex h-11 w-11 items-center justify-center rounded-2xl font-semibold transition-all ${
                currentPage === page
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {page}
            </button>

          ))}

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() =>
              onPageChange(currentPage + 1)
            }
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>

      </div>

    </section>
  );
}