import {
  LayoutGrid,
  List,
  Search,
  Bell,
  CheckCheck,
  Trash2,
} from "lucide-react";

interface NotificationsToolbarProps {
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

  onMarkAllRead: () => void;

  onClearAll: () => void;
}

const NotificationsToolbar = ({
  search,
  setSearch,
  view,
  setView,
  selectedFilter,
  setSelectedFilter,
  onMarkAllRead,
  onClearAll,
}: NotificationsToolbarProps) => {
  const filters = [
    "All",
    "Unread",
    "Read",
    "Session",
    "Program",
    "Event",
    "Payment",
    "Certificate",
    "Mentor",
  ];

  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[30px]

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
            placeholder="Search notifications..."
            className="
              w-full

              pl-12
              pr-4
              py-3.5

              rounded-2xl

              border
              border-slate-200

              outline-none

              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500

              transition
            "
          />
        </div>

        {/* Right */}

        <div
          className="
            flex
            flex-wrap

            gap-3
          "
        >
          <button
            onClick={
              onMarkAllRead
            }
            className="
              px-5
              py-3

              rounded-2xl

              bg-green-600
              hover:bg-green-700

              text-white

              font-medium

              flex
              items-center
              gap-2

              transition
            "
          >
            <CheckCheck
              size={18}
            />

            Mark All Read
          </button>

          <button
            onClick={onClearAll}
            className="
              px-5
              py-3

              rounded-2xl

              bg-red-600
              hover:bg-red-700

              text-white

              font-medium

              flex
              items-center
              gap-2

              transition
            "
          >
            <Trash2
              size={18}
            />

            Clear All
          </button>

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
                view ===
                "grid"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border border-slate-200 hover:bg-slate-50"
              }
            `}
          >
            <LayoutGrid
              size={18}
            />

            Grid
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
                view ===
                "list"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border border-slate-200 hover:bg-slate-50"
              }
            `}
          >
            <List
              size={18}
            />

            List
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
              key={filter}
              onClick={() =>
                setSelectedFilter(
                  filter
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
                  filter
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }
              `}
            >
              {filter}
            </button>
          )
        )}

        <div
          className="
            ml-auto

            hidden
            xl:flex

            items-center
            gap-2

            text-sm
            text-slate-500
          "
        >
          <Bell size={16} />

          Real-time notification center
        </div>
      </div>
    </div>
  );
};

export default NotificationsToolbar;