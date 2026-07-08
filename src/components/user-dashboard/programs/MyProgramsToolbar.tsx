import {
  LayoutGrid,
  List,
  Search,
  GraduationCap,
} from "lucide-react";

interface MyProgramsToolbarProps {
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

const MyProgramsToolbar = ({
  search,
  setSearch,
  view,
  setView,
  selectedFilter,
  setSelectedFilter,
}: MyProgramsToolbarProps) => {
  const filters = [
    {
      label: "All",
      value: "all",
    },

    {
      label: "Active",
      value: "active",
    },

    {
      label: "Completed",
      value: "completed",
    },

    {
      label: "Paused",
      value: "paused",
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
            placeholder="Search programs, mentors, companies..."
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

              transition
            "
          />
        </div>

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
                  : "border border-slate-200 bg-white"
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
                  : "border border-slate-200 bg-white"
              }
            `}
          >
            <List size={18} />
            List View
          </button>
        </div>
      </div>

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
                    : "bg-slate-100 text-slate-700"
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
          <GraduationCap size={16} />
          Manage your enrolled programs
        </div>
      </div>
    </div>
  );
};

export default MyProgramsToolbar;