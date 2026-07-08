import {
  CalendarClock,
  Download,
  FolderPlus,
  Radio,
} from "lucide-react";

interface SessionsHeaderProps {
  totalSessions: number;
  liveSessions: number;
  todaySessions: number;
  onCreateSession: () => void;
}

const SessionsHeader = ({
  totalSessions,
  liveSessions,
  todaySessions,
  onCreateSession,
}: SessionsHeaderProps) => {
  return (
    <section className="overflow-hidden rounded-[32px] bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white shadow-xl">

      <div className="flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex items-start gap-5">

          <div className="rounded-3xl bg-white/15 p-5 backdrop-blur">

            <CalendarClock className="h-10 w-10" />

          </div>

          <div>

            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">

              Sessions Management

            </span>

            <h1 className="mt-4 text-4xl font-bold">

              Manage Sessions

            </h1>

            <p className="mt-3 max-w-2xl leading-7 text-blue-100">

              Monitor, schedule and manage every mentorship
              session across the platform. Track live meetings,
              completed sessions, attendance, payments and
              cancellations from one centralized dashboard.

            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-col gap-4 lg:items-end">

          {/* Buttons */}

          <div className="flex flex-wrap gap-3">

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
            >
              <Download className="h-5 w-5" />

              Export

            </button>

            <button
              type="button"
              onClick={onCreateSession}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-indigo-700 transition hover:bg-slate-100"
            >
              <FolderPlus className="h-5 w-5" />

              Create Session

            </button>

          </div>

          {/* Stats */}

          <div className="flex flex-wrap gap-6 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">

            <div>

              <p className="text-xs uppercase tracking-widest text-blue-100">

                Total Sessions

              </p>

              <h3 className="mt-2 text-3xl font-bold">

                {totalSessions}

              </h3>

            </div>

            <div className="h-12 w-px bg-white/20" />

            <div>

              <p className="text-xs uppercase tracking-widest text-blue-100">

                Live Sessions

              </p>

              <h3 className="mt-2 flex items-center gap-2 text-3xl font-bold">

                <Radio className="h-5 w-5 text-green-300" />

                {liveSessions}

              </h3>

            </div>

            <div className="h-12 w-px bg-white/20" />

            <div>

              <p className="text-xs uppercase tracking-widest text-blue-100">

                Today's Sessions

              </p>

              <h3 className="mt-2 text-3xl font-bold">

                {todaySessions}

              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SessionsHeader;