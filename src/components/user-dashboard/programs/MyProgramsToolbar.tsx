import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

interface MyProgramsToolbarProps {
  search: string;
  setSearch: (
    value: string
  ) => void;

  selectedFilter: string;
  setSelectedFilter: (
    value: string
  ) => void;

  view: "grid" | "list";
  setView: (
    view: "grid" | "list"
  ) => void;
}

const MyProgramsToolbar = ({
  search,
  setSearch,
  selectedFilter,
  setSelectedFilter,
  view,
  setView,
}: MyProgramsToolbarProps) => {
  const filters = [
    {
      value: "all",
      label: "All Programs",
    },
    {
      value: "featured",
      label: "Featured",
    },
    {
      value: "free",
      label: "Free",
    },
    {
      value: "beginner",
      label: "Beginner",
    },
    {
      value: "intermediate",
      label: "Intermediate",
    },
    {
      value: "advanced",
      label: "Advanced",
    },
  ];

  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row

        lg:items-center
        lg:justify-between

        gap-4
      "
    >
      {/* Search */}

      <div
        className="
          relative

          w-full
          lg:max-w-md
        "
      >
        <Search
          size={18}
          className="
            absolute
            left-4
            top-1/2

            -translate-y-1/2

            text-slate-400
          "
        />

        <input
          type="text"
          value={search}
          onChange={(event) =>
            setSearch(
              event.target.value
            )
          }
          placeholder="Search programs..."
          className="
            w-full

            h-11

            pl-11
            pr-4

            rounded-xl

            border
            border-slate-200

            bg-white

            text-sm
            text-slate-900

            placeholder:text-slate-400

            outline-none

            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-100

            transition
          "
        />
      </div>

      {/* Filters + View */}

      <div
        className="
          flex
          flex-col
          sm:flex-row

          sm:items-center

          gap-3
        "
      >
        {/* Filters */}

        <div
          className="
            flex
            items-center

            gap-2

            overflow-x-auto

            pb-1
          "
        >
          <SlidersHorizontal
            size={18}
            className="
              text-slate-400
              shrink-0
            "
          />

          {filters.map(
            (filter) => {
              const isSelected =
                selectedFilter ===
                filter.value;

              return (
                <button
                  key={
                    filter.value
                  }
                  type="button"
                  onClick={() =>
                    setSelectedFilter(
                      filter.value
                    )
                  }
                  className={`
                    whitespace-nowrap

                    px-4
                    py-2

                    rounded-lg

                    text-sm
                    font-medium

                    transition

                    ${
                      isSelected
                        ? `
                          bg-blue-600
                          text-white
                          shadow-sm
                        `
                        : `
                          bg-white
                          text-slate-600
                          border
                          border-slate-200
                          hover:bg-slate-50
                        `
                    }
                  `}
                >
                  {filter.label}
                </button>
              );
            }
          )}
        </div>

        {/* View Toggle */}

        <div
          className="
            flex
            items-center

            p-1

            rounded-xl

            bg-slate-100

            shrink-0
          "
        >
          <button
            type="button"
            onClick={() =>
              setView("grid")
            }
            className={`
              px-3
              py-2

              rounded-lg

              text-sm
              font-medium

              transition

              ${
                view === "grid"
                  ? `
                    bg-white
                    text-slate-900
                    shadow-sm
                  `
                  : `
                    text-slate-500
                    hover:text-slate-700
                  `
              }
            `}
          >
            Grid
          </button>

          <button
            type="button"
            onClick={() =>
              setView("list")
            }
            className={`
              px-3
              py-2

              rounded-lg

              text-sm
              font-medium

              transition

              ${
                view === "list"
                  ? `
                    bg-white
                    text-slate-900
                    shadow-sm
                  `
                  : `
                    text-slate-500
                    hover:text-slate-700
                  `
              }
            `}
          >
            List
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProgramsToolbar;