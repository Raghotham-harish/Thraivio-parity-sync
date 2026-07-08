import {
  CalendarDays,
  Clock3,
  Video,
  ArrowRight,
  Building2,
} from "lucide-react";

import type { Session } from "@/types/session";

interface UpcomingSessionBannerProps {
  session: Session | null;

  onJoin?: (
    session: Session
  ) => void;

  onReschedule?: (
    session: Session
  ) => void;
}

const UpcomingSessionBanner = ({
  session,
  onJoin,
  onReschedule,
}: UpcomingSessionBannerProps) => {
  if (!session) return null;

  return (
    <div
      className="
        relative

        overflow-hidden

        rounded-[36px]

        bg-gradient-to-r
        from-blue-600
        via-indigo-600
        to-purple-600

        p-8
        lg:p-10

        text-white
      "
    >
      {/* Decorative Blur */}

      <div
        className="
          absolute
          -top-20
          -right-20

          h-72
          w-72

          rounded-full

          bg-white/10

          blur-3xl
        "
      />

      <div
        className="
          relative

          flex
          flex-col
          xl:flex-row

          xl:items-center
          xl:justify-between

          gap-8
        "
      >
        {/* Left */}

        <div className="flex-1">
          <div
            className="
              inline-flex
              items-center
              gap-2

              bg-white/20

              px-4
              py-2

              rounded-full

              text-sm
              font-medium

              backdrop-blur
            "
          >
            🎯 Next Upcoming Session
          </div>

          <h2
            className="
              text-3xl
              lg:text-4xl

              font-bold

              mt-5
            "
          >
            {session.sessionType}
          </h2>

          <p
            className="
              text-blue-100

              mt-3

              max-w-2xl
            "
          >
            Your next learning session
            is scheduled with an
            industry mentor.
          </p>

          {/* Meta */}

          <div
            className="
              flex
              flex-wrap

              gap-5

              mt-8
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <CalendarDays size={18} />

              {session.date}
            </div>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Clock3 size={18} />

              {session.time}
            </div>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <Building2 size={18} />

              {session.mentorCompany}
            </div>
          </div>
        </div>

        {/* Right */}

        <div
          className="
            bg-white

            rounded-[32px]

            p-6

            text-slate-900

            w-full
            xl:w-[420px]

            shrink-0
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <img
              src={session.mentorImage}
              alt={session.mentorName}
              className="
                h-20
                w-20

                rounded-3xl

                object-cover

                border
              "
            />

            <div>
              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                {session.mentorName}
              </h3>

              <p
                className="
                  text-slate-500

                  mt-1
                "
              >
                {session.mentorRole}
              </p>

              <p
                className="
                  text-sm
                  text-slate-400

                  mt-1
                "
              >
                {session.mentorCompany}
              </p>
            </div>
          </div>

          <div
            className="
              mt-6

              grid
              grid-cols-2

              gap-4
            "
          >
            <div
              className="
                bg-slate-50

                rounded-2xl

                p-4
              "
            >
              <p
                className="
                  text-xs
                  text-slate-500
                "
              >
                Duration
              </p>

              <h4
                className="
                  font-bold

                  mt-2
                "
              >
                {session.duration}
              </h4>
            </div>

            <div
              className="
                bg-slate-50

                rounded-2xl

                p-4
              "
            >
              <p
                className="
                  text-xs
                  text-slate-500
                "
              >
                Amount
              </p>

              <h4
                className="
                  font-bold

                  mt-2

                  text-green-600
                "
              >
                ${session.amount}
              </h4>
            </div>
          </div>

          {/* Actions */}

          <div
            className="
              grid
              grid-cols-2

              gap-3

              mt-6
            "
          >
            <button
              onClick={() =>
                onReschedule?.(
                  session
                )
              }
              className="
                border

                py-3

                rounded-xl

                font-medium

                hover:bg-slate-50

                transition
              "
            >
              Reschedule
            </button>

            <button
              onClick={() =>
                onJoin?.(
                  session
                )
              }
              className="
                bg-blue-600
                hover:bg-blue-700

                text-white

                py-3

                rounded-xl

                font-medium

                flex
                items-center
                justify-center
                gap-2

                transition
              "
            >
              <Video size={18} />

              Join Now
            </button>
          </div>

          <button
            className="
              w-full

              mt-3

              flex
              items-center
              justify-center
              gap-2

              text-blue-600
              font-medium
            "
          >
            View Details

            <ArrowRight
              size={16}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSessionBanner;