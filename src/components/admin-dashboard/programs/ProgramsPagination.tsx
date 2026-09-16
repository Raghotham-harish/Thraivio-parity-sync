
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProgramsPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems?: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

export default function ProgramsPagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize = 10,
  onPageChange,
  isLoading = false,
}: ProgramsPaginationProps) {
  if (totalPages <= 1 && !totalItems) return null;

  const safeCurrentPage = Math.max(
    1,
    Math.min(currentPage, Math.max(totalPages, 1)),
  );

  const startItem =
    totalItems && totalItems > 0
      ? (safeCurrentPage - 1) * pageSize + 1
      : 0;

  const endItem =
    totalItems && totalItems > 0
      ? Math.min(safeCurrentPage * pageSize, totalItems)
      : 0;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let page = 1; page <= totalPages; page++) {
        pages.push(page);
      }

      return pages;
    }

    pages.push(1);

    if (safeCurrentPage > 3) {
      pages.push("...");
    }

    const startPage = Math.max(2, safeCurrentPage - 1);
    const endPage = Math.min(totalPages - 1, safeCurrentPage + 1);

    for (let page = startPage; page <= endPage; page++) {
      if (!pages.includes(page)) {
        pages.push(page);
      }
    }

    if (safeCurrentPage < totalPages - 2) {
      pages.push("...");
    }

    if (!pages.includes(totalPages)) {
      pages.push(totalPages);
    }

    return pages;
  };

  const goToPage = (page: number) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === safeCurrentPage ||
      isLoading
    ) {
      return;
    }

    onPageChange(page);
  };

  return (
    <div className="flex flex-col gap-4 border-t border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Summary */}
      <p className="text-center text-xs font-medium text-slate-500 sm:text-left">
        {totalItems && totalItems > 0
          ? `Showing ${startItem}–${endItem} of ${totalItems} programs`
          : `Page ${safeCurrentPage} of ${totalPages}`}
      </p>

      {/* Pagination controls */}
      <div className="flex items-center justify-center gap-1">
        <button
          type="button"
          aria-label="Previous page"
          disabled={safeCurrentPage === 1 || isLoading}
          onClick={() => goToPage(safeCurrentPage - 1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {getPageNumbers().map((page, index) =>
          typeof page === "string" ? (
            <span
              key={`ellipsis-${index}`}
              className="flex h-9 w-8 items-center justify-center text-sm text-slate-400"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              disabled={isLoading}
              onClick={() => goToPage(page)}
              aria-current={
                page === safeCurrentPage ? "page" : undefined
              }
              className={`inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${
                page === safeCurrentPage
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          type="button"
          aria-label="Next page"
          disabled={safeCurrentPage === totalPages || isLoading}
          onClick={() => goToPage(safeCurrentPage + 1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}