import {
  Building2,
  CalendarDays,
  Clock3,
  DollarSign,
  FileText,
  Link,
  Video,
  User,
  BadgeCheck,
  Globe,
  X,
} from "lucide-react";

import type { Session } from "@/types/session";

interface SessionDetailsModalProps {
  open: boolean;

  session: Session | null;

  onClose: () => void;

  onJoin: (
    session: Session
  ) => void;
}

const SessionDetailsModal = ({
  open,
  session,
  onClose,
  onJoin,
}: SessionDetailsModalProps) => {
  if (!open || !session)
    return null;

  const statusStyles = {
    upcoming:
      "bg-blue-100 text-blue-700",

    completed:
      "bg-green-100 text-green-700",

    cancelled:
      "bg-red-100 text-red-700",
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50

        bg-black/60
        backdrop-blur-sm

        flex
        items-center
        justify-center

        p-4
      "
    >
      <div
        className="
          bg-white

          w-full
          max-w-6xl

          rounded-[32px]

          overflow-hidden

          max-h-[90vh]

          flex
          flex-col
        "
      >
        {/* HERO */}

        <div
          className="
            relative

            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-purple-600

            text-white

            p-8
          "
        >
          <button
            onClick={onClose}
            className="
              absolute
              top-6
              right-6

              h-11
              w-11

              rounded-full

              bg-white/20

              flex
              items-center
              justify-center
            "
          >
            <X size={20} />
          </button>

          <div
            className="
              flex
              flex-col
              lg:flex-row

              lg:items-center

              gap-6
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

                border-4
                border-white
              "
            />

            <div>
              <span
                className={`
                  inline-flex

                  px-3
                  py-1

                  rounded-full

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
                  text-4xl
                  font-bold

                  mt-4
                "
              >
                {session.sessionType}
              </h2>

              <p
                className="
                  text-blue-100

                  mt-3
                "
              >
                Personalized mentorship
                session designed to help
                accelerate your career and
                learning journey.
              </p>
            </div>
          </div>
        </div>

        {/* BODY */}

        <div
          className="
            overflow-y-auto

            flex-1

            p-8
          "
        >
          <div
            className="
              grid
              xl:grid-cols-3

              gap-8
            "
          >
            {/* LEFT */}

            <div className="xl:col-span-2 space-y-6">

              {/* Mentor */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-5
                  "
                >
                  Mentor Information
                </h3>

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

                  <div>
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
                        text-slate-600
                      "
                    >
                      {session.mentorRole}
                    </p>

                    <div
                      className="
                        flex
                        items-center
                        gap-2

                        mt-2

                        text-slate-500
                      "
                    >
                      <Building2 size={16} />
                      {session.mentorCompany}
                    </div>
                  </div>
                </div>
              </div>

              {/* Session Information */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-6
                  "
                >
                  Session Information
                </h3>

                <div
                  className="
                    grid
                    md:grid-cols-2

                    gap-5
                  "
                >
                  <InfoCard
                    icon={
                      <CalendarDays size={18} />
                    }
                    title="Date"
                    value={session.date}
                  />

                  <InfoCard
                    icon={
                      <Clock3 size={18} />
                    }
                    title="Time"
                    value={session.time}
                  />

                  <InfoCard
                    icon={
                      <Clock3 size={18} />
                    }
                    title="Duration"
                    value={session.duration}
                  />

                  <InfoCard
                    icon={
                      <DollarSign size={18} />
                    }
                    title="Amount Paid"
                    value={`$${session.amount}`}
                  />
                </div>
              </div>

              {/* Notes */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-4
                  "
                >
                  Session Notes
                </h3>

                <div
                  className="
                    bg-blue-50

                    rounded-2xl

                    p-5
                  "
                >
                  {session.notes ||
                    "No notes added yet."}
                </div>
              </div>

              {/* Meeting */}

              <div
                className="
                  border

                  rounded-3xl

                  p-6
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold

                    mb-4
                  "
                >
                  Meeting Details
                </h3>

                <div
                  className="
                    flex
                    items-center
                    gap-3

                    bg-slate-50

                    rounded-2xl

                    p-5
                  "
                >
                  <Link
                    size={18}
                    className="
                      text-blue-600
                    "
                  />

                  <span className="break-all">
                    {session.meetingLink}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}

            <div>
              <div
                className="
                  sticky
                  top-0

                  border

                  rounded-3xl

                  p-6

                  bg-slate-50
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  Booking Summary
                </h3>

                <div
                  className="
                    mt-6

                    space-y-4
                  "
                >
                  <SummaryCard
                    icon={<User size={16} />}
                    title="Booking Ref"
                    value={
                      session.bookingReference
                    }
                  />

                  <SummaryCard
                    icon={
                      <BadgeCheck size={16} />
                    }
                    title="Payment Status"
                    value={
                      session.paymentStatus
                    }
                  />

                  <SummaryCard
                    icon={
                      <CalendarDays size={16} />
                    }
                    title="Booked On"
                    value={session.bookedAt}
                  />

                  <SummaryCard
                    icon={<Globe size={16} />}
                    title="Timezone"
                    value={session.timezone}
                  />
                </div>

                <div
                  className="
                    mt-6

                    space-y-3
                  "
                >
                  {session.canJoin && (
                    <button
                      onClick={() =>
                        onJoin(session)
                      }
                      className="
                        w-full

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
                      <Video size={18} />
                      Join Session
                    </button>
                  )}

                  <button
                    className="
                      w-full

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
                    <FileText size={18} />
                    Download Receipt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetailsModal;

/* Helpers */

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div
      className="
        bg-slate-50

        rounded-2xl

        p-5
      "
    >
      <div className="text-blue-600">
        {icon}
      </div>

      <p
        className="
          text-sm
          text-slate-500

          mt-3
        "
      >
        {title}
      </p>

      <h4
        className="
          font-semibold

          mt-1
        "
      >
        {value}
      </h4>
    </div>
  );
}

function SummaryCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div
      className="
        bg-white

        rounded-2xl

        p-4
      "
    >
      <div
        className="
          flex
          items-center
          gap-2

          text-slate-500
          text-sm
        "
      >
        {icon}
        {title}
      </div>

      <h4
        className="
          font-semibold

          mt-2
        "
      >
        {value}
      </h4>
    </div>
  );
}