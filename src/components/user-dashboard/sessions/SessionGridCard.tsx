import {
  CalendarDays,
  Clock3,
  Video,
  Building2,
  DollarSign,
  Eye,
  RefreshCcw,
  AlertTriangle,
  BadgeCheck,
  Hash,
} from "lucide-react";

import type { Session } from "@/types/session";

interface SessionGridCardProps {
  session: Session;

  onView: (
    session: Session
  ) => void;

  onReschedule: (
    session: Session
  ) => void;

  onCancel: (
    session: Session
  ) => void;

  onJoin: (
    session: Session
  ) => void;
}

const SessionGridCard = ({
  session,
  onView,
  onReschedule,
  onCancel,
  onJoin,
}: SessionGridCardProps) => {
  const statusStyles = {
    upcoming:
      "bg-blue-100 text-blue-700",

    completed:
      "bg-green-100 text-green-700",

    cancelled:
      "bg-red-100 text-red-700",
  };

  const paymentStyles = {
    paid:
      "bg-green-100 text-green-700",

    pending:
      "bg-amber-100 text-amber-700",

    refunded:
      "bg-red-100 text-red-700",
  };

  return (
    <div
      className="
        group

        bg-white

        border
        border-slate-200

        rounded-[32px]

        overflow-hidden

        hover:shadow-2xl
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      {/* Top Gradient */}

      <div
        className="
          h-2

          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-600
        "
      />

      {/* Header */}

      <div className="p-6">
        <div
          className="
            flex
            items-start
            justify-between

            gap-4
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
                h-16
                w-16

                rounded-2xl

                object-cover

                border
              "
            />

            <div>
              <h3
                className="
                  text-lg
                  font-bold
                "
              >
                {session.mentorName}
              </h3>

              <div
                className="
                  flex
                  items-center
                  gap-2

                  text-sm
                  text-slate-500

                  mt-1
                "
              >
                <Building2 size={14} />

                {session.mentorCompany}
              </div>

              <p
                className="
                  text-xs
                  text-slate-400

                  mt-1
                "
              >
                {session.mentorRole}
              </p>
            </div>
          </div>

          <span
            className={`
              px-3
              py-1.5

              rounded-full

              text-xs
              font-semibold

              ${
                statusStyles[
                  session.status
                ]
              }
            `}
          >
            {session.status}
          </span>
        </div>

        {/* Session Type */}

        <div
          className="
            mt-6

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
            Session Type
          </p>

          <h4
            className="
              font-bold
              text-lg

              mt-1
            "
          >
            {session.sessionType}
          </h4>
        </div>

        {/* Info Grid */}

        <div
          className="
            grid
            grid-cols-2

            gap-4

            mt-6
          "
        >
          <div
            className="
              bg-slate-50

              rounded-2xl

              p-4
            "
          >
            <CalendarDays
              size={16}
              className="
                text-blue-600
              "
            />

            <p
              className="
                text-xs
                text-slate-500

                mt-2
              "
            >
              Date
            </p>

            <h4
              className="
                font-semibold

                mt-1
              "
            >
              {session.date}
            </h4>
          </div>

          <div
            className="
              bg-slate-50

              rounded-2xl

              p-4
            "
          >
            <Clock3
              size={16}
              className="
                text-blue-600
              "
            />

            <p
              className="
                text-xs
                text-slate-500

                mt-2
              "
            >
              Time
            </p>

            <h4
              className="
                font-semibold

                mt-1
              "
            >
              {session.time}
            </h4>
          </div>

          <div
            className="
              bg-slate-50

              rounded-2xl

              p-4
            "
          >
            <Clock3
              size={16}
              className="
                text-blue-600
              "
            />

            <p
              className="
                text-xs
                text-slate-500

                mt-2
              "
            >
              Duration
            </p>

            <h4
              className="
                font-semibold

                mt-1
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
            <DollarSign
              size={16}
              className="
                text-green-600
              "
            />

            <p
              className="
                text-xs
                text-slate-500

                mt-2
              "
            >
              Amount
            </p>

            <h4
              className="
                font-semibold
                text-green-600

                mt-1
              "
            >
              ${session.amount}
            </h4>
          </div>
        </div>

        {/* Payment */}

        <div
          className="
            mt-6

            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <BadgeCheck
              size={16}
              className="
                text-slate-500
              "
            />

            <span
              className={`
                px-3
                py-1

                rounded-full

                text-xs
                font-semibold

                ${
                  paymentStyles[
                    session.paymentStatus
                  ]
                }
              `}
            >
              {session.paymentStatus}
            </span>
          </div>

          <div
            className="
              flex
              items-center
              gap-2

              text-xs
              text-slate-500
            "
          >
            <Hash size={14} />

            {session.bookingReference}
          </div>
        </div>

        {/* Actions */}

        <div
          className="
            grid
            grid-cols-2

            gap-3

            mt-8
          "
        >
          <button
            onClick={() =>
              onView(session)
            }
            className="
              border

              py-3

              rounded-xl

              font-medium

              flex
              items-center
              justify-center
              gap-2

              hover:bg-slate-50
            "
          >
            <Eye size={16} />
            Details
          </button>

          {session.canReschedule ? (
            <button
              onClick={() =>
                onReschedule(
                  session
                )
              }
              className="
                bg-amber-500
                hover:bg-amber-600

                text-white

                py-3

                rounded-xl

                font-medium

                flex
                items-center
                justify-center
                gap-2
              "
            >
              <RefreshCcw
                size={16}
              />
              Reschedule
            </button>
          ) : (
            <button
              disabled
              className="
                bg-slate-100

                text-slate-400

                py-3

                rounded-xl
              "
            >
              Locked
            </button>
          )}
        </div>

        <div
          className="
            grid
            grid-cols-2

            gap-3

            mt-3
          "
        >
          {session.canJoin ? (
            <button
              onClick={() =>
                onJoin(session)
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
              "
            >
              <Video size={16} />
              Join Now
            </button>
          ) : (
            <button
              disabled
              className="
                bg-slate-100

                text-slate-400

                py-3

                rounded-xl
              "
            >
              Session Closed
            </button>
          )}

          {session.canCancel ? (
            <button
              onClick={() =>
                onCancel(session)
              }
              className="
                bg-red-600
                hover:bg-red-700

                text-white

                py-3

                rounded-xl

                font-medium

                flex
                items-center
                justify-center
                gap-2
              "
            >
              <AlertTriangle
                size={16}
              />
              Cancel
            </button>
          ) : (
            <button
              disabled
              className="
                bg-slate-100

                text-slate-400

                py-3

                rounded-xl
              "
            >
              Not Allowed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SessionGridCard;