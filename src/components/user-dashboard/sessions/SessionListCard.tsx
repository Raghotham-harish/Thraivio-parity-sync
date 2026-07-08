import {
  Building2,
  CalendarDays,
  Clock3,
  DollarSign,
  Eye,
  RefreshCcw,
  Video,
  AlertTriangle,
  BadgeCheck,
  Hash,
} from "lucide-react";

import type { Session } from "@/types/session";

interface SessionListCardProps {
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

const SessionListCard = ({
  session,
  onView,
  onReschedule,
  onCancel,
  onJoin,
}: SessionListCardProps) => {
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
        bg-white

        border
        border-slate-200

        rounded-[32px]

        overflow-hidden

        hover:shadow-2xl

        transition-all
        duration-300
      "
    >
      <div
        className="
          h-2

          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-600
        "
      />

      <div className="p-6">
        <div
          className="
            flex
            flex-col

            xl:flex-row
            xl:items-center

            gap-8
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              gap-5

              xl:w-[380px]
            "
          >
            <img
              src={session.mentorImage}
              alt={session.mentorName}
              className="
                h-24
                w-24

                rounded-3xl

                object-cover

                border
              "
            />

            <div className="flex-1">
              <div
                className="
                  flex
                  flex-wrap

                  gap-2
                "
              >
                <span
                  className={`
                    px-3
                    py-1

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

                <span
                  className={`
                    px-3
                    py-1

                    rounded-full

                    text-xs
                    font-semibold

                    ${
                      paymentStyles[
                        session
                          .paymentStatus
                      ]
                    }
                  `}
                >
                  {
                    session.paymentStatus
                  }
                </span>
              </div>

              <h2
                className="
                  text-2xl
                  font-bold

                  mt-4
                "
              >
                {
                  session.sessionType
                }
              </h2>

              <div
                className="
                  mt-3

                  flex
                  items-center
                  gap-2

                  text-slate-600
                "
              >
                <span className="font-semibold">
                  {
                    session.mentorName
                  }
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2

                  text-slate-500

                  mt-2
                "
              >
                <Building2 size={15} />

                {
                  session.mentorCompany
                }
              </div>

              <p
                className="
                  text-sm
                  text-slate-500

                  mt-2
                "
              >
                {
                  session.mentorRole
                }
              </p>
            </div>
          </div>

          {/* CENTER */}

          <div
            className="
              flex-1

              grid
              md:grid-cols-2
              xl:grid-cols-4

              gap-5
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
                size={18}
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
                Session Date
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
                size={18}
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
                size={18}
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
                {
                  session.duration
                }
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
                size={18}
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
                Amount Paid
              </p>

              <h4
                className="
                  font-bold
                  text-green-600

                  mt-1
                "
              >
                ${session.amount}
              </h4>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              xl:w-[280px]

              shrink-0
            "
          >
            <div
              className="
                bg-slate-50

                rounded-3xl

                p-5
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
                <Hash size={14} />
                {
                  session.bookingReference
                }
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2

                  text-sm
                  text-slate-500

                  mt-3
                "
              >
                <BadgeCheck
                  size={14}
                />

                {
                  session.paymentStatus
                }
              </div>

              <div
                className="
                  flex
                  flex-col

                  gap-3

                  mt-6
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
                  "
                >
                  <Eye size={16} />
                  View Details
                </button>

                {session.canJoin && (
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
                    <Video
                      size={16}
                    />
                    Join Session
                  </button>
                )}

                {session.canReschedule && (
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
                )}

                {session.canCancel && (
                  <button
                    onClick={() =>
                      onCancel(
                        session
                      )
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionListCard;