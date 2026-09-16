import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

interface SessionsPaginationProps {
  page: number;

  totalPages: number;

  totalItems: number;

  pageSize: number;

  onPageChange: (
    page: number
  ) => void;
}

const SessionsPagination = ({
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: SessionsPaginationProps) => {

  if (totalPages <= 1)
    return null;

  const start =
    (page - 1) * pageSize + 1;

  const end = Math.min(
    page * pageSize,
    totalItems
  );

  const createPages = () => {

    const pages: (number | "...")[] =
      [];

    if (totalPages <= 7) {

      for (
        let i = 1;
        i <= totalPages;
        i++
      ) {

        pages.push(i);

      }

      return pages;

    }

    pages.push(1);

    if (page > 3)
      pages.push("...");

    const startPage =
      Math.max(2, page - 1);

    const endPage =
      Math.min(
        totalPages - 1,
        page + 1
      );

    for (
      let i = startPage;
      i <= endPage;
      i++
    ) {

      pages.push(i);

    }

    if (
      page <
      totalPages - 2
    ) {

      pages.push("...");

    }

    pages.push(totalPages);

    return pages;

  };

  const pages =
    createPages();

  return (

    <div
      className="
        mt-8

        rounded-2xl

        border
        border-border

        bg-card

        p-6
      "
    >

      <div
        className="
          flex

          flex-col

          gap-6

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >

        {/* Left */}

        <div>

          <h3
            className="
              text-lg
              font-semibold
            "
          >
            Showing
            {" "}
            <span
              className="
                text-primary
              "
            >
              {start}
            </span>

            {" "}to{" "}

            <span
              className="
                text-primary
              "
            >
              {end}
            </span>

            {" "}of{" "}

            <span
              className="
                text-primary
              "
            >
              {totalItems}
            </span>

            {" "}sessions

          </h3>

          <p
            className="
              mt-2

              text-sm
              text-muted-foreground
            "
          >
            Navigate through all mentoring
            sessions using the controls.
          </p>

        </div>

        {/* Pagination */}

        <div
          className="
            flex

            flex-wrap

            items-center

            gap-2
          "
        >

          {/* Previous */}

          <button
            disabled={page === 1}
            onClick={() =>
              onPageChange(
                page - 1
              )
            }
            className={`
              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-xl

              border

              transition

              ${
                page === 1
                  ? "cursor-not-allowed border-border bg-secondary text-muted-foreground"
                  : "border-border hover:bg-secondary"
              }
            `}
          >
            <ChevronLeft
              size={18}
            />
          </button>
                    {/* Page Numbers */}

          {pages.map((item, index) => {

            if (item === "...") {

              return (

                <div
                  key={`ellipsis-${index}`}
                  className="
                    flex
                    h-11
                    w-11

                    items-center
                    justify-center

                    text-muted-foreground
                  "
                >
                  <MoreHorizontal size={18} />
                </div>

              );

            }

            const active =
              item === page;

            return (

              <button
                key={item}
                onClick={() =>
                  onPageChange(item)
                }
                className={`
                  flex
                  h-11
                  min-w-[44px]

                  items-center
                  justify-center

                  rounded-xl

                  border

                  px-4

                  text-sm
                  font-semibold

                  transition-all

                  ${
                    active
                      ? "border-indigo-600 bg-indigo-600 text-white shadow-md"
                      : "border-border bg-card text-foreground hover:border-indigo-300 hover:bg-[#EFF6FF]"
                  }
                `}
              >
                {item}
              </button>

            );

          })}

          {/* Next */}

          <button
            disabled={
              page === totalPages
            }
            onClick={() =>
              onPageChange(
                page + 1
              )
            }
            className={`
              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-xl

              border

              transition

              ${
                page === totalPages
                  ? "cursor-not-allowed border-border bg-secondary text-muted-foreground"
                  : "border-border hover:bg-secondary"
              }
            `}
          >
            <ChevronRight
              size={18}
            />
          </button>

        </div>

      </div>

      {/* Footer */}

      <div
        className="
          mt-6

          flex
          flex-col

          gap-3

          border-t
          border-border

          pt-5

          text-sm
          text-muted-foreground

          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        <p>
          Page{" "}
          <span className="font-semibold text-foreground">
            {page}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-foreground">
            {totalPages}
          </span>
        </p>

        <p>
          Total Records:{" "}
          <span className="font-semibold text-primary">
            {totalItems}
          </span>
        </p>

      </div>

    </div>

  );

};

export default SessionsPagination;