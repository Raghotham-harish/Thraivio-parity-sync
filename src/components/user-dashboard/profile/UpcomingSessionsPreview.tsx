import {
  CalendarClock,
  Clock3,
  ChevronRight,
  Video,
} from "lucide-react";

import { Link } from "react-router-dom";

import type {
  UpcomingSessionPreview,
} from "@/types/userProfile";

interface UpcomingSessionsPreviewProps {
  sessions: UpcomingSessionPreview[];
}

const UpcomingSessionsPreview = ({
  sessions,
}: UpcomingSessionsPreviewProps) => {
  const previewSessions =
    sessions.slice(0, 3);

  return (
    <div
      className="
        bg-white

        border
        border-slate-200

        rounded-[32px]

        p-8
      "
    >
      {/* Header */}

      <div
        className="
          flex
          flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-5
        "
      >
        <div>

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
            <CalendarClock size={16} />

            Upcoming Sessions
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Your Next Learning Sessions
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-500
            "
          >
            Stay prepared for your upcoming
            mentorship sessions and never
            miss an important learning
            opportunity.
          </p>

        </div>

        <Link
          to="/user-dashboard/sessions"
          className="
            inline-flex
            items-center
            gap-2

            rounded-xl

            border
            border-slate-200

            px-5
            py-3

            font-medium

            transition

            hover:bg-slate-50
          "
        >
          View All

          <ChevronRight
            size={18}
          />
        </Link>

      </div>

      {/* Session Cards */}

      <div
        className="
          mt-10

          space-y-5
        "
      >
        {previewSessions.map(
          (session) => (
            <div
              key={session.id}
              className="
                rounded-3xl

                border
                border-slate-200

                p-6

                transition-all

                hover:border-blue-200
                hover:shadow-lg
              "
            >
              <div
                className="
                  flex
                  flex-col

                  lg:flex-row

                  lg:items-center
                  lg:justify-between

                  gap-6
                "
              >
                {/* Left */}

                <div
                  className="
                    flex
                    gap-5

                    flex-1
                  "
                >
                  <img
                    src={
                      session.mentorImage
                    }
                    alt={
                      session.mentorName
                    }
                    className="
                      h-20
                      w-20

                      rounded-3xl

                      object-cover
                    "
                  />

                  <div className="flex-1">

                    <h3
                      className="
                        text-xl
                        font-bold
                      "
                    >
                      {session.title}
                    </h3>

                    <p
                      className="
                        mt-2

                        font-medium

                        text-blue-600
                      "
                    >
                      {session.mentorName}
                    </p>
                                        <div
                      className="
                        mt-5

                        grid

                        gap-4

                        md:grid-cols-3
                      "
                    >
                      {/* Session Date */}

                      <div
                        className="
                          rounded-2xl

                          bg-slate-50

                          p-4
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-2

                            text-sm
                            text-slate-500
                          "
                        >
                          <CalendarClock
                            size={16}
                          />

                          Date
                        </div>

                        <h4
                          className="
                            mt-2

                            font-semibold
                          "
                        >
                          {session.date}
                        </h4>
                      </div>

                      {/* Session Time */}

                      <div
                        className="
                          rounded-2xl

                          bg-blue-50

                          p-4
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-2

                            text-sm

                            text-blue-600
                          "
                        >
                          <Clock3
                            size={16}
                          />

                          Time
                        </div>

                        <h4
                          className="
                            mt-2

                            font-semibold
                          "
                        >
                          {session.time}
                        </h4>
                      </div>

                      {/* Meeting */}

                      <div
                        className="
                          rounded-2xl

                          bg-green-50

                          p-4
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-2

                            text-sm

                            text-green-600
                          "
                        >
                          <Video
                            size={16}
                          />

                          Meeting
                        </div>

                        <h4
                          className="
                            mt-2

                            font-semibold

                            text-green-700
                          "
                        >
                          Online
                        </h4>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Actions */}

                <div
                  className="
                    flex

                    lg:flex-col

                    gap-3

                    shrink-0
                  "
                >
                  <a
                    href={
                      session.meetingLink
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2

                      rounded-xl

                      bg-blue-600

                      px-4
                      py-2.5

                      font-medium

                      text-white

                      transition

                      hover:bg-blue-700
                    "
                  >
                    <Video
                      size={17}
                    />

                    Join Session
                  </a>

                  <Link
                    to="/user-dashboard/sessions"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2

                      rounded-xl

                      border
                      border-slate-200

                      px-4
                      py-2.5

                      font-medium

                      transition

                      hover:bg-slate-50
                    "
                  >
                    View Details
                  </Link>
                </div>

              </div>
            </div>
          )
        )}
      </div>
            {/* Empty State */}

      {previewSessions.length === 0 && (
        <div
          className="
            mt-10

            rounded-3xl

            border-2
            border-dashed
            border-slate-200

            py-16

            text-center
          "
        >
          <div
            className="
              mx-auto

              flex
              h-20
              w-20

              items-center
              justify-center

              rounded-3xl

              bg-blue-50
            "
          >
            <CalendarClock
              size={36}
              className="
                text-blue-600
              "
            />
          </div>

          <h3
            className="
              mt-6

              text-2xl
              font-bold
            "
          >
            No Upcoming Sessions
          </h3>

          <p
            className="
              mx-auto

              mt-3

              max-w-lg

              text-slate-500
            "
          >
            You don't have any upcoming
            mentorship sessions right now.
            Explore mentors and book a new
            session to continue your
            learning journey.
          </p>

          <Link
            to="/mentors"
            className="
              mt-8

              inline-flex
              items-center
              gap-2

              rounded-xl

              bg-blue-600

              px-6
              py-3

              font-medium

              text-white

              transition

              hover:bg-blue-700
            "
          >
            Find Mentors

            <ChevronRight
              size={18}
            />
          </Link>
        </div>
      )}

      {/* Footer */}

      <div
        className="
          mt-10

          border-t
          border-slate-200

          pt-6

          flex
          flex-col
          lg:flex-row

          lg:items-center
          lg:justify-between

          gap-4
        "
      >
        <div>
          <h4
            className="
              font-semibold
            "
          >
            Learning Schedule
          </h4>

          <p
            className="
              mt-1

              max-w-2xl

              text-sm
              text-slate-500
            "
          >
            Stay on track with your upcoming
            mentorship sessions. Join on
            time and continue building your
            skills through consistent
            learning.
          </p>
        </div>

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
          <CalendarClock size={16} />

          {sessions.length} Upcoming Session
          {sessions.length !== 1
            ? "s"
            : ""}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSessionsPreview;