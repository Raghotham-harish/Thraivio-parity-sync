import {
  LayoutGrid,
  List,
  Search,
  Filter,
} from "lucide-react";

interface SavedMentorsToolbarProps {
  search: string;

  setSearch: (
    value: string
  ) => void;

  view: "grid" | "list";

  setView: (
    value: "grid" | "list"
  ) => void;

  selectedCategory: string;

  setSelectedCategory: (
    value: string
  ) => void;
}

const SavedMentorsToolbar = ({
  search,
  setSearch,
  view,
  setView,
  selectedCategory,
  setSelectedCategory,
}: SavedMentorsToolbarProps) => {
  const categories = [
    "All",

    "Product",

    "Engineering",

    "Career",

    "Startup",

    "Leadership",

    "Marketing",
  ];

  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[32px]

        p-6

        space-y-6
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

          gap-5
        "
      >
        {/* Search */}

        <div
          className="
            relative

            w-full
            xl:max-w-xl
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
              expertise...
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

        {/* View Toggle */}

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
                  ? `
                    bg-blue-600
                    text-white
                    shadow-lg
                  `
                  : `
                    border
                    border-slate-200

                    hover:bg-slate-50
                  `
              }
            `}
          >
            <LayoutGrid
              size={18}
            />

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
                  ? `
                    bg-blue-600
                    text-white
                    shadow-lg
                  `
                  : `
                    border
                    border-slate-200

                    hover:bg-slate-50
                  `
              }
            `}
          >
            <List size={18} />

            List View
          </button>
        </div>
      </div>

      {/* Categories */}

      <div
        className="
          flex
          flex-wrap

          gap-3
        "
      >
        {categories.map(
          (category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(
                  category
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
                  selectedCategory ===
                  category
                    ? `
                      bg-blue-600
                      text-white
                      shadow-md
                    `
                    : `
                      bg-slate-100
                      text-slate-700

                      hover:bg-slate-200
                    `
                }
              `}
            >
              {category}
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
          <Filter size={16} />

          Filter mentors by expertise
        </div>
      </div>
    </div>
  );
};

export default SavedMentorsToolbar;