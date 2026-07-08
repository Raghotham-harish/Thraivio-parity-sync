import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface PaymentsPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;

  onPageChange: (page: number) => void;
}

export default function PaymentsPagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: PaymentsPaginationProps) {
  if (totalPages <= 1) return null;

  const start = (currentPage - 1) * pageSize + 1;

  const end = Math.min(
    currentPage * pageSize,
    totalItems
  );

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="mt-8 flex flex-col gap-5 rounded-3xl border bg-background p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">

      <div className="text-sm text-muted-foreground">
        Showing{" "}
        <span className="font-semibold text-foreground">
          {start}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-foreground">
          {end}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-foreground">
          {totalItems}
        </span>{" "}
        payments
      </div>

      <div className="flex flex-wrap items-center gap-2">

        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {pages.map((page) => (
          <Button
            key={page}
            size="icon"
            variant={
              currentPage === page
                ? "default"
                : "outline"
            }
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ))}

        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === totalPages}
          onClick={() =>
            onPageChange(currentPage + 1)
          }
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

      </div>
    </div>
  );
}