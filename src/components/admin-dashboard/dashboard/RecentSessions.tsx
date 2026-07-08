import {
  CalendarCheck,
  Clock3,
  Eye,
  MoreVertical,
  Search,
  Video,
  XCircle,
} from "lucide-react";

import type {
  UpcomingSession,
} from "@/types/admin-dashboard";

interface RecentSessionsProps {
  sessions: UpcomingSession[];

  onView?: (id: string) => void;

  onJoin?: (id: string) => void;

  onCancel?: (id: string) => void;
}

const RecentSessions = ({
  sessions,
  onView,
  onJoin,
  onCancel,
}: RecentSessionsProps) => {
  return (
    <section className="mt-10">

      {/* Header */}

      <div
        className="
          flex
          flex-col
          gap-5

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>

          <span
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-indigo-50

              px-4
              py-2

              text-sm
              font-medium

              text-indigo-700
            "
          >
            <CalendarCheck size={16} />

            Session Management
          </span>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Upcoming Sessions
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              leading-7

              text-slate-500
            "
          >
            Monitor live, upcoming and
            scheduled mentoring sessions
            across the platform.
          </p>

        </div>

        {/* Search */}

        <div className="relative">

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
            placeholder="Search sessions..."

            className="
              w-80

              rounded-2xl

              border
              border-slate-200

              bg-white

              py-3

              pl-11
              pr-4

              outline-none

              transition

              focus:border-blue-500
            "
          />

        </div>

      </div>

      {/* Table */}

      <div
        className="
          mt-8

          overflow-hidden

          rounded-[30px]

          border
          border-slate-200

          bg-white
        "
      >

        {/* Header */}

        <div
          className="
            grid

            grid-cols-12

            border-b
            border-slate-200

            bg-slate-50

            px-6
            py-4

            text-sm
            font-semibold

            text-slate-600
          "
        >
          <div className="col-span-3">
            Session
          </div>

          <div className="col-span-2">
            Student
          </div>

          <div className="col-span-2">
            Mentor
          </div>

          <div className="col-span-2">
            Schedule
          </div>

          <div className="col-span-1">
            Status
          </div>

          <div className="col-span-2 text-right">
            Actions
          </div>

        </div>

        {/* Rows */}

        {sessions.map((session) => (

          <div
            key={session.id}
            className="
              grid

              grid-cols-12

              items-center

              border-b
              border-slate-100

              px-6
              py-5

              transition

              hover:bg-slate-50
            "
          >
                        {/* Session */}

            <div className="col-span-3">
              <div className="flex items-center gap-4">

                <div
                  className="
                    flex

                    h-12
                    w-12

                    items-center
                    justify-center

                    rounded-2xl

                    bg-indigo-100

                    text-indigo-700
                  "
                >
                  <CalendarCheck size={22} />
                </div>

                <div>

                  <h4
                    className="
                      font-semibold

                      text-slate-900
                    "
                  >
                    1 : 1 Mentorship Session
                  </h4>

                  <p
                    className="
                      mt-1

                      text-sm

                      text-slate-500
                    "
                  >
                    {session.id}
                  </p>

                </div>

              </div>
            </div>

            {/* Student */}

            <div className="col-span-2">

              <h4
                className="
                  font-medium

                  text-slate-800
                "
              >
                {session.user}
              </h4>

            </div>

            {/* Mentor */}

            <div className="col-span-2">

              <h4
                className="
                  font-medium

                  text-slate-800
                "
              >
                {session.mentor}
              </h4>

            </div>

            {/* Schedule */}

            <div className="col-span-2">

              <div className="space-y-1">

                <p
                  className="
                    flex
                    items-center
                    gap-2

                    text-sm

                    text-slate-700
                  "
                >
                  <CalendarCheck size={15} />

                  {session.date}
                </p>

                <p
                  className="
                    flex
                    items-center
                    gap-2

                    text-xs

                    text-slate-500
                  "
                >
                  <Clock3 size={14} />

                  {session.time}
                </p>

              </div>

            </div>

            {/* Status */}

            <div className="col-span-1">

              <span
                className={`
                  inline-flex

                  rounded-full

                  px-3
                  py-1.5

                  text-xs
                  font-semibold

                  ${
                    session.status === "approved"
                      ? "bg-emerald-100 text-emerald-700"
                      : session.status === "pending"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-red-100 text-red-700"
                  }
                `}
              >
                {session.status}
              </span>

            </div>

            {/* Actions */}

            <div
              className="
                col-span-2

                flex
                items-center
                justify-end

                gap-2
              "
            >
              {/* View */}

              <button
                onClick={() =>
                  onView?.(session.id)
                }
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  bg-blue-50

                  text-blue-600

                  transition

                  hover:bg-blue-100
                "
              >
                <Eye size={18} />
              </button>

              {/* Join */}

              <button
                onClick={() =>
                  onJoin?.(session.id)
                }
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  bg-emerald-50

                  text-emerald-600

                  transition

                  hover:bg-emerald-100
                "
              >
                <Video size={18} />
              </button>

              {/* Cancel */}

              <button
                onClick={() =>
                  onCancel?.(session.id)
                }
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  bg-red-50

                  text-red-600

                  transition

                  hover:bg-red-100
                "
              >
                <XCircle size={18} />
              </button>

              {/* More */}

              <button
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  transition

                  hover:bg-slate-100
                "
              >
                <MoreVertical size={18} />
              </button>

            </div>

          </div>
        ))}

        {/* Footer */}

        <div
          className="
            flex
            flex-col

            gap-4

            border-t
            border-slate-200

            bg-slate-50

            px-6
            py-5

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p
            className="
              text-sm

              text-slate-500
            "
          >
            Showing
            <span className="font-semibold">
              {" "}
              {sessions.length}{" "}
            </span>
            upcoming mentoring sessions.
          </p>

          <button
            className="
              rounded-2xl

              bg-blue-600

              px-6
              py-3

              font-semibold

              text-white

              transition

              hover:bg-blue-700
            "
          >
            View All Sessions
          </button>

        </div>

      </div>

    </section>
  );
};

export default RecentSessions;