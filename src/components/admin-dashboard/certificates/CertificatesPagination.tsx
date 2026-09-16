import { memo } from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface CertificatesPaginationProps {
  page: number;

  totalPages: number;

  totalItems: number;

  pageSize: number;

  onPageChange: (
    page: number
  ) => void;
}

const CertificatesPagination = ({
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: CertificatesPaginationProps) => {
  if (
    totalItems === 0 ||
    totalPages <= 1
  ) {
    return null;
  }

  const start =
    (page - 1) * pageSize + 1;

  const end = Math.min(
    page * pageSize,
    totalItems
  );

  const pages = Array.from(
    {
      length: totalPages,
    },
    (_, i) => i + 1
  );

  return (
    <section
      className="
        rounded-2xl
        border
        bg-card
        p-6
        shadow-sm
      "
    >
      <div
        className="
          flex
          flex-col
          gap-5

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Left */}

        <div>

          <p
            className="
              text-sm
              text-muted-foreground
            "
          >
            Showing{" "}

            <span className="font-semibold text-foreground">
              {start}
            </span>

            {" - "}

            <span className="font-semibold text-foreground">
              {end}
            </span>

            {" "}of{" "}

            <span className="font-semibold text-foreground">
              {totalItems}
            </span>

            {" "}certificates
          </p>

        </div>

        {/* Right */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-2
          "
        >
          <Button
            variant="outline"
            size="icon"
            disabled={page === 1}
            onClick={() =>
              onPageChange(page - 1)
            }
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {pages.map((item) => (
            <Button
              key={item}
              variant={
                item === page
                  ? "default"
                  : "outline"
              }
              className="
                h-10
                w-10
                rounded-xl
                p-0
              "
              onClick={() =>
                onPageChange(item)
              }
            >
              {item}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            disabled={
              page === totalPages
            }
            onClick={() =>
              onPageChange(page + 1)
            }
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

        </div>

      </div>

    </section>
  );
};

export default memo(
  CertificatesPagination
);