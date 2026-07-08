import {
  BadgeCheck,
  CalendarDays,
  Clock3,
  GraduationCap,
  MonitorPlay,
  UserRound,
  X,
} from "lucide-react";

import type { AdminSession } from "@/types/admin-session";

interface SessionDetailsDrawerProps {
  open: boolean;

  session: AdminSession | null;

  onClose: () => void;

  onEdit: (
    session: AdminSession
  ) => void;

  onComplete: (
    session: AdminSession
  ) => void;

  onCancel: (
    session: AdminSession
  ) => void;
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

const SessionDetailsDrawer = ({
  open,
  session,
  onClose,
  onEdit,
  onComplete,
  onCancel,
}: SessionDetailsDrawerProps) => {
  if (!open || !session)
    return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        bg-black/40

        backdrop-blur-sm
      "
    >
      <div
        className="
          absolute

          right-0
          top-0

          flex
          h-full
          w-full

          max-w-3xl

          flex-col

          overflow-hidden

          bg-white

          shadow-2xl
        "
      >
        {/* Header */}

        <div
          className="
            bg-gradient-to-r

            from-indigo-600
            via-blue-600
            to-cyan-600

            p-8

            text-white
          "
        >
          <div
            className="
              flex

              items-start

              justify-between
            "
          >
            <div>

              <span
                className={`
                  inline-flex

                  rounded-full

                  px-4
                  py-2

                  text-xs
                  font-semibold

                  bg-white

                  ${
                    statusStyles[
                      session.status
                    ]
                  }
                `}
              >
                {session.status}
              </span>

              <h2
                className="
                  mt-5

                  text-3xl

                  font-bold
                "
              >
                {session.programTitle}
              </h2>

              <p
                className="
                  mt-2

                  text-blue-100
                "
              >
                {session.sessionType}
              </p>

            </div>

            <button
              onClick={onClose}
              className="
                flex

                h-11
                w-11

                items-center
                justify-center

                rounded-full

                bg-white/20

                transition

                hover:bg-white/30
              "
            >
              <X size={20} />
            </button>

          </div>
        </div>

        {/* Body */}

        <div
          className="
            flex-1

            overflow-y-auto

            p-7

            space-y-6
          "
        >
                      {/* Mentor Information */}

          <div
            className="
              rounded-3xl

              border
              border-slate-200

              bg-white

              p-6
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
              <UserRound
                size={20}
                className="text-indigo-600"
              />

              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Mentor Information
              </h3>
            </div>

            <div
              className="
                flex

                items-center

                gap-5
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
                "
              />

              <div className="flex-1">

                <h4
                  className="
                    text-xl
                    font-bold
                  "
                >
                  {session.mentorName}
                </h4>

                <p
                  className="
                    mt-1

                    text-slate-600
                  "
                >
                  {session.mentorRole}
                </p>

                <p
                  className="
                    mt-2

                    text-sm

                    text-slate-500
                  "
                >
                  {session.mentorCompany}
                </p>

                <p
                  className="
                    mt-2

                    break-all

                    text-sm

                    text-slate-500
                  "
                >
                  {session.mentorEmail}
                </p>

              </div>

            </div>

          </div>

          {/* Student Information */}

          <div
            className="
              rounded-3xl

              border
              border-slate-200

              bg-white

              p-6
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
              <GraduationCap
                size={20}
                className="text-emerald-600"
              />

              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Student Information
              </h3>
            </div>

            <div
              className="
                flex

                items-center

                gap-5
              "
            >
              <img
                src={session.studentImage}
                alt={session.studentName}
                className="
                  h-20
                  w-20

                  rounded-3xl

                  object-cover
                "
              />

              <div className="flex-1">

                <h4
                  className="
                    text-xl
                    font-bold
                  "
                >
                  {session.studentName}
                </h4>

                <p
                  className="
                    mt-2

                    break-all

                    text-sm

                    text-slate-500
                  "
                >
                  {session.studentEmail}
                </p>

                <p
                  className="
                    mt-2

                    text-sm

                    text-slate-500
                  "
                >
                  Student ID :
                  {" "}
                  {session.studentId}
                </p>

              </div>

            </div>

          </div>

          {/* Program Overview */}

          <div
            className="
              rounded-3xl

              border
              border-slate-200

              bg-slate-50

              p-6
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
                size={20}
                className="text-indigo-600"
              />

              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Program Overview
              </h3>
            </div>

            <div
              className="
                grid

                gap-5

                md:grid-cols-2
              "
            >
              <div
                className="
                  rounded-2xl

                  bg-white

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

                    font-semibold
                  "
                >
                  {session.programTitle}
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-white

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
                    mt-2

                    font-semibold
                  "
                >
                  {session.sessionType}
                </h4>
              </div>
            </div>
          </div>

          {/* Session Overview */}

          <div
            className="
              rounded-3xl

              border
              border-slate-200

              bg-white

              p-6
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
              <CalendarDays
                size={20}
                className="text-indigo-600"
              />

              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Session Overview
              </h3>
            </div>

            <div
              className="
                grid

                gap-5

                md:grid-cols-3
              "
            >
              <div
                className="
                  rounded-2xl

                  bg-slate-50

                  p-4
                "
              >
                <p className="text-xs text-slate-500">
                  Date
                </p>

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
                <p className="text-xs text-slate-500">
                  Time
                </p>

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
                <p className="text-xs text-slate-500">
                  Duration
                </p>

                <h4 className="mt-2 font-semibold">
                  {session.duration}
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-slate-50

                  p-4
                "
              >
                <p className="text-xs text-slate-500">
                  Platform
                </p>

                <h4 className="mt-2 font-semibold">
                  {session.meetingPlatform}
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-slate-50

                  p-4
                "
              >
                <p className="text-xs text-slate-500">
                  Timezone
                </p>

                <h4 className="mt-2 font-semibold">
                  {session.timezone}
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-slate-50

                  p-4
                "
              >
                <p className="text-xs text-slate-500">
                  Booking Ref
                </p>

                <h4 className="mt-2 font-semibold">
                  {session.bookingReference}
                </h4>
              </div>

            </div>

          </div>
                    {/* Payment & Attendance */}

          <div
            className="
              grid

              gap-6

              lg:grid-cols-2
            "
          >
            {/* Payment */}

            <div
              className="
                rounded-3xl

                border
                border-slate-200

                bg-white

                p-6
              "
            >
              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Payment Details
              </h3>

              <div className="mt-6 space-y-5">

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span className="text-slate-500">
                    Amount
                  </span>

                  <span
                    className="
                      text-2xl
                      font-bold

                      text-green-600
                    "
                  >
                    ₹{session.amount}
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span className="text-slate-500">
                    Payment Status
                  </span>

                  <span
                    className="
                      rounded-full

                      bg-green-100

                      px-4
                      py-2

                      text-sm
                      font-semibold

                      text-green-700
                    "
                  >
                    {session.paymentStatus}
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span className="text-slate-500">
                    Refund Status
                  </span>

                  <span
                    className="
                      rounded-full

                      bg-amber-100

                      px-4
                      py-2

                      text-sm
                      font-semibold

                      text-amber-700
                    "
                  >
                    {session.refundStatus}
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span className="text-slate-500">
                    Refund Amount
                  </span>

                  <span
                    className="
                      font-semibold
                    "
                  >
                    ₹{session.refundAmount}
                  </span>
                </div>

              </div>
            </div>

            {/* Attendance */}

            <div
              className="
                rounded-3xl

                border
                border-slate-200

                bg-white

                p-6
              "
            >
              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Attendance
              </h3>

              <div className="mt-6 space-y-5">

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span className="text-slate-500">
                    Attendance
                  </span>

                  <span
                    className="
                      rounded-full

                      bg-blue-100

                      px-4
                      py-2

                      text-sm
                      font-semibold

                      text-blue-700
                    "
                  >
                    {session.attendance}
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span className="text-slate-500">
                    Certificate
                  </span>

                  <span
                    className={`
                      rounded-full

                      px-4
                      py-2

                      text-sm
                      font-semibold

                      ${
                        session.certificateIssued
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-200 text-slate-700"
                      }
                    `}
                  >
                    {session.certificateIssued
                      ? "Issued"
                      : "Pending"}
                  </span>
                </div>

                {session.certificateIssued &&
                  session.certificateId && (
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
                        Certificate ID
                      </p>

                      <h4
                        className="
                          mt-2

                          font-semibold
                        "
                      >
                        {session.certificateId}
                      </h4>
                    </div>
                  )}

              </div>
            </div>
          </div>

          {/* Meeting */}

          <div
            className="
              rounded-3xl

              border
              border-slate-200

              bg-white

              p-6
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
              <MonitorPlay
                size={20}
                className="text-indigo-600"
              />

              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Meeting Details
              </h3>
            </div>

            <div
              className="
                rounded-2xl

                bg-slate-50

                p-5
              "
            >
              <p
                className="
                  text-xs

                  text-slate-500
                "
              >
                Meeting Link
              </p>

              <p
                className="
                  mt-3

                  break-all

                  font-medium

                  text-blue-600
                "
              >
                {session.meetingLink}
              </p>
            </div>
          </div>

          {/* Admin Notes */}

          <div
            className="
              rounded-3xl

              border
              border-slate-200

              bg-white

              p-6
            "
          >
            <h3
              className="
                text-xl
                font-bold
              "
            >
              Admin Notes
            </h3>

            <div
              className="
                mt-5

                rounded-2xl

                bg-slate-50

                p-5
              "
            >
              <p
                className="
                  leading-7

                  text-slate-600
                "
              >
                {session.adminNotes ||
                  "No admin notes available."}
              </p>
            </div>
          </div>
                    {/* Footer Actions */}

          <div
            className="
              rounded-3xl

              border
              border-slate-200

              bg-slate-50

              p-6
            "
          >
            <div
              className="
                flex

                flex-col

                gap-4

                sm:flex-row
              "
            >
              <button
                onClick={() =>
                  onEdit(session)
                }
                className="
                  flex-1

                  rounded-2xl

                  bg-blue-600

                  py-4

                  font-semibold

                  text-white

                  transition-all

                  hover:bg-blue-700
                "
              >
                Edit Session
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
                  flex-1

                  rounded-2xl

                  bg-emerald-600

                  py-4

                  font-semibold

                  text-white

                  transition-all

                  hover:bg-emerald-700

                  disabled:bg-slate-300
                  disabled:cursor-not-allowed
                "
              >
                Mark Complete
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
                  flex-1

                  rounded-2xl

                  bg-amber-500

                  py-4

                  font-semibold

                  text-white

                  transition-all

                  hover:bg-amber-600

                  disabled:bg-slate-300
                  disabled:cursor-not-allowed
                "
              >
                Cancel Session
              </button>
            </div>

            <button
              onClick={onClose}
              className="
                mt-4

                w-full

                rounded-2xl

                border
                border-slate-300

                bg-white

                py-4

                font-semibold

                text-slate-700

                transition-all

                hover:bg-slate-100
              "
            >
              Close Drawer
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SessionDetailsDrawer;