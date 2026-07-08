import {
  CalendarDays,
  Download,
  RefreshCw,
  Wifi,
} from "lucide-react";

interface DashboardHeaderProps {
  adminName: string;

  pendingApprovals: number;

  onRefresh?: () => void;

  onExport?: () => void;
}

const DashboardHeader = ({
  adminName,
  pendingApprovals,
  onRefresh,
  onExport,
}: DashboardHeaderProps) => {
  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const currentTime =
    new Date().toLocaleTimeString(
      "en-IN",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );

  return (
    <section className="mb-8">

      {/* Top Row */}

      <div
        className="
          flex
          flex-col

          gap-6

          xl:flex-row
          xl:items-center
          xl:justify-between
        "
      >
        {/* Left */}

        <div>

          {/* Date */}

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-blue-50

              px-4
              py-2

              text-sm
              font-medium

              text-blue-700
            "
          >
            <CalendarDays size={16} />

            {today}
          </div>

          {/* Welcome */}

          <h1
            className="
              mt-5

              text-4xl
              font-bold

              text-slate-900
            "
          >
            Welcome back,

            <span className="text-blue-600">
              {" "}
              {adminName}
            </span>

            👋
          </h1>

          {/* Description */}

          <p
            className="
              mt-4

              max-w-3xl

              leading-7

              text-slate-500
            "
          >
            Monitor platform performance,
            manage mentors, users,
            sessions, payments,
            reports and overall business
            growth from one centralized
            admin dashboard.
          </p>

        </div>

        {/* Right */}

        <div
          className="
            flex
            flex-wrap

            gap-3
          "
        >
          {/* Refresh */}

          <button
            onClick={onRefresh}
            className="
              inline-flex
              items-center
              gap-2

              rounded-2xl

              border
              border-slate-200

              bg-white

              px-5
              py-3

              font-semibold

              transition-all

              hover:bg-slate-50
              hover:shadow-md
            "
          >
            <RefreshCw size={18} />

            Refresh
          </button>

          {/* Export */}

          <button
            onClick={onExport}
            className="
              inline-flex
              items-center
              gap-2

              rounded-2xl

              bg-blue-600

              px-5
              py-3

              font-semibold

              text-white

              transition-all

              hover:bg-blue-700
              hover:shadow-lg
            "
          >
            <Download size={18} />

            Export Report
          </button>

        </div>

      </div>

      {/* Bottom Status */}
            {/* Bottom Status */}

      <div
        className="
          mt-8

          grid

          gap-5

          lg:grid-cols-3
        "
      >
        {/* Platform Status */}

        <div
          className="
            rounded-3xl

            border
            border-slate-200

            bg-white

            p-5

            shadow-sm
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <div>

              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Platform Status
              </p>

              <h3
                className="
                  mt-2

                  text-xl
                  font-bold

                  text-slate-900
                "
              >
                Live & Healthy
              </h3>

            </div>

            <div
              className="
                flex

                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                bg-emerald-100
              "
            >
              <Wifi
                size={22}
                className="
                  text-emerald-600
                "
              />
            </div>

          </div>

          <div
            className="
              mt-5

              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                h-2.5
                w-2.5

                rounded-full

                bg-emerald-500
              "
            />

            <span
              className="
                text-sm
                text-slate-500
              "
            >
              All services are operational
            </span>

          </div>

        </div>

        {/* Last Sync */}

        <div
          className="
            rounded-3xl

            border
            border-slate-200

            bg-white

            p-5

            shadow-sm
          "
        >
          <p
            className="
              text-sm
              text-slate-500
            "
          >
            Last Synchronization
          </p>

          <h3
            className="
              mt-2

              text-xl
              font-bold
            "
          >
            {currentTime}
          </h3>

          <p
            className="
              mt-4

              text-sm
              text-slate-500
            "
          >
            Future Backend:
            Auto update every
            few minutes.
          </p>

          <button
            onClick={onRefresh}
            className="
              mt-5

              text-sm
              font-semibold

              text-blue-600

              hover:text-blue-700
            "
          >
            Refresh Now
          </button>

        </div>

        {/* Pending Approvals */}

        <div
          className="
            rounded-3xl

            border
            border-slate-200

            bg-white

            p-5

            shadow-sm
          "
        >
          <p
            className="
              text-sm
              text-slate-500
            "
          >
            Pending Mentor
            Approvals
          </p>

          <h3
            className="
              mt-2

              text-3xl
              font-bold

              text-slate-900
            "
          >
            {pendingApprovals}
          </h3>

          <p
            className="
              mt-4

              leading-6

              text-sm
              text-slate-500
            "
          >
            Mentor applications
            waiting for admin
            approval or rejection.
          </p>

          <button
            className="
              mt-5

              rounded-xl

              bg-blue-600

              px-4
              py-2

              text-sm
              font-semibold

              text-white

              transition

              hover:bg-blue-700
            "
          >
            Review Applications
          </button>

        </div>

      </div>

    </section>
  );
};

export default DashboardHeader;