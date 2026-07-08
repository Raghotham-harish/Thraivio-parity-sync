import {
  LayoutGrid,
  List,
  Search,
} from "lucide-react";

interface FAQToolbarProps {
  search: string;

  setSearch: (
    value: string
  ) => void;

  view: "grid" | "list";

  setView: (
    value: "grid" | "list"
  ) => void;
}

const FAQToolbar = ({
  search,
  setSearch,
  view,
  setView,
}: FAQToolbarProps) => {
  return (
    <div
      className="
        bg-white

        border

        rounded-3xl

        p-5

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
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          placeholder="Search FAQs..."
          className="
            w-full

            pl-12
            pr-4
            py-3

            border

            rounded-xl

            focus:ring-2
            focus:ring-blue-500

            outline-none
          "
        />
      </div>

      {/* View Switch */}

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

            rounded-xl

            flex
            items-center
            gap-2

            ${
              view === "grid"
                ? "bg-blue-600 text-white"
                : "border bg-white"
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

            ${
              view === "list"
                ? "bg-blue-600 text-white"
                : "border bg-white"
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

export default FAQToolbar;