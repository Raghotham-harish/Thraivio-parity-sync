import {
  LayoutGrid,
  List,
  Search,
  CalendarDays,
} from "lucide-react";

interface SessionsToolbarProps {
  search: string;

  setSearch: (
    value: string
  ) => void;

  view: "grid" | "list";

  setView: (
    value: "grid" | "list"
  ) => void;

  selectedFilter: string;

  setSelectedFilter: (
    value: string
  ) => void;
}

const SessionsToolbar = ({
  search,
  setSearch,
  view,
  setView,
  selectedFilter,
  setSelectedFilter,
}: SessionsToolbarProps) => {
  const filters = [
    {
      label: "All",
      value: "all",
    },

    {
      label: "Upcoming",
      value: "upcoming",
    },

    {
      label: "Completed",
      value: "completed",
    },

    {
      label: "Cancelled",
      value: "cancelled",
    },
  ];

  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[28px]

        p-5

        space-y-5
      "
    >
      {/* Top */}

      <div
        className="
          flex
          flex-col
          xl:flex-row

          xl:items-center
          xl:justify-between

          gap-4
        "
      >
        {/* Search */}

        <div
          className="
            relative

            w-full
            xl:max-w-lg
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
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            placeholder="
              Search mentors,
              companies,
              session types...
            "
            className="
              w-full

              pl-12
              pr-4
              py-3.5

              border
              border-slate-200

              rounded-2xl

              outline-none

              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500

              transition
            "
          />
        </div>

        {/* View */}

        <div
          className="
            flex
            gap-3
          "
        >
          <button
            onClick={() =>
              setView("grid")
            }
            className={`
              px-5
              py-3

              rounded-2xl

              flex
              items-center
              gap-2

              font-medium

              transition-all

              ${
                view === "grid"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border border-slate-200 bg-white hover:bg-slate-50"
              }
            `}
          >
            <LayoutGrid size={18} />

            Grid View
          </button>

          <button
            onClick={() =>
              setView("list")
            }
            className={`
              px-5
              py-3

              rounded-2xl

              flex
              items-center
              gap-2

              font-medium

              transition-all

              ${
                view === "list"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border border-slate-200 bg-white hover:bg-slate-50"
              }
            `}
          >
            <List size={18} />

            List View
          </button>
        </div>
      </div>

      {/* Filters */}

      <div
        className="
          flex
          flex-wrap

          gap-3
        "
      >
        {filters.map(
          (filter) => (
            <button
              key={filter.value}
              onClick={() =>
                setSelectedFilter(
                  filter.value
                )
              }
              className={`
                px-4
                py-2.5

                rounded-full

                text-sm
                font-semibold

                transition-all

                ${
                  selectedFilter ===
                  filter.value
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }
              `}
            >
              {filter.label}
            </button>
          )
        )}

        <div
          className="
            ml-auto

            hidden
            lg:flex

            items-center
            gap-2

            text-sm
            text-slate-500
          "
        >
          <CalendarDays size={16} />

          Manage all your booked sessions
        </div>
      </div>
    </div>
  );
};

export default SessionsToolbar;