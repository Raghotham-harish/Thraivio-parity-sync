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
    "bg-blue-100 text-blue-700",

  live:
    "bg-emerald-100 text-emerald-700",

  completed:
    "bg-violet-100 text-violet-700",

  cancelled:
    "bg-red-100 text-red-700",

  missed:
    "bg-slate-200 text-slate-700",
};

const attendanceStyles = {
  waiting:
    "bg-amber-100 text-amber-700",

  joined:
    "bg-blue-100 text-blue-700",

  completed:
    "bg-green-100 text-green-700",

  absent:
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

        rounded-[32px]

        border
        border-slate-200

        bg-white

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

          from-indigo-600
          via-blue-600
          to-cyan-500
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

                rounded-3xl

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
                  className="text-indigo-600"
                />

                <span
                  className="
                    text-xs

                    font-semibold

                    uppercase

                    tracking-wide

                    text-slate-500
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

                  text-slate-500
                "
              >
                <Building2 size={15} />

                {session.mentorCompany}
              </div>

              <p
                className="
                  mt-2

                  text-sm

                  text-slate-500
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
                rounded-3xl

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
                      className="text-emerald-600"
                    />

                    <span
                      className="
                        text-xs

                        font-medium

                        text-slate-500
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

                      text-slate-500
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
                rounded-3xl

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

                  text-slate-500
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
                rounded-3xl

                bg-slate-50

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
                  className="text-indigo-600"
                />

                <span
                  className="
                    text-xs

                    text-slate-500
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
                  className="text-cyan-600"
                />

                <span
                  className="
                    text-xs

                    text-slate-500
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

                  text-slate-500
                "
              >
                {session.duration}
              </p>

            </div>

            {/* Platform & Amount */}

            <div
              className="
                rounded-3xl

                bg-slate-50

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
                  className="text-blue-600"
                />

                <span
                  className="
                    text-xs

                    text-slate-500
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
                  className="text-green-600"
                />

                <span
                  className="
                    text-xs

                    text-slate-500
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

                  text-green-600
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
                rounded-3xl

                bg-slate-50

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

                      text-slate-500
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
                  className="text-indigo-600"
                />
              </div>

              {/* Attendance */}

              <div className="mt-5">

                <p
                  className="
                    mb-2

                    text-xs

                    text-slate-500
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

                    text-slate-500
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
                    border-emerald-200

                    bg-emerald-50

                    p-3

                    text-center
                  "
                >
                  <p
                    className="
                      text-xs

                      font-semibold

                      text-emerald-700
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

                    hover:bg-white
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

                    bg-blue-600

                    py-3

                    text-sm
                    font-semibold

                    text-white

                    transition

                    hover:bg-blue-700
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

                    bg-emerald-600

                    py-3

                    text-sm
                    font-semibold

                    text-white

                    transition

                    hover:bg-emerald-700

                    disabled:bg-slate-300
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

                    bg-amber-500

                    py-3

                    text-sm
                    font-semibold

                    text-white

                    transition

                    hover:bg-amber-600

                    disabled:bg-slate-300
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

                  bg-red-600

                  py-3

                  text-sm
                  font-semibold

                  text-white

                  transition

                  hover:bg-red-700
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