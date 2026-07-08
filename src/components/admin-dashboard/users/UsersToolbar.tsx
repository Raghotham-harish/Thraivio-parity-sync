import { memo } from "react";

import {
  Search,
  RefreshCw,
  Grid2X2,
  List,
  SlidersHorizontal,
} from "lucide-react";

interface UsersToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  membership: string;
  onMembershipChange: (value: string) => void;

  verification: string;
  onVerificationChange: (value: string) => void;

  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;

  onRefresh?: () => void;
}

function UsersToolbar({
  search,
  onSearchChange,

  status,
  onStatusChange,

  membership,
  onMembershipChange,

  verification,
  onVerificationChange,

  view,
  onViewChange,

  onRefresh,
}: UsersToolbarProps) {
 
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

        {/* Search */}

        <div className="relative w-full xl:max-w-md">

          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            placeholder="Search users..."
            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 outline-none transition-all focus:border-blue-500 focus:bg-white"
          />

        </div>

        {/* Filters */}

        <div className="flex flex-wrap items-center gap-3">

          <select
            value={status}

onChange={(e)=>onStatusChange(e.target.value)}
            className="h-12 rounded-2xl border border-slate-200 bg-white px-4"
          >
            <option value="all">
              All Status
            </option>

            <option value="active">
              Active
            </option>

            <option value="inactive">
              Inactive
            </option>

            <option value="blocked">
              Blocked
            </option>

            <option value="suspended">
              Suspended
            </option>

          </select>

          <select
            value={membership}

onChange={(e)=>onMembershipChange(e.target.value)}
            className="h-12 rounded-2xl border border-slate-200 bg-white px-4"
          >
            <option value="all">
              All Memberships
            </option>

            <option value="free">
              Free
            </option>

            <option value="basic">
              Basic
            </option>

            <option value="premium">
              Premium
            </option>

            <option value="pro">
              Pro
            </option>

          </select>

          <select
            value={verification}

onChange={(e)=>onVerificationChange(e.target.value)}
            className="h-12 rounded-2xl border border-slate-200 bg-white px-4"
          >
            <option value="all">
              All Verification
            </option>

            <option value="verified">
              Verified
            </option>

            <option value="pending">
              Pending
            </option>

            <option value="rejected">
              Rejected
            </option>

          </select>
                    <select className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition-all focus:border-blue-500">
            <option>Newest First</option>
            <option>Oldest First</option>
            <option>Name (A-Z)</option>
            <option>Name (Z-A)</option>
            <option>Most Active</option>
          </select>

        </div>

      </div>

      {/* Bottom Actions */}

      <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex flex-wrap items-center gap-3">

          <button
            type="button"
            onClick={() => onViewChange("grid")}
            className={`inline-flex h-11 items-center gap-2 rounded-2xl px-5 font-medium transition-all ${
              view === "grid"
                ? "bg-blue-600 text-white shadow-lg"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Grid2X2 className="h-5 w-5" />

            Grid View
          </button>

          <button
            type="button"
            onClick={() => onViewChange("list")}
            className={`inline-flex h-11 items-center gap-2 rounded-2xl px-5 font-medium transition-all ${
              view === "list"
                ? "bg-blue-600 text-white shadow-lg"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            <List className="h-5 w-5" />

            List View
          </button>

        </div>

        <div className="flex flex-wrap items-center gap-3">

          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 font-medium text-slate-700 transition-all hover:bg-slate-50"
          >
            <SlidersHorizontal className="h-5 w-5" />

            Advanced Filters
          </button>

          <button
            type="button"
            onClick={onRefresh}
            className="inline-flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 font-medium text-slate-700 transition-all hover:bg-slate-50"
          >
            <RefreshCw className="h-5 w-5" />

            Refresh
          </button>

        </div>

      </div>

    </section>
  );
}
export default memo(UsersToolbar);