import {
  BadgeCheck,
  CalendarDays,
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

          bg-card

          shadow-2xl
        "
      >
        {/* Header */}

        <div
          className="
            border-b
            border-border
            bg-card

            p-6
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
                  mt-4

                  text-2xl

                  font-medium
                  text-foreground
                "
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {session.programTitle}
              </h2>

              <p
                className="
                  mt-1

                  text-sm
                  text-muted-foreground
                "
              >
                {session.sessionType}
              </p>

            </div>

            <button
              onClick={onClose}
              aria-label="Close"
              className="
                flex

                h-9
                w-9

                items-center
                justify-center

                rounded-full

                bg-secondary

                transition

                hover:bg-muted
              "
            >
              <X size={18} />
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
              rounded-2xl

              border
              border-border

              bg-card

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
                className="text-primary"
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

                  rounded-2xl

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

                    text-muted-foreground
                  "
                >
                  {session.mentorRole}
                </p>

                <p
                  className="
                    mt-2

                    text-sm

                    text-muted-foreground
                  "
                >
                  {session.mentorCompany}
                </p>

                <p
                  className="
                    mt-2

                    break-all

                    text-sm

                    text-muted-foreground
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
              rounded-2xl

              border
              border-border

              bg-card

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
                className="text-[#0F8F65]"
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

                  rounded-2xl

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

                    text-muted-foreground
                  "
                >
                  {session.studentEmail}
                </p>

                <p
                  className="
                    mt-2

                    text-sm

                    text-muted-foreground
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
              rounded-2xl

              border
              border-border

              bg-secondary

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
                className="text-primary"
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

                  bg-card

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

                    font-semibold
                  "
                >
                  {session.programTitle}
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-card

                  p-4
                "
              >
                <p
                  className="
                    text-xs

                    text-muted-foreground
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
              rounded-2xl

              border
              border-border

              bg-card

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
                className="text-primary"
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

                  bg-secondary

                  p-4
                "
              >
                <p className="text-xs text-muted-foreground">
                  Date
                </p>

                <h4 className="mt-2 font-semibold">
                  {session.date}
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-secondary

                  p-4
                "
              >
                <p className="text-xs text-muted-foreground">
                  Time
                </p>

                <h4 className="mt-2 font-semibold">
                  {session.time}
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-secondary

                  p-4
                "
              >
                <p className="text-xs text-muted-foreground">
                  Duration
                </p>

                <h4 className="mt-2 font-semibold">
                  {session.duration}
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-secondary

                  p-4
                "
              >
                <p className="text-xs text-muted-foreground">
                  Platform
                </p>

                <h4 className="mt-2 font-semibold">
                  {session.meetingPlatform}
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-secondary

                  p-4
                "
              >
                <p className="text-xs text-muted-foreground">
                  Timezone
                </p>

                <h4 className="mt-2 font-semibold">
                  {session.timezone}
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  bg-secondary

                  p-4
                "
              >
                <p className="text-xs text-muted-foreground">
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
                rounded-2xl

                border
                border-border

                bg-card

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
                  <span className="text-muted-foreground">
                    Amount
                  </span>

                  <span
                    className="
                      text-2xl
                      font-bold

                      text-[#0F8F65]
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
                  <span className="text-muted-foreground">
                    Payment Status
                  </span>

                  <span
                    className="
                      rounded-full

                      bg-[#ECFDF5]

                      px-4
                      py-2

                      text-sm
                      font-semibold

                      text-[#065F46]
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
                  <span className="text-muted-foreground">
                    Refund Status
                  </span>

                  <span
                    className="
                      rounded-full

                      bg-[#FFFBEB]

                      px-4
                      py-2

                      text-sm
                      font-semibold

                      text-[#B45309]
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
                  <span className="text-muted-foreground">
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
                rounded-2xl

                border
                border-border

                bg-card

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
                  <span className="text-muted-foreground">
                    Attendance
                  </span>

                  <span
                    className="
                      rounded-full

                      bg-[#EFF6FF]

                      px-4
                      py-2

                      text-sm
                      font-semibold

                      text-[#2563EB]
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
                  <span className="text-muted-foreground">
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
                          ? "bg-[#ECFDF5] text-[#065F46]"
                          : "bg-secondary text-foreground"
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
              rounded-2xl

              border
              border-border

              bg-card

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
                className="text-primary"
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

                bg-secondary

                p-5
              "
            >
              <p
                className="
                  text-xs

                  text-muted-foreground
                "
              >
                Meeting Link
              </p>

              <p
                className="
                  mt-3

                  break-all

                  font-medium

                  text-primary
                "
              >
                {session.meetingLink}
              </p>
            </div>
          </div>

          {/* Admin Notes */}

          <div
            className="
              rounded-2xl

              border
              border-border

              bg-card

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

                bg-secondary

                p-5
              "
            >
              <p
                className="
                  leading-7

                  text-muted-foreground
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
              rounded-2xl

              border
              border-border

              bg-secondary

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

                  bg-primary

                  py-4

                  font-semibold

                  text-white

                  transition-all

                  hover:bg-primary/90
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

                  bg-[#10B981]

                  py-4

                  font-semibold

                  text-white

                  transition-all

                  hover:bg-[#0da271]

                  disabled:bg-muted
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

                  bg-[#F59E0B]

                  py-4

                  font-semibold

                  text-white

                  transition-all

                  hover:bg-[#D97706]

                  disabled:bg-muted
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
                border-border

                bg-card

                py-4

                font-semibold

                text-foreground

                transition-all

                hover:bg-secondary
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