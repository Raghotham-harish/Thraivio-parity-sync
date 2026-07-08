import {
  LayoutGrid,
  List,
  Search,
  Award,
} from "lucide-react";

interface CertificatesToolbarProps {
  search: string;

  setSearch: (
    value: string
  ) => void;

  view: "grid" | "list";

  setView: (
    value: "grid" | "list"
  ) => void;

  categoryFilter: string;

  setCategoryFilter: (
    value: string
  ) => void;

  statusFilter: string;

  setStatusFilter: (
    value: string
  ) => void;
}

const CertificatesToolbar = ({
  search,
  setSearch,
  view,
  setView,
  categoryFilter,
  setCategoryFilter,
  statusFilter,
  setStatusFilter,
}: CertificatesToolbarProps) => {
  const categories = [
    "all",
    "Program",
    "Event",
    "Session",
  ];

  const statuses = [
    "all",
    "issued",
    "pending",
    "expired",
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
            placeholder="Search certificate, mentor, credential ID..."
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
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border border-slate-200 hover:bg-slate-50"
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
                  : "border border-slate-200 hover:bg-slate-50"
              }
            `}
          >
            <List size={18} />
            List View
          </button>
        </div>
      </div>

      {/* Category Filters */}

      <div>
        <p
          className="
            text-sm
            font-medium
            text-slate-500

            mb-3
          "
        >
          Certificate Category
        </p>

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
                  setCategoryFilter(
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
                    categoryFilter ===
                    category
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }
                `}
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      {/* Status Filters */}

      <div>
        <p
          className="
            text-sm
            font-medium
            text-slate-500

            mb-3
          "
        >
          Certificate Status
        </p>

        <div
          className="
            flex
            flex-wrap

            gap-3
          "
        >
          {statuses.map(
            (status) => (
              <button
                key={status}
                onClick={() =>
                  setStatusFilter(
                    status
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
                    statusFilter ===
                    status
                      ? "bg-green-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }
                `}
              >
                {status}
              </button>
            )
          )}

          <div
            className="
              hidden
              lg:flex

              ml-auto

              items-center
              gap-2

              text-sm
              text-slate-500
            "
          >
            <Award size={16} />
            Manage all earned certificates
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesToolbar;