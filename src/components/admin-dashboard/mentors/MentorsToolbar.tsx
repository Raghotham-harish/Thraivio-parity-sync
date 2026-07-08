import {
  Grid2X2,
  List,
  RefreshCcw,
  Search,
} from "lucide-react";

interface MentorsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  verification: string;
  onVerificationChange: (value: string) => void;

  expertise: string;
  onExpertiseChange: (value: string) => void;

  rating: string;
  onRatingChange: (value: string) => void;

  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;

  onRefresh?: () => void;
}

export default function MentorsToolbar({
  search,
  onSearchChange,

  status,
  onStatusChange,

  verification,
  onVerificationChange,

  expertise,
  onExpertiseChange,

  rating,
  onRatingChange,

  view,
  onViewChange,

  onRefresh,
}: MentorsToolbarProps) {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-5">

        {/* Search */}

        <div className="relative">

          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            placeholder="Search mentors..."
            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
          />

        </div>

        {/* Filters */}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                      {/* Status */}

          <select
            value={status}
            onChange={(e) =>
              onStatusChange(e.target.value)
            }
            className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>

          {/* Verification */}

          <select
            value={verification}
            onChange={(e) =>
              onVerificationChange(e.target.value)
            }
            className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500"
          >
            <option value="all">All Verification</option>
            <option value="verified">Verified</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>

          {/* Expertise */}

          <select
            value={expertise}
            onChange={(e) =>
              onExpertiseChange(e.target.value)
            }
            className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500"
          >
            <option value="all">All Expertise</option>
            <option value="leadership">
              Leadership
            </option>
            <option value="technology">
              Technology
            </option>
            <option value="business">
              Business
            </option>
            <option value="career">
              Career
            </option>
            <option value="marketing">
              Marketing
            </option>
          </select>

          {/* Rating */}

          <select
            value={rating}
            onChange={(e) =>
              onRatingChange(e.target.value)
            }
            className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500"
          >
            <option value="all">All Ratings</option>
            <option value="5">5★</option>
            <option value="4">4★ & Above</option>
            <option value="3">3★ & Above</option>
          </select>

          {/* Actions */}

          <div className="flex items-center justify-between gap-3 md:col-span-2 xl:col-span-1">

            {/* View Toggle */}

            <div className="flex rounded-2xl border border-slate-200 bg-slate-50 p-1">

              <button
                type="button"
                onClick={() => onViewChange("grid")}
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                  view === "grid"
                    ? "bg-blue-600 text-white shadow"
                    : "text-slate-500 hover:bg-white"
                }`}
              >
                <Grid2X2 className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => onViewChange("list")}
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                  view === "list"
                    ? "bg-blue-600 text-white shadow"
                    : "text-slate-500 hover:bg-white"
                }`}
              >
                <List className="h-5 w-5" />
              </button>

            </div>

            {/* Refresh */}

            <button
              type="button"
              onClick={onRefresh}
              className="flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-slate-600 transition hover:bg-slate-50"
            >
              <RefreshCcw className="h-5 w-5" />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}