import {
  Grid2X2,
  List,
  RefreshCcw,
  Search,
} from "lucide-react";

interface ProgramsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  category: string;
  onCategoryChange: (value: string) => void;

  level: string;
  onLevelChange: (value: string) => void;

  price: string;
  onPriceChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  view: "grid" | "list";
  onViewChange: (
    view: "grid" | "list"
  ) => void;

  onRefresh: () => void;
}

export default function ProgramsToolbar({
  search,
  onSearchChange,

  category,
  onCategoryChange,

  level,
  onLevelChange,

  price,
  onPriceChange,

  status,
  onStatusChange,

  view,
  onViewChange,

  onRefresh,
}: ProgramsToolbarProps) {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">

      <div className="grid gap-5 xl:grid-cols-6">

        {/* Search */}

        <div className="relative xl:col-span-2">

          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            placeholder="Search program..."
            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 outline-none transition focus:border-indigo-500 focus:bg-white"
          />

        </div>

        {/* Category */}

        <select
          value={category}
          onChange={(e) =>
            onCategoryChange(e.target.value)
          }
          className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-indigo-500"
        >
          <option value="all">

            All Categories

          </option>

          <option value="Career">

            Career

          </option>

          <option value="Business">

            Business

          </option>

          <option value="Technology">

            Technology

          </option>

          <option value="Leadership">

            Leadership

          </option>

          <option value="Personal Development">

            Personal Development

          </option>

        </select>

        {/* Level */}

        <select
          value={level}
          onChange={(e) =>
            onLevelChange(e.target.value)
          }
          className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-indigo-500"
        >
          <option value="all">

            All Levels

          </option>

          <option value="Beginner">

            Beginner

          </option>

          <option value="Intermediate">

            Intermediate

          </option>

          <option value="Advanced">

            Advanced

          </option>

        </select>
                {/* Price */}

        <select
          value={price}
          onChange={(e) =>
            onPriceChange(e.target.value)
          }
          className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-indigo-500"
        >
          <option value="all">

            All Prices

          </option>

          <option value="free">

            Free

          </option>

          <option value="paid">

            Paid

          </option>

        </select>

        {/* Status */}

        <select
          value={status}
          onChange={(e) =>
            onStatusChange(e.target.value)
          }
          className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-indigo-500"
        >
          <option value="all">

            All Status

          </option>

          <option value="published">

            Published

          </option>

          <option value="draft">

            Draft

          </option>

          <option value="archived">

            Archived

          </option>

        </select>

      </div>

      {/* Bottom Toolbar */}

      <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

        {/* Refresh */}

        <button
          type="button"
          onClick={onRefresh}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          <RefreshCcw className="h-5 w-5" />

          Refresh

        </button>

        {/* View Toggle */}

        <div className="flex overflow-hidden rounded-2xl border border-slate-200">

          <button
            type="button"
            onClick={() =>
              onViewChange("grid")
            }
            className={`flex items-center gap-2 px-5 py-3 font-semibold transition ${
              view === "grid"
                ? "bg-indigo-600 text-white"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            <Grid2X2 className="h-5 w-5" />

            Grid

          </button>

          <button
            type="button"
            onClick={() =>
              onViewChange("list")
            }
            className={`flex items-center gap-2 px-5 py-3 font-semibold transition ${
              view === "list"
                ? "bg-indigo-600 text-white"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            <List className="h-5 w-5" />

            List

          </button>

        </div>

      </div>

    </section>
  );
}