import {
  BadgeCheck,
  CalendarDays,
  Clock3,
  MonitorPlay,
  UserRound,
  GraduationCap,
  Building2,
  IndianRupee,
} from "lucide-react";

import type { AdminSession } from "@/types/admin-session";

interface SessionGridCardProps {
  session: AdminSession;

  onView: (session: AdminSession) => void;

  onEdit: (session: AdminSession) => void;

  onComplete: (session: AdminSession) => void;

  onCancel: (session: AdminSession) => void;

  onDelete: (session: AdminSession) => void;
}

const statusStyles = {
  scheduled:
    "bg-blue-100 text-blue-700 border border-blue-200",

  live:
    "bg-emerald-100 text-emerald-700 border border-emerald-200",

  completed:
    "bg-violet-100 text-violet-700 border border-violet-200",

  cancelled:
    "bg-red-100 text-red-700 border border-red-200",

  missed:
    "bg-slate-200 text-slate-700 border border-slate-300",
};

const attendanceStyles = {
  waiting:
    "bg-amber-100 text-amber-700 border border-amber-200",

  joined:
    "bg-blue-100 text-blue-700 border border-blue-200",

  completed:
    "bg-green-100 text-green-700 border border-green-200",

  absent:
    "bg-red-100 text-red-700 border border-red-200",
};

const paymentStyles = {
  paid:
    "bg-green-100 text-green-700 border border-green-200",

  pending:
    "bg-amber-100 text-amber-700 border border-amber-200",

  refunded:
    "bg-red-100 text-red-700 border border-red-200",
};

