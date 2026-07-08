import {
  Download,
  Plus,
  Users,
  ShieldCheck,
  Activity,
} from "lucide-react";

interface UsersHeaderProps {
  totalUsers: number;
  activeUsers: number;
  onExport?: () => void;
  onAddUser?: () => void;
}

export default function UsersHeader({
  totalUsers,
  activeUsers,
  onExport,
  onAddUser,
}: UsersHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-8 lg:p-10 text-white shadow-2xl">

      {/* Background Blur */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="max-w-3xl">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">

            <Activity className="h-4 w-4" />

            <span className="text-sm font-medium">
              Live Platform Monitoring
            </span>

          </div>

          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">

            Users Management

          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">

            Manage all registered users, monitor account activity,
            memberships, verification status and user engagement from
            one centralized dashboard.

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <div className="rounded-3xl bg-white/10 px-5 py-4 backdrop-blur">

              <p className="text-sm text-blue-100">

                Total Users

              </p>

              <h3 className="mt-1 text-3xl font-bold">

                {totalUsers.toLocaleString()}

              </h3>

            </div>

            <div className="rounded-3xl bg-white/10 px-5 py-4 backdrop-blur">

              <p className="text-sm text-blue-100">

                Active Users

              </p>

              <h3 className="mt-1 text-3xl font-bold">

                {activeUsers.toLocaleString()}

              </h3>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-col gap-5 lg:items-end">

          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold backdrop-blur">

            <ShieldCheck className="h-4 w-4 text-emerald-300" />

            All Systems Operational

          </div>

          <div className="flex flex-wrap gap-4">

            <button
              onClick={onExport}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/15 px-6 py-3 font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <Download className="h-5 w-5" />

              Export Users
            </button>

            <button
              onClick={onAddUser}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Plus className="h-5 w-5" />

              Add User
            </button>

          </div>

          <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-white/15 p-3">

                <Users className="h-8 w-8" />

              </div>

              <div>

                <p className="text-sm text-blue-100">

                  User Growth

                </p>

                <h4 className="text-xl font-bold">

                  +12.8% This Month

                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}