import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Clock3,
  GraduationCap,
  IndianRupee,
  MonitorPlay,
  UserRound,
} from "lucide-react";

import type { AdminSession } from "@/types/admin-session";

interface SessionListRowProps {
  session: AdminSession;

  onView: (session: AdminSession) => void;

  onEdit: (session: AdminSession) => void;

  onComplete: (session: AdminSession) => void;

  onCancel: (session: AdminSession) => void;

  onDelete: (session: AdminSession) => void;
}

const statusStyles = {
  scheduled:
    "bg-[#EFF6FF] text-[#2563EB]",

  live:
    "bg-[#ECFDF5] text-[#065F46]",

  completed:
    "bg-secondary text-muted-foreground",

  cancelled:
    "bg-[#FFDAD6] text-[#BA1A1A]",

  missed:
    "bg-secondary text-foreground",
};

const attendanceStyles = {
  waiting:
    "bg-[#FFFBEB] text-[#B45309]",

  joined:
    "bg-[#EFF6FF] text-[#2563EB]",

  completed:
    "bg-[#ECFDF5] text-[#065F46]",

  absent:
    "bg-[#FFDAD6] text-[#BA1A1A]",
};

const paymentStyles = {
  paid:
    "bg-[#ECFDF5] text-[#065F46]",

  pending:
    "bg-[#FFFBEB] text-[#B45309]",

  refunded:
    "bg-[#FFDAD6] text-[#BA1A1A]",
};