const SessionGridCard = ({
  session,
  onView,
  onEdit,
  onComplete,
  onCancel,
  onDelete,
}: SessionGridCardProps) => {
  return (
    <div
      className="
        group

        overflow-hidden

        rounded-[32px]

        border
        border-slate-200

        bg-white

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      {/* Top Gradient */}

      <div
        className="
          h-2

          bg-gradient-to-r

          from-indigo-600
          via-blue-600
          to-cyan-500
        "
      />

      {/* Body */}

      <div className="p-6">

        {/* Header */}

        <div
          className="
            flex
            items-start
            justify-between

            gap-4
          "
        >
          <div>

            <h3
              className="
                text-xl
                font-bold

                text-slate-900
              "
            >
              {session.programTitle}
            </h3>

            <p
              className="
                mt-2

                text-sm

                text-slate-500
              "
            >
              {session.sessionType}
            </p>

          </div>

          <span
            className={`
              rounded-full

              px-4
              py-2

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

        {/* Mentor */}

        <div
          className="
            mt-7

            rounded-3xl

            border
            border-slate-200

            bg-slate-50

            p-5
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
              "
            />

            <div className="flex-1">

              <div
                className="
                  flex
                  items-center

                  gap-2
                "
              >
                <UserRound
                  size={16}
                  className="text-indigo-600"
                />

                <span
                  className="
                    text-xs

                    font-medium

                    uppercase

                    tracking-wide

                    text-slate-500
                  "
                >
                  Mentor
                </span>

              </div>

              <h4
                className="
                  mt-2

                  text-lg
                  font-bold
                "
              >
                {session.mentorName}
              </h4>

              <div
                className="
                  mt-2

                  flex
                  items-center

                  gap-2

                  text-sm

                  text-slate-500
                "
              >
                <Building2 size={15} />

                {session.mentorCompany}
              </div>

            </div>

          </div>

        </div>
                {/* Student */}

        <div
          className="
            mt-5

            rounded-3xl

            border
            border-slate-200

            bg-white

            p-5
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
              src={session.studentImage}
              alt={session.studentName}
              className="
                h-16
                w-16

                rounded-2xl

                object-cover
              "
            />

            <div className="flex-1">

              <div
                className="
                  flex
                  items-center

                  gap-2
                "
              >
                <GraduationCap
                  size={16}
                  className="text-emerald-600"
                />

                <span
                  className="
                    text-xs

                    font-medium

                    uppercase

                    tracking-wide

                    text-slate-500
                  "
                >
                  Student
                </span>
              </div>

              <h4
                className="
                  mt-2

                  text-lg
                  font-bold
                "
              >
                {session.studentName}
              </h4>

              <p
                className="
                  mt-1

                  text-sm

                  text-slate-500
                "
              >
                {session.studentEmail}
              </p>

            </div>

          </div>

        </div>

        {/* Session Information */}

        <div
          className="
            mt-6

            grid

            grid-cols-2

            gap-4
          "
        >
          {/* Date */}

          <div
            className="
              rounded-2xl

              bg-slate-50

              p-4
            "
          >
            <CalendarDays
              size={18}
              className="text-indigo-600"
            />

            <p
              className="
                mt-3

                text-xs

                text-slate-500
              "
            >
              Session Date
            </p>

            <h4
              className="
                mt-1

                font-semibold
              "
            >
              {session.date}
            </h4>
          </div>

          {/* Time */}

          <div
            className="
              rounded-2xl

              bg-slate-50

              p-4
            "
          >
            <Clock3
              size={18}
              className="text-indigo-600"
            />

            <p
              className="
                mt-3

                text-xs

                text-slate-500
              "
            >
              Time
            </p>

            <h4
              className="
                mt-1

                font-semibold
              "
            >
              {session.time}
            </h4>
          </div>

          {/* Duration */}

          <div
            className="
              rounded-2xl

              bg-slate-50

              p-4
            "
          >
            <Clock3
              size={18}
              className="text-cyan-600"
            />

            <p
              className="
                mt-3

                text-xs

                text-slate-500
              "
            >
              Duration
            </p>

            <h4
              className="
                mt-1

                font-semibold
              "
            >
              {session.duration}
            </h4>
          </div>

          {/* Amount */}

          <div
            className="
              rounded-2xl

              bg-slate-50

              p-4
            "
          >
            <IndianRupee
              size={18}
              className="text-green-600"
            />

            <p
              className="
                mt-3

                text-xs

                text-slate-500
              "
            >
              Amount
            </p>

            <h4
              className="
                mt-1

                font-bold

                text-green-600
              "
            >
              ₹{session.amount}
            </h4>
          </div>

        </div>

        {/* Platform */}

        <div
          className="
            mt-6

            rounded-2xl

            border

            border-slate-200

            bg-slate-50

            p-4
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <MonitorPlay
              size={18}
              className="text-indigo-600"
            />

            <div className="flex-1">
              <p
                className="
                  text-xs

                  text-slate-500
                "
              >
                Meeting Platform
              </p>

              <h4
                className="
                  mt-1

                  font-semibold
                "
              >
                {session.meetingPlatform}
              </h4>
            </div>
          </div>
        </div>

        {/* Badges */}

        <div
          className="
            mt-6

            flex

            flex-wrap

            gap-3
          "
        >
          <span
            className={`
              rounded-full

              px-4
              py-2

              text-xs
              font-semibold

              ${
                attendanceStyles[
                  session.attendance
                ]
              }
            `}
          >
            Attendance :
            {" "}
            {session.attendance}
          </span>

          <span
            className={`
              rounded-full

              px-4
              py-2

              text-xs
              font-semibold

              ${
                paymentStyles[
                  session.paymentStatus
                ]
              }
            `}
          >
            Payment :
            {" "}
            {session.paymentStatus}
          </span>

          {session.certificateIssued && (
            <span
              className="
                rounded-full

                border
                border-emerald-200

                bg-emerald-100

                px-4
                py-2

                text-xs
                font-semibold

                text-emerald-700
              "
            >
              <span className="mr-1">
                ✓
              </span>

              Certificate Issued
            </span>
          )}
          </div>
                  {/* Booking Information */}

        <div
          className="
            mt-6

            rounded-3xl

            border
            border-slate-200

            bg-white

            p-5
          "
        >
          <div
            className="
              mb-5

              flex
              items-center
              gap-2
            "
          >
            <BadgeCheck
              size={18}
              className="text-indigo-600"
            />

            <h4
              className="
                text-lg
                font-semibold
              "
            >
              Booking Information
            </h4>
          </div>

          <div
            className="
              grid

              grid-cols-2

              gap-4
            "
          >
            <div
              className="
                rounded-2xl

                bg-slate-50

                p-4
              "
            >
              <p
                className="
                  text-xs

                  text-slate-500
                "
              >
                Booking ID
              </p>

              <h4
                className="
                  mt-2

                  font-semibold
                "
              >
                {session.bookingReference}
              </h4>
            </div>

            <div
              className="
                rounded-2xl

                bg-slate-50

                p-4
              "
            >
              <p
                className="
                  text-xs

                  text-slate-500
                "
              >
                Program ID
              </p>

              <h4
                className="
                  mt-2

                  font-semibold
                "
              >
                {session.programId}
              </h4>
            </div>

            <div
              className="
                rounded-2xl

                bg-slate-50

                p-4
              "
            >
              <p
                className="
                  text-xs

                  text-slate-500
                "
              >
                Booked On
              </p>

              <h4
                className="
                  mt-2

                  font-semibold
                "
              >
                {session.bookedAt}
              </h4>
            </div>

            <div
              className="
                rounded-2xl

                bg-slate-50

                p-4
              "
            >
              <p
                className="
                  text-xs

                  text-slate-500
                "
              >
                Timezone
              </p>

              <h4
                className="
                  mt-2

                  font-semibold
                "
              >
                {session.timezone}
              </h4>
            </div>
          </div>
        </div>

        {/* Emails */}

        <div
          className="
            mt-6

            grid

            gap-4

            md:grid-cols-2
          "
        >
          <div
            className="
              rounded-2xl

              border
              border-slate-200

              bg-slate-50

              p-4
            "
          >
            <p
              className="
                text-xs

                text-slate-500
              "
            >
              Mentor Email
            </p>

            <h4
              className="
                mt-2

                break-all

                font-medium
              "
            >
              {session.mentorEmail}
            </h4>
          </div>

          <div
            className="
              rounded-2xl

              border
              border-slate-200

              bg-slate-50

              p-4
            "
          >
            <p
              className="
                text-xs

                text-slate-500
              "
            >
              Student Email
            </p>

            <h4
              className="
                mt-2

                break-all

                font-medium
              "
            >
              {session.studentEmail}
            </h4>
          </div>
        </div>

        {/* Admin Notes */}

        <div
          className="
            mt-6

            rounded-3xl

            border
            border-slate-200

            bg-slate-50

            p-5
          "
        >
          <h4
            className="
              text-base
              font-semibold
            "
          >
            Admin Notes
          </h4>

          <p
            className="
              mt-3

              text-sm

              leading-7

              text-slate-600
            "
          >
            {session.adminNotes ||
              "No admin notes available."}
          </p>
        </div>

        {/* Footer Summary */}

        <div
          className="
            mt-6

            rounded-3xl

            bg-gradient-to-r

            from-slate-50
            via-blue-50
            to-indigo-50

            p-5
          "
        >
          <div
            className="
              grid

              grid-cols-2

              gap-4

              lg:grid-cols-4
            "
          >
            <div>
              <p
                className="
                  text-xs

                  text-slate-500
                "
              >
                Created
              </p>

              <h4
                className="
                  mt-2

                  font-semibold
                "
              >
                {session.createdAt}
              </h4>
            </div>

            <div>
              <p
                className="
                  text-xs

                  text-slate-500
                "
              >
                Updated
              </p>

              <h4
                className="
                  mt-2

                  font-semibold
                "
              >
                {session.updatedAt}
              </h4>
            </div>

            <div>
              <p
                className="
                  text-xs

                  text-slate-500
                "
              >
                Refund
              </p>

              <h4
                className="
                  mt-2

                  font-semibold

                  capitalize
                "
              >
                {session.refundStatus}
              </h4>
            </div>

            <div>
              <p
                className="
                  text-xs

                  text-slate-500
                "
              >
                Refund Amount
              </p>

              <h4
                className="
                  mt-2

                  font-bold

                  text-green-600
                "
              >
                ₹{session.refundAmount}
              </h4>
            </div>
          </div>
        </div>
                {/* Action Buttons */}

        <div
          className="
            mt-8

            grid

            grid-cols-2

            gap-3
          "
        >
          <button
            onClick={() => onView(session)}
            className="
              rounded-2xl

              border
              border-slate-200

              py-3

              font-semibold

              transition-all

              hover:bg-slate-50
            "
          >
            View Details
          </button>

          <button
            onClick={() => onEdit(session)}
            className="
              rounded-2xl

              bg-blue-600

              py-3

              font-semibold

              text-white

              transition-all

              hover:bg-blue-700
            "
          >
            Edit Session
          </button>
        </div>

        <div
          className="
            mt-3

            grid

            grid-cols-3

            gap-3
          "
        >
          <button
            onClick={() => onComplete(session)}
            disabled={
              session.status === "completed"
            }
            className="
              rounded-2xl

              bg-emerald-600

              py-3

              text-sm
              font-semibold

              text-white

              transition-all

              hover:bg-emerald-700

              disabled:cursor-not-allowed
              disabled:bg-slate-300
            "
          >
            Complete
          </button>

          <button
            onClick={() => onCancel(session)}
            disabled={
              session.status === "cancelled"
            }
            className="
              rounded-2xl

              bg-amber-500

              py-3

              text-sm
              font-semibold

              text-white

              transition-all

              hover:bg-amber-600

              disabled:cursor-not-allowed
              disabled:bg-slate-300
            "
          >
            Cancel
          </button>

          <button
            onClick={() => onDelete(session)}
            className="
              rounded-2xl

              bg-red-600

              py-3

              text-sm
              font-semibold

              text-white

              transition-all

              hover:bg-red-700
            "
          >
            Delete
          </button>
        </div>

      </div>

    </div>
  );
};

export default SessionGridCard;