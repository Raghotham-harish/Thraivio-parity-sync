import {
  LayoutGrid,
  List,
  Search,
} from "lucide-react";

interface ProgramsToolbarProps {
  search: string;

  setSearch: (
    value: string
  ) => void;

  view: "grid" | "list";

  setView: (
    value: "grid" | "list"
  ) => void;
}

const ProgramsToolbar = ({
  search,
  setSearch,
  view,
  setView,
}: ProgramsToolbarProps) => {
  return (
    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-5

        flex
        flex-col
        lg:flex-row

        gap-4

        lg:items-center
        lg:justify-between
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
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          placeholder="Search programs..."
          className="
            w-full
            pl-12
            pr-4
            py-3

            border
            border-slate-200

            rounded-xl

            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>

      {/* View Switch */}

      <div
        className="
          flex
          items-center
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

            rounded-xl

            flex
            items-center
            gap-2

            transition

            ${
              view === "grid"
                ? "bg-blue-600 text-white"
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

            rounded-xl

            flex
            items-center
            gap-2

            transition

            ${
              view === "list"
                ? "bg-blue-600 text-white"
                : "border border-slate-200 bg-white"
            }
          `}
        >
          <List size={18} />

          List View
        </button>

      </div>

    </div>
  );
};

export default ProgramsToolbar;