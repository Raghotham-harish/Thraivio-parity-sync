import { memo } from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface EventsPaginationProps {
  currentPage: number;

  totalPages: number;

  totalItems: number;

  pageSize: number;

  onPageChange: (
    page: number
  ) => void;
}

const EventsPagination = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: EventsPaginationProps) => {
  const start =
    totalItems === 0
      ? 0
      : (currentPage - 1) *
          pageSize +
        1;

  const end = Math.min(
    currentPage * pageSize,
    totalItems
  );

  return (
    <div
      className="
        flex
        flex-col
        gap-5
        rounded-2xl
        border
        bg-card
        p-6
        shadow-sm
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Left */}

      <div>

        <p className="text-sm text-muted-foreground">

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

          events

        </p>

      </div>

      {/* Center */}

      <div className="flex items-center gap-2">

        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(
              currentPage - 1
            )
          }
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {Array.from(
          {
            length: totalPages,
          },
          (_, index) => {
            const page =
              index + 1;

            return (
              <Button
                key={page}
                variant={
                  currentPage === page
                    ? "default"
                    : "outline"
                }
                className="h-10 w-10 rounded-xl"
                onClick={() =>
                  onPageChange(page)
                }
              >
                {page}
              </Button>
            );
          }
        )}

        <Button
          variant="outline"
          size="icon"
          disabled={
            currentPage ===
            totalPages
          }
          onClick={() =>
            onPageChange(
              currentPage + 1
            )
          }
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

      </div>

      {/* Right */}

      <div
        className="
          rounded-xl
          bg-secondary
          px-4
          py-2
          text-sm
          text-muted-foreground
        "
      >

        Page

        <span className="mx-1 font-semibold text-foreground">

          {currentPage}

        </span>

        of

        <span className="mx-1 font-semibold text-foreground">

          {totalPages}

        </span>

      </div>

    </div>
  );
};

export default memo(
  EventsPagination
);