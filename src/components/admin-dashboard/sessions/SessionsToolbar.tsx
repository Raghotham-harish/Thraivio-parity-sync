import {
  CalendarDays,
  Download,
  LayoutGrid,
  List,
  Plus,
  Search,
} from "lucide-react";

interface SessionsToolbarProps {
  search: string;

  setSearch: (value: string) => void;

  view: "grid" | "list";

  setView: (value: "grid" | "list") => void;

  selectedStatus: string;

  setSelectedStatus: (value: string) => void;

  selectedPlatform: string;

  setSelectedPlatform: (value: string) => void;

  onCreateSession: () => void;

  onExport: () => void;
}

const statusFilters = [
  "All",
  "Scheduled",
  "Live",
  "Completed",
  "Cancelled",
  "Missed",
];

const platforms = [
  "All Platforms",
  "Google Meet",
  "Zoom",
  "Microsoft Teams",
];

const SessionsToolbar = ({
  search,
  setSearch,
  view,
  setView,
  selectedStatus,
  setSelectedStatus,
  selectedPlatform,
  setSelectedPlatform,
  onCreateSession,
  onExport,
}: SessionsToolbarProps) => {
  return (
    <div
      className="
        rounded-[30px]
        border
        border-slate-200
        bg-white
        p-6
      "
    >
      {/* Top */}

      <div
        className="
          flex
          flex-col
          gap-5

          2xl:flex-row
          2xl:items-center
          2xl:justify-between
        "
      >
        {/* Search */}

        <div
          className="
            relative

            w-full

            2xl:max-w-xl
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
              setSearch(e.target.value)
            }
            placeholder="Search mentor, student, session..."
            className="
              h-12
              w-full

              rounded-2xl

              border
              border-slate-200

              pl-12
              pr-4

              outline-none

              transition-all

              focus:border-indigo-500
              focus:ring-4
              focus:ring-indigo-100
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
          {/* View */}

          <div
            className="
              flex

              rounded-2xl

              border
              border-slate-200

              overflow-hidden
            "
          >
            <button
              onClick={() =>
                setView("grid")
              }
              className={`
                flex
                items-center
                gap-2

                px-5
                py-3

                transition

                ${
                  view === "grid"
                    ? "bg-indigo-600 text-white"
                    : "bg-white hover:bg-slate-50"
                }
              `}
            >
              <LayoutGrid size={18} />

              Grid
            </button>

            <button
              onClick={() =>
                setView("list")
              }
              className={`
                flex
                items-center
                gap-2

                px-5
                py-3

                transition

                ${
                  view === "list"
                    ? "bg-indigo-600 text-white"
                    : "bg-white hover:bg-slate-50"
                }
              `}
            >
              <List size={18} />

              List
            </button>
          </div>

          {/* Export */}

          <button
            onClick={onExport}
            className="
              flex
              items-center
              gap-2

              rounded-2xl

              border
              border-slate-200

              px-5
              py-3

              font-medium

              transition

              hover:bg-slate-50
            "
          >
            <Download size={18} />

            Export
          </button>

          {/* Create */}

          <button
            onClick={onCreateSession}
            className="
              flex
              items-center
              gap-2

              rounded-2xl

              bg-indigo-600

              px-5
              py-3

              font-semibold
              text-white

              transition

              hover:bg-indigo-700
            "
          >
            <Plus size={18} />

            Create Session
          </button>
        </div>
      </div>

      {/* Bottom */}

      <div
        className="
          mt-6

          flex
          flex-wrap

          items-center

          gap-4
        "
      >
        {/* Status */}

        <select
          value={selectedStatus}
          onChange={(e) =>
            setSelectedStatus(
              e.target.value
            )
          }
          className="
            h-11

            rounded-xl

            border
            border-slate-200

            px-4

            outline-none

            focus:border-indigo-500
          "
        >
          {statusFilters.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        {/* Platform */}

        <select
          value={selectedPlatform}
          onChange={(e) =>
            setSelectedPlatform(
              e.target.value
            )
          }
          className="
            h-11

            rounded-xl

            border
            border-slate-200

            px-4

            outline-none

            focus:border-indigo-500
          "
        >
          {platforms.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        {/* Right */}

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

          Manage all mentoring sessions from one place.
        </div>
      </div>
    </div>
  );
};

export default SessionsToolbar;