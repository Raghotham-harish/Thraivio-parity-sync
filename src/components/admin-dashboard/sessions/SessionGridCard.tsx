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
    "bg-[#EFF6FF] text-[#2563EB] border border-blue-200",

  live:
    "bg-[#ECFDF5] text-[#065F46] border border-[#A7E8CE]",

  completed:
    "bg-secondary text-muted-foreground border border-violet-200",

  cancelled:
    "bg-[#FFDAD6] text-[#BA1A1A] border border-red-200",

  missed:
    "bg-secondary text-foreground border border-border",
};

const attendanceStyles = {
  waiting:
    "bg-[#FFFBEB] text-[#B45309] border border-amber-200",

  joined:
    "bg-[#EFF6FF] text-[#2563EB] border border-blue-200",

  completed:
    "bg-[#ECFDF5] text-[#065F46] border border-green-200",

  absent:
    "bg-[#FFDAD6] text-[#BA1A1A] border border-red-200",
};

const paymentStyles = {
  paid:
    "bg-[#ECFDF5] text-[#065F46] border border-green-200",

  pending:
    "bg-[#FFFBEB] text-[#B45309] border border-amber-200",

  refunded:
    "bg-[#FFDAD6] text-[#BA1A1A] border border-red-200",
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

        rounded-2xl

        border
        border-border

        bg-card

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

          

          bg-primary
          
          
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

                text-foreground
              "
            >
              {session.programTitle}
            </h3>

            <p
              className="
                mt-2

                text-sm

                text-muted-foreground
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

            rounded-2xl

            border
            border-border

            bg-secondary

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
                  className="text-primary"
                />

                <span
                  className="
                    text-xs

                    font-medium

                    uppercase

                    tracking-wide

                    text-muted-foreground
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

                  text-muted-foreground
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

            rounded-2xl

            border
            border-border

            bg-card

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
                  className="text-[#0F8F65]"
                />

                <span
                  className="
                    text-xs

                    font-medium

                    uppercase

                    tracking-wide

                    text-muted-foreground
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

                  text-muted-foreground
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

              bg-secondary

              p-4
            "
          >
            <CalendarDays
              size={18}
              className="text-primary"
            />

            <p
              className="
                mt-3

                text-xs

                text-muted-foreground
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

              bg-secondary

              p-4
            "
          >
            <Clock3
              size={18}
              className="text-primary"
            />

            <p
              className="
                mt-3

                text-xs

                text-muted-foreground
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

              bg-secondary

              p-4
            "
          >
            <Clock3
              size={18}
              className="text-primary"
            />

            <p
              className="
                mt-3

                text-xs

                text-muted-foreground
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

              bg-secondary

              p-4
            "
          >
            <IndianRupee
              size={18}
              className="text-[#0F8F65]"
            />

            <p
              className="
                mt-3

                text-xs

                text-muted-foreground
              "
            >
              Amount
            </p>

            <h4
              className="
                mt-1

                font-bold

                text-[#0F8F65]
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

            border-border

            bg-secondary

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
              className="text-primary"
            />

            <div className="flex-1">
              <p
                className="
                  text-xs

                  text-muted-foreground
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
                border-[#A7E8CE]

                bg-[#ECFDF5]

                px-4
                py-2

                text-xs
                font-semibold

                text-[#065F46]
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

            rounded-2xl

            border
            border-border

            bg-card

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
              className="text-primary"
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

                bg-secondary

                p-4
              "
            >
              <p
                className="
                  text-xs

                  text-muted-foreground
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

                bg-secondary

                p-4
              "
            >
              <p
                className="
                  text-xs

                  text-muted-foreground
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

                bg-secondary

                p-4
              "
            >
              <p
                className="
                  text-xs

                  text-muted-foreground
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

                bg-secondary

                p-4
              "
            >
              <p
                className="
                  text-xs

                  text-muted-foreground
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
              border-border

              bg-secondary

              p-4
            "
          >
            <p
              className="
                text-xs

                text-muted-foreground
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
              border-border

              bg-secondary

              p-4
            "
          >
            <p
              className="
                text-xs

                text-muted-foreground
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

            rounded-2xl

            border
            border-border

            bg-secondary

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

              text-muted-foreground
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

            rounded-2xl

            

            bg-primary
            
            

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

                  text-muted-foreground
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

                  text-muted-foreground
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

                  text-muted-foreground
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

                  text-muted-foreground
                "
              >
                Refund Amount
              </p>

              <h4
                className="
                  mt-2

                  font-bold

                  text-[#0F8F65]
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
              border-border

              py-3

              font-semibold

              transition-all

              hover:bg-secondary
            "
          >
            View Details
          </button>

          <button
            onClick={() => onEdit(session)}
            className="
              rounded-2xl

              bg-primary

              py-3

              font-semibold

              text-white

              transition-all

              hover:bg-primary/90
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

              bg-[#10B981]

              py-3

              text-sm
              font-semibold

              text-white

              transition-all

              hover:bg-[#0da271]

              disabled:cursor-not-allowed
              disabled:bg-muted
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

              bg-[#F59E0B]

              py-3

              text-sm
              font-semibold

              text-white

              transition-all

              hover:bg-[#D97706]

              disabled:cursor-not-allowed
              disabled:bg-muted
            "
          >
            Cancel
          </button>

          <button
            onClick={() => onDelete(session)}
            className="
              rounded-2xl

              bg-destructive

              py-3

              text-sm
              font-semibold

              text-white

              transition-all

              hover:bg-destructive/90
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