const SessionListRow = ({
  session,
  onView,
  onEdit,
  onComplete,
  onCancel,
  onDelete,
}: SessionListRowProps) => {
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

        hover:shadow-xl
      "
    >
      {/* Top Border */}

      <div
        className="
          h-2

          bg-gradient-to-r

          bg-primary
          
          
        "
      />

      <div className="p-6">

        <div
          className="
            flex

            flex-col

            gap-8

            xl:flex-row
            xl:items-center
          "
        >
          {/* Mentor */}

          <div
            className="
              flex

              gap-4

              xl:w-[340px]
            "
          >
            <img
              src={session.mentorImage}
              alt={session.mentorName}
              className="
                h-20
                w-20

                rounded-2xl

                object-cover

                border
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

                    font-semibold

                    uppercase

                    tracking-wide

                    text-muted-foreground
                  "
                >
                  Mentor
                </span>

              </div>

              <h3
                className="
                  mt-2

                  text-xl
                  font-bold
                "
              >
                {session.mentorName}
              </h3>

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

              <p
                className="
                  mt-2

                  text-sm

                  text-muted-foreground
                "
              >
                {session.mentorRole}
              </p>

            </div>

          </div>
                    {/* Center */}

          <div
            className="
              flex-1

              grid

              gap-5

              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {/* Student */}

            <div
              className="
                rounded-2xl

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
                <img
                  src={session.studentImage}
                  alt={session.studentName}
                  className="
                    h-12
                    w-12

                    rounded-2xl

                    object-cover
                  "
                />

                <div>
                  <div
                    className="
                      flex
                      items-center

                      gap-2
                    "
                  >
                    <GraduationCap
                      size={14}
                      className="text-[#0F8F65]"
                    />

                    <span
                      className="
                        text-xs

                        font-medium

                        text-muted-foreground
                      "
                    >
                      Student
                    </span>
                  </div>

                  <h4
                    className="
                      mt-1

                      font-semibold
                    "
                  >
                    {session.studentName}
                  </h4>

                  <p
                    className="
                      mt-1

                      text-xs

                      break-all

                      text-muted-foreground
                    "
                  >
                    {session.studentEmail}
                  </p>

                </div>

              </div>
            </div>

            {/* Program */}

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
                Program
              </p>

              <h4
                className="
                  mt-2

                  font-bold
                "
              >
                {session.programTitle}
              </h4>

              <p
                className="
                  mt-2

                  text-sm

                  text-muted-foreground
                "
              >
                {session.sessionType}
              </p>

              <span
                className={`
                  mt-3

                  inline-flex

                  rounded-full

                  px-3
                  py-1

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

            {/* Schedule */}

            <div
              className="
                rounded-2xl

                bg-secondary

                p-4
              "
            >
              <div
                className="
                  flex
                  items-center

                  gap-2
                "
              >
                <CalendarDays
                  size={16}
                  className="text-primary"
                />

                <span
                  className="
                    text-xs

                    text-muted-foreground
                  "
                >
                  Date
                </span>
              </div>

              <h4
                className="
                  mt-2

                  font-semibold
                "
              >
                {session.date}
              </h4>

              <div
                className="
                  mt-4

                  flex
                  items-center

                  gap-2
                "
              >
                <Clock3
                  size={16}
                  className="text-primary"
                />

                <span
                  className="
                    text-xs

                    text-muted-foreground
                  "
                >
                  Time
                </span>
              </div>

              <h4
                className="
                  mt-2

                  font-semibold
                "
              >
                {session.time}
              </h4>

              <p
                className="
                  mt-2

                  text-sm

                  text-muted-foreground
                "
              >
                {session.duration}
              </p>

            </div>

            {/* Platform & Amount */}

            <div
              className="
                rounded-2xl

                bg-secondary

                p-4
              "
            >
              <div
                className="
                  flex
                  items-center

                  gap-2
                "
              >
                <MonitorPlay
                  size={16}
                  className="text-primary"
                />

                <span
                  className="
                    text-xs

                    text-muted-foreground
                  "
                >
                  Platform
                </span>
              </div>

              <h4
                className="
                  mt-2

                  font-semibold
                "
              >
                {session.meetingPlatform}
              </h4>

              <div
                className="
                  mt-5

                  flex
                  items-center

                  gap-2
                "
              >
                <IndianRupee
                  size={16}
                  className="text-[#0F8F65]"
                />

                <span
                  className="
                    text-xs

                    text-muted-foreground
                  "
                >
                  Amount
                </span>
              </div>

              <h4
                className="
                  mt-2

                  text-xl
                  font-bold

                  text-[#0F8F65]
                "
              >
                ₹{session.amount}
              </h4>

            </div>

          </div>
                    {/* Right Side */}

          <div
            className="
              xl:w-[300px]

              shrink-0
            "
          >
            <div
              className="
                rounded-2xl

                bg-secondary

                p-5
              "
            >
              {/* Booking */}

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
                      text-xs

                      text-muted-foreground
                    "
                  >
                    Booking ID
                  </p>

                  <h4
                    className="
                      mt-1

                      font-semibold
                    "
                  >
                    {session.bookingReference}
                  </h4>
                </div>

                <BadgeCheck
                  size={22}
                  className="text-primary"
                />
              </div>

              {/* Attendance */}

              <div className="mt-5">

                <p
                  className="
                    mb-2

                    text-xs

                    text-muted-foreground
                  "
                >
                  Attendance
                </p>

                <span
                  className={`
                    inline-flex

                    rounded-full

                    px-3
                    py-1.5

                    text-xs
                    font-semibold

                    ${
                      attendanceStyles[
                        session.attendance
                      ]
                    }
                  `}
                >
                  {session.attendance}
                </span>

              </div>

              {/* Payment */}

              <div className="mt-5">

                <p
                  className="
                    mb-2

                    text-xs

                    text-muted-foreground
                  "
                >
                  Payment
                </p>

                <span
                  className={`
                    inline-flex

                    rounded-full

                    px-3
                    py-1.5

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

              {/* Certificate */}

              {session.certificateIssued && (
                <div
                  className="
                    mt-5

                    rounded-2xl

                    border
                    border-[#A7E8CE]

                    bg-[#ECFDF5]

                    p-3

                    text-center
                  "
                >
                  <p
                    className="
                      text-xs

                      font-semibold

                      text-[#065F46]
                    "
                  >
                    ✓ Certificate Issued
                  </p>
                </div>
              )}

              {/* Actions */}

              <div
                className="
                  mt-6

                  grid

                  grid-cols-2

                  gap-3
                "
              >
                <button
                  onClick={() =>
                    onView(session)
                  }
                  className="
                    rounded-xl

                    border

                    py-3

                    text-sm
                    font-semibold

                    transition

                    hover:bg-card
                  "
                >
                  View
                </button>

                <button
                  onClick={() =>
                    onEdit(session)
                  }
                  className="
                    rounded-xl

                    bg-primary

                    py-3

                    text-sm
                    font-semibold

                    text-white

                    transition

                    hover:bg-primary/90
                  "
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    onComplete(session)
                  }
                  disabled={
                    session.status ===
                    "completed"
                  }
                  className="
                    rounded-xl

                    bg-[#10B981]

                    py-3

                    text-sm
                    font-semibold

                    text-white

                    transition

                    hover:bg-[#0da271]

                    disabled:bg-muted
                    disabled:cursor-not-allowed
                  "
                >
                  Complete
                </button>

                <button
                  onClick={() =>
                    onCancel(session)
                  }
                  disabled={
                    session.status ===
                    "cancelled"
                  }
                  className="
                    rounded-xl

                    bg-[#F59E0B]

                    py-3

                    text-sm
                    font-semibold

                    text-white

                    transition

                    hover:bg-[#D97706]

                    disabled:bg-muted
                    disabled:cursor-not-allowed
                  "
                >
                  Cancel
                </button>

              </div>

              <button
                onClick={() =>
                  onDelete(session)
                }
                className="
                  mt-3

                  w-full

                  rounded-xl

                  bg-destructive

                  py-3

                  text-sm
                  font-semibold

                  text-white

                  transition

                  hover:bg-destructive/90
                "
              >
                Delete Session
              </button>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SessionListRow;