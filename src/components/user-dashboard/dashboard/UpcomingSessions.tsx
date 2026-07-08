import {
  CalendarDays,
  Clock3,
  ExternalLink,
  MonitorPlay,
} from "lucide-react";

import type { UpcomingSession } from "@/types/dashboard";

interface UpcomingSessionsProps {
  sessions: UpcomingSession[];
}

const UpcomingSessions = ({
  sessions,
}: UpcomingSessionsProps) => {
  return (
    <section className="mt-10">
      {/* Header */}

      <div
        className="
          flex
          flex-col

          gap-4

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

              bg-emerald-50

              px-4
              py-2

              text-sm
              font-medium

              text-emerald-700
            "
          >
            <CalendarDays size={16} />

            Upcoming Sessions
          </span>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Your Scheduled Mentorship
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            Never miss your mentorship
            meetings. Join sessions directly
            from your dashboard.
          </p>
        </div>
      </div>

      {/* Cards */}

      <div
        className="
          mt-8

          grid

          gap-6

          xl:grid-cols-2
        "
      >
        {sessions.map((session) => (
          <div
            key={session.id}
            className="
              rounded-[32px]

              border
              border-slate-200

              bg-white

              p-7

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-200
              hover:shadow-xl
            "
          >
            {/* Top */}

            <div
              className="
                flex
                items-start
                justify-between
                gap-5
              "
            >
              <div className="flex gap-4">
                <img
                  src={session.mentorImage}
                  alt={session.mentorName}
                  className="
                    h-20
                    w-20

                    rounded-3xl

                    object-cover
                  "
                />

                <div>
                  <h3
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    {session.mentorName}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-slate-500
                    "
                  >
                    {session.topic}
                  </p>
                </div>
              </div>

              <span
                className={`
                  rounded-full

                  px-4
                  py-2

                  text-xs
                  font-semibold

                  ${
                    session.status ===
                    "Today"
                      ? "bg-green-100 text-green-700"
                      : session.status ===
                        "Upcoming"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-slate-100 text-slate-600"
                  }
                `}
              >
                {session.status}
              </span>
            </div>

            {/* Details */}

            <div
              className="
                mt-8

                grid

                gap-4

                sm:grid-cols-3
              "
            >
              <div
                className="
                  rounded-2xl

                  bg-slate-50

                  p-4
                "
              >
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={16}
                    className="text-blue-600"
                  />

                  <span className="text-sm text-slate-500">
                    Date
                  </span>
                </div>

                <h4 className="mt-2 font-semibold">
                  {session.date}
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-slate-50

                  p-4
                "
              >
                <div className="flex items-center gap-2">
                  <Clock3
                    size={16}
                    className="text-emerald-600"
                  />

                  <span className="text-sm text-slate-500">
                    Time
                  </span>
                </div>

                <h4 className="mt-2 font-semibold">
                  {session.time}
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-slate-50

                  p-4
                "
              >
                <div className="flex items-center gap-2">
                  <MonitorPlay
                    size={16}
                    className="text-violet-600"
                  />

                  <span className="text-sm text-slate-500">
                    Platform
                  </span>
                </div>

                <h4 className="mt-2 font-semibold">
                  {session.meetingType}
                </h4>
              </div>
            </div>

            {/* Footer */}

            <div
              className="
                mt-8

                flex
                flex-col

                gap-4

                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <div>
                <p className="text-sm text-slate-500">
                  Session Duration
                </p>

                <h4 className="mt-2 font-semibold">
                  {session.duration}
                </h4>
              </div>

              <a
                href={session.joinLink}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  rounded-2xl

                  bg-blue-600

                  px-7
                  py-3.5

                  font-semibold

                  text-white

                  transition

                  hover:bg-blue-700
                "
              >
                Join Meeting

                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingSessions;